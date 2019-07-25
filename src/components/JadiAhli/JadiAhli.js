import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Header from './Header';
import { Link } from 'react-router-dom';

const spesialisasi = [
    'THT', 'Umum', 'Gigi'
]

const kota = [
    'Medan', 'Jakarta', 'Bandung', 'Jawa Barat'
]

// const kotaOptions = kota[0];
// const spesialisasiOptions = spesialisasi[0];

class JadiAhli extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            nama: '',
            password: '',
            spesialis: '',
            kota_praktik: '',
            no_hp: '',
        }
    }

    onEmailChange = (event) => {
        this.setState({ email: event.target.value })
        console.log({ email: event.target.value })
    }

    onNamaChange = (event) => {
        this.setState({ nama: event.target.value })
        console.log({ nama: event.target.value })
    }

    onPasswordChange = (event) => {
        this.setState({ password: event.target.value })
        console.log({ password: event.target.value })
    }

    onSpesialisChange = (event) => {
        this.setState({ spesialis: event.value })
        console.log({ spesialis: event.value })
    }

    onNoHpChange = (event) => {
        this.setState({ no_hp: event.target.value })
        console.log({ no_hp: event.target.value })
    }

    onKotaChange = (event) => {
        this.setState({ kota_praktik: event.value })
        console.log({ kota_praktik: event.value })
    }

    onRegister = () => {
        fetch('http://localhost:3000/registerahli', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: this.state.email,
                nama: this.state.nama,
                password: this.state.password,
                spesialis: this.state.spesialis,
                no_hp: this.state.no_hp,
                kota_praktik: this.state.kota_praktik
            })
        }).then(response => response.json())
            .then(user => {
                if (user) {
                    console.log('berhasil');
                    this.props.loadUser(user);
                    this.props.history.push('/registerahli/dokumen/');
                    // this.props.history.push('/')
                    console.log(user.id);
                }
            })
    }

    render() {
        return (
            <div>
                <Header />
                <article class="pa4 black-80">
                    <div action="sign-up_submit" method="get" accept-charset="utf-8">
                        <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
                            <legend class="ph0 mh0 fw6 clip">Sign Up</legend>
                            <div class="mt3">
                                <label class="db fw4 lh-copy f6" htmlFor="email-address">Nama</label>
                                <input class="pa2 input-reset ba bg-transparent w-100 measure"
                                    onChange={this.onNamaChange}
                                    type="text"
                                    name="nama"
                                    id="nama" />
                            </div>
                            <div class="mt3">
                                <label class="db fw4 lh-copy f6" htmlFor="email-address">Email address</label>
                                <input class="pa2 input-reset ba bg-transparent w-100 measure"
                                    onChange={this.onEmailChange}
                                    type="email"
                                    name="email-address"
                                    id="email-address" />
                            </div>
                            <div class="mt3">
                                <label class="db fw4 lh-copy f6" htmlFor="spesialisasi">Spesialisasi</label>
                                <Dropdown options={spesialisasi}
                                    className="w-30"
                                    value={this.state.spesialis}
                                    onChange={this.onSpesialisChange}
                                    placeholder="Pilih Salah Satu"
                                    name="spesialis"
                                    id="spesialis" />
                            </div>
                            <div class="mt3">
                                <label class="db fw4 lh-copy f6" htmlFor="kota praktik">Kota Praktik</label>
                                <Dropdown 
                                    options={kota}
                                    className="w-30"
                                    value={this.state.kota_praktik}
                                    onChange={this.onKotaChange}
                                    placeholder="Pilih Salah Satu"
                                    name="kota_praktik"
                                    id="kota_praktik" />
                            </div>
                            <div class="mt3">
                                <label class="db fw4 lh-copy f6" htmlFor="email-address">No hp</label>
                                <input class="pa2 input-reset ba bg-transparent w-100 measure"
                                    onChange={this.onNoHpChange}
                                    type="text"
                                    name="no_hp"
                                    id="no_hp" />
                            </div>
                            <div class="mt3">
                                <label class="db fw4 lh-copy f6" htmlFor="email-address">Password</label>
                                <input class="pa2 input-reset ba bg-transparent w-100 measure"
                                    onChange={this.onPasswordChange}
                                    type="password"
                                    name="password"
                                    id="password" />
                            </div>
                            <div className="mt3">
                                <input
                                    onClick={this.onRegister}
                                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"
                                    type="submit"
                                    value="Register" />
                            </div>
                        </fieldset>
                    </div>
                </article>
            </div>
        )
    }
}

export default JadiAhli;

// className = "b pa2 input-reset ba bg-transparent"