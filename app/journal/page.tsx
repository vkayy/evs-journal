import MainSection from "@/components/MainSection";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <main className="main main_journal">
        <MainSection id="journal" heading="our journal entries">
          <>
            <article className="entry-article">
              <p className="text text_paragraph">no posts yet!</p>
              <p className="text text_paragraph inline">
                <Link href="/requests" className="link link_paragraph">
                  why not make a request?
                </Link>
              </p>
            </article>
          </>
        </MainSection>
      </main>
    </>
  );
}
