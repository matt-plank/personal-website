import { useRef, useState } from "react";
import { API_ROOT } from "../../config/config";
import "./contact.css";

const Contact = () => {
  const name = useRef("");
  const email = useRef("");
  const message = useRef("");
  const [warning, setWarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");

  const sendMessage = () => {
    const sendFormData = async () => {
      let response = await fetch(`${API_ROOT}contact/message`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.current.value,
          email: email.current.value,
          message: message.current.value,
        }),
      });

      let responseJson = await response.json();

      if (response.status === 400) {
        setWarning(true);
        setWarningMessage(responseJson.error);
        return;
      }

      if (response.status !== 201) {
        setWarning(true);
        return;
      }

      setWarning(false);
      setWarningMessage(null);

      name.current.value = "";
      email.current.value = "";
      message.current.value = "";
    };

    sendFormData();
  };

  return (
    <div className="section contact">
      <h2>Contact Me</h2>

      <div className="form-group">
        {warning && (
          <div className="warning">
            Could not send message{warningMessage && <>: {warningMessage}</>}
          </div>
        )}
        <input
          id="name"
          className="form-control"
          type="text"
          name="name"
          placeholder="Your name"
          ref={name}
          required
        />

        <input
          id="email"
          className="form-control"
          type="email"
          name="_replyto"
          placeholder="Your email"
          ref={email}
          required
        />

        <textarea
          id="message"
          className="form-control"
          name="message"
          placeholder="Your message"
          ref={message}
          required
        ></textarea>

        <button className="button" type="submit" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Contact;
