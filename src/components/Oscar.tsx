import React from "react"

type oscarna={
    children:React.ReactNode
}

export const Oscar=(props:oscarna)=>{
return(
  <div>
      {props.children}
  </div>  
)
}