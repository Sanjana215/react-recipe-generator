import React from "react"
import Ingridients from "./ingridients.jsx";
import getRecipeFromMistral from "../ai.js"
import Section from "./section.jsx"

export default function Body()
{
     
      let [indi,func]=React.useState([]);
      let [recipe,f]=React.useState("")
      let RecipeRef=React.useRef(null)
      console.log(RecipeRef)
     
    
     function handlesubmit(event)
     {
        event.preventDefault();
        console.log("The form is submitted");
        const formdata=new FormData(event.currentTarget)
        let ingridient=formdata.get("ingridient");
        func((indi)=>{return [...indi,ingridient]});
        event.currentTarget.reset();        
     }

     async function getrecipe(event)
     {
      event.preventDefault();
      const  recipetext=await getRecipeFromMistral(indi)
      f(recipetext)
     }

     React.useEffect(()=>{
         if(recipe!=="" && RecipeRef.current!==null)
         {
            RecipeRef.current.scrollIntoView({behavior:"smooth"});
         }
     },[recipe])


     return(
        <>
        <main>
           <form onSubmit={handlesubmit}>
                 <input type="text" placeholder="Eg:origano" aria-label="forms" name="ingridient"/>
                 <button type="submit">+ Add ingridient</button>
                 
                 
           </form>
          <Ingridients newitems={indi} getrecipe={getrecipe} RecipeBox={RecipeRef}/>
          {recipe && <Section recipetext={recipe}/>}
          
        </main>
           
         
        </>
     )
}