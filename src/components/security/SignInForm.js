import React, {Component} from 'react';
import {Button, Form, FormGroup, Input} from "reactstrap";

/**
 * Created by a.bernard on 25/01/2018.
 */
class SignInForm extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <Form>
                <h2 className="card-heading">Sign In</h2>
                <FormGroup className="offset-4 col-md-4">
                    <Input type="text" name="login" id="login" placeholder="E-Mail" />
                    <br/>
                    <Input type="password" name="password" id="password" placeholder="PassWord" />
                </FormGroup>
                <Button type="submit">Log In</Button>
            </Form>
        );
    }
}
export default SignInForm