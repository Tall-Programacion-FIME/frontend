import React from "react";
import useStore from "../store/MessageState";

function MessageBox() {
  const { message, isMessage } = useStore();
  if (!isMessage) {
    return null;
  }
  return (
    <div className="message_box">
      <h1>{message}</h1>
    </div>
  );
}

export default MessageBox;
