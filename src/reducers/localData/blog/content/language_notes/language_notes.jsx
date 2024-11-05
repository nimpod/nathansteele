import React  from 'react';
import $ from "jquery";
import {json_to_arr} from '../../../../../js/helpers.js';

// import json files...
let nepali_json = require('./nepali.json');
let tibetan_json = require('./tibetan.json');

// iterate over sections in json file, and create dictionary equivilant...
let nepali = json_to_arr(nepali_json);
let tibetan = json_to_arr(tibetan_json);

let btns = ["Nepali", "Tibetan", "Japanese", "Chinese", "French", "Hindi", "Hebrew"]

/**
 * TODO: move this to another file. How can I make this global?
 * Whenever I put it in 'toggle_btns.js' and then in App.js insert the following <script> tag...
 *  <script src="./js/toggle_btns.js"></script>
 * It doesn't work!
 * But when I put the event listener here, it works...
 * How can I make this event listener global?
 */
$(".toggle-btn").click(function() {
    // user clicked on a toggle btn...
    let btn = this;
    // console.log(btn);
    
    // 1) find out which screen should be displayed
    let screen_to_show = btn.id.toString().split('-')[2];
    let screen = document.getElementById(screen_to_show);
    // console.log(screen_to_show);
    // console.log(screen);

    // 2) make sure no buttons or screens are selected
    let btns = document.getElementsByClassName('toggle-btn');
    let screens = document.getElementsByClassName('screen');
    // console.log(btns);
    // console.log(screens);
    for (let i = 0; i < btns.length; i++) {
        let b = btns[i];
        let s = screens[i];
        b.classList.remove('selected');
        s.classList.remove('selected');
    }

    // 3) now display the screen the user requested
    screen.classList.add('selected');
    btn.classList.add('selected');
});


export const post = () => (
    <div id="Language-notes-blogpost" className="btns-and-screens">
        <div className="toggle-btns-container">
            {btns.map(language => {
                let selected = (language == 'Nepali') ? "selected" : "";
                return <div className={`toggle-btn ${selected}`} id={`Btn-ToggleSection-${language}`}>{language}</div>
            })}
        </div>

        {/* Nepali */}
        <div id="Nepali" className='screen language-container selected'>
            {nepali.map(section => {
                let language = 'Nepali';
                let title = section['Title'];
                let id = `${language}-${title}`;
                let content = section['Content'];

                return <div className='language-section' id={id}>
                    <p className='lanuguage-section-title'>{title}</p>
                    
                    <div className="language-container-1st-row">
                        <span className='th-td'>English</span>
                        <span className='th-td'>{language}</span>
                        <span className='th-td'>Pronounciation</span>
                        <span className='th-td'>More info...</span>
                    </div>

                    {content.map(phrase => {
                        return <div className="language-phrase">
                            <span className='english-td'>{phrase["English"]}</span>
                            <span className='translation-td'>{phrase["Translation"]}</span>
                            <span className='pronunciation-td'>{phrase["Pronunciation"]}</span>
                            <span className='moreInfo-td'>{phrase["More info"]}</span>
                        </div>
                    })}
                </div>
            })}
        </div>

        {/* Tibetan */}
        <div id="Tibetan" className="screen language-container">
            {tibetan.map(section => {
                let language = 'Tibetan'
                let title = section['Title'];
                let id = `${tibetan}-${title}`;
                let content = section['Content'];
                
                return <div className='language-section' id={id}>
                    <p className='lanuguage-section-title'>{title}</p>
                    
                    <div className="language-container-1st-row">
                        <span className='th-td'>English</span>
                        <span className='th-td'>{language}</span>
                        <span className='th-td'>Pronounciation</span>
                        <span className='th-td'>More info...</span>
                    </div>

                    {content.map(phrase => {
                        return <div className="language-phrase">
                            <span className='english-td'>{phrase["English"]}</span>
                            <span className='translation-td'>{phrase["Translation"]}</span>
                            <span className='pronunciation-td'>{phrase["Pronunciation"]}</span>
                            <span className='moreInfo-td'>{phrase["More info"]}</span>
                        </div>
                    })}
                </div>
            })}
        </div>

        <div id="Japanese" className="screen language-container">
            
        </div>

        <div id="Chinese" className="screen language-container">
            
        </div>

        <div id="French" className="screen language-container">
            
        </div>

        <div id="Hindi" className="screen language-container">
            
        </div>

        <div id="Hebrew" className="screen language-container">
            
        </div>
    </div>
)
