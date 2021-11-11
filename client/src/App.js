import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Upload from './pages/Upload/Upload';
import './App.scss';

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/videos/:videoId" component={Home} />
            <Route path="/upload" exact component={Upload} />
          </Switch>
      </BrowserRouter>
    </div>
)
}

export default App;