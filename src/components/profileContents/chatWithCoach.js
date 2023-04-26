import "./css/chatWithCoach.css";
import coachSeph from "./img/doks.png";
import React from "react";
import { MDBTooltip } from "mdb-react-ui-kit";
const ChatWithCoach = () => {
  return (
    <div>
      <div className="chat_top_panel">
        <div className="coach_profile">
          <div className="icon_badge_container">
            <div className="badge_icon_container">
              <span className="visibility_status"></span>
            </div>
            <img
              src={coachSeph}
              alt="Your coach will show here"
              className="coach_img"
            />
          </div>
          <div className="coach_name_status">
            <h2 className="coachName">Coach Seph</h2>
            <p className="coachStatus">Active now </p>
          </div>
        </div>
        <div className="call_option">
          <div className="video_call">
            <MDBTooltip
              tag="a"
              wrapperProps={{ href: "#" }}
              title="Start a video call"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#ffb703"
                class="bi bi-camera-video-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5z"
                />
              </svg>
            </MDBTooltip>
          </div>

          <div className="voice_call">
            <MDBTooltip
              tag="a"
              wrapperProps={{ href: "#" }}
              title="Start a voice call"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#ffb703"
                class="bi bi-telephone-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                />
              </svg>
            </MDBTooltip>
          </div>
        </div>
      </div>

      <div className="chat_work_space">
        <p style={{ textAlign: "center" }}>Your chats will appear here!</p>
      </div>

      <div className="message_input_section">
        <div className="message_buttons">
          <MDBTooltip
            tag="a"
            wrapperProps={{ href: "#" }}
            title="Upload a file"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#ffb703"
              class="bi bi-file-earmark-arrow-up-fill"
              viewBox="0 0 16 16"
            >
              <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM6.354 9.854a.5.5 0 0 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 8.707V12.5a.5.5 0 0 1-1 0V8.707L6.354 9.854z" />
            </svg>
          </MDBTooltip>
        </div>
        <div className="message_buttons">
          <MDBTooltip
            tag="a"
            wrapperProps={{ href: "#" }}
            title="Send a picture"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#ffb703"
              class="bi bi-image-fill"
              viewBox="0 0 16 16"
            >
              <path d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z" />
            </svg>
          </MDBTooltip>
        </div>
        <div className="message_buttons">
          <MDBTooltip tag="a" wrapperProps={{ href: "#" }} title="Send emojis">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#ffb703"
              class="bi bi-emoji-smile-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zM4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z" />
            </svg>
          </MDBTooltip>
        </div>
        <div for="message_area" className="text_area">
          <textarea
            id="message_area"
            name="message_area"
            rows="2"
            cols="70"
            placeholder=" Type a message... "
          ></textarea>
        </div>
        <div className="message_buttons">
          <MDBTooltip
            tag="a"
            wrapperProps={{ href: "#" }}
            title="Send your message"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-send-fill"
              viewBox="0 0 16 16"
            >
              <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
            </svg>
          </MDBTooltip>
        </div>
      </div>
    </div>
  );
};

export default ChatWithCoach;
