import Row from './Row';
import './App.css';
import requests from './requests'
import Banner from './Banner'
import Nav from './Nav'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>     
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true} / >
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} / >
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} / >
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} / > 
 
    </div>
  );
}

export default App;
