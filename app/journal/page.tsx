import MainSection from "@/components/MainSection";

export default function Page() {
  return (
    <>
      <main className="main main_journal">
        <MainSection id="journal" heading="our journal entries">
          <>
            <article className="entry-article">
              <p className="text text_paragraph">no posts yet!</p>
            </article>
          </>
        </MainSection>
      </main>
    </>
  );
}
