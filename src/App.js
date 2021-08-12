import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Login from './pages/login'
import Main from './pages/main'

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route
                    exact
                    path={'/login'}
                    component={Login}
                />
                <Route
                    exact
                    path={'/'}
                    component={Main}
                />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
