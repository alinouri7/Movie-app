import axios from 'axios'

const BASE_URL = 'https://api.themoviedb.org/3'
// const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = "Authorization : bearer  eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0M2FmZWMxNzM5NDM1ZTNlNzA5OWZkODA1N2VmYzBhMSIsInN1YiI6IjY1NjQ2NGEyN2RmZGE2NTkyZjU0NmZjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Jvq-cYH-7CWTWmcDBq4AMMHFx4DGUDegb8x0Opr9-7k "


export const fetchDataFromApi = async (url,params) =>{
    try{
      const {data} = await axios.get(BASE_URL + url, {
        headers,
        params 
      })    
     
      return data
    }catch (err){
        console.log(err);
        return err;
    }

}