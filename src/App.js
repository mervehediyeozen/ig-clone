import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Signin from "./pages/Signin/main";
import Messages from "./pages/Messages";
import Explore from "./pages/Explore";

function App() {
  return (
    <div>
      <Routes>
        {/* İlk yüklendiğinde Signin sayfası gelmesi için index ekleyin */}
        <Route index element={<Signin />} /> 
        <Route path="/Main" element={<Main />} /> 
        <Route path="/Messages" element={<Messages />} /> 
        <Route path="/Explore" element={<Explore />} /> 

        <Route path="/Signin" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
