import { useState,useEffect } from "react";

function App() {
  useEffect(()=>{
    console.log(import.meta.env.VITE_APP_API_ENDPOINT)
  },[]
)

  return (
    <div className="App">
      <div className="content">
        <h1>Real estate App</h1>
      </div>
    </div>
  );
}

export default App;
