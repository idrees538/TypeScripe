type inputonetype={
    input:string
    eventhandle: (event:React.ChangeEvent<HTMLInputElement>)=>void


}

export const InputOne =(props:inputonetype)=>{
    // const eventhandle= (event:React.ChangeEvent<HTMLInputElement>){
    //     return console.log(event)
    // }
return(
    <div>
        <input type="text"value={props.input} onChange={(event)=>{
            props.eventhandle(event)} 
        }
            ></input>
    </div>
)
}