import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useEscapeKey } from "../lib/useEscapeKey";
import { useOutsideClick } from "../lib/useClickOutside";

export const MyAccountMenu = () => {
  const [isMenuShowing, setIsMenuShowing] = useState(false);
  const ref = useRef(null);

  useEscapeKey(() => setIsMenuShowing(false));
  useOutsideClick(() => setIsMenuShowing(false), ref);

  return (
    <div className="relative" ref={ref}>
      <AnimatePresence>
        {isMenuShowing && (
          <motion.div
            className="popup-menu"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <ul>
              <li>
                <a href="/account" className="menu-item">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M18 6C16.8954 6 16 6.89543 16 8C16 9.10457 16.8954 10 18 10C19.1046 10 20 9.10457 20 8C20 6.89543 19.1046 6 18 6ZM14.126 7C14.5701 5.27477 16.1362 4 18 4C20.2091 4 22 5.79086 22 8C22 10.2091 20.2091 12 18 12C16.1362 12 14.5701 10.7252 14.126 9L3 9C2.44772 9 2 8.55228 2 8C2 7.44772 2.44772 7 3 7L14.126 7ZM6 14C4.89543 14 4 14.8954 4 16C4 17.1046 4.89543 18 6 18C7.10457 18 8 17.1046 8 16C8 14.8954 7.10457 14 6 14ZM2 16C2 13.7909 3.79086 12 6 12C7.86384 12 9.42994 13.2748 9.87398 15L21 15C21.5523 15 22 15.4477 22 16C22 16.5523 21.5523 17 21 17L9.87398 17C9.42994 18.7252 7.86384 20 6 20C3.79086 20 2 18.2091 2 16Z"
                      fill="black"
                    />
                  </svg>
                  My Account
                </a>
              </li>
              <li>
                <form action="/api/auth/signout">
                  <button type="submit" className="menu-item">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.7587 2L9 2C9.55229 2 10 2.44772 10 3C10 3.55229 9.55229 4 9 4H7.8C6.94342 4 6.36113 4.00078 5.91104 4.03755C5.47262 4.07337 5.24842 4.1383 5.09202 4.21799C4.7157 4.40973 4.40974 4.7157 4.21799 5.09202C4.1383 5.24842 4.07337 5.47262 4.03755 5.91104C4.00078 6.36113 4 6.94342 4 7.8V16.2C4 17.0566 4.00078 17.6389 4.03755 18.089C4.07337 18.5274 4.1383 18.7516 4.21799 18.908C4.40973 19.2843 4.7157 19.5903 5.09202 19.782C5.24842 19.8617 5.47262 19.9266 5.91104 19.9624C6.36113 19.9992 6.94342 20 7.8 20H9C9.55229 20 10 20.4477 10 21C10 21.5523 9.55229 22 9 22H7.75868C6.95372 22 6.28937 22 5.74818 21.9558C5.18608 21.9099 4.66937 21.8113 4.18404 21.564C3.43139 21.1805 2.81947 20.5686 2.43598 19.816C2.18868 19.3306 2.09012 18.8139 2.04419 18.2518C1.99998 17.7106 1.99999 17.0463 2 16.2413V7.7587C1.99999 6.95373 1.99998 6.28937 2.04419 5.74817C2.09012 5.18608 2.18868 4.66937 2.43598 4.18404C2.81947 3.43139 3.43139 2.81947 4.18404 2.43597C4.66938 2.18868 5.18608 2.09012 5.74818 2.04419C6.28937 1.99998 6.95373 1.99999 7.7587 2ZM15.2929 6.29289C15.6834 5.90237 16.3166 5.90237 16.7071 6.29289L21.7071 11.2929C22.0976 11.6834 22.0976 12.3166 21.7071 12.7071L16.7071 17.7071C16.3166 18.0976 15.6834 18.0976 15.2929 17.7071C14.9024 17.3166 14.9024 16.6834 15.2929 16.2929L18.5858 13H9C8.44772 13 8 12.5523 8 12C8 11.4477 8.44772 11 9 11H18.5858L15.2929 7.70711C14.9024 7.31658 14.9024 6.68342 15.2929 6.29289Z"
                        fill="black"
                      />
                    </svg>
                    Logout
                  </button>
                </form>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        className="text-springBud"
        onClick={() => setIsMenuShowing((prevValue) => !prevValue)}
      >
        {/* 3 dots icon */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
            fill="#9EFF00"
          />
        </svg>
      </button>
    </div>
  );
};
