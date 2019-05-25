import * as React from 'react'
import articlePic from 'images/articlePic.jpg';
import ArticleCardBottom from './ArticleCardBottom'

import * as style from './index.less'

interface ISArticleMore {
    isMore: boolean
}

export default class ArticleCard extends React.Component<any, ISArticleMore> {
    state = {
        isMore: true
    }

    change() {
        this.setState({
            isMore: !this.state.isMore
        })
    }

    render() {
        const {isMore} = this.state
            return <div className={style.articleCard}>
                <div className={style.leftTop}/>
                <div className={style.title}>从前慢</div>
                <img className={style.articlePics} src={articlePic}/>
                <div className={style.summary}>testSummary</div>
                {isMore?
                    <div className={style.fullContent}>ashdhdjd</div>
                    :
                    <div className={style.content}>
                        从前的日色变得慢<br/>
                        车，马，邮件都慢<br/>
                        一生只够爱一个人<br/>
                    </div>
                }
                <a className={style.changeFull} onClick={this.change.bind(this)}>more >></a>
                <ArticleCardBottom/>
            </div>
    }

}

