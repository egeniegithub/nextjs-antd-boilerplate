import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import {
    Breadcrumb,
    // Icon,
    Row,
    Col,
    Layout,
    Form,
    Input,
    Button,
    Card,
    message,
    Carousel,
} from 'antd';

import Router from 'next/router'

import {

    PhoneOutlined,
    HomeOutlined,
    UserOutlined,
    FacebookOutlined,
    InstagramOutlined,
    GoogleOutlined

} from '@ant-design/icons';
import * as _ from "lodash";
import Link from 'next/link'
// import "../../styles/home.less";
import "../../styles/custom_quill.snow.less"
import { Typography } from 'antd';

// import ReactQuill from 'react-quill';
import { connect } from "react-redux";
import ReactQuill from '../../components/ReactQuill';
import "../../styles/quill.less";


import axios from 'axios';

import PageActions from '../../redux/pages/actions';
// import '../../node_modules/react-quill/dist/quill.snow.css'
// const ReactQuill = require('react-quill');

const { Title } = Typography;
import {storePage} from '../../redux/pages/actions';

const {
    Header, Content,
} = Layout;
const AdminDashbaord = () => {

    const dispatch = useDispatch();

    const [title , setTitle] = useState('');
    const [slug , setSlug ] = useState('');
    const [text, setText] = useState('');
    const generateSlug = name => {
        if(name)
        {
            let slug = _.replace(name, /[^a-zA-Z0-9\- ]/g, '');
            slug = _.replace(slug, /\s/g, '-');
            slug = _.toLower(slug);
        
            return slug;
        }
        return ;
    
      };

    const handlePageSubmit = () => {
            const pageData ={
                title ,
                slug : generateSlug(slug),
                content: text,

            }
            // dispatch(storePage(pageData)) for somehow middleware need to check !! Not working @Haseeb Note to me
            axios.post('/api/page', {input:pageData})
              .then((data) => {
                  if(data.data.status==='error')
                  {
                    message.error(data.data.message)
                  }
                  else
                  {
                      message.success(data.data.message)
                      Router.push('admin/page/listing');
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
                                <span className="brand-name">Next Js Boilerpate </span>
                            </Col>
                            <Col span={12} md={12} xs={0}>
                                <span className="ml-30 float-right">
                                    <PhoneOutlined /> Call us egenie@123
                </span>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Header>
            <Row justify="space-around" type="flex">
                <Col
                    span={20}
                    style={{
                        textAlign: "right",
                        height: 50,
                        display: "flex",
                        justifyContent: "flex-end",
                        textTransform: "uppercase",
                    }}
                >
                    <div style={{ width: "fit-content", margin: "auto 0px" }}>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </div>
                    <div style={{ width: "fit-content", margin: "auto 0px" }}>
                        <Link href="/">
                            <a>Contact Us</a>
                        </Link>
                    </div>
                    <div style={{ width: "fit-content", margin: "auto 0px" }}>
                        <Link href="/">
                            <a>About us</a>
                        </Link>
                    </div>
                </Col>
            </Row>
            <Row justify="space-around" type="flex">
                <Col span={20}>
                    <Breadcrumb>
                        <Breadcrumb.Item href="">
                            <HomeOutlined />
                        </Breadcrumb.Item>
                        <Breadcrumb.Item href="">
                            <UserOutlined />
                            <span>Home</span>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
            </Row>
            <Row justify="space-around" type="flex">
                <Title>Admin Panel</Title>
                <Col
                    span={20}
                    style={{
                        paddingTop: "30px",
                        paddingBottom: "30px",
                        minHeight: "500px",
                    }}
                >
                    <Content style={{
                        display: 'block',
                        margin: '0 auto',
                        width: '500px'
                    }}>
                        <Row gutter={16}>
                            <Col className='signUp-form'>
                                <Title level={2}>Page Management</Title>
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
                                                message: 'Please input page Name!',
                                            },
                                        ]}
                                    >
                                        <Input onChange={(e)=>setTitle(e.target.value)}/>
                                    </Form.Item>

                                    <Form.Item
                                        label="Slug"
                                        name="Slug"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input Page Slug!',
                                            },
                                        ]}
                                    >
                                        <Input onChange={(e)=>setSlug(e.target.value)}/>
                                    </Form.Item>
                                    <Form.Item label="Page Detail" name="Page_Detail" >
                                        <ReactQuill
                                            style={{height: '170px'}}
                                            value={text || ""}
                                            onChange={setText}


                                        />
                                    </Form.Item>

                                    <Form.Item>
                                        <Button type="primary" htmlType="submit" onClick={handlePageSubmit} >
                                            Submit
        </Button>
                                    </Form.Item>
                                </Form>
                            </Col>
                        </Row>

                    </Content>
                </Col>
            </Row>
            <Row justify="space-around" type="flex" style={{ background: "#f9f9f9" }}>
                <Col md={8} xs={20} style={{ height: "40px", display: "flex" }}>
                    <div style={{ margin: "auto 0px" }}>&copy; 2020 egenienext</div>
                </Col>
                <Col md={8} xs={20}>
                    <div
                        style={{
                            margin: "auto",
                            height: "40px",
                            display: "flex",
                            justifyContent: "flex-end",
                        }}
                    >
                        <FacebookOutlined style={{ margin: "auto 10px", fontSize: 20 }} />
                        <InstagramOutlined style={{ margin: "auto 10px", fontSize: 20 }} />
                        <GoogleOutlined style={{ margin: "auto 10px", fontSize: 20 }} />
                    </div>
                </Col>
            </Row>
        </Layout>
    )


}


export default AdminDashbaord;