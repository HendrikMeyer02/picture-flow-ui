import React from "react";
import "../components/post.css";
import CheckLogin from "../auth/CheckLogin";

export default function Post() {
  const post = {
    account: "placeholder",
    postID: "id",
    alt: "Naul Peusel war hier",
    description: "Ich bin eine Beschreibung",
    src: "../../img/sample-img/4.png",
  };
  if (!CheckLogin()) {
    return (
      <>
        <p>Nicht eingeloggt!</p>
      </>
    );
  } else {
    return (
      <>
        <div className="post-container">
          <img src={post.src} alt={post.alt} />
          <div className="post-footer">
            <img src="../../img/profile_icon.png" alt="avatar" />
            <p className="post-desc">{post.description}</p>
          </div>
        </div>
      </>
    );
  }
}
