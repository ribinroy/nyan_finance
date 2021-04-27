import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import NavPanel from './component/NavPanel';

function App() {
    return (
        <>
            <Router>
                <NavPanel />
                <Switch>
                    <Route path='/' exact>
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;
