import React, {useState} from "react";

type ManType = {
   name: string
   age: number
   lessons: Array<{ title: string }>
   address: {
      street: {
         title: string
      }
   }
}
type PropsType = {
   title: string
   man: ManType
   food: Array<string>
   car: { model: string }
}


const manComponent: React.FC<PropsType> = ({title, man, ...props}) => {

   const [message, setMessage] = useState<string>(`hello`)

   return (
     <div>
        <h1> {props.car.model}</h1>
        <h1> {title}</h1>
        <h1>{man.address.street.title}</h1>

     </div>
   )
}