import { Suspense, lazy } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
  
const AppRouter = () => {
    const HomeView = lazy(() => import('../views/Home/Home'))
    const ErrorView = lazy(() => import('../views/Error/Error'))
    const PostInfoView = lazy(() => import('../views/PostInfo/PostInfo'))

    return (
        <Router>
          <Switch>
            <Route path="/">
                <Suspense>
                    <HomeView/>
                </Suspense>
            </Route>

            <Route exact path="/PostCard/:id">
              <Suspense>
                <PostInfoView/>
              </Suspense>
            </Route>

            <Route exact path="/404">
                <Suspense>
                    <ErrorView />
                </Suspense>                
            </Route>
            
            <Route path="*">
              <Redirect to="/404" />
            </Route>

          </Switch>
        </Router>  
    )
}

export default AppRouter