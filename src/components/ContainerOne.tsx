type stylee={
    style:React.CSSProperties 
}


export const ContainerOne=(props:stylee)=>{
    return(
        <h2 style={props.style}>
            hello i'm using jsx in ContainerOne file
        </h2>
        
    )
}