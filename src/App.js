import NavigationBar from "./components/NavigationBar";
import FooterPage from "./components/FooterPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import LocationPage from "./pages/Location";
import RegistrationPage from "./pages/RegistrationPage";
import ProfilePage from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavigationBar></NavigationBar>
        <Routes>
          <Route path="HomePage" element={<HomePage />}></Route>
          <Route path="RegistrationPage" element={<RegistrationPage />}></Route>
          <Route path="LocationPage" element={<LocationPage />}></Route>
          <Route path="ProfilePage" element={<ProfilePage />}></Route>
        </Routes>
        <FooterPage></FooterPage>
      </div>
    </BrowserRouter>
  );
}

export default App;
