import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

import { db } from "../firebase";

export default function useFetchVideoName(videoId) {
  const [videoName, setVideoName] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const querySnapshot = await getDocs(collection(db, "videos"));

      querySnapshot.forEach((doc) => {
        if (doc.id === videoId) {
          setVideoName(doc.data().name);
        }
      });
      setIsLoading(false);
    })();
  }, []);

  return { videoName, isLoading };
}
