import MainSection from "@/components/MainSection";

export default function Page() {
    return (
        <main className="main main_profile">
            <MainSection id="profile" heading="your profile">
                <div className="flex flex-col gap-12 justify-center items-center">
                    <h2 className="text-center text text_heading">this page is a work in progress!</h2>
                    <h4 className="first-letter:text-center text text_paragraph">come back soon!</h4>
                </div>
            </MainSection>
        </main>
    )
}