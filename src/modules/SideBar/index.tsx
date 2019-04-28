import * as React from 'react'
import Avatar from './Avatar'
import './index.css'

import logo from '../../logo.svg';

interface ISidebarState {
    collapsed: boolean
}

export default class SideBar extends React.Component<any, ISidebarState> {
    public state = {
        collapsed: false
    }

    public render() {
        if (this.state.collapsed) {
            return null
        }
        return <div className="sidebar">
            <Avatar image={logo}/>
            <div className="name">Ellie</div>
            <div className="introduce">机智可爱</div>
            <div className="title">相册</div>
            <div className="tags">所有文章</div>
        </div>
    }
}