import * as React from 'react'
import taglogo from 'images/tag.png'
import tags from 'images/tagtext.svg'

import * as style from './index.less'

export default class ArtcileCardBottom extends React.Component<any,any> {
    render(){
        return <div className={style.artcilecardbottom}>
            <div className={style.line}/>
            <img className={style.taglogo} src={taglogo}/>
            <div className={style.tags}>
                <img className={style.tagsimg} src={tags}/>
                <div className={style.tagstext}>诗歌</div>
            </div>
        <button className={style.changefull}>展开全文</button>
        </div>
    }
}