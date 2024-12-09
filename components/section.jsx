import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
    
    export default function  Section(props)
    {
        console.log(props.recipetext)
        return(
            <>
               <section>
               <Markdown className="markdown" remarkPlugins={[remarkGfm]} >{props.recipetext}</Markdown>
            </section>
            </>
            
        )
    }