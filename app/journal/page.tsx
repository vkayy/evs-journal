"use client";

import MainSection from "@/components/MainSection";
import { Toaster } from "@/components/ui/toaster";
import { useAuthContext } from "@/components/AuthProvider";
import { useRouter } from "next/navigation";
import RequestDialog from "@/components/RequestDialog";
import { Card } from "@/components/ui/card";

export default function Page() {
  const { user } = useAuthContext();
  const router = useRouter();

  return (
    <>
      <main className="main main_journal">
        <MainSection id="journal" heading="our journal entries">
          <>
            <div className="request-dialog-container">
              <RequestDialog></RequestDialog>
            </div>
            <article className="request-article">
              <div className="request-container">
                <Card>
                  
                </Card>
              </div>
            </article>
          </>
        </MainSection>
      </main>
      <Toaster></Toaster>
    </>
  );
}
