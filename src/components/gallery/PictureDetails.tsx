import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import DeleteButton from "../delete_button";
import Picture from "./Picture";
import "./pictureDetail.css";

interface AuthorState {
  author: string;
}

interface DescriptionState {
  description: string;
}

interface IDState {
  id: string;
}

export default function PictureDetails() {
  const [author, setAuthor] = useState<AuthorState>({ author: "Ole" });
  const [description, setDescription] = useState<DescriptionState>({
    description: "No description",
  });
  const [id, setID] = useState<IDState>({ id: "" });
  const [authorID, setAuthorID] = useState<IDState>({ id: "" });

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const receivedID = searchParams.get("id") || "";
    const receivedAuthor = searchParams.get("author") || "";
    const receivedAuthorID = searchParams.get("authorID") || "";
    const receivedDescription = searchParams.get("description") || "";

    setAuthorID({ id: receivedAuthorID });
    setID({ id: receivedID });
    setAuthor({ author: receivedAuthor || "Ole" });

    if (!receivedDescription) {
      setDescription({ description: "No description" });
    } else {
      setDescription({ description: receivedDescription });
    }

    const cookies = new Cookies();
    const authorization = cookies.get("authorization");

    changeButton(authorization, receivedAuthor);
  }, []);

  const changeButton = async (
    authorization: string | undefined,
    receivedAuthor: string | null
  ) => {
    if (!authorization || !receivedAuthor) return;

    const getNameEmailID = () => {
      return fetch("http://localhost:8000/api/getOwnUser", {
        method: "GET",
        headers: {
          auth: authorization,
        },
      }).then((response) => {
        return response.json();
      });
    };

    const response = await getNameEmailID();
    const name = response.username;

    const deleteButton = document.getElementById("del_button");

    if (receivedAuthor !== name && receivedAuthor !== null) {
      deleteButton!.style.visibility = "hidden";
    } else {
      deleteButton!.style.visibility = "inherit";
    }
  };

  const authorText = author.author;
  const descriptionText = description.description;

  return (
    <div className="standard-container">
      <div
        id="picture-content-container"
        className="standard-content-container glass"
      >
        <div className="picture-details-container">
          <div className="picture-container">
            <Picture
              inputIDObject={{
                id: Number(id),
                authorName: undefined,
                description: undefined,
                author: undefined,
              }}
              key={""}
            />
          </div>
          <div className="picture-profile_container">
            <img src="../../img/profile_icon.png" alt="Profile Icon" />
            <Link
              to={`/profile?authorId=${authorID.id}&authorName=${authorText}`}
            >
              <p id="picture-author">{authorText}</p>
            </Link>
          </div>
          <hr className="picture-description_seperator" />
          <p id="picture-description">{descriptionText}</p>
          <div id="delete_button_container">
            <DeleteButton property={id.id} />
          </div>
        </div>
      </div>
    </div>
  );
}
