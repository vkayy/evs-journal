import MainSection from "@/components/MainSection";

export default function Page() {
  return (
    <>
      <main className="main main_journal">
        <MainSection
          id="journal"
          heading="hey there!"
          content={
            <>
              <h1 className="text-center text_heading mb-8">
                THIS PAGE IS A WORK IN PROGRESS
              </h1>
              <p className="text-center text_paragraph">come back soon!</p>
            </>
          }
        ></MainSection>
      </main>
    </>
  );
}
