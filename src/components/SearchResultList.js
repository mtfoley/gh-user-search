import SearchResult from "./SearchResult";
import SearchResultDetail from "./SearchResultDetail";
import classNames from "../styles";
function SearchResultList({items,userDetails,getUserDetails}){
    return (
        <div className={classNames.searchResultList}>
            {userDetails == null
            ? <div className={classNames.resultsGrid}>
                { items.map( result=> {
                    return <SearchResult result={result} key={result.id} getUserDetails={getUserDetails} />
                })}
            </div> 
            : 
            <SearchResultDetail userDetails={userDetails} />
            }
        </div>
    );
}
export default SearchResultList;