
import './App.css';
import  Countrylist  from './components/countryList';
import style from './style.module.css'
import { useFetchHook } from './components/customHook/useFetchHook';
import { Search } from './components/search';


function App() { //console.log(props)
     const {filterData,
       error,
       isLoading,
       onRemoveCountry,
       onHandleInput
      } = useFetchHook('https://restcountries.com/v3.1/all')


  return (
    <div className={style.main}>
     <h1>find country  by async data fetch and hooks</h1>
     
      {/* herer state lifting function onHandleInput  */}
      <Search onHandleInput={onHandleInput}/> 
     

     {isLoading && <h3>.... loading data</h3>}
     {error && <h3 style={{color:'red'}}>{error.message}</h3>}

          {/* herer state lifting function onRemoveCountry  */}
      <Countrylist  countries ={filterData} onRemoveCountry={onRemoveCountry} />
    
    </div>
  );
}

export default App;
