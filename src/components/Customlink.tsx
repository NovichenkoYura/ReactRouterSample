import { Link, useMatch } from "react-router-dom";

interface CustomLinkProps {
children: string;
to?: any;
}


const CustomLink: React.FC< CustomLinkProps> = ({children, to, ...props} )=>{
const match = useMatch(to);
console.log({match})

    return(
      <Link 
        to={to} 
        style={{color: match ? 'var(--color-active)' : 'white'}}
        {...props}>
        {children}
      </Link>
         
   
    )
}

export {CustomLink}