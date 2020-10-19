import React, {Component} from 'react';

class SearchBox extends Component {

    render() {
        return(
            <div className="searchbox">
                <input onChange={this.props.handleSearchBoxInput} placeholder={this.props.placeholderText} type="text" />
            </div>
        )
    }
}

export default SearchBox;