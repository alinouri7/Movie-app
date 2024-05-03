import React from 'react'
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './circle.css' 


const CircleRating = ({rating,className}) => {
  return (
    <div className={`bg-black rounded-[50%] p-[2px]  circle  ${className} ${rating < 5 ? 'stroke-[#e01616]' : `${rating < 7 ? 'stroke-orange' : 'stroke-[green]'}`}  `} >
         <CircularProgressbar 
          value={rating}
          maxValue={10}
          text={rating}
          styles={buildStyles({  backgroundColor: '#fff' ,
            pathColor: rating < 5 ? 'red' :
            rating < 7 ? "orange" : "green"
          })}
         />
    </div>
  )
}

export default CircleRating