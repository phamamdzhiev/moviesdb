import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Header from "./components/Header";
import Popular from "./pages/Popular";
const Search = lazy(() => import("./pages/Search"));
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense
        fallback={
          <div className="mt-5 text-center font-semibold text-main">
            Loading..
          </div>
        }
      >
        <Routes>
          <Route index exact path="/" element={<Popular />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
