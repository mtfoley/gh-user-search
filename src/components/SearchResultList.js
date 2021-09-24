import SearchResult from "./SearchResult";
function SearchResultList({items}){
    return (
        <div className="">
            { items.map( result=> {
                return <SearchResult result={result} key={result.id} />
            })}
        </div>
    );
}
export default SearchResultList;