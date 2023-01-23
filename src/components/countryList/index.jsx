import React from 'react'
import style from '../../style.module.css'

import { v4 as uuidv4 } from 'uuid';
import  Country  from '../countries'

 const Countrylist = (props) => { 
   // console.log('contyrlist',countries)
  return (
    <div className={style.countrymain}>
    {
           props.countries.map((country)=>{
            const newCountry = {country, id:uuidv4()}
            return  <Country {...newCountry} key={newCountry.id} 
            onRemoveCountry={props.onRemoveCountry} />
        })          
    }

    </div>
  )
}
export default Countrylist