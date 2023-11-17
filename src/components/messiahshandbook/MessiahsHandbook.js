import React, {Component} from 'react'
import { withRouter } from 'react-router-dom';


function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
                console.log(allText);
            }
        }
    }
    rawFile.send(null);
}


class MessiahsHandbook extends Component {
    render() {
        // readTextFile("../../../public/listOfQuotes.txt");
        // readTextFile("file:///D:\\Programming-Projects\\rainmeter-random-quotes\\listOfQuotes.txt");

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
