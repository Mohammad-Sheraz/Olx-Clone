import { Route, Routes } from "react-router-dom";
import DetailScreen from "../Screen/DetailScreen";
import Dashboard from "../Dashboard";
import Login from "../Component/Login";
import Register from "../Component/Register";
import PostDataPage from "../Screen/PostData";

export default function Router() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Dashboard />} />
        <Route path="/DetailScreen/:adId" element={<DetailScreen />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/post" element={<PostDataPage />} />
      </Route>
    </Routes>
  );
}