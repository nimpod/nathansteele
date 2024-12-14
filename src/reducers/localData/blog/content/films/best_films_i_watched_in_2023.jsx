import React from 'react';
import { screenshots } from '../../../films/film_reviews';


export const post = () => (
    <div className='best-films-i-watched-this-year'>
        <div className='intro-text blog-subsection' id='section1'>
            <h3 className='subgroup-title'></h3>
            <div className='all-screenshots-together'>
                <img src={screenshots.CHILDREN_OF_THE_SEA[0]}></img>
                <img src={screenshots.BIG_FISH_AND_BEGONIA[0]}></img>
                <img src={screenshots.ANGELS_EGG[0]}></img>
                <img src={screenshots.THE_SECRET_WORLD_OF_ARRIETTY[0]}></img>
                <img src={screenshots.OBLIVION_ISLAND[0]}></img>
                
                <img src={screenshots.CHILDREN_OF_THE_SEA[17]}></img>
                <img src={screenshots.BIG_FISH_AND_BEGONIA[1]}></img>
                <img src={screenshots.ANGELS_EGG[1]}></img>
                <img src={screenshots.THE_SECRET_WORLD_OF_ARRIETTY[1]}></img>
                <img src={screenshots.OBLIVION_ISLAND[1]}></img>
            </div>
            <p>I watched <b>520</b> films in 2023... That's a lot of films...</p>
            <p>However, only <b>154</b> of those I actually enjoyed (i.e. rated somewhere between 7.5 - 10.0). That's a <b>29.6% success rate</b> of finding a good film this year.</p>
            <p>
                You can find the full 154-size list <a href="https://boxd.it/lTjdI" target='_blank'>here</a>.
                In this blog post, I will give a brief overview of the top 10 from my list.
            </p>
            <p>
                If it wasn't obvious already, I was really into Japanese cinema this year... I watched 186 Japanese films, vs 218 English films.
                My favourite English film I watched this year was 'In Fabric', an absurd horror film that I loved (13th in my list).
            </p>
            <div className='rating-distributions'>
                <div>
                    <p className='r10s'>10's</p>
                    <p className='r9s'>9's</p>
                    <p className='r8s'>8's</p>
                </div>
                <div>
                    <p className='r10s-num'>1</p>
                    <p className='r9s-num'>8</p>
                    <p className='r8s-num'>62</p>
                </div>
            </div>
            <p className='note'>Disclaimer: this is <b>NOT a 'best 10 films of 2023 list'</b>, this is simply <b>a list of the '10 best films that I watched in 2023'.</b> 
                The release year of these films has no bearing on their place in this list.
                I personally don't see the point of making 'best films of 2023' lists, when you are bound to change your opinion on the arbitary ordering in a few months,
                not to mention how many films are out there that you've never heard of and will likely never see, before potentially discovering it several years down the line leaving your old lists outdated.
            </p>
        </div>

        {/* #1 */}
        <div className='blog-subsection' id='film1'>
            <h3 className='subgroup-title'>
                <span className='film-pos'>#1</span>
                <span className='film-rating'>10/10</span>
                <span className='film-title'>Children of the Sea</span>
            </h3>
            <img src={screenshots.CHILDREN_OF_THE_SEA[0]}></img>
            <div className='details'>
                <div title='Year of release'><p>2019</p></div>
                <div title='Genres'><p>Animation; Fantasy; Mystery; Adventure</p></div>
                <div title='Language'><p>Japanese</p></div>
                <div title='Director'><p>Ayumu Watanabe</p></div>
                <div title='Duration'><p>110 mins</p></div>
            </div>
            <p>
                Every crevice of this film oozes ethereal cosmic beauty. Absolutely essential viewing if you are interested in <b>astronomy</b>, <b>spirituality</b>, 
                the <b>mysteries of the ocean</b>, the <b>origins of life</b>, the <b>universe</b>, and combining all of that with <b>unique stylish visual art</b>.
            </p>
            <p>This is the only 10/10 I gave this year.</p>
            <a className='custom-btn-link' target='_blank' href="https://nimpod.github.io/nathansteele/#/films/childrenofthesea-lwe6-review">Full review</a>
        </div>

        {/* #2 */}
        <div className='blog-subsection' id='film2'>
            <h3 className='subgroup-title'>
                <span className='film-pos'>#2</span>
                <span className='film-rating'>9.5/10</span>
                <span className='film-title'>Tokyo Vampire Hotel</span>
            </h3>

            <div className='details'>
                <div title='Year of release'><p>2017</p></div>
                <div title='Genres'><p>Horror; Fantasy; Action; Mystery</p></div>
                <div title='Language'><p>Japanese</p></div>
                <div title='Director'><p>Sion Sono</p></div>
                <div title='Duration'><p>142 mins</p></div>
            </div>
            <p>
                Absolutely batshit crazy Sono film. It's wild how unknown this film is and how underrated it is. 
                Only 548 people have seen it according to IMDB, despite it being released 6 years ago. 
                That's an average of 7 new viewers per month. Crazy! I am here to try and spread awareness of this amazing film!
            </p>
            <a className='custom-btn-link' target='_blank' href="https://nimpod.github.io/nathansteele/#/films/childrenofthesea-lwe6-review">Full review</a>
        </div>

        {/* #3 */}
        <div className='blog-subsection' id='film3'>
            <h3 className='subgroup-title'>
                <span className='film-pos'>#3</span>
                <span className='film-rating'>9.5/10</span>
                <span className='film-title'>Big Fish and Begonia</span>
            </h3>
            <img src={screenshots.BIG_FISH_AND_BEGONIA[0]}></img>
            <div className='details'>
                <div title='Year of release'><p>2016</p></div>
                <div title='Genres'><p>Animation; Fantasy; Adventure</p></div>
                <div title='Language'><p>Chinese</p></div>
                <div title='Director'><p>Xuan Liang</p></div>
                <div title='Duration'><p>101 mins</p></div>
            </div>
            <p>
                The animation style of this film is incredibly attractive and majestic, 
                the atmosphere enveloped me, 
                the soundtrack has since been engraved in my mind, 
                and some aspects of the narrative have really resonated with me in terms of embracing life and death.
            </p>
            <a className='custom-btn-link' target='_blank' href="https://nimpod.github.io/nathansteele/#/films/childrenofthesea-lwe6-review">Full review</a>
        </div>

        {/* #4 */}
        <div className='blog-subsection' id='film4'>
            <h3 className='subgroup-title'>
                <span className='film-pos'>#4</span>
                <span className='film-rating'>9.5/10</span>
                <span className='film-title'>Angel's Egg</span>
            </h3>
            <img src={screenshots.ANGELS_EGG[0]}></img>
            <div className='details'>
                <div title='Year of release'><p>1985</p></div>
                <div title='Genres'><p>Animation; Fantasy; Mystery</p></div>
                <div title='Language'><p>Japanese</p></div>
                <div title='Director'><p>Mamoru Oshii</p></div>
                <div title='Duration'><p>71 mins</p></div>
            </div>
            <p>

            </p>
            <a className='custom-btn-link' target='_blank' href="https://nimpod.github.io/nathansteele/#/films/childrenofthesea-lwe6-review">Full review</a>
        </div>

        {/* #5 */}
        <div className='blog-subsection' id='film5'>
            <h3 className='subgroup-title'>
                <span className='film-pos'>#5</span>
                <span className='film-rating'>9.5/10</span>
                <span className='film-title'>xxxHolic</span>
            </h3>
            <div className='details'>
                <div title='Year of release'><p>2022</p></div>
                <div title='Genres'><p>Thriller; Mystery; Fantasy; Drama</p></div>
                <div title='Language'><p>Japanese</p></div>
                <div title='Director'><p>Mika Ninagawa</p></div>
                <div title='Duration'><p>110 mins</p></div>
            </div>
            <p>

            </p>
            <a className='custom-btn-link' target='_blank' href="https://nimpod.github.io/nathansteele/#/films/childrenofthesea-lwe6-review">Full review</a>
        </div>

        {/* #6 */}
        <div className='blog-subsection' id='film6'>
            <h3 className='subgroup-title'>
                <span className='film-pos'>#6</span>
                <span className='film-rating'>9/10</span>
                <span className='film-title'>The Secret World of Arrietty</span>
            </h3>
            <img src={screenshots.THE_SECRET_WORLD_OF_ARRIETTY[0]}></img>
            <div className='details'>
                <div title='Year of release'><p>2010</p></div>
                <div title='Genres'><p>Animation; Fantasy; Family; Drama</p></div>
                <div title='Language'><p>Japanese</p></div>
                <div title='Director'><p>Hiromasa Yonebayashi</p></div>
                <div title='Duration'><p>94 mins</p></div>
            </div>
            <p>

            </p>
            <a className='custom-btn-link' target='_blank' href="https://nimpod.github.io/nathansteele/#/films/childrenofthesea-lwe6-review">Full review</a>
        </div>

        {/* #7 */}
        <div className='blog-subsection' id='film7'>
            <h3 className='subgroup-title'>
                <span className='film-pos'>#7</span>
                <span className='film-rating'>9/10</span>
                <span className='film-title'>Oblivion Island: Haruka and the Magic Mirror</span>
            </h3>
            <img src={screenshots.OBLIVION_ISLAND[0]}></img>
            <div className='details'>
                <div title='Year of release'><p>2009</p></div>
                <div title='Genres'><p>Animation; Adventure; Fantasy</p></div>
                <div title='Language'><p>Japanese</p></div>
                <div title='Director'><p>Shinsuke Sato</p></div>
                <div title='Duration'><p>98 mins</p></div>
            </div>
            <p>
            
            </p>
        </div>

        {/* #8 */}
        <div className='blog-subsection' id='film8'>
            <h3 className='subgroup-title'>
                <span className='film-pos'>#8</span>
                <span className='film-rating'>9/10</span>
                <span className='film-title'>Flying Colours</span>
            </h3>
            <img src={screenshots.OBLIVION_ISLAND[0]}></img>
            <div className='details'>
                <div title='Year of release'><p>2015</p></div>
                <div title='Genres'><p>Drama; Comedy</p></div>
                <div title='Language'><p>Japanese</p></div>
                <div title='Director'><p>Nobuhiro Doi</p></div>
                <div title='Duration'><p>117 mins</p></div>
            </div>
            <p>
            
            </p>
        </div>

        {/* #9 */}
        <div className='blog-subsection' id='film9'>
            <h3 className='subgroup-title'>
                <span className='film-pos'>#9</span>
                <span className='film-rating'>9/10</span>
                <span className='film-title'>Last Sunrise</span>
            </h3>
            <img src={screenshots.OBLIVION_ISLAND[0]}></img>
            <div className='details'>
                <div title='Year of release'><p>2019</p></div>
                <div title='Genres'><p>Sci-fi; Drama; Adventure</p></div>
                <div title='Language'><p>Chinese</p></div>
                <div title='Director'><p>Wen Ren</p></div>
                <div title='Duration'><p>103 mins</p></div>
            </div>
            <p>

            </p>
        </div>

        {/* #10 */}
        <div className='blog-subsection' id='film10'>
            <h3 className='subgroup-title'>
                <span className='film-pos'>#10</span>
                <span className='film-rating'>8.5/10</span>
                <span className='film-title'>Ritual</span>
            </h3>
            <img src={screenshots.OBLIVION_ISLAND[0]}></img>
            <div className='details'>
                <div title='Year of release'><p>2000</p></div>
                <div title='Genres'><p>Drama; Romance</p></div>
                <div title='Language'><p>Japanese</p></div>
                <div title='Director'><p>Hideaki Anno</p></div>
                <div title='Duration'><p>128 mins</p></div>
            </div>
            <p>

            </p>
        </div>
    </div>
)