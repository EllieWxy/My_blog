import * as React from 'react'
import articlePic from 'images/articlePic.jpg';
import { IArticle, listArticles } from "apis/article";
import ArticleCardBottom from './ArticleCardBottom'

import * as style from './index.less'

interface IArticleCardState {
    isMore: boolean
    data: IArticle[]
}

export default class ArticleCard extends React.Component<any, IArticleCardState> {
    state = {
        isMore: true ,
        data: [] as IArticle[]
    }

    constructor(props: any){
        super(props)

        const resGet = listArticles({page:10,size:10})
        resGet.then(e => {
            console.log(e)
            this.setState({
                data: e
            })
        })
    }

    change() {
        this.setState({
            isMore: !this.state.isMore
        })
    }

    render() {
        const {isMore,data} = this.state
        const more = isMore?'收起':'more>>'
        const res = data.map(item => {
            return <div key={item.id} className={style.articleCard}>
                <div className={style.leftTop}/>
                <div className={style.title}>{item.title}</div>
                <img className={style.articlePics} src={articlePic}/>
                <div className={style.summary}>{item.summary}</div>
                {isMore?
                    <div className={style.fullContent}>{item.content}</div>
                    :
                    <div className={style.content}>
                        {item.content}
                    </div>
                }
                <a className={style.changeFull} onClick={this.change.bind(this)}>{more}</a>
                <ArticleCardBottom tags = {item.tags}/>
            </div>
        })
        return <div>{res}</div>
    }

}

