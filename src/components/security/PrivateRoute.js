import React, {Component} from 'react';
import Route from "react-router-dom/es/Route";
import Redirect from "react-router-dom/es/Redirect";

class PrivateRoute extends React.Component {
    render(props, ...rest) {
        return (
            <Route
                {...rest}
                render={props =>
                    props.user.isAuthenticated ? (
                        <Component {...props} />
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: {from: props.location}
                            }}
                        />
                    )
                }
            />
        )
    }
};
export default PrivateRoute