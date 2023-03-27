import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Row, Col, Form, Input, Button, Select } from 'antd';

import { useAxios } from '../hooks'

const { Item } = Form
const { Option } = Select

export const Register = () => {

    const navigate = useNavigate()

    const [credentials, setCredentials] = useState(null)

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };


    const { trigger, response, loading, error } = useAxios({
        method: 'POST',
        url: '/signup',
        headers: { // no need to stringify
            accept: '*/*'
        },
        data: credentials
    })


    useEffect(() => {

        if (response?.data && !error) {

           navigate('/')

        }

    }, [error, response])

    useEffect(() => {

        console.log(credentials)

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
                    <Item
                        label="Name"
                        name="first_name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your name!',
                            },
                        ]}
                    >
                        <Input placeholder='Enter your name'/>
                    </Item>
                    <Item
                        name="gender"
                        label="Gender"
                        rules={[{ required: true, message: 'Please select gender!' }]}
                    >
                        <Select placeholder="Select your gender">
                            <Option value="male">Male</Option>
                            <Option value="female">Female</Option>
                            <Option value="other">Other</Option>
                        </Select>
                    </Item>
                    <Item
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
                    </Item>

                    <Item
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
                    </Item>

                    <Item
                        name="confirm"
                        label="Confirm Password"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password />
                    </Item>

                    <Item
                        wrapperCol={{
                            offset: 6,
                            span: 12,
                        }}
                    >
                        <Button type="primary" htmlType="submit" loading={loading} style={{ width: '100%' }}>
                            Register
                        </Button>
                        Already registered? <a href="/">login now!</a>
                    </Item>
                </Form>
            </Col>
        </Row>
    );
};