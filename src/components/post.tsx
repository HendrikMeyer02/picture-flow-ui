import { Link } from "react-router-dom";
import "./post.css";
import { useEffect, useState } from "react";

interface Props {
  imgLink: string;
  postLink: string;
}

export default function Post({ imgLink, postLink }: Props) {
  const [imgWidth, setImgWidth] = useState<number>(0);
  const [imgHeight, setImgHeight] = useState<number>(0);

  useEffect(() => {
    const img = new Image();
    img.src = imgLink;
    img.onload = () => {
      setImgWidth(img.naturalWidth);
      setImgHeight(img.naturalHeight);
    };
  }, [imgLink]);
  // console.log("Height" + imgHeight);
  // console.log("Width" + imgWidth);

  return (
    <Link to={postLink}>
      <div className="post-rounded-div">
        {imgHeight >= imgWidth && (
          <div className="img-wrapper">
            <img
              src={imgLink}
              alt="Post Image"
              className="post-img"
              loading="lazy"
              srcSet={`${imgLink} 400w, ${imgLink} 800w`}
              sizes="(max-width: 400px) 100vw, 50vw"
              width={imgWidth}
              height={imgHeight}
            />
          </div>
        )}
        {imgHeight < imgWidth && (
          <div className="img-wrapper rotated">
            <img
              src={imgLink}
              alt="Post Image"
              className="post-img"
              loading="lazy"
              srcSet={`${imgLink} 400w, ${imgLink} 800w`}
              sizes="(max-width: 400px) 100vw, 50vw"
              width={imgWidth}
              height={imgHeight}
            />
          </div>
        )}
      </div>
    </Link>
  );
}
