import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu } from 'antd';
import 'antd/dist/antd.css';

const AppLayout = ({children}) => {
    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/">노드버드</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile">프로필</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup">회원가입</Link>
                </Menu.Item>
            </Menu>
            {children}
        </div>
    )
}

AppLayout.PropTypes = {
    children: PropTypes.node.isRequired,
}

export default AppLayout;