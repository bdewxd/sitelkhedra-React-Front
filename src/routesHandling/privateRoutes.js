import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoutes({ rest, children, isAuthenticated}) {
    return (
        <Route 
            {...rest}
            render={
                ({ location }) => (
                    isAuthenticated ? (
                        children
                    ) : (<Redirect 
                            to={{
                                pathname: '/login',
                                state: { from: location }
                            }}
                        />)
                )
            }
        />
    )
}
