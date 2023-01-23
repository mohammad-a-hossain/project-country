import React from 'react'
import style from '../../style.module.css'


 const Country = (props) => {
    const {country} = props
   const {name, flags, population, capital} = country

   const onRemoveCountry=(name)=>{
    props.onRemoveCountry(name)
   }
  return (
    <div className={style.country} >
    <div className={style.image}>
        <img src={flags.png} alt={name.common} width='100%' height='100%'/>
    </div>
    <div>
       <h4>{name.common}</h4>
       <h5> capital :{capital} </h5>
       <h5> population :{population}</h5>
       <h5> capital </h5>
       <button type="button" onClick={()=>onRemoveCountry(name.common)}>cancel</button>
    </div>
    </div>
  )
}
export default Country