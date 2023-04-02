import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import Page from "./pages/Page";
function App() {
  return (
    <div className="App">
    <BrowserRouter>  
    <NavBar/>
    <Page/>
    </BrowserRouter>
    </div>
  );
}

export default App;

// signin signup found/lost sell