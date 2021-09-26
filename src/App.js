import React,{useState} from 'react';
import SearchForm from './components/SearchForm';
import SearchResultList from './components/SearchResultList';
import SearchPaging from './components/SearchPaging';
let userDetailsCache = {};
function App() {
  const perPage = 20;
  const [search,setSearch] = useState("");
  const [results,setResults] = useState({items:[],total_count:0});
  const [page,setPage] = useState(1);
  const [userDetails,setUserDetails] = useState(null);
  const runSearch = (value,newPage) => {
    if(value.trim() === "") return;
    if(isNaN(newPage)) newPage = 1;
    let url = 'https://api.github.com/search/users';
    url += '?q='+encodeURIComponent(value)
        + '&per_page='+perPage
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
      setSearch(value);
      setPage(newPage);
      setResults(data);
      setUserDetails(null);
    });
  };
  const getUserDetails = (login)=>{
    console.log(`Cache Keys: ${Object.keys(userDetailsCache).join(',')}`)
    if(login === null){
      setUserDetails(null);
      return;
    }
    if(userDetailsCache[login]){
      setUserDetails(login);
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
    });
  };
  const onNextPage = ()=>{
    runSearch(search,page+1);
  }
  const onPrevPage = ()=>{
    runSearch(search,page-1);
  }
  return (
    <div className="App">
      <SearchForm onSubmit={runSearch} />
      <SearchPaging
        onNextPage={onNextPage} 
        onPrevPage={onPrevPage} 
        page={page}  
        perPage={perPage} 
        totalCount={results.total_count} />
      <SearchResultList
        userDetails={userDetails}
        getUserDetails={getUserDetails} 
        search={search} 
        items={results.items} />
    </div>
  );
}

export default App;
