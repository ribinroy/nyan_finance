import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import ActivePools from './pages/ActivePools';
import CreatePool from './pages/CreatePool';
import FundOverview from './pages/FundOverview';
import Governance from './pages/Governance';
import IndexFunds from './pages/IndexFunds';
import PoolIndexInfo from './pages/PoolIndexInfo';
import NyanOTCSwap from './pages/NyanOTCSwap';
import NavPanel from './component/NavPanel';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
    useEffect(() => {
        AOS.init({
            // initialise with other settings
            duration: 2000,
        });
    }, []);

    return (
        <>
            <Router>
                <NavPanel />
                <Switch>
                    <Route path='/' exact>
                        <Home />
                    </Route>
                    <Route path='/fund-overview'>
                        <FundOverview />
                    </Route>
                    <Route path='/active-pools'>
                        <ActivePools />
                    </Route>
                    <Route path='/create-a-pool'>
                        <CreatePool />
                    </Route>
                    <Route path='/governance'>
                        <Governance />
                    </Route>
                    <Route path='/passive-pools'>
                        <IndexFunds />
                    </Route>
                    <Route path='/otc-swap'>
                        <NyanOTCSwap />
                    </Route>
                    <Route path='/active-pool-info'>
                        <PoolIndexInfo type='active' />
                    </Route>
                    <Route path='/index-fund-info'>
                        <PoolIndexInfo type='passive' />
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;
