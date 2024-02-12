import Gallery from "../Gallery"
import CheckLogin from "../../auth/CheckLogin"
import "./search.css"
import useBookSearch from "./useBookSearch";
import { useState, useRef, useCallback, useEffect } from "react";
import { Link } from "react-router-dom"

export default function Search() {

    const [searchInput, setInput] = useState("")
    const [allAuthors, setAllAuthors] = useState(null);
    const [searchedAuthors, setSearchedAuthors] = useState([{ id: "", username: "" }])

    useEffect(() => {
        getAuthors()
    }, [])

    const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        console.log(allAuthors)
        e.preventDefault();
        const data = new FormData(e.target);
        const formDataObject = Object.fromEntries(data.entries());
        const searchInputFromForm = formDataObject.searchInput.toString();
        setInput(searchInputFromForm);
        searchAuthors(searchInputFromForm)
        document.getElementById("found-authors")!.style.display = "block";
    }

    const getAuthors = () => {
        //Alle Autoren bekommen
        const jsonFilePath = '../../../backend/user.json'
        fetch(jsonFilePath)
            .then((response) => response.json())
            .then((jsonData) => { setAllAuthors(jsonData); console.log(jsonData) })
            .catch((error) => console.error(error));
    }

    const searchAuthors = (searchParameter) => {

        const gefundeneEinträge = []

        for (const eintrag of allAuthors) {
            if (eintrag.username.includes(searchParameter)) {
                gefundeneEinträge.push(eintrag);
            }
        }

        if (gefundeneEinträge.length == 0) {
            setSearchedAuthors([{ id: "1", username: "" }])
            document.getElementById("no-authors")!.style.display = "block"

        } else {
            setSearchedAuthors(gefundeneEinträge)
            document.getElementById("found-authors")!.style.display = "block"
            document.getElementById("no-authors")!.style.display = "none"

        }

    }

    console.log(searchedAuthors)


    if (!CheckLogin()) {
        return (
            <>
                <p>Nicht eingeloggt</p>
            </>
        );
    } else {

        return (
            <>
                <div className="standard-container search-standard-container">
                    <div className="standard-content-container search-content-container">

                        <form onSubmit={handleSubmit} id="search-form" className="glass">


                            <h1>Autoren suchen</h1>
                            <div className="form" id="username-form">
                                <input
                                    id="username-input"
                                    type="text"
                                    name="searchInput"
                                    autoComplete="off"
                                    placeholder={searchInput}
                                />
                                <label htmlFor="username" className="label-name">
                                    <span className="content-name">Nutzername</span>
                                </label>
                            </div>
                            <input type="submit" className="square-button" value="Suchen"></input>
                        </form>
                        <div id="found-authors" className="glass">
                            {searchedAuthors.map((text, index) => (
                                <Link to={"/profile?authorId=" + text.id + "&authorName=" + text.username}>
                                    <p className="found-author" key={index}>{text.username}</p>
                                </Link>
                            ))}
                            <p id="no-authors">Keine Autoren gefunden.</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}