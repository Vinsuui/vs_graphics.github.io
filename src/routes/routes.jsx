
import { Route, Routes } from "react-router-dom";

import Portfolio from "../pages/portfolio";
function Index() {
  return (
    <div className="App">
      
        <Routes>
          
            <Route path="/vite-deploy/" element={<Portfolio />} />
          
        
        </Routes>
      
    </div>
  );
}

export default Index;
