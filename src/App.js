
import "./App.css";

import { useContext } from "react";
import { themeContext } from "./Context";
import { Route , Routes , BrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <BrowserRouter>
<Routes>
        
        <Route path="/portfolio"
         element={<HomePage/>}/>
    
      </Routes>
</BrowserRouter>
   
    </div>
  );
}

export default App;
