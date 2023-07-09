import {typelist} from './TypeExporting.types'


export const ExportT=(props:typelist)=>{
    return (
    
        <div>
            {props.namess.namelist.fname}{props.namess.namelist.lname}{props.namess.namelist.name}
            
        
        </div>
    )
}