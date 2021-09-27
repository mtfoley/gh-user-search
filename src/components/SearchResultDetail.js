import { PeopleIcon, StarIcon, RepoIcon, LocationIcon } from "@primer/octicons-react";
import classNames from "../styles";
function SearchResultDetail({userDetails}){
    const statsImageUrl = (login)=>{
        return `https://github-readme-stats.vercel.app/api?username=${login}`;
    }
    return (
        <div className={classNames.searchResultDetail}>
            <p>
                <h3 className={classNames.searchResultUsername}>{userDetails.login}</h3>
                <img
                    src={userDetails.avatar_url}
                    alt={userDetails.login} 
                    className={classNames.searchResultDetailImage} />            
            </p>
            <p>
                {userDetails.name && <p className={classNames.searchResultDetailLabel}>{userDetails.name}</p>}
                {userDetails.location && <p className={classNames.searchResultDetailLabel}><LocationIcon size={16} /> {userDetails.location}</p>}
                {userDetails.bio && <p className={classNames.searchResultDetailBio}>{userDetails.bio}</p>}

            </p>
            <ul>
                <li><PeopleIcon size={16} /> {userDetails.followers} followers</li>
                <li><PeopleIcon size={16} /> {userDetails.following} following</li>
                <li><RepoIcon size={16} /> {userDetails.public_repos || "0"}</li>
            </ul>
        </div>
    );
}
export default SearchResultDetail;