import { Route, Routes } from "react-router";
import HomePage from "./Pages/HomePage";
import NoteDetailPage from "./Pages/NoteDetailPage";
import CreateNotePage from "./Pages/CreateNotePage";

const App = () => {
  return (
    <div data-theme="forest">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreateNotePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;
