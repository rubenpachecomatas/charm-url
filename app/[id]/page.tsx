"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import useRedirect from "./_hooks/useRedirect";
import { Loader2 } from "lucide-react";

interface RedirectPageProps {
  params: {
    id: string;
  };
}

export default function RedirectPage({ params }: RedirectPageProps) {
  const { error, isPending, redirecting } = useRedirect(params.id);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      {isPending ? (
        <div className="flex flex-col items-center gap-5 text-center">
          <h1 className="text-2xl font-bold">
            Checking that the url exists...
          </h1>
          <Loader2 className="animate-spin size-12" />
        </div>
      ) : error ? (
        <>
          <h1 className="text-2xl font-bold mb-10">Something went wrong</h1>
          <Button variant="secondary" asChild>
            <Link href="/">Go back home</Link>
          </Button>
        </>
      ) : (
        redirecting && (
          <div className="flex flex-col items-center gap-5 text-center">
            <h1 className="text-2xl font-bold">Redirecting...</h1>
            <Loader2 className="animate-spin size-12" />
          </div>
        )
      )}
    </main>
  );
}
