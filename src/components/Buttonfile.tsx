type buttonprops={
    handleclick:(event:React.MouseEvent<HTMLButtonElement>,id:number)=>void

}


export const Buttonfile=(props:buttonprops)=>{
    return(
        <div>
            <button onClick={(event)=>{props.handleclick(event,22)}}>button</button>

        </div>

    )
}