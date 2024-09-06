import { Route, Routes, useParams } from "react-router-dom";
import NotFoundPage from "@/pages/notfound"
import IndexPage from "@/pages/index";
import Redirect from "@/pages/redirect";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route path=":shortUrl" element={<Redirect />} />
    </Routes>
  );
}

export default App;
