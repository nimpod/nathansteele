import React  from 'react';


export const post = () => (
    <div id="Language-notes-blogpost">
        <div class="toggle-btns-container">
            <div class="toggle-btn" id="Btn-ToggleSection-Nepali">Nepali</div>
            <div class="toggle-btn" id="Btn-ToggleSection-Tibetan">Tibetan</div>
            <div class="toggle-btn" id="Btn-ToggleSection-Japanese">Japanese</div>
            <div class="toggle-btn" id="Btn-ToggleSection-Chinese">Chinese</div>
            <div class="toggle-btn" id="Btn-ToggleSection-French">French</div>
            <div class="toggle-btn" id="Btn-ToggleSection-Hindi">Hindi</div>
            <div class="toggle-btn" id="Btn-ToggleSection-Hebrew">Hebrew</div>
        </div>

        <div id="Nepali" class="language-container active">
            <div id="Nepali-Greetings">
                <span>Greetings</span>
                
                <div class="language-phrase">
                    <p>Alright m8</p>
                    <p>Namaste</p>
                    <p>Namastaay</p>
                    <p>Used when greeting 1 person</p>
                </div>
                
                <div class="language-phrase">
                    <p>Alright m8</p>
                    <p>Namaskar</p>
                    <p>-</p>
                    <p>Used when greeting multiple people in one go (e.g. beginning of a speech)</p>
                </div>

                <div class="language-phrase">
                    <p>Good morning</p>
                    <p>Subha bihani</p>
                    <p>Subha beehani</p>
                    <p>Valid up until midday</p>
                </div>

                <div class="language-phrase">
                    <p>Good afternoon</p>
                    <p>Subha prabhat</p>
                    <p>-</p>
                    <p></p>
                </div>

                <div class="language-phrase">
                    <p>Good evening</p>
                    <p>Subha sandhya</p>
                    <p>-</p>
                    <p></p>
                </div>

                <div class="language-phrase">
                    <p>Good day</p>
                    <p>Subha din</p>
                    <p>-</p>
                    <p>Can use at any time of day</p>
                </div>

                <div class="language-phrase">
                    <p>Good night</p>
                    <p>Subha ratri</p>
                    <p>-</p>
                    <p></p>
                </div>

                <div class="language-phrase">
                    <p>How are you?</p>
                    <p>Kosta cha? / Tapai bi kosta cha?</p>
                    <p>-</p>
                    <p></p>
                </div>

                <div class="language-phrase">
                    <p>I am fine</p>
                    <p>Thik cha / Malai thik cha</p>
                    <p>Tik cha</p>
                    <p>Basic response to "kosta cha"</p>
                </div>
            </div>
        </div>

        <div id="Tibetan" class="language-container">
            <div id="Tibetan-Greetings">
                <span>Greetings</span>
                    
                <div class="language-phrase">
                    <p>Alright m8</p>
                    <p>Tashi delai</p>
                    <p>Tashi deelay</p>
                    <p>Used when greeting 1 person</p>
                </div>
            </div>
        </div>

        <div id="Japanese" class="language-container">
            
        </div>

        <div id="Chinese" class="language-container">
            
        </div>

        <div id="French" class="language-container">
            
        </div>

        <div id="Hindi" class="language-container">
            
        </div>

        <div id="Hebrew" class="language-container">
            
        </div>
    </div>
)