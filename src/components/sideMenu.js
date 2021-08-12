import styled from 'styled-components'
import {Menu, Popconfirm} from 'antd'
import {useHistory,useLocation} from 'react-router-dom'

const Container = styled.div`
  display: flex;
  height: 100%;
`

const SideMenu = () => {
    const history=useHistory()
    const location = useLocation()
    const onExit = ()=>{
        localStorage.setItem('logged',false)
        history.replace('/login')
    }
    return (
        <Container>
            <Menu
                theme="dark"
                defaultSelectedKeys={[location.pathname]}
            >
                <Menu.Item
                    key={'/'}
                    onClick={()=>{
                        history.push('/')
                    }}
                >
                    Главная
                </Menu.Item>
                <Menu.Item
                    key={'/statistic'}
                    onClick={()=>{
                        history.push('/statistic')
                    }}
                >
                    Статистика
                </Menu.Item>
                <Popconfirm
                    title="Уверены?"
                    onConfirm={onExit}
                >
                    <Menu.Item
                        key={3}
                    >
                        Выход
                    </Menu.Item>
                </Popconfirm>
            </Menu>
        </Container>
    )
}

export default SideMenu
