import { useEffect, useState } from "react"
import Cookie from "universal-cookie"
import Pictures from "./gallery/Pictures"
import "./gallery.css"
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from "react-router-dom"
import Picture from "./gallery/Picture"


export default function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {


    const cookie = new Cookie();
    const auth = cookie.get("authorization");

    const result = await fetch("http://localhost:8000/api/pictures/getpicture?amount=10", {
      method: "GET",
      headers: {
        "auth": auth
      }
    })
    const jsonResult = await result.json();

    console.log(await jsonResult.pictures)

    setImages(prevImages => [...prevImages, ...jsonResult.pictures]);

  }

  const redirectURL = "/picture_details?id="

  return (<>

    <InfiniteScroll
      dataLength={images.length}
      next={fetchData}
      hasMore={true} // Replace with a condition based on your data source
      loader={<p>Loading...</p>}
      endMessage={<p>No more data to load.</p>}
    >
      <div className="picture-gallery">
        {images.map((picture, pos) =>
          <Link to={redirectURL + picture.id + "&author=" + picture.authorName + "&description=" + picture.description + "&authorID=" + picture.author}><Picture inputID={picture} key={pos}></Picture></Link>
        )}
      </div>
    </InfiniteScroll>


  </>);
}



