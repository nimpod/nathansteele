import React, {Component} from 'react';
import { ReactComponent as TickIcon } from "../../icons/tick.svg";

class SearchBoxTagFilterListElement extends Component {
    
    render() {
        return(
            this.props.tags.map((tag => {
                return(
                    <li key={`key-${tag}`} className={`tag-filter-for-${tag}`}>
                        <div className='tag'>
                            <span className={`${tag}`} onClick={this.props.clickedTagFilter}>
                                {tag}
                            </span>
                        </div>
                    </li>
                )
            }))
        )
    }
}

export default SearchBoxTagFilterListElement;