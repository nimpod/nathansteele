import React, {Component} from 'react'
import { connect}  from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom';
import { ReactComponent as ArrowDownIcon } from "../../icons/arrowDown.svg";
import { ReactComponent as PlusIcon } from "../../icons/plus.svg";
import { ReactComponent as CrossIcon } from "../../icons/cross.svg";


function processText() {
    // setup...
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = process;
    xhr.open("GET", "https://github.com/nimpod/rainmeter-random-quotes/blob/master/listOfQuotes.txt", true);
    xhr.send();

    // get data...
    if (xhr.readyState == 4) {
        var resp = JSON.parse(xhr.responseText);
        console.log(resp);
    }
}

class MessiahsHandbook extends Component {
    render() {
        processText();
        
        return(
            <div className='page-wrapper'>
                <ul className="messiahs-handbook">
                    <p>hrei</p>
                </ul>
            </div>
        )
    }
}

export default withRouter(MessiahsHandbook)
