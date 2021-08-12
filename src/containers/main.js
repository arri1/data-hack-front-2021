import styled from 'styled-components'
import {Route, Switch} from 'react-router-dom'
import SideMenu from '../components/sideMenu'
import TablePage from '../pages/tablePage'
import Statistic from '../pages/statistic'

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
                <Route
                    path={'/statistic'}
                    component={Statistic}
                />
            </Switch>
        </Container>
    )
}

export default Main
