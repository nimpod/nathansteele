import React, {Component} from 'react';
import { ReactComponent as TickIcon } from "../../icons/tick.svg";

class SearchBoxTagFilterListElement extends Component {

    render() {
        return(
            this.props.tags.map((tag => {
                return(
                    <li className={`tag-filter-for-${tag}`}>
                        <div>
                            <TickIcon className='invertable-icon' />
                            <span>{tag}</span>
                        </div>
                    </li>
                )
            }))
        )
    }
}

export default SearchBoxTagFilterListElement;