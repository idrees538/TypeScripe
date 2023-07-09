type headingna={
    children:string
    name ?:string
}

export const Headingg=(props:headingna)=>{
    return(
    <div>
        {props.children}
        {props.name}
        
    </div>
    )
}