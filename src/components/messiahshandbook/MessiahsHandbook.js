import React, {Component} from 'react'
import { withRouter } from 'react-router-dom';


function read_text_file(file) {
    let raw_file = new XMLHttpRequest();
    raw_file.open("GET", file, false);
    raw_file.onreadystatechange = function () {
        if (raw_file.readyState === 4) {
            if (raw_file.status === 200 || raw_file.status === 0) {
                let all_text = raw_file.responseText;
                console.log(all_text);
            }
        }
    }
    raw_file.send(null);
}


class MessiahsHandbook extends Component {
    render() {
        // read_text_file("../../../public/listOfQuotes.txt");
        read_text_file("file:///D:\\Programming-Projects\\rainmeter-random-quotes\\listOfQuotes.txt");

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
