import RequestDialog from "@/components/RequestDialog";
import { getCollection } from "@/firebase/getData";
import { Collection } from "@/firebase/firebase.config";
import RequestCardList from "@/components/RequestCardList";
import MainSection from "@/components/MainSection";

export const revalidate = 0;

export default async function Page() {
  const { result, error } = await getCollection(Collection.requests);

  if (error) {
    return console.error("Error retrieving requests: ", error);
  }

  return (
    <main className="main main_requests">
      <MainSection id="requests" heading="requested topics">
        <article className="request-article">
          <div className="request-dialog-container">
            <RequestDialog></RequestDialog>
          </div>
          <div className="request-container">
            {result!.length ? (
              <RequestCardList docArray={result!}></RequestCardList>
            ) : (
              <p className="text text_paragraph">no requests yet!</p>
            )}
          </div>
        </article>
      </MainSection>
    </main>
  );
}
