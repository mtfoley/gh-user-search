import React,{useState} from 'react';
import classNames from '../styles';
function SearchForm({onSubmit}){
    const [term,setTerm] = useState("");
    return (
        <div className={classNames.searchForm}>
            <input type="search" className={classNames.searchInput} placeholder="Search Users" onChange={(e)=>{
                setTerm(e.target.value);
            }} />
            <button className={classNames.searchBtn} onClick={()=>onSubmit(term)}>Search</button>
        </div>
    );
}
export default SearchForm;