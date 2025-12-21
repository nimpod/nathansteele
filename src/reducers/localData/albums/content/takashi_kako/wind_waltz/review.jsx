import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 10, "title": "風のワルツ (ロング・ヴァージョン)" },
    { "rating": 10, "title": "水辺の生活" },
    { "rating": 10, "title": "黄昏のワルツ (ピアノ・ソロ・ヴァージョン)" },
    { "rating": 8, "title": "君と風と" },
    { "rating": 10,  "title": "ノスタルジックなワルツ" },
    { "rating": 10, "title": "森の精" },
    { "rating": 10, "title": "霧につつまれた街" },
    { "rating": 8, "title": "光と影のバラード" },
    { "rating": 8, "title": "夜明け" },
    { "rating": 8, "title": "摩周湖" },
    { "rating": 10, "title": "空と、波と" },
];

const themes = [
    "Melancholic"
];

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