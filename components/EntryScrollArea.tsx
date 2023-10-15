"use client";

import React from "react";
import { ScrollArea } from "./ui/scroll-area";

function EntryScrollArea() {
  return (
    <section className="side-section">
      <ScrollArea className="">
        <div className="p-4">
          <h4>journal entries</h4>
        </div>
      </ScrollArea>
    </section>
  );
}

export default EntryScrollArea;
