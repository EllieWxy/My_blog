import * as React from 'react'
import * as style from './index.less'

import artcilepic from '../../../source/artcilepic.jpg';

import ArtcileCardBottom from './ArtcileCardBottom'

interface ISArtcileMore{
    ismore: boolean
}

export default class ArtcileCard extends React.Component<any,ISArtcileMore> {
    public state = {
        ismore : false
    }


    public render() {
        if(this.state.ismore){
            return null
        } else {
            return <div className={style.artcilecard}>
                <div className={style.lefttop}/>
                <div className={style.title}>testTitle</div>
                <img className={style.artcilepics} src = {artcilepic}/>
                <div className={style.summary}>testSummary</div>
                <div className={style.littletitle}>第一章</div>
                <div className={style.line}/>
                <div className={style.context}>
                    从前的日色变得慢<br/>
                    车，马，邮件都慢<br/>
                    一生只够爱一个人
                </div>
                <a className={style.url} href="www.baidu.com">more >></a>
                <ArtcileCardBottom/>
            </div>
        }
    }

}