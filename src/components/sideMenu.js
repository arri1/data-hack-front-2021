import styled from 'styled-components'
import {Menu, Popconfirm} from 'antd'
import {useHistory} from 'react-router-dom'

const Container = styled.div`
  display: flex;
  height: 100%;
`

const SideMenu = () => {
    const history=useHistory()
    const onExit = ()=>{
        localStorage.setItem('logged',false)
        history.replace('/login')
    }

    return (
        <Container>
            <Menu
                theme="dark"
            >
                <Menu.Item
                    key={1}
                >
                    Дашбоард
                </Menu.Item>
                <Menu.Item
                    key={2}
                >
                    Таблица
                </Menu.Item>
                <Popconfirm>
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
