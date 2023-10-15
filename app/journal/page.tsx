import EntryCardList from "@/components/EntryCardList";
import MainSection from "@/components/MainSection";
import PostJournalButton from "@/components/PostJournalButton";
import { Collection } from "@/firebase/firebase.config";
import { getCollection } from "@/firebase/getData";
import Link from "next/link";

export const revalidate = 0;

export default async function Page() {
  const { result, error } = await getCollection(Collection.entries);

  if (error) {
    return console.error("Error retrieving entries: ", error);
  }

  return (
    <main className="main main_journal">
      <MainSection id="journal" heading="our journal entries">
        <article className="entry-article">
          <PostJournalButton></PostJournalButton>
          <div className="entry-container">
            {result?.length == 0 ? (
              <p className="text text_paragraph">no posts yet!</p>
            ) : (
              <EntryCardList docArray={result!}></EntryCardList>
            )}
          </div>
          <p className="text text_paragraph inline">
            <Link href="/requests" className="link link_paragraph text-base">
              why not make a request?
            </Link>
          </p>
        </article>
      </MainSection>
    </main>
  );
}
