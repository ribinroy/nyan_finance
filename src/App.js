import './App.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import Home from './pages/Home';
import NavPanel from './component/NavPanel';

function App() {
    return (
        <>
            <NavPanel />
            <Router>
                <Route path='/' exact>
                    <Home />
                </Route>
            </Router>
        </>
    );
}

export default App;
