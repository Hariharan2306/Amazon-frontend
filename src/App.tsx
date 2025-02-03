import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const Login = lazy(() => import("./Components/Login"));
const Home = lazy(() => import("./Components/Home"));
const ItemDetail = lazy(() => import("./Components/ItemDetail"));

export default function app() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/item-details" element={<ItemDetail />} />
        </Routes>
      </Router>
    </Suspense>
  );
}
