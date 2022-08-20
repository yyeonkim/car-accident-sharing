import "@fontsource/roboto";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import { customeTheme } from "./theme";
import App from "./App";
import VideoListPage from "./routes/VideoListPage";
import VideoReviewPage from "./routes/VideoReviewPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={customeTheme}>
        <Routes>
          <Route exact path="/" element={<App />}></Route>
          <Route path="/expert/videos" element={<VideoListPage />} />
          <Route path="/expert/videos/:videoId" element={<VideoReviewPage />} />
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
