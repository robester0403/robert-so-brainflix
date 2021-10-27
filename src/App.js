import Header from './components/Header/Header';
import logo from './logo.svg';
import './App.scss';

function App() {
  document.title = "Robert So Brainflix";

  return (
    <>
    <div className="App">
      <Header />
      {/* <Hero />
      <Main />
      <Comments />
      <Next /> */}
    </div>
    </>
  );
}

export default App;
