import React from "react";
import useStore from "../store/MessageState";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function eliminate() {
  useStore.setState({ message: "", isMessage: false });
  console.log("Action Executed");
}

function MessageBox() {
  const { message, isMessage, typeMessage } = useStore();
  if (!isMessage) {
    return null;
  }
  return (
    <div className={`message_box ${typeMessage}`}>
      <h1>{message}</h1>
      <button className="icon_button" onClick={eliminate} type="submit">
        <FontAwesomeIcon icon="times" />
      </button>
    </div>
  );
}

export default MessageBox;
