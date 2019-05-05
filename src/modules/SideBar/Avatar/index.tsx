import * as React from 'react'
import * as style from './index.less'

interface IAvatarProps {
    image: string
}

export default class Avatar extends React.Component<IAvatarProps,any> {
    public render() {
        return <div>
            <div className={style.avatar}>
                <img className={style.image} src={this.props.image}/>
            </div>
        </div>
    }
}