import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
