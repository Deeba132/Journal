import { BrowserRouter,Routes,Route } from "react-router-dom";
import Text from "./Text.jsx";
import App from "./App.jsx";
import Journal from "./Journal.jsx";
// import { useState } from "react";
import Item from "./Item.jsx";
import { Contextprovider } from "./Contextprovider.jsx";

export default function Routeers(){
    
    return(
        <div>
        <Contextprovider>
        <BrowserRouter>
         <Routes>
           <Route path="/" element={<App/>}/>
           <Route path="/create" element={<Text/>}/>
           <Route path="/yourjournal" element={<Journal/>}/>
           <Route path="/day/:id" element={<Item/>}/>
        </Routes>
       </BrowserRouter>
       </Contextprovider>
       </div>
    )
}