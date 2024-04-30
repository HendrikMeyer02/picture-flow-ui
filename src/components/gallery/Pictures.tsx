import { Link } from "react-router-dom";
import Picture from "./Picture"; // Assuming PictureProps is defined in Picture.tsx

interface PictureData {
  id: string;
  authorName: string;
  description: string;
  author: string;
}

interface Props {
  pictures: PictureData[];
}

export default function Pictures({ pictures }: Props) {
  const redirectURL = "/picture_details?id=";

  return pictures.map((picture, pos) => (
    <Link
      to={`${redirectURL}${picture.id}&author=${picture.authorName}&description=${picture.description}&authorID=${picture.author}`}
      key={pos}
    >
      <Picture inputIDObject={picture} key={pos} />
    </Link>
  ));
}
