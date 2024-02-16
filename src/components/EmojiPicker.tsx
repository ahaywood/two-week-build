import React, { useState } from "react";
import { emojis } from "../lib/emojis";
import { AnimatePresence, motion } from "framer-motion";
import { supabase } from "../lib/supabase";

interface EmojiPickerProps {
  updateId: string;
  userId: string;
}

const EmojiPicker = ({ updateId, userId }: EmojiPickerProps) => {
  const [isEmojiMenuShowing, setIsEmojiMenuShowing] = useState(false);
  const [emojiList, setEmojiList] = useState(emojis);
  const [inputDefaultValue, setInputDefaultValue] = useState("");

  const toggleEmojiMenu = () => {
    setIsEmojiMenuShowing((prevValue) => !prevValue);
    reset();
  };

  const reset = () => {
    setInputDefaultValue("");
    setEmojiList(emojis);
  };

  const filterEmoji = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    const filtered = emojis.filter((emoji) => {
      return emoji.aliases.some((alias) => alias.includes(event.target.value));
    });
    setEmojiList(filtered);
  };

  const addReaction = (emoji: string) => {
    console.log(emoji);

    // update the database
    // supabase.from("reactions").insert([
    //   {
    //     emoji: emoji,
    //   },
    // ]);

    toggleEmojiMenu();
  };

  return (
    <div className="relative">
      <button
        onClick={toggleEmojiMenu}
        className={`text-xl text-white font-mono font-bold h-8 center border-2 rounded-3xl px-3 py-2 gap-2 hover:bg-codGray border-codGray w-full ${
          isEmojiMenuShowing && "border-springBud bg-codGray"
        }`}
      >
        +
      </button>

      <AnimatePresence>
        {isEmojiMenuShowing && (
          <motion.div
            className="emoji-picker bg-codGray w-[300px] h-[400px] absolute right-0 top-[50px] p-2"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 100 }}
            exit={{ y: -20, opacity: 0 }}
          >
            <div className="w-full">
              <input
                type="text"
                name="search_emojis"
                className="short"
                placeholder="Search..."
                onChange={(e) => {
                  filterEmoji(e);
                }}
                defaultValue={inputDefaultValue}
              />
            </div>

            <div className="w-[284px] h-[350px] overflow-scroll grid content-start grid-cols-9 gap-1 p-2">
              {emojiList.map((emoji, index) => (
                <button
                  className="text-xl border-2 border-transparent hover:border-springBud cursor-pointer leading-none p-[2px]"
                  key={index}
                  onClick={() => addReaction(emoji.emoji)}
                >
                  {emoji.emoji}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export { EmojiPicker };
