import React,{useState} from 'react';
import SearchControls from './components/SearchControls';
import SearchResultList from './components/SearchResultList';
import SearchResultDetail from './components/SearchResultDetail';
import fakeAccount from './fakeAccount';
let userDetailsCache = {};

function App() {
  const perPage = 20;
  const [search,setSearch] = useState("");
  const [results,setResults] = useState({items:[],total_count:0});
  const [page,setPage] = useState(1);
  const [userDetails,setUserDetails] = useState(null);
  const [error,setError] = useState(null);
  const runSearch = (value,newPage) => {
    if(value.trim() === "") return;
    if(isNaN(newPage)) newPage = 1;
    let url = 'https://api.github.com/search/users';
    url += '?q='+encodeURIComponent(`${value} in:login`)
        + '&per_page='+(perPage-1)
        + '&page='+newPage;
    fetch(url,{
      method:'GET',
      mode:'cors',
      headers:{
        'Accept':'application/vnd.github.v3+json',
      }
    })
    .then(res => res.json())
    .then(data =>  {
      data.items = fakeAccount(value,data.items,userDetailsCache)
      setSearch(value);
      setPage(newPage);
      setResults(data);
      setUserDetails(null);
    })
    .catch(error => {
      setError(error);
    });
  };
  const getUserDetails = (login)=>{
    console.log(`Cache Keys: ${Object.keys(userDetailsCache).join(',')}`)
    if(login === null){
      setUserDetails(null);
      return;
    }
    if(userDetailsCache[login]){
      setUserDetails(userDetailsCache[login]);
      return;
    }
    fetch('https://api.github.com/users/'+login,{
      method:'GET',
      mode:'cors',
      headers:{
        'Accept':'application/vnd.github.v3+json',
      }
    })
    .then(res => res.json())
    .then(data => {
      userDetailsCache[login] = data;
      setUserDetails(data);
    })
    .catch(error => {
      setError(error);
    });
  };
  const onNextPage = ()=>{
    if(userDetails === null) runSearch(search,page+1);
  }
  const onPrevPage = ()=>{
    if(userDetails === null) runSearch(search,page-1);
  }
  return (
    <div className="App bg-purple-50 h-screen">
      <SearchControls 
        onSubmit={runSearch} 
        onNextPage={onNextPage} 
        onPrevPage={onPrevPage} 
        userDetails={userDetails}
        getUserDetails={getUserDetails}
        page={page}  
        perPage={perPage} 
        totalCount={results.total_count} />
      {userDetails === null && <SearchResultList
        error={error}
        userDetails={userDetails}
        getUserDetails={getUserDetails} 
        search={search} 
        items={results.items} /> }
      {error === null && userDetails && <SearchResultDetail userDetails={userDetails} getUserDetails={getUserDetails} />}

    </div>
  );
}

export default App;
