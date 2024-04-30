import axios, { Canceler } from "axios";
import { useEffect, useState } from "react";

interface Book {
  title: string;
  // Add other properties as needed
}

export default function useBookSearch(query: string, pageNumber: number) {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [books, setBooks] = useState<string[]>([]); // Specify type as string[]
  const [hasMore, setHasMore] = useState<boolean>(false);

  useEffect(() => {
    setBooks([]);
  }, [query]);

  useEffect(() => {
    setLoading(true);
    setError(false);

    let cancel: Canceler;
    axios({
      method: "GET",
      url: "http://openlibrary.org/search.json",
      params: { q: query, page: pageNumber },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((response) => {
        setBooks((prevBooks) => {
          return [
            ...new Set([
              ...prevBooks,
              ...response.data.docs.map((b: Book) => b.title),
            ]),
          ];
        });
        setHasMore(response.data.docs.length > 0); // Fix variable name from 'res' to 'response'
        setLoading(false);
        console.log(response.data);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
    return () => cancel();
  }, [query, pageNumber]);
  return { loading, error, books, hasMore };
}
