import classNames from "../styles";
function SearchPaging({page,perPage,totalCount,onNextPage,onPrevPage}){
    return (
        <div className={classNames.pagingContainer}>
            <span className={classNames.pagingCount}>
                {totalCount >= 1 ?
                    `${totalCount} Results`
                : null}
            </span>
            {page > 1
            ? <button className={classNames.pagingPrevBtn} onClick={onPrevPage}>Prev</button>
            : <span className={classNames.pagingPrevBtn}>Prev</span>}
            {totalCount > (page * perPage) 
            ? <button className={classNames.pagingNextBtn} onClick={onNextPage}>Next</button>
            : <span className={classNames.pagingNextBtn}>Next</span>}
        </div>
    );
}
export default SearchPaging;