import React from "react";


import Chart from "../Components/Chart"

import ResentUser from "./User/ResentUser";



function DashBoard() {
  return (
    
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px' }}>
   <Chart/>
   
  <div>
  <div >
        <ResentUser/>
      
      </div>

  </div> {/* Second column */}
</div>
  
  );
}

export default DashBoard;
