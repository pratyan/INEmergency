
import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/pages/About';
import Emergency from './components/pages/Emergency';
import Form from './components/pages/Form';
import Results from './components/pages/Results';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/emergency' exact component={Emergency} />
          <Route path='/form' exact component={Form} />
          <Route path='/results' exact render={(props) => <Results {...props} data={{
	"hospitals":
		{
			"hospital":
				[
					{ "id": "1001", "name": "G.B Hospital" },
					{ "id": "1002", "name": "IGM Hospital" },
					{ "id": "1003", "name": "Sarojini Naidu Hospital" },
					{ "id": "1004", "name": "Agadi Hospital and Research Centre" },
          { "id": "1003", "name": "Amit Jaggi Memorial Hospital" },
          { "id": "1003", "name": "Apex Hospitals" }
				]
		}
}} />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
