import { PeopleIcon, PersonIcon, RepoIcon, LocationIcon, LinkExternalIcon, MarkGithubIcon } from "@primer/octicons-react";
import classNames from "../styles";
function SearchResultDetail({userDetails}){
    return (
        <div className={classNames.searchResultDetail}>
            <img
                src={userDetails.avatar_url}
                alt={userDetails.login} 
                className={classNames.searchResultDetailImage} />   
            <div className={classNames.searchResultDetailData}>
                <span className={classNames.searchResultUsername}>
                    <PersonIcon size={16} /> {userDetails.login}
                </span>
                {userDetails.name && <p className={classNames.searchResultDetailLabel}>{userDetails.name}</p>}
                {userDetails.bio && <p className={classNames.searchResultDetailBio}>{userDetails.bio}</p>}
                
                <ul className="text-gray-700">
                    {userDetails.location && <li><LocationIcon size={16} /> {userDetails.location}</li>}    
                    <li><PeopleIcon size={16} /> {userDetails.followers} followers</li>
                    <li><PeopleIcon size={16} /> {userDetails.following} following</li>
                    <li><RepoIcon size={16} /> {userDetails.public_repos || "0"} public repos</li>
                    <li><MarkGithubIcon size={16} /> <a href={userDetails.html_url} rel="noreferrer" target="_blank">GitHub Profile</a></li>
                    {userDetails.blog && <li><LinkExternalIcon size={16} /> <a href={userDetails.blog} rel="noreferrer" target="_blank">Website</a></li>}    
                    {userDetails.twitter_username && <li><LinkExternalIcon size={16} /> <a href={"https://twitter.com/"+userDetails.twitter_username}>@{userDetails.twitter_username}</a></li>}    
                </ul>
            </div>
        </div>
    );
}
export default SearchResultDetail;