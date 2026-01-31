import React, { useRef, useContext } from "react";
import styles from "./styles/NewMessageForm.module.css";
import { ThemeContext } from "../../ThemeContext";
// Image upload and emoji typing removed
import detectMobile from "../../utils/detectMobile";

type SetStateType<T> = React.Dispatch<React.SetStateAction<T>>;
type NewMessageFormProps = {
  handleSubmit: any;
  text: string;
  setText: SetStateType<string>;
  selectedImg?: string;
  setSelectedImg?: SetStateType<string>;
  previewImg?: boolean;
  setPreviewImg?: SetStateType<boolean>;
  resetImage: () => void;
};

export const NewMessageForm = ({
  handleSubmit,
  text,
  setText,
  selectedImg,
  setSelectedImg,
  previewImg,
  setPreviewImg,
  resetImage
}: NewMessageFormProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [darkMode] = useContext(ThemeContext);
  // Emoji feature removed

  const wrapperHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    inputRef.current?.focus();
    handleSubmit(event);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSubmit(event);
    }
  };

  return (
    <form
      className={`${styles.sendMessageForm} ${!darkMode && styles.lightsendMessageForm}`}
    >
      <div className={styles.emojiMessageContainer}>
        <div className={`${styles.emojiRowContainer} ${!darkMode && styles.lightEmojiRowContainer}`}>
          {/* Emoji row removed */}
        </div>
        <div className={styles.msgBtnImgContainer}>
          <input
            ref={inputRef}
            className={`${styles.sendMessageInput} ${!darkMode && styles.lightMessageInput}`}
            type="text"
            name="input_text"
            placeholder="Write message"
            onChange={(e) => setText(e.target.value)}
            value={text}
            autoComplete="off"
            onKeyPress={handleKeyPress}
          />
          <div className={styles.buttonImageContainer}>
            {/* Image picker and emoji trigger removed */}
            <div
              className={`${styles.sendButton} ${!darkMode && styles.lightModeSend}`}
              role="button"
              onClick={wrapperHandler}
            >
              Send
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
