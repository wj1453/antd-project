import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Layout,Menu} from 'antd';
import './app.css';
const { Header, Footer, Sider, Content } = Layout;

ReactDOM.render(
    <Layout>
      <Header className="header"></Header>
      <Content className="main">
      <Layout>
        <Content>主体</Content>
        <Sider>右侧</Sider>
      </Layout>
      </Content>
      <Footer className='footer'>网站底部</Footer>
    </Layout>,
    document.getElementById('root')
);
registerServiceWorker();
