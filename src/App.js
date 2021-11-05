
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Upload from './pages/Upload/Upload';

import './App.scss';


const App = () => {

  return (
    <div className="App">
      <Header />
      <BrowserRouter>
  {/* // content below is be outside of header */}
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/videos/:videoId" component={Home} />
            <Route path="/upload" exact component={Upload} />
          </Switch>
      </BrowserRouter>
    </div>
)
}
  // handleVidSelect = (id) => {
  //   this.setState({
  //     selectedVid: vidDetArr.find((vid) => vid.id === id)
  //   })
  // };

  // render () {
  //   document.title = "Robert So Brainflix";
  //   // filter out the video selected
  //   const nextVidFilterArr = vidArr.filter((video)=> video.id !==  this.state.selectedVid.id)
    
    


export default App;