
type arrayname={
    arrofname:{
        firstname:String,
        lastname:String
    }[]
}

export const Namearraylist=(props:arrayname)=>{

    return(

        <div>
            
            {props.arrofname.map((name)=>{
                return(
                    <h2>
                        {name.firstname}
                        {name.lastname}
                    </h2>
                )
            })}
        </div>
    )
}