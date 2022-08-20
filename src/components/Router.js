import { Routes, Route } from "react-router-dom";

import VideoReivew from "../pages/VideoReview";

export default function Router() {
  <Routes>
    <Route exact path="/" element={<App />} />
    <Route exact path=":videoId" element={<VideoReivew />} />
  </Routes>;
}
