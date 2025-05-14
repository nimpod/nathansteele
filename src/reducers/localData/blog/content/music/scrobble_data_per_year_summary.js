import React, {Component} from 'react'
import { Link, withRouter, BrowserRouter } from 'react-router-dom';

import data from './scrobble_data.json';

// get max values for each column
let MAX_total_scrobbles = Math.max(...data.map(yearData => yearData['total_scrobbles']));
let MAX_tracks_scrobbled = Math.max(...data.map(yearData => yearData['tracks_scrobbled']));
let MAX_scrobbles_per_day_avg = Math.max(...data.map(yearData => yearData['scrobbles_per_day_avg']));
let MAX_artists_scrobbled = Math.max(...data.map(yearData => yearData['artists_scrobbled']));
let MAX_albums_scrobbled = Math.max(...data.map(yearData => yearData['albums_scrobbled']));
let MAX_top_track_scrobbles = Math.max(...data.map(yearData => yearData['top_track_scrobbles']));

// component to display the scrobble data in a table
const ScrobbleDataTD = (props) => { 
  return <td>
        <div className="td-inner" style={{width: ((props.val)/props.max)*100 + '%'}}>
            {props.val}
        </div>
    </td>
}


class ScrobbleDataSummary extends Component {
    render() {
        return(
            <BrowserRouter>
            <table className='scrobble-data-summary'>
                <thead>
                    <th>Year</th>
                    <th>Total scobbles</th>
                    <th>Tracks scrobbled</th>
                    <th>Scrobbles per day avg</th>
                    <th>Artists scrobbled</th>
                    <th>Albums scrobbled</th>
                    <th>#1 sc</th>
                </thead>
                <tbody>
                    {data.map(yearData => {
                        let total_scrobbles = yearData['total_scrobbles'];
                        let tracks_scrobbled = yearData['tracks_scrobbled'];
                        let scrobbles_per_day_avg = yearData['scrobbles_per_day_avg'];
                        let artists_scrobbled = yearData['artists_scrobbled'];
                        let albums_scrobbled = yearData['albums_scrobbled'];
                        let top_track_scrobbles = yearData['top_track_scrobbles'];
                        let year = yearData['year'];
                        let id = `#/blog/my_most_listened_songs_of_${year}`;
                        
                        return <tr>
                            <td><Link to={id}>{year}</Link></td>                            
                            <ScrobbleDataTD val={total_scrobbles} max={MAX_total_scrobbles} />
                            <ScrobbleDataTD val={tracks_scrobbled} max={MAX_tracks_scrobbled} />
                            <ScrobbleDataTD val={scrobbles_per_day_avg} max={MAX_scrobbles_per_day_avg} />
                            <ScrobbleDataTD val={artists_scrobbled} max={MAX_artists_scrobbled} />
                            <ScrobbleDataTD val={albums_scrobbled} max={MAX_albums_scrobbled} />
                            <ScrobbleDataTD val={top_track_scrobbles} max={MAX_top_track_scrobbles} />
                        </tr>
                    })}
                </tbody>
            </table>
            </BrowserRouter>
        )
    }
}

export default ScrobbleDataSummary
