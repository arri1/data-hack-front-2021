import styled from 'styled-components'
import {Statistic as AntStatistic} from 'antd'

const Container = styled.div`
  display: flex;
  flex: 1;
`


const Statistic = ()=>{
    return (
        <Container>
            <AntStatistic/>
        </Container>
    )
}
export default Statistic
