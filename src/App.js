import React from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Chapter from "./components/Chapter/Chapter";
import Champ from "./components/Champ";
import Credits from "./components/Credits/Credits"

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Sidebar />


        
        <Route key={8443434857} exact path="/" render={() => <Champ nextLink="/chapter-1" />} />
        <Route key={8444343857} 
          exact
          path="/chapter-1"
          render={() => (
            <Chapter
              id="chapter-1"
              nextLink="/chapter-2"
              next="Nii Tagoe"
              boxer="WILLIAM LARTEY"
              chapter="CHAPTER 1"
              chapterText="My boxing name is Stubborn"
              openingVidLink="https://i.imgur.com/2UsEhqw.mp4"
              videoLink="https://srv-file12.gofile.io/download/4jwFuG/stubborn%20180_Trim.mp4"
              videoPoster="https://i.imgur.com/1zEauxk.png"
              defaultImg="https://i.imgur.com/PMeG84N.jpg"
            />
          )}
        />
        <Route
          exact key={844844454557} 
          path="/chapter-2"
          render={() => (
            <Chapter
              id="chapter-2"
              nextLink="/chapter-3"
              next="Joshua Clottey"
              boxer="NII Tagoe"
              chapter="CHAPTER 2"
              chapterText="I love boxing"
              openingVidLink="https://i.imgur.com/Pq0ToGv.mp4"
              videoLink="https://srv-file12.gofile.io/download/4jwFuG/Tagoe.mp4"
              videoPoster="https://i.imgur.com/QMVY0ud.png"
              defaultImg="https://i.imgur.com/PMeG84N.jpg"
            />
          )}
        />

        <Route key={84449489957} 
          exact
          path="/chapter-3"
          render={() => (
            <Chapter
              nextLink="/epilogue"
              id="/chapter-3"
              next="EPILOGUE"
              boxer="JOSEPH TETTEH"
              chapter="CHAPTER 3"
              chapterText="In the ring i have different names"
              openingVidLink="https://i.imgur.com/2e54QWe.mp4"
              videoLink="https://srv-file12.gofile.io/download/4jwFuG/Joseph.mp4"
              videoPoster="https://i.imgur.com/2e54QWe.mp4"
              defaultImg="https://i.imgur.com/PMeG84N.jpg"
            />
          )}
        />
         <Route key={84449466789957} 
          exact
          path="/epilogue"
          render={() => (
            <Chapter
              nextLink="/credits"
              id="/epilogue"
              next="ABOUT"
              boxer="EPILOGUE"
              chapter="EPILOGUE"
              chapterText='"No one is responsible for me"'
              openingVidLink="https://i.imgur.com/dvchPn7.mp4"
              videoLink="https://srv-file12.gofile.io/download/4jwFuG/Epilogue%20180.mp4"
              videoPoster="https://imgur.com/TPrSDFOg"
              defaultImg="https://i.imgur.com/PMeG84N.jpg"
            />
            
          )}
        />
    <Route exact path="/credits" component={Credits} />
      {/* </AnimatePresence> */}
    </Router>
  );
}

export default App;
