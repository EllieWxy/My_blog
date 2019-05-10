import * as React from 'react'
import Avatar from './Avatar'
import * as style from './index.less'

import icon from '../../source/icon.jpg';

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
            <Avatar image={icon}/>
            <div className={style.name}>Ellie</div>
            <div className={style.introduce}>机智可爱</div>
            <div className={style.title}>
                <div className={style.choice}>主页</div>
                <div className={style.choice}>相册</div>
            </div>
            <div className={style.tags}>所有文章</div>
        </div>
    }
}