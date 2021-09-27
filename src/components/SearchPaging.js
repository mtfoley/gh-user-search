import { XCircleFillIcon } from "@primer/octicons-react";
import classNames from "../styles";
function SearchPaging({page,perPage,totalCount,onNextPage,onPrevPage,userDetails,getUserDetails}){
    return (
        <div className={classNames.pagingContainer}>
            <span className={classNames.pagingCount}>
                {totalCount >= 1 ?
                    `${totalCount} Results`
                : null}
            </span>
            {userDetails && <button className="pull-right" onClick={()=>getUserDetails(null)}><XCircleFillIcon size={24} /> Back to Results</button>}
            {userDetails === null && page > 1
            ? <button className={classNames.pagingPrevBtn} onClick={onPrevPage}>Prev</button>
            : <span className={classNames.pagingPrevBtn}>Prev</span>}
            {userDetails === null && totalCount > (page * perPage) 
            ? <button className={classNames.pagingNextBtn} onClick={onNextPage}>Next</button>
            : <span className={classNames.pagingNextBtn}>Next</span>}
        </div>
    );
}
export default SearchPaging;