import React from "react";
import Sidebar from "./components/Sidebar";
import Chapter from "./components/Chapter/Chapter";

function App() {
  return (
    <div>
      <Sidebar />
      <Chapter
        next="EPILOGUE"
        boxer="JOSHUA CLOTTEY"
        chapter="CHAPTER 3"
        chapterText="In the ring i have different names"
        openingVidLink="https://i.imgur.com/2e54QWe.mp4"
        videoLink="https://i.imgur.com/2e54QWe.mp4"
        videoPoster="https://i.imgur.com/2e54QWe.mp4"
        defaultImg="https://i.imgur.com/PMeG84N.jpg"
      />
    </div>
  );
}

export default App;
