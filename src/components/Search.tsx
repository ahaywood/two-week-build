import React, { useState } from "react";

const Search = () => {
  const [isSearchShowing, setIsSearchShowing] = useState(true);

  const toggleSearch = () => {
    setIsSearchShowing((prevValue) => !prevValue);
  };

  return (
    <>
      <button
        className={`with-icon button bg-codGray z-searchButton ${
          isSearchShowing ? "hover:bg-white hover:text-black" : ""
        }`}
        onClick={toggleSearch}
      >
        {!isSearchShowing ? (
          <>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 4.5C6.96243 4.5 4.5 6.96243 4.5 10C4.5 13.0376 6.96243 15.5 10 15.5C13.0376 15.5 15.5 13.0376 15.5 10C15.5 6.96243 13.0376 4.5 10 4.5ZM1.5 10C1.5 5.30558 5.30558 1.5 10 1.5C14.6944 1.5 18.5 5.30558 18.5 10C18.5 11.8054 17.9371 13.4793 16.9773 14.8559L22.0607 19.9393C22.6465 20.5251 22.6464 21.4749 22.0607 22.0607C21.4749 22.6465 20.5251 22.6464 19.9393 22.0607L14.856 16.9772C13.4794 17.9371 11.8054 18.5 10 18.5C5.30558 18.5 1.5 14.6944 1.5 10Z" />
            </svg>
            SEARCH
          </>
        ) : (
          <>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" />
            </svg>
            CLOSE
          </>
        )}
      </button>
      <div className="bg-springBud w-screen h-screen inset-0 fixed z-search text-black flex items-center flex-col pt-12">
        <div className="uppercase text-[200px] text-center leading-normal">
          SEARCH
        </div>
        <input
          type="text"
          className="!border-black !hover:border-black !bg-black text-white"
        />
        <button>Arrow</button>
      </div>
    </>
  );
};

export { Search };
