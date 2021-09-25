import classNames from "../styles";
function SearchResult({result}){
    return (
        <a href={result.html_url} target="_blank" rel="noreferrer">
            <div className={classNames.searchResult}>
                <img className={classNames.searchResultImage} src={result.avatar_url} alt={"user "+result.login} />
                <div className={classNames.searchResultName}>{result.login}</div>
            </div>
        </a>
    );
}
export default SearchResult;