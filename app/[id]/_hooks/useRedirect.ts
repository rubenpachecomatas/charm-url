import { onRedirectToUrl } from "@/actions/url";
import { useEffect, useState, useTransition } from "react";

const useRedirect = (id: string) => {
  const [error, setError] = useState(false);
  const [redirecting, setRedirecting] = useState(false);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    id &&
      startTransition(() => {
        onRedirectToUrl(id)
          .then((data) => {
            if (data?.origin) {
              setRedirecting(true);
              window.location.replace(data?.origin);
            } else {
              throw new Error("Something went wrong");
            }
          })
          .catch(() => setError(true));
      });
  }, [id]);

  return {
    error,
    isPending,
    redirecting,
  };
};

export default useRedirect;
