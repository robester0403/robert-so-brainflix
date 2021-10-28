import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Comments from './components/Comments/Comments';
import Next from './components/Next/Next';
import videodetails from './data/videodetails.json';
import logo from './logo.svg';
import './App.scss';



function App() {
  document.title = "Robert So Brainflix";

  return (
    <>
    <div className="App">
      <Header />
      {/* <Hero /> */}
      <Main />
      <Comments />
      <Next /> 
    </div>
    </>
  );
}

export default App;
