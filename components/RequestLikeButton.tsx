import { HeartIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useAuthContext } from "./AuthProvider";
import { getRequestLikeCount, requestLikedByUser } from "@/firebase/getData";
import { useEffect, useState } from "react";
import { addRequestLike } from "@/firebase/addData";
import { deleteDocument } from "@/firebase/deleteData";
import { Collection } from "@/firebase/firebase.config";

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
  }, [liked]);

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
  }

  return (
    <>
      <Button className="button button_like" variant="default" onClick={handleClick}>
        <HeartIcon
          fill={liked ? "currentColor" : "none"}
          className="mr-2"
        ></HeartIcon>
        {buttonText}
      </Button>
    </>
  );
}
