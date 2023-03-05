import { Routes, Route } from "react-router-dom";
import "./App.css";
import ChatPage from "./Pages/ChatPage";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route exact path="/chats" element={<ChatPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
