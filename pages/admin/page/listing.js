import React, { useState, useEffect } from "react";
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
} from "antd";

import Router from "next/router";

import { Table, Tag, Space } from "antd";
import ReactQuill from "../../../components/ReactQuill";
import "../../../styles/custom_quill.snow.less";

import {
  PhoneOutlined,
  HomeOutlined,
  UserOutlined,
  FacebookOutlined,
  InstagramOutlined,
  GoogleOutlined,
} from "@ant-design/icons";
import * as _ from "lodash";
import Link from "next/link";
// import "../../styles/home.less";

import { Typography } from "antd";

import axios from "axios";

// import '../../node_modules/react-quill/dist/quill.snow.css'
// const ReactQuill = require('react-quill');

const { Title } = Typography;

const { Header, Content } = Layout;
const PageListing = () => {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    axios.get("/api/page").then((data) => {
      setPages(data.data.pages);
    });
  }, []);

  useEffect(() => {}, [pages]);

  const dispatch = useDispatch();

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Slug",
      dataIndex: "slug",
      key: "slug",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];

  return (
    <>
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
            <Content
              style={{
                // display: 'block',
                // margin: '0 auto',
                width: "1200px",
              }}
            >
              <Row gutter={16}>
                <Col className="signUp-form">
                  <Title level={2}>Page Lists</Title>
                  <Table columns={columns} dataSource={pages} />
                </Col>
              </Row>
            </Content>
          </Col>
        </Row>
        <Row
          justify="space-around"
          type="flex"
          style={{ background: "#f9f9f9" }}
        >
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
              <InstagramOutlined
                style={{ margin: "auto 10px", fontSize: 20 }}
              />
              <GoogleOutlined style={{ margin: "auto 10px", fontSize: 20 }} />
            </div>
          </Col>
        </Row>
      </Layout>
    </>
  );
};

export default PageListing;
