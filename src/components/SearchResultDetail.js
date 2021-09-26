import classNames from "../styles";
function SearchResultDetail({userDetails}){
    const statsImageUrl = (login)=>{
        return `https://github-readme-stats.vercel.app/api?username=${login}`;
    }
    return (
        <div className={classNames.searchResultDetail}>
            <img
                src={userDetails.avatar_url}
                alt={userDetails.login} 
                className={classNames.searchResultDetailImage} />
            <h3 className={classNames.searchResultUsername}>{userDetails.login}</h3>
            <p className={classNames.searchResultDetailBio}>{userDetails.bio}</p>
            <dl>
                {userDetails.company &&
                    <>
                        <dt>Company</dt>
                        <dd>{userDetails.company}</dd>
                    </>
                }
                {userDetails.location && 
                    <>
                        <dt>Location</dt>
                        <dd>{userDetails.location}</dd>
                    </>
                }
                {userDetails.blog && 
                    <>
                        <dt>Blog</dt>
                        <dd>{userDetails.blog}</dd>
                    </>
                }
            </dl>
            <img 
                src={statsImageUrl(userDetails.login)} 
                alt={`GitHub Stats for ${userDetails.login}`}
                className={classNames.searchResultDetailStatsImage} />
        </div>
    );
}
export default SearchResultDetail;