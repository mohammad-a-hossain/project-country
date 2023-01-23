import  { useState,useEffect } from 'react'

export const useFetchHook = (url) => {
         const [countries, setCountries ]= useState([])
         const [isLoading,setIsloading] = useState(true)
         const [error,setError] = useState(null)
         const [filterData,setFilterData] = useState(countries)

          
         
         const getData = async (url)=>{
                 setIsloading(true)
               try{
                const response = await fetch(url)
                const data= await response.json()
                setCountries(data)
               setFilterData(data)
                setIsloading(false)
                setError(null)

               }catch(error){
                setIsloading(false)
                setError(error)
               }
         }

         useEffect(()=>{
         getData(url)
         },[])

          // this fun will be use for state lifting
         const onRemoveCountry=(name)=>{ //console.log(name)
            const filter = countries.filter((country)=>
            country.name.common !== name)
            setFilterData(filter)
         }
        

          // this fun will be use for state lifting
         const onHandleInput=(text)=>{         
            const searchText = text.toLowerCase()
           const newCountries = countries.filter((country)=> {
           const findCountry= country.name.common.toLowerCase();
             console.log('getCharName',findCountry)
             return findCountry.startsWith(searchText)
          
           })
           setFilterData(newCountries)
            
        
         }   
       

         return{
            countries,filterData, error,isLoading,onRemoveCountry,onHandleInput
         }
}
