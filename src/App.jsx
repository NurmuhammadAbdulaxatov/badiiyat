import { Route, Routes } from "react-router-dom";
import "./index.scss";
import Home from "./Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Registration/Register";
import Bookview from "./Pages/Book-view/Bookview";
import Author from "./Pages/Authors/Author";
import UserHome from "./Pages/UserHome/UserHome";

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-home" element={<UserHome />} />
        <Route path="/author" element={<Author />} />
        <Route path="/bookId/:id" element={<Bookview />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
