import styled from 'styled-components'
import SideMenu from '../components/sideMenu'
import {Route, Switch} from 'react-router-dom'
import TablePage from '../pages/tablePage'

const Container = styled.div`
  display: flex;
  flex: 1;
`

const Main = () => {
    return (
        <Container>
            <SideMenu/>
            <Switch>
                <Route
                    exact
                    path={'/'}
                    component={TablePage}
                />
            </Switch>
        </Container>
    )
}

export default Main
