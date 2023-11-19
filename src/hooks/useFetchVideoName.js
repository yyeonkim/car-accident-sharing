import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

import { db } from "../firebase";
import { DB } from "../constants/index.js";

export default function useFetchVideoName(videoId) {
  const [videoName, setVideoName] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const docRef = doc(db, DB.VIDEO, videoId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setVideoName(docSnap.data().name);
      } else {
        console.log("파일을 불러올 수 없습니다.");
      }
      setIsLoading(false);
    })();
  }, []);

  return { videoName, isLoading };
}
