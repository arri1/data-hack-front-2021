import 'antd/dist/antd.css'
import {useEffect, useState} from 'react'
import styled from 'styled-components'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import Login from './pages/login'
import Main from './containers/main'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const App = () => {
    const [logged, setLogged] = useState(undefined)

    useEffect(() => {
        const key = localStorage.getItem('logged')

        setLogged(!!key)
    }, [])

    if (logged===undefined)
        return null

    return (
        <BrowserRouter>
            <Container>
                <Switch>
                    <Route
                        exact
                        path={'/login'}
                        component={
                            (props) => {
                                return (
                                    <Login {...props} setLogged={setLogged}/>
                                )
                            }
                        }
                    />
                    {
                        !logged ?
                            <Redirect
                                to={'/login'}
                            />
                            :
                            null
                    }

                    <Route
                        path={'/'}
                        component={Main}
                    />
                </Switch>
            </Container>

        </BrowserRouter>
    );
}

export default App;
