import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const NavBar = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
        return (
            <nav className="pa2 pa1-ns">
                <Link to='/'><p className="link dim black b f6 f5-ns dib mr3 pointer"
                    // onClick={() => onRouteChange('startup')}
                    title="Logo">YOURHEALTH</p></Link>
                <Link to='/konsultasi'><p className="link dim gray f6 f5-ns dib mr3 pointer" title="Konsultasi">KONSULTASI</p></Link>
                <Link to='/indexes'><p className="link dim gray f6 f5-ns dib mr3 pointer" title="Index">INDEX A - Z</p></Link>
                <Link to='/hidupsehat'><p className="link dim gray f6 f5-ns dib mr3 pointer" title="Hidup Sehat">HIDUP SEHAT</p></Link>
                <Link to='/informasi'><p className="link dim gray f6 f5-ns dib mr3 pointer" title="Informasi">INFORMASI</p></Link>
                <Link to='/registerahli'><p className="link dim gray f6 f5-ns dib mr3 pointer green" title="registerahli">BERGABUNG SEBAGAI AHLI</p></Link>
                <Link to='/login'>
                    <p  onClick={<NavBar />}
                        className="link dim gray f6 f5-ns dib pa1 br3 ba mr3 fr pointer"
                        title="Sign Out">
                        SIGN OUT
                    </p>
                </Link>
            </nav>
        )
    } else {
        return (
            <nav className="pa2 pa1-ns">
                <Link to='/'><p className="link dim black b f6 f5-ns dib mr3 pointer"
                    // onClick={() => onRouteChange('startup')}
                    title="Logo">YOURHEALTH</p></Link>
                <Link to='/konsultasi'><p className="link dim gray f6 f5-ns dib mr3 pointer" title="Konsultasi">KONSULTASI</p></Link>
                <Link to='/indexes'><p className="link dim gray f6 f5-ns dib mr3 pointer" title="Index">INDEX A - Z</p></Link>
                <Link to='/hidupsehat'><p className="link dim gray f6 f5-ns dib mr3 pointer" title="Hidup Sehat">HIDUP SEHAT</p></Link>
                <Link to='/informasi'><p className="link dim gray f6 f5-ns dib mr3 pointer" title="Informasi">INFORMASI</p></Link>
                <Link to='/registerahli'><p className="link dim gray f6 f5-ns dib mr3 pointer green" title="registerahli">BERGABUNG SEBAGAI AHLI</p></Link>
                <Link to='/login'>
                    <p className="link dim gray f6 f5-ns dib pa1 br3 ba mr3 fr pointer"
                        title="Login">LOGIN</p>
                </Link>
                <Link to='/register'>
                    <p className="link dim gray f6 f5-ns dib pa1 br3 ba mr3 fr pointer"
                        title="Register">REGISTER</p>
                </Link>
            </nav>
        )
    }
}

export default NavBar;

// const navStyle = {
    //     color: 'white'
    // }
    // if (isSignedIn) {
    //     return (
    //         <nav className="pa2 pa1-ns">
    //             <p className="link dim black b f6 f5-ns dib mr3"
    //                 // onClick={() => onRouteChange('startup')}
    //                 title="Logo">YOURHEALTH</p>
    //             <p className="link dim gray f6 f5-ns dib mr3 pointer" title="Konsultasi">KONSULTASI</p>
    //             <p className="link dim gray f6 f5-ns dib mr3 pointer" title="Index">INDEX A - Z</p>
    //             <p className="link dim gray f6 f5-ns dib mr3 pointer" title="Informasi">INFORMASI</p>
    //             <p className="link dim gray f6 f5-ns dib mr3 pointer" title="Newsletter">NEWSLETTER</p>
    //             <p className="link dim gray f6 f5-ns dib pa1 br3 ba mr3 fr pointer"
    //                 title="Signup">Signout</p>
    //             {/* <p className="link dim gray f6 f5-ns dib pa1 br3 ba mr3 fr pointer"
    //                 onClick={() => onRouteChange('signout')}
    //                 title="Signup">Signout</p> */}

    //         </nav>
    //     )
    // } else {