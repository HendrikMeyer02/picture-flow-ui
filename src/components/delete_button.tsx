import Cookies from "universal-cookie";
import "./gallery/pictureDetail.css";

export default function deleteButton(props: { property: string }) {
  console.log("picture id grabbed: " + props.property);
  const id = props.property;
  const cookie = new Cookies();
  const token = cookie.get("authorization");
  const delete_pic = () => {
    const picture = document.getElementById("#" + id);
    fetch(`http://localhost:8000/api/delpicture/${id}`, {
      method: "DELETE",
      headers: {
        auth: token,
      },
    });
    console.log(">>> DELETED " + picture);
    picture!.setAttribute("src", "../../img/icon/cross.png");
    picture!.style.width = "50px";
    picture!.style.height = "50px";
    picture!.style.marginTop = "50px";
    picture!.style.marginBottom = "50px";
    picture!.style.display = "hidden";
    //navigate("/main")
  };

  return (
    <>
      <button
        onClick={delete_pic}
        id="del_button"
        style={{ visibility: "hidden" }}
      >
        <img src="../../img/icon/trash.png" alt=">delete<" />
      </button>
    </>
  );
}
