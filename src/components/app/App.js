import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import AppHeader from "../appHeader/AppHeader";
// import Page404 from "../pages/404";
import ComicsPage from "../pages/ComicsPage";
import MainPage from "../pages/MainPage";
import SingleComicPage from "../pages/SingleComicPage";
import Spinner from "../spinner/Spinner";

const Page404 = lazy(() => import("../pages/404")) ;
const App = () => {
   
  return (
    <div className="app">
      <AppHeader />
      <main>
        <Suspense fallback={<Spinner/>}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/comics" element={<ComicsPage />} />
            <Route path="/comics/:comicId" element={<SingleComicPage />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
          
        </Suspense>
      </main>
    </div>
  );
};

export default App;

 