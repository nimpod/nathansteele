import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 11, "title": "我昨晚夢見你了" },
    { "rating": 9, "title": "她還想入非非呢" },
    { "rating": 11, "title": "我永遠不會忘記你" },
    { "rating": 9, "title": "可見光" },
    { "rating": 9, "title": "捕夢網" },
];

const themes = [
    "Melancholic",
    "Eerie",
    "Spooky",
];

const date_of_review = "June 10, 2025";

export const review = () => (
    <div className='review-content'>

        <div className="review-albumThemes">
            <div className='themes list-of-tags'>
                {themes.map(theme => {
                    return <span className='theme-tag' key={theme}>
                        {theme}
                    </span>
                })}
            </div>
        </div>

        <div className="review-main">
            <p>
                The artists name 輕描淡寫 [Qīng Miáo Dàn Xiě] is a Mandarin phrase, it roughly translates to "describe lightly / to understate” — i.e., to portray something with gentle, minimal detail.
                The album title 小圈子 [xiǎo quānzi] is a Mandarin phrase, it roughly translates to “small social circle/clique”. It refers to a small, closed group of people or social circle.
                Despite the references to Chinese Mandarin, the artist is actually from Iceland.
            </p>

            <p>
                The album is purely instrumental, synth-based with field recordings and brief vocal samples in Mandarin Chinese.
                Nevertheless, this music is sublime - incredibely mesmerising, dreamy, melancholic. The whole album flies by whenever I put it on.
            </p>
        </div>

        <div className="review-trackRatings">
            <TemplateTracklistComponent tracklist={tracklist} />
        </div>

        <div className="review-summary">
            <p>
            </p>
        </div>

        {/*
        <div className="review-footer">
            <p>
                Nathan Steele | {date_of_review}
            </p>
        </div>
        */}
    </div>
)