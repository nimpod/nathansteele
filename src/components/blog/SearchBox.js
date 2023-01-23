import React, {Component} from 'react';
import { ReactComponent as OpenDropdownIcon } from "../../icons/openDropdown.svg";
import SearchBoxTagFilterListElement from './SearchBoxTagFilterListElement';

class SearchBox extends Component {

    /**
     * Constructor
     * @param {Incoming properties} props 
     */
    constructor(props) {
        super(props);
        this.state = {
            filterBtnWasClicked: false
        }
    }

    /**
     * ...
     * @param {Event} e 
     */
    toggleDropdownList = (e) => {
        let filterByTagBtn = document.querySelector('.filter-by-tag-button > button');
        let filtersContainer = document.querySelector('.tag-filter-options-list-container');

        // add/remove .active class to the list...
        filtersContainer.classList.toggle('active');
        
        // add/remove .active class to the button...
        filterByTagBtn.classList.toggle('active');

        // hide filters if user clicks outside of filters-container...
        let copyOfThis = this;
        let tagFiltersList = document.querySelector('.tag-filter-options-list-container.active');
    
        if (tagFiltersList !== null) {
            window.addEventListener('click', function(e) {
                if (filtersContainer.contains(e.target) || filterByTagBtn.contains(e.target)) {
                    ///console.log('Clicked box...')
                    copyOfThis.setState({filterBtnWasClicked: true});
                } else {
                    ///console.log('Clicked outside box...')
                    copyOfThis.setState({filterBtnWasClicked: false});
                    tagFiltersList.classList.remove('active');
                    filterByTagBtn.classList.remove('active');
                }
            });
        }
    }

    render() {
        return(
            <div className="searchbox">
                <div className='filter-by-tag-button'>
                    <button onClick={this.toggleDropdownList}>
                        <span>{this.props.tagSelected}</span>
                        <OpenDropdownIcon className='invertable-icon' />
                    </button>
                    
                    <div className='tag-filter-options-list-container popover-canvas-with-arrow' onClick={this.blah}>
                        <ul className='tag-filter-options-list'>
                            <SearchBoxTagFilterListElement
                                clickedTagFilter={this.props.clickedTagFilter}
                                tagSelected={this.props.tagSelected}
                                tags={this.props.tags}
                            />
                        </ul>
                    </div>
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