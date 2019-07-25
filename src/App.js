import React, { Component } from 'react';
import AdminPage from './components/AdminPage/AdminPage';
import NavBar from './components/NavBar/NavBar';
import Startup from './components/Startup/Startup';
import Article from './components/Article/Article';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Chat from './components/Chat/Chat';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Indexes from './components/Indexes/Indexes';
import 'tachyons';
import './App.css';
import Informasi from './components/Informasi/Informasi';
import DaftarAhli from './components/DaftarAhli/DaftarAhli';
import Berita from './components/Berita/Berita';
import Newsletter from './components/Newsletter/Newsletter';
import HidupSehat from './components/HidupSehat/HidupSehat';
import Kalkulator from './components/Kalkulator/Kalkulator';
import EventKesehatan from './components/EventKesehatan/EventKesehatan'
import JadiAhli from './components/JadiAhli/JadiAhli';
import LoginAhli from './components/Login/LoginAhli';
import Dokumen from './components/JadiAhli/Dokumen';
import DetailEvent from './components/EventKesehatan/DetailEvent';
import DetailBerita from './components/Berita/DetailBerita';
import AhliDetail from './components/DaftarAhli/AhliDetail';
import BMI from './components/Kalkulator/BMI';



class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'login',
      isSignedIn: false,
      user: {
        id: '',
        nama: '',
        email: '',
        joined: ''
      },
      chosenArticle: {
        id: '',
        nama: '',
        deskripsi: '',
        gambar: '',
        penulis: '',
        comment: ''
      }
    }
  }

  // onSubmitComment = () => {
  //   var id = this.props.data.id;
  //   console.log(id);
  //   fetch(`http://localhost:3000/article/${id}/comment/new`, {
  //     method: 'post',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({
  //       comment: this.state.comment
  //     })
  //   }).then(response => response.json())
  //     .then(comment => {
  //       if (comment) {
  //         console.log('berhasil');
  //       }
  //     })
  // }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        nama: data.nama,
        email: data.email,
      },
      isSignedIn: true
    })
  }

  onRouteChange = () => {
    this.setState({
      isSignedIn: false
    })
  }

  render() {
    // const { isSignedIn, route } = this.state;\
    return (
      <Router>
        <div>
          <NavBar isSignedIn={this.state.isSignedIn} onRouteChange={this.state.onRouteChange} />
        </div>

        <Route exact path='/' component={Startup} />
        <Route exact path='/adminpage' component={AdminPage} />
        <Route exact path='/konsultasi' component={Chat} />
        <Route path='/register' render={(routeProps) => (<Register {...routeProps} loadUser={this.loadUser} />)} />
        <Route exact path='/registerahli' render={(routeProps) => (<JadiAhli {...routeProps} loadUser={this.loadUser} />)} />
        <Route exact path='/registerahli/dokumen' render={(routeProps) => (<Dokumen {...routeProps} loadUser={this.loadUser} />)} />

        {/* <Route exact path='/bergabung' render={(routeProps) => (<JadiAhli {...routeProps} loadUser={this.loadUser} />)} />         */}
        <Route exact path='/login' render={(routeProps) => (<Login {...routeProps} loadUser={this.loadUser}/>)} />
        {/* <Route exact path='/signout' render={(routeProps) => (<Login {...routeProps} signedOut={this.signedOut} isSignedIn={this.isSignedIn}/>)} /> */}
        <Route exact path='/loginahli' render={(routeProps) => (<LoginAhli {...routeProps} loadUser={this.loadUser} isSignedIn={this.isSignedIn} />)} />
        <Route path='/indexes' render={(routeProps) => (<Indexes {...routeProps} indexLoop={this.indexLoop} />)} />

        {/* <Route path='/login' component={Login} /> */}
        <Route exact path='/article' component={Article} />
        <Route path='/article/:id' render={(routeProps) => (<Article {...routeProps} />)} />
        <Route exact path='/informasi' component={Informasi} />
        <Route exact path='/informasi/daftarahli' component={DaftarAhli} />
        <Route exact path='/informasi/daftarahli/:id' render={(routeProps) => (<AhliDetail {...routeProps} />)} />
        <Route exact path='/informasi/berita' component={Berita} />
        <Route exact path='/informasi/berita/:id' component={DetailBerita} />
        <Route exact path='/informasi/newsletter' component={Newsletter} />

        {/* <Route path='/indexes' component={Indexes} /> */}
        <Route exact path='/hidupsehat/' component={HidupSehat} />
        <Route exact path='/hidupsehat/eventkesehatan' component={EventKesehatan} />
        <Route path='/hidupsehat/eventkesehatan/:id' component={DetailEvent} />
        <Route exact path='/hidupsehat/kalkulator' component={Kalkulator} />
        <Route exact path='/hidupsehat/kalkulator/bmi' component={BMI} />
        {/* <Route exact path='/hidupsehat/kalkulator' component={Kalkulator} /> */}

      </Router>
    );
  }
}

export default App;

// onRouteChange = (route) => {
//   if (route === 'signout') {
//     this.setState({ isSignedIn: false })
//   } else if (route === 'startup') {
//     this.setState({ isSignedIn: true });
//   }
//   this.setState({ route: route })
// }



/* { {route === 'startup'
    //   ? <div>
    //     <Startup />
    //     <Card />
    //   </div>
    //   : (
    //     route === 'login'
    //       ? <Login onRouteChange={this.onRouteChange} />
    //       : <Register onRouteChange={this.onRouteChange} />
    //   )
    // } }*/
