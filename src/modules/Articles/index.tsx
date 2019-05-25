import * as React from 'react'
import ArticleCard from "./ArticleCard";
import * as style from './index.less'

export default class Articles extends React.Component<any,any> {
    render() {
        return <div className={style.articles}>
                <ArticleCard/>
            </div>
    }
}