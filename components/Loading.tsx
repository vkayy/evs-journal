import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Loader } from "lucide-react";

export default function Loading() {
  return <main className="main main_loading">
    <Card className="main__card main__card_loading">
        <CardHeader>
            <CardTitle className="text-center">loading...</CardTitle>
            <CardDescription className="text-center">give us a moment!</CardDescription>
        </CardHeader>
        <CardContent>
            <Loader className="text-center animate-spin"></Loader>
        </CardContent>
    </Card>
  </main>;
}
