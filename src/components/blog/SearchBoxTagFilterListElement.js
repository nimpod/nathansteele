import React, {Component} from 'react';
import { ReactComponent as TickIcon } from "../../icons/tick.svg";

class SearchBoxTagFilterListElement extends Component {

    checkIfMatching(currentTag) {
        /*
        let isSelected = false;
        
        // find the selected tag...
        while (isSelected == false) {
            let tagSelected = this.props.tagSelected.toUpperCase();
            let tagIteration = currentTag.toUpperCase();

            console.log("(tagIteration = " + tagIteration + ", tagSelected = " + tagSelected + ")");
            
            if (tagIteration == tagSelected) {
                console.log('MATCH');
            }
            break;
        }
        
        return isSelected;
        */
    }

    render() {
        let copyOfThis = this;

        return(
            this.props.tags.map((tag => {
                return(
                    <li key={`key-${tag}`} className={`tag-filter-for-${tag}`} /*{ data-myAttr={copyOfThis.checkIfMatching(tag)} }*/>
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