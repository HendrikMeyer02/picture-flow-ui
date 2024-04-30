import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import CheckLogin from "../../auth/CheckLogin";
import "./search.css";

// Define interface for author object
interface Author {
  id: string;
  username: string;
  // Add other properties if needed
}

export default function Search() {
  const [searchInput, setInput] = useState("");
  const [allAuthors, setAllAuthors] = useState<Author[] | null>(null); // Specify type as Author[] | null
  const [searchedAuthors, setSearchedAuthors] = useState<Author[]>([]); // Set initial state to empty array
  const { t } = useTranslation();

  useEffect(() => {
    getAuthors();
  }, []);

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const formDataObject = Object.fromEntries(data.entries());
    const searchInputFromForm = formDataObject.searchInput.toString();
    setInput(searchInputFromForm);
    searchAuthors(searchInputFromForm);
    document.getElementById("found-authors")!.style.display = "block";
  };

  const getAuthors = async () => {
    // Fetch authors from JSON file
    const jsonFilePath = "../../../backend/user.json";
    try {
      const response = await fetch(jsonFilePath);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await response.json();
      setAllAuthors(jsonData);
    } catch (error) {
      console.error(error);
    }
  };

  const searchAuthors = (searchParameter: string) => {
    if (!allAuthors) {
      return;
    }

    const foundAuthors = allAuthors.filter((author) =>
      author.username.includes(searchParameter)
    );

    setSearchedAuthors(foundAuthors);
  };

  if (!CheckLogin()) {
    return <p>{t("notLoggedIn")}</p>;
  } else {
    return (
      <>
        <div className="standard-container search-standard-container">
          <div className="standard-content-container search-content-container">
            <form onSubmit={handleSubmit} id="search-form" className="glass">
              <h1>{t("searchForAuthors")}</h1>
              <div className="form" id="username-form">
                <input
                  id="username-input"
                  type="text"
                  name="searchInput"
                  autoComplete="off"
                  placeholder={searchInput}
                />
                <label htmlFor="username" className="label-name">
                  <span className="content-name">{t("userName")}</span>
                </label>
              </div>
              <input
                type="submit"
                className="square-button"
                value={t("search")}
              />
            </form>
            <div id="found-authors" className="glass">
              {searchedAuthors.length === 0 ? (
                <p id="no-authors">{t("noAuthorsFound")}</p>
              ) : (
                searchedAuthors.map((author) => (
                  <Link
                    to={`/profile?authorId=${author.id}&authorName=${author.username}`}
                    key={author.id}
                  >
                    <p className="found-author">{author.username}</p>
                  </Link>
                ))
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}
