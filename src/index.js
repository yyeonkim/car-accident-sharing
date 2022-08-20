import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";

import VideoUploadPage from "./VideoUpload";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <VideoUploadPage />
    </ChakraProvider>
  </React.StrictMode>
);
