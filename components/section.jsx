import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
    
    export default function  Section(props)
    {
        
        return(
            <>
               <section>
               <Markdown className="markdown" remarkPlugins={[remarkGfm]} >{props.recipetext}</Markdown>
            </section>
            </>
            
        )
    }