import { useState,useEffect } from "react";
import NavBar from './components/NavBar'

function App() {
  useEffect(()=>{
    console.log(import.meta.env.VITE_APP_API_ENDPOINT)
  },[]
)

  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;
