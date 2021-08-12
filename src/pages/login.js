import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex:1;
`

const Box = styled.div`
  display: flex;
  border-radius: 10px;
  min-height: 200px;
  min-width: 200px;
  border: 0.5px solid gray;
  flex-direction: column;
`

const Login = () => {
    return (
        <Container>
            <Box/>
        </Container>
    )

}
export default Login
