import { Suspense, lazy } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";

import ErrorView from '../views/Error/Error';
import Home from '../views/Home/Home';
import PostInfo from '../views/PostInfo/PostInfo';

  
const AppRouter = () => {
    // const HomeView = lazy(() => import('../views/Home/Home'))
    // const ErrorView = lazy(() => import('../views/Error/Error'))
    // const PostInfoView = lazy(() => import('../views/PostInfo/PostInfo'))

    return (
        <Router>
          <Switch>
            <Route exact path="/" component={Home}>
                {/* <Suspense>
                    <HomeView/>
                </Suspense> */}
            </Route>

            <Route path="/PostCard/:id" component={PostInfo}>
              {/* <Suspense>
                <PostInfoView/>
              </Suspense> */}
            </Route>

            <Route path="/404" component={ErrorView}>
                {/* <Suspense>
                    <ErrorView />
                </Suspense>                 */}
            </Route>
            
            <Route path="*">
              <Redirect to="/404" />
            </Route>

          </Switch>
        </Router>  
    )
}

export default AppRouter