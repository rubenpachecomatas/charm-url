"use client";

import { onRedirectToUrl } from "@/actions/url";
import { useEffect } from "react";

interface RedirectPageProps {
  params: {
    id: string;
  };
}

export default function RedirectPage({ params }: RedirectPageProps) {
  useEffect(() => {
    onRedirectToUrl(params.id).then((data) => {
      if (data?.origin) window.location.replace(data?.origin);
    });
  }, [params.id]);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-2xl font-bold mb-10">Redirecting...</h1>
    </main>
  );
}
