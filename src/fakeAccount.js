// Generate fake github account data
const fakeAccount = (term,results,cache)=>{
    let newResults = [...results];
    let username = term;
    const numbers = ['0','1','2','3','4','5','6','7','8','9'];
    let hash = Array(32).fill('0');
    hash[Math.round(Math.random()*32)] = '1';
    const gravatarUrl = 'https://www.gravatar.com/avatar/'+hash.join('')+'?d=retro&f=y'
    const usernames = results.map(item => item.login);
    while(usernames.includes(username)){
        username += numbers[Math.round(Math.random()*9)];
    }
    let account = {
        id: -1,
        login:username,
        avatar_url:gravatarUrl,
        html_url:'https://github.com/'+username,
        followers: Math.round(Math.random()*100),
        following: Math.round(Math.random()*100),
        public_repos: Math.round(Math.random()*15),
        // Rickrolled!
        bio:'Never gonna give you up',
        blog:'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        fake:true
    }
    const index = Math.round(Math.random()*results.length);
    newResults.splice(index,0,account);
    // cache the account so it doesn't request details
    cache[username] = {...account};
    return newResults;
}
export default fakeAccount;