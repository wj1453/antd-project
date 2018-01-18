import React from 'react';
import ReactDOM from 'react-dom';
import {IntlProvider, FormattedMessage} from 'react-intl';
import registerServiceWorker from './registerServiceWorker';
import { Layout,Menu} from 'antd';
import BnbHeader from './components/BNB-Header/index.js';
import './app.css';
const { Header, Footer, Sider, Content } = Layout;

ReactDOM.render(
  <IntlProvider locale="en">
    <Layout className="body">
      <Header>
        <BnbHeader/>
      </Header>
      <Content>
      <Layout>
        <Content>主体</Content>
        <Sider>右侧</Sider>
      </Layout>
      </Content>
      <Footer>网站底部</Footer>
    </Layout>
    </IntlProvider>,
    document.getElementById('root')
);
registerServiceWorker();
