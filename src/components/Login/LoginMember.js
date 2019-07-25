import React from 'react';
import { Link } from 'react-router-dom';

class LoginAhli extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: ''
        }
    }
    onEmailChange = (event) => {
        this.setState({ signInEmail: event.target.value })
    }

    onPasswordChage = (event) => {
        this.setState({ signInPassword: event.target.value })
    }

    onSubmitSignIn = () => {
        fetch('http://localhost:3000/login', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        }).then(response => response.json())
            .then(user => {
                if (user.id) {
                    this.props.loadUser(user);
                    // this.props.history.push('/login')
                } else {
                    this.props.history.push('/login');
                }
            })
    }

    render() {
        return (
            <div>
                {/* <article className="br3 ba  b--black-10 mv4 w-100 w-50-m w-25-l shadow-5 mw6 center"> */}
                    <main className="pa4 black-80">
                        <form action="sign-up_submit" method="get" acceptCharset="utf-8">Login</form>
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <div className="mt3">
                                <label className="db fw4 lh-copy f6" htmlFor="email">Email address</label>
                                <input
                                    onChange={this.onEmailChange}
                                    className="pa2 input-reset ba bg-transparent w-100 measure"
                                    type="email"
                                    name="email-address"
                                    id="email-address" />
                            </div>
                            <div className="mt3">
                                <label className="db fw4 lh-copy f6" htmlFor="password">Password</label>
                                <input
                                    onChange={this.onPasswordChage}
                                    className="b pa2 input-reset ba bg-transparent"
                                    type="password"
                                    name="password"
                                    id="password" />
                            </div>
                        </fieldset>
                        <div className="mt3">
                            <Link to='/'><input
                                onClick={this.onSubmitSignIn}
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"
                                type="submit"
                                value="Login" />
                            </Link>
                        </div>
                    </main>
                {/* </article> */}
            </div>
        )
    }
}
export default LoginAhli;