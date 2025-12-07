import React from 'react';
import TemplateTracklistComponent from '../../../../../../components/music/TemplateTracklistComponent.jsx';
const tracklist = [
    { "rating": 10, "title": "Sakura" },
    { "rating": 11, "title": "Shiro - Pure White" },
    { "rating": 9, "title": "Nejire - Mad" },
    { "rating": 10, "title": "Kan - Feel" },
    { "rating": 11, "title": "Ningyou - Dolls" },
]

export const review = () => (
    <div className='review-content'>
        <div className="review-intro">
            <p>
                Joe Hisaishi is most well-known for his Studio Ghibli soundtracks - those are fantastic.
                But I believe his best work is beyond Ghibli.
            </p>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/pUkWsPKmto8?si=RNE1sxKonmyx5d0H" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            
            <p>
                Hisaishi-san has made many soundtracks for Takeshi Kitano films.
                Kitano's 2002 film Dolls, is a beautiful, poetic film about love and sacrifice.
                Hisaishi's score perfectly captures the melancholic tone of the film.
                The music is minimalistic, yet deeply emotional. The film wouldn't be the same without it - it's an audio-visual experience we should all experience.
            </p>

            <p>
                It took a while to grow on me, but over the years this soundtrack has risen to become one of my favourite collections of music.
                It has become a companion for me in silent introspective moments in my own life.
                Each song is so memorable, there is no dull moment on the album.
            </p>
            <p>

            </p>
            <p>

            </p>
        </div>

        <div className='review-trackRatings'>
            <TemplateTracklistComponent tracklist={tracklist} />
        </div>

        <div className='review-summary'>
            <p>

            </p>
        </div>
    </div>
)