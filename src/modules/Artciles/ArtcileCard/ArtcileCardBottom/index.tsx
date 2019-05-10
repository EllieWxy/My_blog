import * as React from 'react'
import * as style from './index.less'

import taglogo from '../../../../source/tag.png'
import tags from '../../../../source/tagtext.svg'

export default class ArtcileCardBottom extends React.Component<any,any> {
    public render(){
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