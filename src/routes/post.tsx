import React from "react";
import "../components/post.css";
import CheckLogin from "../auth/CheckLogin";
import { useTranslation } from "react-i18next";

export default function Post() {
  const { t } = useTranslation();
  const post = {
    account: "placeholder",
    postID: "id",
    alt: "Alternative text if picture is not available",
    description: "I'm a description",
    src: "../../img/sample-img/4.png",
  };
  if (!CheckLogin()) {
    return (
      <>
        <p>{t("infoNotLoggedIn")}</p>
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
