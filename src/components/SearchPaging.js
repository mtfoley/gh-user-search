function SearchPaging({page,perPage,totalCount,onNextPage,onPrevPage}){
    return (
        <div className="">
            <span className="">
                {page > 1 ?
                    <button className="" onClick={onPrevPage}>Prev</button>
                : null}
            </span>
            <span className="">
                {totalCount > perPage ?
                    <button className="" onClick={onNextPage}>Next</button>
                : null}
            </span>
        </div>
    );
}
export default SearchPaging;