import * as React from 'react'
import './index.css'

interface IAvatarProps {
    image: string
}

export default class Avatar extends React.Component<IAvatarProps,any> {
    public render() {
        return <div>
            <div className="avatar">
                <img className="image" src={this.props.image}/>
            </div>
        </div>
    }
}