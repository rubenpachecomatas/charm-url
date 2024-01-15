"use client";

import { onCreateUrl } from "@/actions/url";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useTransition } from "react";

export const Form = () => {
  const [value, setValue] = useState("");
  const [isPending, startTransition] = useTransition();

  const handeSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    startTransition(() => {
      onCreateUrl(value)
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    });
  };

  return (
    <form
      onSubmit={handeSubmit}
      className="flex w-full max-w-sm items-center space-x-2"
    >
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        name="url"
        type="text"
        placeholder="Your long cat size url"
      />
      <Button disabled={isPending} type="submit">
        Short
      </Button>
    </form>
  );
};
