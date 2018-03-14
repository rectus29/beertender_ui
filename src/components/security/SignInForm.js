import React, {Component} from 'react';
import {FormControl} from "react-bootstrap";
import FormGroup from "react-bootstrap/es/FormGroup";
import Form from "react-bootstrap/es/Form";
import Button from "react-bootstrap/es/Button";

/**
 * Created by a.bernard on 25/01/2018.
 */
class SignInForm extends React.Component {
    state = {
        redirectToReferrer: false
    };

    login(){
        userAuth.authenticate(() => {
            this.setState({ redirectToReferrer: true });
        });
    }

    render() {
        const { from } = this.props.location.state || { from: { pathname: "/" } };
        const { redirectToReferrer } = this.state;

        if (redirectToReferrer) {
            return <Redirect to={from} />;
        }
        return (
            <Form onSubmit={this.login}>
                <h2 className="card-heading">Sign In</h2>
                <FormGroup className="offset-4 col-md-4">
                    <FormControl type="email" id="email" placeholder="Email" />
                    <br/>
                    <FormControl type="password" id="password" placeholder="Password" />
                </FormGroup>
                <FormControl.Feedback />
                <Button type="submit">Log In</Button>
            </Form>
        );
    }
}
export default SignInForm