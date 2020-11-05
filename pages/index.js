import {
  Breadcrumb,
  // Icon,
  Row,
  Col,
  Layout,
  Card,
  Carousel,
} from "antd";
import {
  PhoneOutlined,
  HomeOutlined,
  UserOutlined,
  FacebookOutlined,
  InstagramOutlined,
  GoogleOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import "../styles/home.less";
const { Header, Content } = Layout;
export default () => (
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
      <Col
        span={20}
        style={{
          paddingTop: "30px",
          paddingBottom: "30px",
          minHeight: "500px",
        }}
      >
        <Content>
          <div>
            <Carousel autoplay effect="fade">
              <div>
                <h3>
                  <img src="https://miro.medium.com/max/2880/1*2tmzU7bve-VlTkOMWsk_Hw.jpeg" />
                </h3>
              </div>
              <div>
                <h3>
                  <img src="https://miro.medium.com/max/480/1*ZvmbMEmtGR15Xj-eb3osXA.png" />
                </h3>
              </div>
              <div>
                <h3>
                  <img src="https://images.ctfassets.net/3prze68gbwl1/asset-17suaysk1qa1keu/f711e6792e339e0a386e0bec6f273316/ReactJS.png" />
                </h3>
              </div>
            </Carousel>
          </div>
          <Row gutter={16}>
            <Col span={6} md={6} sm={12} xs={24}>
              <Card
                hoverable
                cover={
                  <img
                    alt="image1"
                    style={{ width: "100%" }}
                    src="https://miro.medium.com/max/2880/1*2tmzU7bve-VlTkOMWsk_Hw.jpeg"
                  />
                }
              >
                <Card.Meta title="Menu 1" description="Test1................" />
              </Card>
            </Col>
            <Col span={6} md={6} sm={12} xs={24}>
              <Card
                hoverable
                cover={
                  <img
                    alt="image2"
                    style={{ width: "100%" }}
                    src="https://miro.medium.com/max/2880/1*2tmzU7bve-VlTkOMWsk_Hw.jpeg"
                  />
                }
              >
                <Card.Meta title="Menu 2" description="Test1................" />
              </Card>
            </Col>
            <Col span={6} md={6} sm={12} xs={24}>
              <Card
                hoverable
                cover={
                  <img
                    alt="image3"
                    style={{ width: "100%" }}
                    src="https://miro.medium.com/max/2880/1*2tmzU7bve-VlTkOMWsk_Hw.jpeg"
                  />
                }
              >
                <Card.Meta title="Menu 3" description="Test1................" />
              </Card>
            </Col>
            <Col span={6} md={6} sm={12} xs={24}>
              <Card
                hoverable
                cover={
                  <img
                    alt="image4"
                    style={{ width: "100%" }}
                    src="https://miro.medium.com/max/2880/1*2tmzU7bve-VlTkOMWsk_Hw.jpeg"
                  />
                }
              >
                <Card.Meta title="Menu 4" description="Test1................" />
              </Card>
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
);
