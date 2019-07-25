import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            nama: ''
            // gender: ''
        }
    }

    onNamaChange = (event) => {
        this.setState({ nama: event.target.value })
    }

    onEmailChange = (event) => {
        this.setState({ email: event.target.value })
    }

    onPasswordChange = (event) => {
        this.setState({ password: event.target.value })
    }

    // onGenderChange = (event) => {
    //     this.setState({ gender: event.target.value })
    // }

    onSubmitRegister = () => {
        fetch('http://localhost:3000/register', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                nama: this.state.nama,
                // gender: this.state.gender
            })
        }).then(response => response.json())
            .then(user => {
                if (user) {
                    console.log('berhasil');
                    this.props.loadUser(user);
                    // this.props.history.push('/')
                }
            })
    }

    render() {
        return (
            <div>
                <article className="br3 ba  b--black-10 mv4 w-100 w-50-m w-25-l shadow-5 mw6 center">
                    <main className="pa4 black-80">
                        <div action="sign-up_submit" method="post" acceptCharset="utf-8">Register</div>
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <div className="mt3">
                                <label className="db fw4 lh-copy f6" htmlFor="name">Nama Lengkap</label>
                                <input
                                    onChange={this.onNamaChange}
                                    className="pa2 input-reset ba bg-transparent w-100 measure"
                                    type="text"
                                    name="name"
                                    id="name" />
                            </div>
                            <div className="mt3">
                                <label className="db fw4 lh-copy f6" htmlFor="email">Email address</label>
                                <input className="pa2 input-reset ba bg-transparent w-100 measure"
                                    onChange={this.onEmailChange}
                                    type="email"
                                    name="email-address"
                                    id="email-address" />
                            </div>
                            <div className="mt3">
                                <label className="db fw4 lh-copy f6" htmlFor="password">Password</label>
                                <input className="b pa2 input-reset ba bg-transparent"
                                    onChange={this.onPasswordChange}
                                    type="password"
                                    name="password"
                                    id="password" />
                            </div>
                            {/* <div className="mt3">
                                <label className="db fw4 lh-copy f6" htmlFor="gender">Gender</label>
                                <input className="b pa2 input-reset ba bg-transparent"
                                onChange={this.onGenderChange}
                                    type="text"
                                    name="gender"
                                    id="gender" />
                            </div> */}
                        </fieldset>
                        <div className="mt3">
                            <Link to='/login'>
                                <input
                                    onClick={this.onSubmitRegister}
                                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"
                                    type="submit"
                                    value="Register" />
                            </Link>
                        </div>
                    </main>
                </article>
            </div>
        );
    }
}
export default Register;
