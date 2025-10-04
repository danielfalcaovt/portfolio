import { BrowserRouter, Routes, Route } from "react-router";
import NotFoundPage from "../../layout/pages/NotFound/NotFoundPage";
import HomePage from "../../layout/pages/Home/HomePage";
import HomeContainer from "../../layout/pages/Home/HomeContainer";
import ArticleContainer from "../../layout/pages/sections/ArticleContainer";

export default function RouteSetup() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<HomeContainer />} />
          <Route path="/articles" element={<ArticleContainer />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
