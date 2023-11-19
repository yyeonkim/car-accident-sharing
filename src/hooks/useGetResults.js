import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";

import { db } from "../firebase";
import { DB } from "../constants/index.js";

export default function useGetResults() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      let items = [];
      const querySnapshot = await getDocs(collection(db, DB.VIDEO));
      querySnapshot.forEach((doc) => {
        if (Object.keys(doc.data().comments).length !== 0) {
          items.push(doc.data());
        }
      });
      setResults(items);
      setIsLoading(false);
    })();
  }, []);

  return { results, isLoading };
}
