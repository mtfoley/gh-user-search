function SearchResult({result}){
    return (
        <div className="">
            <img className="" src={result.avatar_url} alt={"user "+result.login} />
            <span className="">{result.name}</span>
            <a href={result.html_url} rel="noreferrer">{result.html_url}</a>
        </div>
    );
}
export default SearchResult;