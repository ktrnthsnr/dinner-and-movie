import React from 'react';
import Header from './components/Header';
// import LandHeader from './components/LandHeader';
import Footer from './components/Footer';
import Home from './pages/Home';
import Navbar from './components/Navbar';

// create the Apollo Provider  // these two libraries will import statements
  import { ApolloProvider } from '@apollo/react-hooks';
  import ApolloClient from 'apollo-boost';

// // importing landing page 
  // import CarouselLanding from './pages/CarouselLanding';

// React Router gives the single-page the multi-page feel
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//  adding the other pages which will have React routes
import Login from './pages/Login';
// import LandFirst from './pages/LandFirst';
import NoMatch from './pages/NoMatch';
import SingleThought from './pages/SingleThought';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
// import searchFood from './pages/searchFood';
// import searchMovie from './pages/searchMovie';


//  instruct Apollo instance to retrieve token every time a GraphQL request is make
const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  },
  uri: '/graphql'
});



//  App function
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>   
        <Navbar />
        <div className="flex-column justify-flex-start min-100-vh">
          {/* <LandHeader /> */}
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              {/* <Route exact path="/landing" component={LandFirst} /> */}
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/thought" component={SingleThought} />
              <Route exact path="/profile/:username?" component={Profile} />
              <Route exact path="/thought/:id" component={SingleThought} />
              {/* <Route exact path="/profile/:username?" component={searchMovie} />
              <Route exact path="/profile/:username?" component={searchFood} /> */}
              <Route component={NoMatch} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}


  

export default App;
