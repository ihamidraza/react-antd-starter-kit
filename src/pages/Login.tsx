import { useEffect, useState } from 'react'
import { Row, Col, Form, Input, Button, Checkbox } from 'antd';

import { useAxios } from '../hooks'
import { attachToken } from '../utils'

interface Props {
    onLogin: Function
}

export const Login = ({ onLogin }: Props) => {

    const [credentials, setCredentials] = useState(null)

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };


    const { trigger, response, loading, error } = useAxios({
        method: 'POST',
        url: '/signin',
        headers: { // no need to stringify
            accept: '*/*'
        },
        data: credentials
    })


    useEffect(() => {

        if (response?.data && !error) {

            attachToken(response.data.token)

            onLogin()

        }

    }, [error, response])

    useEffect(() => {

        if (!credentials) return

        trigger()

    }, [credentials])

    return (
        <Row justify='center' style={{ marginTop: '20rem' }}>
            <Col span={12}>
                <Form
                    name="login"
                    labelCol={{
                        span: 6,
                    }}
                    wrapperCol={{
                        span: 12,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={setCredentials}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                type: 'email',
                                message: 'Please input your email!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item  wrapperCol={{
                                offset: 6,
                                span: 8,
                            }}>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <a className="login-form-forgot" href="">
                            Forgot password
                        </a>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 6,
                            span: 12,
                        }}
                    >
                        <Button type="primary" htmlType="submit" loading={loading} style={{ width: '100%' }}>
                            Login
                        </Button>
                        Or <a href="/register">register now!</a>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    );
};