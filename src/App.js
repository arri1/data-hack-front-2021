import styled from 'styled-components'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './pages/login'
import Main from './pages/main'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

const App = () => {
    return (
        <Container>
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
        </Container>
    );
}

export default App;
