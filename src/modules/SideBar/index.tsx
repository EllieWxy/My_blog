import * as React from 'react'
import Avatar from './Avatar'
import * as style from './index.less'

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
        return <div className={style.sidebar}>
            <Avatar image={logo}/>
            <div className={style.name}>Ellie test</div>
            <div className={style.introduce}>机智可爱</div>
            <div className={style.title}>相册</div>
            <div className={style.tags}>所有文章</div>
        </div>
    }
}