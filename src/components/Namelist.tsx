import {nameslist} from './TypeExporting.types'


export const Namelist=(props:nameslist)=>{
    return (
    
        <div>
            {props.namelist.fname}{props.namelist.lname}{props.namelist.name}
            
        
        </div>
    )
}