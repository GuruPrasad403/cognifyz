import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./Components/Form";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/submit" element={<h1 className="text-2xl text-center py-20">Thanks, Form Submited</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
