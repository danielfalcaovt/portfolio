import { BrowserRouter, Routes, Route } from "react-router";
import NotFoundPage from "../../layout/pages/NotFound/NotFoundPage";
import HomePage from "../../layout/pages/Home/HomePage";
import HomeContainer from "../../layout/pages/Home/HomeContainer";
import ArticlesList from "../../layout/pages/sections/ArticleContainer";
import { ArticleDetails } from "../../layout/pages/sections/ArticleDetails";

export default function RouteSetup() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<HomeContainer />} />
          <Route path="/articles" element={<ArticlesList />} />
          <Route path="/articles/:id" element={<ArticleDetails/> } />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
