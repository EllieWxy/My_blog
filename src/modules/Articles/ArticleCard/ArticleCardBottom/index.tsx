import * as React from 'react'
import tagLogo from 'images/tag.png'
import tags from 'images/tagText.svg'

import * as style from './index.less'

interface Itags {
    tags: String[]
}

export default class ArticleCardBottom extends React.Component<Itags, any> {

    render() {
        return <div className={style.articleCardBottom}>
            <div className={style.line}/>
            <img className={style.tagLogo} src={tagLogo}/>
            {this.props.tags.map(item => {
                return <div className={style.tags}>
                    <img className={style.tagsImg} src={tags}/>
                    <div className={style.tagsText}>{item}</div>
                </div>
            })
            }
            <button className={style.changeFull}>展开全文</button>
        </div>
    }
}