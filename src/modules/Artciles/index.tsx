import * as React from 'react'
import ArtcileCard from "./ArtcileCard";
import './index.css'

export default class Artciles extends React.Component<any,any> {
    public render() {
        return <div className='articles'>
                <ArtcileCard/>
            </div>
    }
}