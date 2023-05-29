import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import { CandidatCountsContextComponent } from './CandidateCountsContext';
import Layout from './Layout';
import Home from './Home';
import AddCandidate from './AddCandidate';
import Pending from './Pending';
import Confirmed from './Confirmed';
import Declined from './Declined';
import ViewDetails from './ViewDetails';

class App extends React.Component {



  render() {
    return <>
      <CandidatCountsContextComponent>
        <Layout>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/addcandidate' element={<AddCandidate />} />
            <Route exact path='/pending' element={<Pending />} />
            <Route exact path='/confirmed' element={<Confirmed />} />
            <Route exact path='/declined' element={<Declined />} />
            <Route exact path='/viewdetails/:id' element={< ViewDetails />} />
          </Routes>
        </Layout>
      </CandidatCountsContextComponent>
    </>
  }
};

export default App;