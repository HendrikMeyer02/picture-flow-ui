import "./createPost.css";
import Cookie from "universal-cookie";
import { ChangeEvent, useRef, useState } from "react";

export default function CreatePost() {
  const [imageUrl, setImageUrl] = useState(""); // State, um die Bild-URL zu speichern
  const [imageData, setImageData] = useState("");
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [description, setDescription] = useState("");

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target && e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (file) {
        const fileReader = new FileReader();

        fileReader.onload = (e) => {
          if (e.target && e.target.result) {
            const uploadedImageUrl = e.target.result as string;
            const uploadedImageData = e.target.result as string;

            setImageData(
              uploadedImageData.replace("data:image/png;base64,", "")
            );
            setImageUrl(uploadedImageUrl);
          }
        };
        fileReader.readAsDataURL(file);
      }
    }
  };
  const submit = () => {
    const inputElement = document.getElementById(
      "name-input"
    ) as HTMLInputElement;
    setDescription(inputElement.value);

    console.log(description);
    const uploadImage = async () => {
      const cookie = new Cookie();
      const auth = cookie.get("authorization");

      const fetchResponse = await fetch("http://localhost:8000/api/upload", {
        method: "POST",
        headers: {
          auth: auth,
        },
        body: JSON.stringify({
          file: imageData,
          description: inputElement.value,
        }),
      });
    };
    uploadImage();
    setImageUrl("");
  };
  const removeImage = () => {
    setImageUrl("");
    if (fileInputRef && fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };
  return (
    <>
      <div className="top">
        <div className="container-sm glass">
          <div className="row center-row-and-col">
            <div className="col-md-6 center-row-and-col">
              <div className="placeholder"></div>
            </div>
          </div>
          <div className="row center-row-and-col">
            <div className="col-md-6 center-row-and-col">
              {!imageUrl && (
                <>
                  <div className="row">
                    <div className="col">
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileUpload}
                        style={{
                          position: "absolute",
                          left: "-9999px",
                        }}
                      />
                      <button
                        className="uploadButton btn btn-light btn-lg"
                        onClick={() => {
                          if (fileInputRef && fileInputRef.current) {
                            fileInputRef.current.click();
                          }
                        }}
                      >
                        <img
                          src="./img/icon/upload.png"
                          className="uploadIMG"
                          alt="Upload"
                        />
                      </button>
                    </div>
                  </div>
                </>
              )}
              {imageUrl && (
                <>
                  <div className="row">
                    <div className="col">
                      <img
                        src={imageUrl}
                        className="uploadedImage button-image"
                        alt="Uploaded"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="placeholder"></div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="row center-row-and-col">
            <div className="col-md-6 center-row-and-col">
              <div className="placeholder"></div>
            </div>
          </div>
          <div className="row center-row-and-col">
            <div className="col-md-6">
              <label htmlFor="name-input" className="form-label">
                Beschreibung
              </label>
              <input
                type="text"
                className="form-control"
                id="name-input"
              ></input>
            </div>
          </div>
          <div className="row center-row-and-col">
            <div className="col-md-6 center-row-and-col">
              <div className="placeholder"></div>
            </div>
          </div>
          {imageUrl && (
            <>
              <div className="row center-row-and-col">
                <div className="submit-div col">
                  <button className="btn btn-primary" onClick={submit}>
                    Hochladen
                  </button>
                </div>
                <div className="delete-div col">
                  <button className="btn btn-danger" onClick={removeImage}>
                    Bild entfernen
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="placeholder"></div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
