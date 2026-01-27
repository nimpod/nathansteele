import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';

const tracklist = [
    { "rating": 10, "title": "Shrini's Dream" },
    { "rating": 10, "title": "Bending The Rules" },
    { "rating": 10, "title": "Karuna" },
    { "rating": 9, "title": "Mohanam" },
    { "rating": 8, "title": "Giriaj Sudha" },
    { "rating": 9, "title": "Las Palmas" },
    { "rating": 10, "title": "Changay Naino" },
    { "rating": 9, "title": "Sono Mama" },
];

export const review = () => (
    <div className='review-content'>

        <div className="review-main">
            <p>
                The return of Shakti in 2023 was very unexpected.
                Their last album as a group was in 1977 - a long hiatus!
            </p>

            <p>
                Shakti fuse Hindustani classical music with jazz and rock.
                Tabla legend Zakir Hussain is amazing on this album, jazz fusion legend John McLaughlin still sounds great on guitar, and all of the band members are great throughout:
                <ul>
                    <li>John McLaughlin (guitar)</li>
                    <li>Zakir Hussain (tabla)</li>
                    <li>L. Shankar (violin)</li>
                    <li>T.H. Vinayakram (ghatam)</li>
                    <li>Vikku Vinayakram (mridangam)</li>
                </ul>
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/MxF2U5tRarU?si=n8Em4NwhtfUO2adB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            <p>
                I was also pleasantly surpised to see Shakti get more global acclaim when they were hosted on Tiny Desk concert - 
                their video currently has 1.3 million views - 
                hopefully all those people also listened to this album too because it's amazing and one of the best albums of 2023!
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Cx8AaSvH4EQ?si=mGlTkLlMMTozRf37" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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