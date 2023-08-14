
import { Route, Routes } from "react-router-dom";

import Portfolio from "../pages/portfolio";
function Index() {
  return (
    <div className="App">
      
        <Routes>
          
            <Route path="/vsg" element={<Portfolio />} />
          
        
        </Routes>
      
    </div>
  );
}

export default Index;
