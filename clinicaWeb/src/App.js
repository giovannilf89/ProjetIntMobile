import "./App.css";
import Rotas from "./routes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <Rotas />
      <ToastContainer autoClose={5000} />
    </div>
  );
}

export default App;
