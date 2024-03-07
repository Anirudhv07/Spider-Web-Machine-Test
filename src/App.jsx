import { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import "./App.css";
import { Button } from "@material-tailwind/react";
import { ThemeProvider } from "@material-tailwind/react";
import Home from "./assets/Pages/Home";
import EventPage from "./assets/Pages/EventPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
   
   <ThemeProvider>
     <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/event' element={<EventPage />} />

    

     </Routes>
     </ThemeProvider>
   </BrowserRouter>
    </>
  );
}

export default App;
