import React, { useState } from "react";

import Table from "./components/adou-tanstack-table";

const App = () => {
  const [code, setCode] = useState(``);

  return (
    
    <div>
      <Table></Table>
    </div>
  );
};

export default App;
