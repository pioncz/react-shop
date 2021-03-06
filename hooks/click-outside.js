import { useEffect } from "react"

export default function useClickOutside(ref, onClickOutside) {
  useEffect(() => {
      function handleClickOutside(event) {
          if (ref.current && !ref.current.contains(event.target)) {
            onClickOutside();
          }
      }

      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
          // Unbind the event listener on clean up
          document.removeEventListener("mousedown", handleClickOutside);
      };
  }, [ref]);
}