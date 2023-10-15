import EditEntryForm from "@/components/EditEntryForm";
import { Card, CardContent } from "@/components/ui/card";
import MainSection from "@/components/MainSection";
import { getDocument } from "@/firebase/getData";
import { Collection } from "@/firebase/firebase.config";

export default async function Page({ params }: { params: { id: string } }) {
  const { result, error } = await getDocument(Collection.entries, params.id);

  return (
    <main>
      {error || !result?.data ? (
        <MainSection id="edit-entry-error" heading="">
          <Card className="max-w-fit mx-auto transition-all duration-300 mt-32">
            <CardContent className="flex justify-center items-center">
              <div className="flex flex-col justify-center items-center gap-8 pt-4 px-4 mx-auto">
                <h2 className="leading-none text text_heading text-center">
                  oh no :&#40;
                </h2>

                <p className="leading-none text text_paragraph text-center">
                  you don&apos;t have access to this request... or there was an
                  error.
                </p>
              </div>
            </CardContent>
          </Card>
        </MainSection>
      ) : (
        <MainSection id="edit-entry" heading="">
          <Card className="max-w-xl mx-auto pt-4">
            <CardContent>
              <EditEntryForm></EditEntryForm>
            </CardContent>
          </Card>
        </MainSection>
      )}
    </main>
  );
}
