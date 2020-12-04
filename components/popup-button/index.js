import { useRef } from "react"
import ClickOutisde from './../../hooks/click-outside'

export default function PopupButton({ opened, disabled, button, popup, onToggle }) {
  const wrapperRef = useRef(null);

  ClickOutisde(wrapperRef, () => {
    console.log('click outside');
    console.log(!disabled, !!onToggle);
    if (!disabled && onToggle) {
      onToggle();
    }
  });

  return (
    <div ref={wrapperRef}>
      <div>
        {button}
      </div>
      {opened && (
        <div>
          {popup}
        </div>
      )}
    </div>
  )
}