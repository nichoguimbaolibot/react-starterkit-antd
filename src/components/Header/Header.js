// import React, { Component } from "react";
// import { Link } from "react-router-dom";

// class Header extends Component {
//   render() {
//     return (
// <section className="Header-section">
//   Starter Kit
//   <Link to="/"> Home </Link>
//   <Link to="/test"> Test </Link>
// </section>
//     );
//   }
// }

// export default Header;

import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import PropTypes from 'prop-types';

const { Sider } = Layout;

class Sunny extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
  };

  render() {
    const { location } = this.props;
    console.log(location.pathname);
    return (
      <Sider trigger={null} collapsible collapsed={this.props.collapsed}>
        <div className="logo" />
        <Menu
          mode="inline"
          defaultSelectedKeys={['/']}
          selectedKeys={[location.pathname]}
        >
          <Menu.Item key="/">
            <NavLink to="/">
              <Icon type="home" />
              <span>Home</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="/other">
            <NavLink to="/other">
              <Icon type="mobile" />
              <span>Applications</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="/notifications">
            <NavLink to="/notifications">
              <Icon type="notification" />
              <span>Notifications</span>
            </NavLink>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default withRouter(Sunny);
