import * as React from 'react'
import './index.css'

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
            return <div className='artcilecard'>
                <div className='lefttop'/>
                <div className='title'>testTitle</div>
                <img className='artcilepics' src = {artcilepic}/>
                <div className='summary'>testSummary</div>
                <div className='littletitle'>第一章</div>
                <div className='line'/>
                <div className='context'>
                    从前的日色变得慢<br/>
                    车，马，邮件都慢<br/>
                    一生只够爱一个人
                </div>
                <a className='url' href="www.baidu.com">more >></a>
                <ArtcileCardBottom/>
            </div>
        }
    }

}