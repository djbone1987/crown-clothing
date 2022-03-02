import React, {Component} from 'react';
import MenuItem from "../menu-item/menu-item.component";
import './directory.style.scss';

class Directory extends Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageURL: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 1,
                    linkURL: 'hats'
                },
                {
                    title: 'jackets',
                    imageURL: 'https://i.ibb.co/px2tCc3/sneakers.png',
                    id: 2,
                    linkURL: ''
                },
                {
                    title: 'sneakers',
                    imageURL: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    linkURL: ''
                },
                {
                    title: 'womens',
                    imageURL: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id: 4,
                    linkURL: ''
                },
                {
                    title: 'mens',
                    imageURL: 'https://i.ibb.co/R70vBrQ/mens.png',
                    size: 'large',
                    id: 5,
                    linkURL: ''
                }]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({id, ...otherMenuProps}) => (
                        <MenuItem key={id} {...otherMenuProps}/>
                    ))
                }
            </div>
        )

    };
}

export default Directory;