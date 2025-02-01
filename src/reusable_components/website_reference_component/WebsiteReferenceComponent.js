import React, {Component} from 'react'
import { Link } from 'react-router-dom';

class WebsiteReferenceComponent extends Component {
    render() {
        let url = this.props.url;
        let website_name = this.props.website_name;
        let webpage_title = this.props.webpage_title;
        let author = (this.props.author.length === 0) ? "" : `, [${this.props.author}]`;
        let year = (this.props.year.length === 0) ? "" : `, [${this.props.year}]`;

        return(
            <li className='website-reference-component'>
                <a href={url}>
                    <span title='Webpage title'>{webpage_title}</span>, [<span title='Website name'>{website_name}</span>]<span title='Author of webpage'>{author}</span> <span title='Year created'>{year}</span>
                </a>
            </li>
        )
    }
}

export default WebsiteReferenceComponent