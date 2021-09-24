import React,{useState} from 'react';
import SearchForm from './components/SearchForm';
import SearchResultList from './components/SearchResultList';

function App() {
  const [search,setSearch] = useState("");
  const [results,setResults] = useState({items:[]});

  const runSearch = (value) => {
    if(value.trim() === "") return;
    setSearch(value);
    let url = 'https://api.github.com/search/users';
    url += '?q='+encodeURIComponent(value);
    fetch(url,{
      method:'GET',
      mode:'cors',
      headers:{
        'Accept':'application/vnd.github.v3+json',
      }
    })
    .then(res => res.json())
    .then(data =>  setResults(data));
  };

  return (
    <div className="App">
      <SearchForm onSubmit={runSearch}></SearchForm>
      <SearchResultList search={search} items={results.items}></SearchResultList>
    </div>
  );
}

export default App;
