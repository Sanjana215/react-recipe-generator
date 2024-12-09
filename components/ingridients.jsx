export default function Ingridients(props)
{
    let newitems=props.newitems.map((item,idx)=>{return <li key={idx}>{item}</li>})
    return(
        <section>
               {props.newitems.length>0 && <h2>List of Ingridients:</h2>}
               <div>
                   <ul>{newitems}</ul>
               </div>
               {props.newitems.length>3 &&<div className="recipe-box" ref={props.RecipeBox}>
                  <h4>Ready for a recipe?</h4>
                  <div>
                  <p>Generate a recipe from your list of ingridients</p>
                  <button onClick={props.getrecipe}>Get a recipe</button>
                  </div>
                  
               </div>}
          </section>
    )
}