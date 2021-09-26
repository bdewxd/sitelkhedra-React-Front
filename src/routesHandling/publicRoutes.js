import { Route, Redirect } from 'react-router-dom';

export default function PublicRoutes({rest, children, isAuthenticated}) {
    return (
        <Route
            {...rest}
            render={
                ({ location }) => (
                  isAuthenticated
                    ? (
                      children
                    ) : (
                      <Redirect
                        to={{
                          pathname: '/login',
                          state: { from: location }
                        }}
                      />
                    ))
              }
        />
    )
}
