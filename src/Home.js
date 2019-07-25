import React from 'react';
import Navbar from './components/NavBar/NavBar';
import Startup from './components/Startup/Startup';
import Card from './components/Card/Card';
import { Switch, Route } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Navbar />
        </div>
    )
}


// <main>
//     <Switch>
//         <Route exact path='/' component={Home} />
//         <Route path='/login' component={Home} />
//         <Route path='/register' component={Home} />
//     </Switch>
// </main>


export default Home;