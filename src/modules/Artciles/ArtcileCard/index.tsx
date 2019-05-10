import * as React from 'react'
import * as style from './index.less'

import artcilepic from '../../../source/artcilepic.jpg';

import ArtcileCardBottom from './ArtcileCardBottom'

interface ISArtcileMore {
    ismore: boolean
}

export default class ArtcileCard extends React.Component<any, ISArtcileMore> {
    public state = {
        ismore: true
    }

    public change() {
        this.setState({
            ismore: !this.state.ismore
        })
    }

    public render() {
        if (!this.state.ismore) {
            return <div className={style.artcilecard}>
                <div className={style.lefttop}/>
                <div className={style.title}>从前慢</div>
                <img className={style.artcilepics} src={artcilepic}/>
                <div className={style.summary}>testSummary</div>
                <div className={style.littletitle}>第一章</div>
                <div className={style.line}/>
                <div className={style.context}>
                    从前的日色变得慢<br/>
                    车，马，邮件都慢<br/>
                    一生只够爱一个人<br/>

                </div>
                <a className={style.changefull} onClick={this.change.bind(this)}>more >></a>
                <ArtcileCardBottom/>
            </div>
        } else {
            return <div className={style.artcilecard}>
                <div className={style.lefttop}/>
                <div className={style.title}>夜莺颂</div>
                <img className={style.artcilepics} src={artcilepic}/>
                <div className={style.summary}>testSummary</div>
                <div className={style.littletitle}>第一章</div>
                <div className={style.line}/>
                <div className={style.fullcontext}>
                    我的心疼痛，我感到昏昏欲睡，麻木不仁，<br/>
                    好像是饮过毒鸩，<br/>
                    又像是刚刚吞服过鸦片，<br/>
                    开始沉向冥府的忘川。<br/>
                    这并非我对你的福气有所妒嫉，<br/>
                    而是你的欢乐使我过度欣喜——<br/>
                    你呀，羽翼翩翩的树精，<br/>
                    在山毛榉的绿叶与荫影之中，<br/>
                    在那歌声悠扬的地点，<br/>
                    你舒展了喉咙，歌唱着夏天。<br/>
                    <br/>
                    啊，但愿有一口美酒，<br/>
                    一口曾在地窖冷藏多年的美酒！<br/>
                    人一尝就会想到花神，想到葱绿的酒乡，<br/>
                    想起舞蹈、恋歌和丰收季节的欢狂。<br/>
                    啊，要是那杯酒带有南国的热气，<br/>
                    红如人面，充满灵感之泉的真味，<br/>
                    珍珠的泡沫在杯沿浮动，<br/>
                    能把嘴唇染得绯红，<br/>
                    我就会一饮而尽，悄然离开尘寰，<br/>
                    随你隐没在幽暗的林间。<br/>
                    <br/>
                    远远地隐没，消失，并且忘记<br/>
                    你在林间从不知晓的东西，<br/>
                    忘记这里的厌倦、焦虑和烦躁不安。<br/>
                    这里，人们坐在一起长吁短叹；<br/>
                    这里，老年瘫痪了，只剩得几根白发摇晃，<br/>
                    青年也变得苍白，瘦削，以至死亡；<br/>
                    这里，人们一思想就感到伤悲，<br/>
                    就会绝望得两眼铅灰；<br/>
                    这里，美人的双眸难以保持明丽，<br/>
                    新生的爱情第二天就会凋敝。<br/>
                    <br/>
                    飞去，飞去，我要向你飞去，<br/>
                    不是与酒神同驾豹车而去，<br/>
                    而是乘坐诗神的无形的双翼，<br/>
                    尽管这头脑恁地迟钝、团惑和呆滞。<br/>
                    啊，此刻我终于和你在一起了；<br/>
                    夜，是这般地柔和，<br/>
                    也许月后已经登上宝座，众星正在四周守望，<br/>
                    但是，这里却没有光亮，<br/>
                    除了几丝天光，随风穿过窗枝的隙缝，<br/>
                    穿过绿叶的荫影和苔藓的曲径。<br/>
                    <br/>
                    我看不清什么花儿在我脚下，也望不见什么花儿在枝头挂，<br/>
                    但是，在温馨的黑夜，我却能猜想这个季节的每一种芬芳，<br/>
                    那就该有香草、灌木和野果树的花。<br/>
                    有山楂和野玫瑰的花，<br/>
                    还有早谢的紫罗兰为绿叶遮盖，<br/>
                    还有麝香蔷薇即将盛开——<br/>
                    那种蔷薇是五月中旬的骄儿，流露着酒香，<br/>
                    它是夏夜蚊蝇飞鸣的地方。<br/>
                </div>
                <a className={style.changefull} onClick={this.change.bind(this)}>收起 >> </a>
                <ArtcileCardBottom/>
            </div>
        }
    }

}

