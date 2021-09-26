import { Suspense } from "react";
import { Route, Switch } from 'react-router-dom';
import { lazy } from "react";
import Home from "../Home/home.js";
import Profile from "../profile/profile.js";

const routes = [
    {
      path: '',
      component: Home,
      exact: true
    },
    {
      path: 'profile',
      component: Profile,
      exact: true
    }
  ];


export default function ProtectedRoutes() {
    return (
        <Switch>
            <Suspense /*fallback={what to render meanwhile better be loader componenet}*/>
                {routes.map(({component: Component, path, exact})=>{
                    return (<Route path={`/${path}`} key={path} exact={exact}>
                        <Component />
                    </Route>)
                })}
            </Suspense>
        </Switch>
    )
}
