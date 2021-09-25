import SearchResult from "./SearchResult";
import classNames from "../styles";
function SearchResultList({items}){
    return (
        <div className={classNames.resultsGrid}>
            { items.map( result=> {
                return <SearchResult result={result} key={result.id} />
            })}
        </div>
    );
}
export default SearchResultList;