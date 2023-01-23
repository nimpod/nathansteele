import React, {Component} from 'react';
import { ReactComponent as OpenDropdownIcon } from "../../icons/openDropdown.svg";
import SearchBoxTagFilterListElement from './SearchBoxTagFilterListElement';

class SearchBox extends Component {

    /**
     * ...
     * @param {Event} e 
     */
    toggleDropdownList = (e) => {
        // add/remove .active class to the list...
        document.querySelector('.tag-filter-options-list-container').classList.toggle('active');
        
        // add/remove .active class to the button...
        document.querySelector('.filter-by-tag-button > button').classList.toggle('active');
    }

    render() {
        return(
            <div className="searchbox">
                <div className='filter-by-tag-button'>
                    {/*}
                    <button onClick={this.toggleDropdownList}>
                        <span>{this.props.tagSelected}</span>
                        <OpenDropdownIcon className='invertable-icon' />
                    </button>
                    
                    <div className='tag-filter-options-list-container popover-canvas-with-arrow'>
                        <ul className='tag-filter-options-list'>
                            <SearchBoxTagFilterListElement tagSelected={this.props.tagSelected} tags={this.props.tags} />
                        </ul>
                    </div>
                    */}
                </div>
                <div className='inputbox-container'>
                    <input
                        onChange={this.props.handleSearchBoxInput} 
                        placeholder={this.props.placeholderText} 
                        type="text"
                    />
                </div>
            </div>
        )
    }
}

export default SearchBox;