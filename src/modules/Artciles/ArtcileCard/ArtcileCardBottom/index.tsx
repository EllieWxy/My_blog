import * as React from 'react'
import * as style from './index.less'

import taglogo from '../../../../source/tag.png'
import tags from '../../../../source/tag.svg'

export default class ArtcileCardBottom extends React.Component<any,any> {
    public render(){
        return <div className={style.artcilecardbottom}>
            <div className={style.line}/>
            <img className={style.taglogo} src={taglogo}/>
            <img className={style.tags} src={tags}/>
        <a className={style.fullUrl} href="www.baidu.com">展开全文</a>
        </div>
    }
}