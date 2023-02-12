import {
    BrowserRouter as Router,
    Route,
    Routes
  } from "react-router-dom";

import ErrorView from '../views/Error/Error';
import Home from '../views/Home/Home';
import PostInfo from '../views/PostInfo/PostInfo';
  
const AppRouter = () => {

    return (
        <Router>
          <Routes>
            <Route exact path="/" element={<Home/>}/>

            <Route path="/PostCard/:id" element={<PostInfo/>}/>

            <Route path="/404" element={<ErrorView/>}/>

            <Route path="*" element={<ErrorView/>}/>

          </Routes>
        </Router>  
    )
}

export default AppRouter