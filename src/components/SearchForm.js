import React,{useState} from 'react';
function SearchForm({onSubmit}){
    const [term,setTerm] = useState("");
    return (
        <div className="">
            <input type="text" className="" placeholder="Search Users" onChange={(e)=>{
                setTerm(e.target.value);
            }} />
            <button className="" onClick={()=>onSubmit(term)}>Search</button>
        </div>
    );
}
export default SearchForm;