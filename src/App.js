import {useEffect } from 'react';
import './App.css';
import {BrowserRouter, Route , Routes} from "react-router-dom"
  
import {fetchDataFromApi} from './utils/api'
import { getApiConfiguration , getGenres } from './utils/store/homeSlice';
import { useDispatch } from 'react-redux';

import {Footer, Header} from './components/index'
import {Home,  Details, Explore, PageNotFound, SearchResult} from '../src/pages/index'

function App() {

  const dispatch = useDispatch()
    
     

  useEffect(()=>{
    fetchApiConfig()
    genresCall()
  },[])
 const fetchApiConfig = ()=>{
  fetchDataFromApi('/configuration')
    .then((res)=> {
       const url ={
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
       }
      dispatch(getApiConfiguration(url))
    })
 }

 const genresCall = async()=>{
  let promises = []
  let endPoints = ["tv", "movie"]
  let allGenres = {}
  endPoints.forEach((url)=> {
    promises.push(fetchDataFromApi(`/genre/${url}/list`))
  })
    
    const data = await Promise.all(promises)
     
          data.map(({genres})=> {
              return genres.map((item)=> allGenres[item.id] = item) 
          })

    dispatch(getGenres(allGenres))
 }
 

  return (
    <div className="App">
     <BrowserRouter>
     <Header />
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/:mediaType/:id' element={<Details />} />
         <Route path='/search/:query' element={<SearchResult />} />
         <Route path='/explore/:mediaType' element={<Explore />} />
         <Route path='*' element={<PageNotFound />} />
      </Routes>
     <Footer />
     </BrowserRouter>
    </div>
  );
}

export default App;
