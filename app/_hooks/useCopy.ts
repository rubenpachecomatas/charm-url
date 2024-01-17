import { useState } from "react";

const useCopy = () => {
  const [isCopied, setIsCopied] = useState(false);

  const onCopy = (value: string) => {
    if (!value) return;

    setIsCopied(true);
    navigator.clipboard.writeText(value);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return {
    isCopied,
    onCopy,
  };
};

export default useCopy;
