import * as React from 'react'
import ArtcileCard from "./ArtcileCard";
import * as style from './index.less'

export default class Artciles extends React.Component<any,any> {
    render() {
        return <div className={style.articles}>
                <ArtcileCard/>
            </div>
    }
}