import Page from "./App.jsx"
import { createRoot } from 'react-dom/client'
let root=createRoot(document.querySelector("#root"));
import React from "react"



function App()
{
    
  
  
  return(
    <>
      <Page />
 
  </>
  )
}
root.render(
  <App />
 
)