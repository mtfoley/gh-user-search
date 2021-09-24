import React,{useState} from 'react';
import SearchForm from './components/SearchForm';
import SearchResultList from './components/SearchResultList';
import SearchPaging from './components/SearchPaging';
function App() {
  const perPage = 20;
  const [search,setSearch] = useState("");
  const [results,setResults] = useState({items:[],total_count:0});
  const [page,setPage] = useState(1);
  const runSearch = (value,newPage) => {
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
      setResults(data)
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
        search={search} 
        items={results.items} />
    </div>
  );
}

export default App;
