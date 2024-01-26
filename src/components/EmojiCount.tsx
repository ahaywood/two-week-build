import React, { useState } from "react";

const EmojiCount = ({
  defaultSelected = false,
  emoji,
  number,
}: {
  defaultSelected?: boolean;
  emoji: string;
  number: number;
}) => {
  const [isSelected, setIsSelected] = useState(defaultSelected);

  return (
    <button
      className={`text-lg text-white font-mono font-bold h-8 center border-2 rounded-3xl px-3 py-2 gap-2 hover:bg-codGray ${
        isSelected ? "border-springBud" : "border-codGray"
      }`}
    >
      <span className="font-xl">{emoji}</span>
      {number}
    </button>
  );
};

export { EmojiCount };
