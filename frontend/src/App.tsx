import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// components
import { PopupCtxProvider } from "./context/popupCtx";
import { useUserAuth } from "./context/userAuthCtx";

// components

import Account from "./pages/Account";
import NavBar from "./components/NavBar";
import Home from "./pages/Home/Home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import UploadSongs from "./pages/UploadSongs/UploadSongs";
//
function App() {
  const { user } = useUserAuth();

  //
  return (
    <div>
      <BrowserRouter>
        <PopupCtxProvider>
          <NavBar />
        </PopupCtxProvider>
        <Routes>
          <Route
            path="/user/login"
            element={!user?.token ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="/user/signup"
            element={!user?.token ? <Signup /> : <Navigate to="/" />}
          />
          <Route path="/" element={<Home />} />
          <Route path="/song/upload" element={<UploadSongs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
