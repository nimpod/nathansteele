import React from 'react';
import { time_period_options } from '../../js/enums';
import { ReactComponent as ArrowDownIcon } from "../../icons/arrowDown.svg";
import { toggle_dropdown_list } from '../../js/helpers.js';

/**
 * Poster image
 * @param {*} props 
 * @returns 
 */
function TopTracksList(props) {
    let list_count = Object.keys(props.list).length;

    return (
        <div className='top-tracks-list-container custom-card'>
            {/* Title */}
            <div className='card-title'>
                <span>My {list_count} most listened songs</span>
                <div className='more-info'>
                    <span>*since October 2020</span>
                </div>
            </div>

            {/* filter buttons */}
            <div className='btns'>
                {/* Time period */}
                <div className='filter-by-timePeriod-btn filter-by-something-container'>
                    <div className='dropdown-list-timePeriod-btn dropdown-list-btn' onClick={(e) => toggle_dropdown_list(e, 'dropdown-list-timePeriod')}>
                        <span>All time</span>
                        <ArrowDownIcon className='invertable-icon' />
                    </div>
                    <div className='dropdown-list-timePeriod dropdown-list'>
                        <div className='dropdown-list-title'>Filter by time period</div>
                        {
                            time_period_options.map((time_period => {
                                return <div className="btn tracks-filter-by-timePeriod-btn" key={time_period} onClick={(e) => props.filter_by_time_period(e, time_period)}>
                                    <span className='timePeriod-text'>{time_period}</span>
                                </div>
                            }))
                        }
                    </div>
                </div>
            </div>
        
            {/* Divider */}
            <div className='card-divider'></div>

            {/* Column names */}
            <div className='top-tracks-list-columnNames'>
                <div className='col position-th'>#</div>
                <div className='col'></div>
                <div className='col play-count-th'>Scrobbles</div>
            </div>

            {/* Actual list */}
            <div className='top-tracks-list'>
                {props.list.map(t => {
                    return <a className='track-container' href={t.lastfm_track_url} target="_blank" id={`track-${t.position}`} data-playcount={t.play_count} key={t.lastfm_track_url}>
                        <div className='col position'>{t.position}</div>
                        <div className='col track-info'>
                            {/*
                            <img className='album-cover' src={t.album_cover} width={30} height={30} />
                            */}
                            <div className='artist-and-track-name-container'>
                                <span className='track-name'>{t.track_name}</span>
                                <span className='artist-name'>{t.artist_name}</span>
                            </div>
                        </div>
                        <div className='col play-count'>
                            <span>{t.play_count}</span>
                        </div>
                    </a>
                })}
            </div>
        </div>
    )
}

export default TopTracksList
