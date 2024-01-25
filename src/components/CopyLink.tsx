import React from "react";

const CopyLink = ({ slug }: { slug: string }) => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return <button onClick={() => copyToClipboard(slug)}>Copy Link</button>;
};

export { CopyLink };
