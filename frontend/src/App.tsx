import { Route, Routes } from "react-router";
import HomePage from "./Pages/HomePage";
import NoteDetailPage from "./Pages/NoteDetailPage";
import CreateNotePage from "./Pages/CreateNotePage";

const App = () => {
  return (
    <div className="relative h-full w-full">
      {/* pointer-events-none is needed for <Link> component to work !!! Removing this property blocks underlying click events to occur */}
      <div className="pointer-events-none absolute inset-0 z-0 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%, #000_60%, #00FF9D40_100%)]" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreateNotePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;
