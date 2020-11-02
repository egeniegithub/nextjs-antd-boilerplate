import React, { useState } from 'react';
import {
    Breadcrumb,
    // Icon,
    Row,
    Col,
    Layout,
    Card,
    Carousel,
    Form,
    Input,
    Button,
    message,
    Checkbox
} from 'antd';
import {

    PhoneOutlined,
} from '@ant-design/icons';
import Link from 'next/link'
import "../styles/signup.less";

import { Typography } from 'antd';

import axios from 'axios';

import { withAuthSync } from '../utils/auth';
const { Title } = Typography;

const {
    Header, Content,
} = Layout;
const signUp = () => {

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const [err , setErr] = useState(false);
const [errMsg , setErrMsg] = useState('');

const handleName = (e) => {
    setName(e.target.value);
}
const handleEmail = (e) => {
    setEmail(e.target.value);
}
const handlePassord = (e) => {
    setPassword(e.target.value);
}

const handleSignup = () =>{
    axios.post('/api/users', {
        name,
        email,
        password,
      })
      .then((data) => {
          if(data.data.status==='error')
          {
            message.error(data.data.message)
          }
          else
          {
              message.success(data.data.message)
          }
        console.log('data is:',data);
      });
}
return (
    <Layout>
        <Header>
            <Row justify="space-around" type="flex">
                <Col span={20}>
                    <Row justify="space-around" type="flex">
                        <Col span={12} md={12} xs={24}>
                            <span className='brand-name'>Next Js Boilerpate </span>
                        </Col>
                        <Col span={12} md={12} xs={0}>
                            <span className="ml-30 float-right"><PhoneOutlined /> Call us egenie@123</span>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Header>
        <Row justify="space-around" type="flex">
            <Col span={20} style={{ textAlign: 'right', height: 50, display: 'flex', justifyContent: 'flex-end', textTransform: 'uppercase' }}>
                <div style={{ width: 'fit-content', margin: 'auto 0px' }}>
                    <Link href="/">
                        <a>
                            Home
              </a>
                    </Link>
                </div>
                <div style={{ width: 'fit-content', margin: 'auto 0px' }}>
                    <Link href="/">
                        <a>
                            Contact Us
              </a>
                    </Link>
                </div>
                <div style={{ width: 'fit-content', margin: 'auto 0px' }}>
                    <Link href="/">
                        <a>
                            About us
              </a>
                    </Link>
                </div>
            </Col>
        </Row>
        <Row gutter={16}>
            <Col className='signUp-form'>
                <Title level={2}>Sign Up Form</Title>
                <Form
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                //   onFinish={onFinish}
                //   onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="Name"
                        name="Name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Name!',
                            },
                        ]}
                    >
                        <Input onChange={handleName} />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="Email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                        ]}
                    >
                        <Input onChange={handleEmail} />
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
                        <Input.Password onChange={handlePassord} />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" onClick={handleSignup}>
                            Submit
        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    </Layout>
)

}

export default signUp;