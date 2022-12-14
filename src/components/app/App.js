import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppHeader from "../appHeader/AppHeader";
import Page404 from "../pages/404";
import ComicsPage from "../pages/ComicsPage";
import MainPage from "../pages/MainPage";
import SingleComicPage from "../pages/SingleComicPage";
 
const App = () => {
   
  return (
    
      <div className="app">
        <AppHeader />
        <main>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/comics" element={<ComicsPage />} />
            <Route path="/comics/:comicId" element={<SingleComicPage/>} />
            <Route path="*" element={<Page404/>} />
          </Routes>
        </main>
      </div>
    
  );
};

export default App;

 