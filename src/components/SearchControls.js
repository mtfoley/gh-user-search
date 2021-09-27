import React,{useState} from 'react';
import { XCircleIcon, ArrowLeftIcon, ArrowRightIcon } from "@primer/octicons-react";
import classNames from '../styles';
function SearchControls({onSubmit,page,perPage,totalCount,onNextPage,onPrevPage,userDetails,getUserDetails}){
    const [term,setTerm] = useState("");
    const prevEnabled = page > 1;
    const nextEnabled = totalCount > (page * perPage);
    const onSearchChange = (e)=>{
        setTerm(e.target.value);
    }
    return (
        <div className={classNames.searchControls}>
            <h2 className="text-xl text-purple-500">GitHub User Search</h2>
            <input type="search" className={classNames.searchInput} placeholder="Username" onChange={onSearchChange} />
            <button className={classNames.searchBtn} onClick={()=>onSubmit(term)}>Search</button>
            {userDetails === null 
                ? <>
                <span className={classNames.pagingCount}>
                    {totalCount >= 1 ?
                        `${totalCount} Results`
                    : null}
                </span>
                { totalCount > 0 && <button disabled={!prevEnabled} className={classNames.pagingPrevBtn} onClick={onPrevPage}>
                    <ArrowLeftIcon size={16} />
                </button> }
                { totalCount > 0 && <button disabled={!nextEnabled} className={classNames.pagingNextBtn} onClick={onNextPage}>
                    <ArrowRightIcon size={16} />
                </button> }
                </>
                : <button className="pull-right" onClick={()=>getUserDetails(null)}><XCircleIcon size={24} /> Back to Results</button>
            }
        </div>
        
    );
}
export default SearchControls;