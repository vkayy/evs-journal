import { HeartIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useAuthContext } from "./AuthProvider";
import { getRequestLikeCount, requestLikedByUser } from "@/firebase/getData";
import { useEffect, useState } from "react";
import { addRequestLike } from "@/firebase/addData";
import { deleteDocument } from "@/firebase/deleteData";
import { Collection } from "@/firebase/firebase.config";
import { useRouter } from "next/navigation";

interface RequestLikeButtonProps {
  requestID: string;
}

export default function RequestLikeButton({
  requestID,
}: RequestLikeButtonProps) {
  const { user } = useAuthContext();
  const [likeCount, setLikeCount] = useState<number>(0);
  const [liked, setLiked] = useState<Boolean>(false);
  const [buttonText, setButtonText] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    async function fetchLikes() {
      const { result } = await getRequestLikeCount(requestID);
      setLikeCount(result || 0);
      setButtonText(getButtonText(result || 0));
    }
    async function checkLiked() {
      const { result } = await requestLikedByUser(requestID, user!);
      setLiked(result);
    }
    fetchLikes();
    checkLiked();
  }, [liked, requestID, user]);

  function getButtonText(count: number): string {
    switch (count) {
      case 0:
        return "no hearts yet!";
      case 1:
        return "1 heart!";
      default:
        return `${count} hearts!`;
    }
  }

  async function handleClick() {
    if (user) {
      if (liked) {
        await deleteDocument(Collection.requestLikes, user!.email! + requestID);
        setLikeCount(likeCount - 1);
        setButtonText(getButtonText(likeCount));
      } else {
        await addRequestLike(user!.email!, requestID);
        setLikeCount(likeCount + 1);
        setButtonText(getButtonText(likeCount));
      }
      setLiked(!liked);
    } else {
      router.push("/login");
    }
  }

  return (
    <>
      <Button
        className="button button_like"
        variant="outline"
        onClick={handleClick}
      >
        <HeartIcon
          fill={liked ? "currentColor" : "none"}
          className="mr-2"
        ></HeartIcon>
        {buttonText}
      </Button>
    </>
  );
}
