import Picture from "./Picture"
import { Link } from "react-router-dom"
export default function Pictures({ pictures }) {

    const redirectURL = "/picture_details?id="

    return pictures.map((picture, pos) =>
        <>
            <Link to={redirectURL + picture.id + "&author=" + picture.authorName + "&description=" + picture.description + "&authorID=" + picture.author}><Picture inputID={picture} key={pos}></Picture></Link>
        </>
    )
}