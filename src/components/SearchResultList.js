import SearchResult from "./SearchResult";
import SearchResultDetail from "./SearchResultDetail";
import classNames from "../styles";
function SearchResultList({items,userDetails,getUserDetails,error}){
    return (
        <div className={classNames.searchResultList}>
            {error && <p className={classNames.errorMessage}>{error}</p>}
            {error === null && userDetails === null
            && <div className={classNames.resultsGrid}>
                { items.map( result=> {
                    return <SearchResult result={result} key={result.id} getUserDetails={getUserDetails} />
                })}
            </div>} 
            {error === null && userDetails && <SearchResultDetail userDetails={userDetails} />}
        </div>
    );
}
export default SearchResultList;