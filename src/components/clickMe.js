import "../css/clickMe.css";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const ClickMe = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button className="chat_Btn" onClick={handleShow}>
        Chat with us
      </Button>

      <Modal
        {...props}
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        className="chat_window"
      >
        <Modal.Header className="chat_container_top border border-none ">
          <Modal.Title className="help">How can we help you?</Modal.Title>
        </Modal.Header>
        <textarea
          type="text"
          placeholder="Send us a message..."
          name="chat_with_us"
          id="chat_with_us"
          cols="30"
          rows="10"
          className="chat_with_us_textarea"
        ></textarea>
        <Modal.Footer className="chat_container_bottom border border-none">
          <Button className="btn btn-danger btn-sm" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            type="submit"
            value="submit"
            onClick={handleClose}
            className="btn btn-sm btn-success"
          >
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ClickMe;
