import * as React from 'react'
import './index.css'

import taglogo from '../../../../source/tag.png'

export default class ArtcileCardBottom extends React.Component<any,any> {
    public render(){
        return <div className='artcilecardbottom'>
            <div className='line'/>
            <img className='taglogo' src={taglogo}/>
        </div>
    }
}