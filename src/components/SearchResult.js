import classNames from "../styles";
function SearchResult({result,getUserDetails}){
    return (
        <div className={classNames.searchResult}
            onClick={(event)=>{
            event.preventDefault();
            getUserDetails(result.login);
        }} >
            <img className={classNames.searchResultImage} src={result.avatar_url} alt={"user "+result.login} />
            <div className={classNames.searchResultName}>{result.login}</div>
        </div>
    );
}
export default SearchResult;