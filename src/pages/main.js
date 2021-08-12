import styled from 'styled-components'
import SideMenu from '../components/sideMenu'

const Container = styled.div`
  display: flex;
  flex:1;
`

const Main = ()=>{
    return(
        <Container>
            <SideMenu/>
            <div></div>
        </Container>
    )
}

export default Main
