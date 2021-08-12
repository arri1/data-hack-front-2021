import styled from 'styled-components'
import {Button, Form, Input,message} from 'antd'
import {useHistory} from 'react-router-dom'

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
  justify-content: center;
  align-items: center;
  padding: 30px;
  margin: 15px;
`

const Login = ({setLogged}) => {
    const history=useHistory()

    const onFinish = ({login,password})=>{
        if (login==='admin' && password==='admin'){
            localStorage.setItem('logged',true)
            setLogged(true)
            history.replace('/')
            return null
        }
        message.error('Ввели не правильный пароль или логин')
    }

    return (
        <Container>
            <Box>
                <Form
                    onFinish={onFinish}
                    layout={'vertical'}
                >
                    <Form.Item
                        label={'Логин'}
                        name={'login'}
                        rules={[{
                            required:true,
                            message: 'Введите логин',
                        }]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        label={'Пароль'}
                        name={'password'}
                        rules={[{
                            required:true,
                            message: 'Введите пароль',
                        }]}
                    >
                        <Input.Password/>
                    </Form.Item>
                    <Form.Item>
                        <Button
                            htmlType={'submit'}
                        >
                            Вход
                        </Button>
                    </Form.Item>
                </Form>
            </Box>
        </Container>
    )

}
export default Login
