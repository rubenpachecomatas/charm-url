"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useUrlAlert } from "@/store/use-url-alert";
import { Copy } from "lucide-react";

export const UrlAlert = () => {
  const { url } = useUrlAlert((state) => state);

  return (
    url && (
      <Alert className="flex flex-col gap-1 max-w-sm">
        <AlertTitle>Your charming url is ready!</AlertTitle>
        <div className="flex justify-between items-center rounded-lg">
          <AlertDescription className=" text-slate-600">
            {`${window.location.href}${url}`}
          </AlertDescription>
          <Copy className="cursor-pointer" />
        </div>
      </Alert>
    )
  );
};
