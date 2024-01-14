"use client";

import { onCreateUrl } from "@/actions/url";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTransition } from "react";

export const Form = () => {
  const [isPending, startTransition] = useTransition();

  const handeSubmit = (e) => {
    e.preventDefault();
    startTransition(() => {
      onCreateUrl(e.target.url.value)
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    });
  };

  return (
    <form
      onSubmit={handeSubmit}
      className="flex w-full max-w-sm items-center space-x-2"
    >
      <Input name="url" type="text" placeholder="Your long cat size url" />
      <Button type="submit">Short</Button>
    </form>
  );
};
