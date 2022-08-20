import { Routes, Route } from "react-router-dom";

import App from "./App";
import VideoListPage from "../routes/VideoListPage";
import VideoReviewPage from "../routes/VideoReviewPage";

export default function Router() {
  return (
    <Routes>
      <Route exact path="/" element={<App />}></Route>
      <Route path="/expert/videos" element={<VideoListPage />} />
      <Route path="/expert/videos/:videoId" element={<VideoReviewPage />} />
    </Routes>
  );
}
