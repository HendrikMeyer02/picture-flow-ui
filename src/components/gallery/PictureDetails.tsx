import Picture from "./Picture"
import { useState, useEffect } from "react";
import Cookies from "universal-cookie"
import one from "../backend_api/BackendAPI"
import "./pictureDetail.css"
import { Link } from "react-router-dom";
import DeleteButton from "../delete_button";
import { log } from "console";


export default function PictureDetails() {
    const [picture, setPicture] = useState([]);
    const [author, setAuthor] = useState({ "author": "Ole" });
    const [description, setDescription] = useState({ "description": "Keine Beschreibung" });
    const [id, setID] = useState({ "id": "" });
    const [authorID, setAuthorID] = useState({ "authorID": "" });


    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const receivedID = searchParams.get("id");
        const receivedAuthor = searchParams.get("author");
        const receivedAuthorID = searchParams.get("authorID")
        const receivedDescription = searchParams.get("description");
        console.log("rendered")

        setAuthorID({ "authorID": receivedAuthorID })
        setID({ "id": receivedID })
        setAuthor({ "author": receivedAuthor })
        if (receivedDescription == "") {
            setDescription({ "description": "Keine Beschreibung" })
        } else {
            setDescription({ "description": receivedDescription })
        }

        console.log(id)


        const cookies = new Cookies();
        const authorization = cookies.get("authorization")

        console.log(authorization)

        changeButton(authorization, receivedAuthor)
    }, [])

    const changeButton = async (authorization, receivedAuthor) => {
        const getNameEmailID = () => {
            return fetch("http://localhost:8000/api/getOwnUser", {
                method: "GET",
                headers: {
                    auth: authorization
                }
            }).then((response => {
                return response.json()
            }))
        }

        console.log(await getNameEmailID())
        const response = await getNameEmailID();
        const name = response.username

        const deleteButton = document.getElementById("del_button")

        console.log("author: " + receivedAuthor!)
        if (receivedAuthor != name && receivedAuthor != null) {
            deleteButton!.style.visibility = 'hidden';
        } else {
            deleteButton!.style.visibility = 'inherit';
        }
    }

    const authorText = author.author;
    const descriptionText = description.description

    return (
        <>
            <div className="standard-container">
                <div id="picture-content-container" className="standard-content-container glass">
                    <div className="picture-details-container">
                        <div className="picture-container">
                            <Picture inputID={id}></Picture>
                        </div>
                        <div className="picture-profile_container">
                            <img src="../../img/profile_icon.png" alt="Profile Icon" />
                            <Link to={"/profile?authorId=" + authorID.authorID + "&authorName=" + authorText}>
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

        </>)
}