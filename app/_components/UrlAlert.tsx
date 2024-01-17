"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useUrlAlert } from "@/store/use-url-alert";
import { Copy, CopyCheck } from "lucide-react";
import useCopy from "../_hooks/useCopy";
import { Button } from "@/components/ui/button";

export const UrlAlert = () => {
  const { error, url } = useUrlAlert((state) => state);
  const { isCopied, onCopy } = useCopy();

  return error ? (
    <Alert className="flex flex-col gap-1 max-w-sm">
      <AlertTitle>Oops!</AlertTitle>
      <AlertDescription className="text-slate-600">
        Something went wrong, try again later.
      </AlertDescription>
    </Alert>
  ) : (
    url && (
      <Alert className="flex flex-col gap-1 max-w-sm">
        <AlertTitle>Your charming url is ready!</AlertTitle>
        <div className="flex justify-between items-center rounded-lg">
          <AlertDescription className="text-slate-600">{url}</AlertDescription>
          <Button onClick={() => onCopy(url)} variant="ghost">
            {isCopied ? <CopyCheck /> : <Copy className="cursor-pointer" />}
          </Button>
        </div>
      </Alert>
    )
  );
};
