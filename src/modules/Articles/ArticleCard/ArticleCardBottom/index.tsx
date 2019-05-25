import * as React from 'react'
import tagLogo from 'images/tag.png'
import tags from 'images/tagText.svg'

import * as style from './index.less'

export default class ArticleCardBottom extends React.Component<any,any> {
    render(){
        return <div className={style.articleCardBottom}>
            <div className={style.line}/>
            <img className={style.tagLogo} src={tagLogo}/>
            <div className={style.tags}>
                <img className={style.tagsImg} src={tags}/>
                <div className={style.tagsText}>诗歌</div>
            </div>
        <button className={style.changeFull}>展开全文</button>
        </div>
    }
}