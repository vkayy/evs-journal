import { CommentProvider } from "@/components/CommentProvider";
import EntryOutput from "@/components/EntryOutput";
import EntryProvider from "@/components/EntryProvider";
import MainSection from "@/components/MainSection";
import { Card, CardContent } from "@/components/ui/card";
import { Collection } from "@/firebase/firebase.config";
import { getDocument } from "@/firebase/getData";

export default async function Page({ params }: { params: { id: string } }) {
  const { result, error } = await getDocument(Collection.entries, params.id);

  return (
    <main>
      {error || !result?.data ? (
        <MainSection id="journal-entry-error" heading="">
          <Card className="min-w-full mx-auto transition-all duration-300">
            <CardContent className="flex justify-center items-center">
              <div className="flex flex-col justify-center items-center gap-8 pt-4 px-4 mx-auto">
                <h2 className="leading-none text text_heading text-center">
                  oh no :&#40;
                </h2>
                <p className="leading-none text text_paragraph text-center">
                  this request doesn&apos;t exist... or there was an error.
                </p>
              </div>
            </CardContent>
          </Card>
        </MainSection>
      ) : (
        <MainSection id="journal-entry" heading="">
          <EntryProvider entryID={params.id}>
            <CommentProvider>
              <EntryOutput entry={result}></EntryOutput>
            </CommentProvider>
          </EntryProvider>
        </MainSection>
      )}
    </main>
  );
}
