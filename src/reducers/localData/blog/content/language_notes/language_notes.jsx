import React  from 'react';
import $ from "jquery";
let nepali_json = require('./nepali.json');
console.log(nepali_json);
/**
 * TODO: move this to another file. How can I make this global?
 * Whenever I put it in 'toggle_btns.js' and then in App.js insert the following <script> tag...
 *  <script src="./js/toggle_btns.js"></script>
 * It doesn't work!
 * But when I put the event listener here, it works...
 * How can I make this event listener global?
 */
$(".toggle-btn").on('click', function() {
    // user clicked on a toggle btn...
    let btn = this;
    // console.log(btn);
    
    // 1) find out which screen should be displayed
    let screen_to_show = btn.id.toString().split('-')[2];
    let screen = document.getElementById(screen_to_show);
    console.log(screen_to_show);
    console.log(screen);

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
            <div className="toggle-btn selected" id="Btn-ToggleSection-Nepali">Nepali</div>
            <div className="toggle-btn" id="Btn-ToggleSection-Tibetan">Tibetan</div>
            <div className="toggle-btn" id="Btn-ToggleSection-Japanese">Japanese</div>
            <div className="toggle-btn" id="Btn-ToggleSection-Chinese">Chinese</div>
            <div className="toggle-btn" id="Btn-ToggleSection-French">French</div>
            <div className="toggle-btn" id="Btn-ToggleSection-Hindi">Hindi</div>
            <div className="toggle-btn" id="Btn-ToggleSection-Hebrew">Hebrew</div>
        </div>

        <div id="Nepali" className="screen language-container selected">
            <div id="Nepali-Greetings" class='language-section'>
                <p class='lanuguage-section-title'>Basic greetings</p>
                
                <div className="language-container-1st-row">
                    <span className='th-td'>English</span>
                    <span className='th-td'>Nepali</span>
                    <span className='th-td'>Pronounciation</span>
                    <span className='th-td'>More info...</span>
                </div>

                {
                    <div className={``}>
                        {nepali_json['Basic greetings'].map(phrase => {
                            console.log(phrase);
                            return <div className="language-phrase">
                                <span>{phrase["English"]}</span>
                                <span>{phrase["Translation"]}</span>
                                <span>{phrase["Pronunciation"]}</span>
                                <span>{phrase["More info"]}</span>
                            </div>
                        })}
                    </div>
                }
                
                
            </div>
        </div>

        <div id="Tibetan" className="screen language-container">
            <div id="Tibetan-Greetings" className='langauge-section'>
                <span class='lanuguage-section-title'>Greetings</span>
                    
                <div className="language-phrase">
                    <p>Alright m8</p>
                    <p>Tashi delai</p>
                    <p>Tashi deelay</p>
                    <p>Used when greeting 1 person</p>
                </div>
            </div>
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