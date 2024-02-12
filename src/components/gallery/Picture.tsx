import Cookie from "universal-cookie";
import { useState, useEffect } from "react";

export default function Picture(inputIDObject, key) {
    const inputID = inputIDObject.inputID.id;
    const elementID = "#" + inputID;
    const [objectURL, setObjectURL] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getImage = async () => {
            const cookie = new Cookie();
            const auth = cookie.get("authorization");
            const fetchURL = "http://localhost:8000/api/picture/" + inputID;

            try {
                const response = await fetch(fetchURL, {
                    method: "GET",
                    headers: {
                        auth: auth,
                    },
                });

                if (response.ok) {
                    const blob = await response.blob();
                    const url = URL.createObjectURL(blob);
                    setObjectURL(url);
                } else {
                    console.error("Failed to fetch image");
                }
            } catch (error) {
                console.error("Error fetching image:", error);
            } finally {
                setLoading(false);
            }
        };

        getImage();
    }, [inputID]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <img key={key} id={elementID} src={objectURL} alt="Schönes Bild." />
    );
}