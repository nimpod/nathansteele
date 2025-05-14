import React, {Component} from 'react'

// SCD = SCrobble Data (abbreviating it to make code more readable)
let SCD = require('./scrobble_data.json');
let _2024 = SCD["2024"];
let _2023 = SCD["2023"];
let _2022 = SCD["2022"];
let _2021 = SCD["2021"];

class ScrobbleDataSummary extends Component {
    render() {
        return(
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
                    <tr>
                        <td>2024</td>
                        <td data-totalscrobbles={_2024["total_scrobbles"]}>{_2024["total_scrobbles"]}</td>
                        <td data-tracksscrobbled={_2024["tracks_scrobbled"]}>{_2024['tracks_scrobbled']}</td>
                        <td data-scrobblesperday={_2024["scrobbles_per_day_avg"]}>{_2024["scrobbles_per_day_avg"]}</td>
                        <td data-artistsscrobbled={_2024["artists_scrobbled"]}>{_2024["artists_scrobbled"]}</td>
                        <td data-albumsscrobbled={_2024["albums_scrobbled"]}>{_2024["albums_scrobbled"]}</td>
                    </tr>
                    <tr>
                        <td>2023</td>
                        <td data-totalscrobbles={_2023["total_scrobbles"]}>{_2023["total_scrobbles"]}</td>
                        <td data-tracksscrobbled={_2023["tracks_scrobbled"]}>{_2023["tracks_scrobbled"]}</td>
                        <td data-scrobblesperday={_2023["scrobbles_per_day_avg"]}>{_2023["scrobbles_per_day_avg"]}</td>
                        <td data-artistsscrobbled={_2023["artists_scrobbled"]}>{_2023["artists_scrobbled"]}</td>
                        <td data-albumsscrobbled={_2023["albums_scrobbled"]}>{_2023["albums_scrobbled"]}</td>
                    </tr>
                    <tr>
                        <td>2022</td>
                        <td data-totalscrobbles={_2022["total_scrobbles"]}>{_2022["total_scrobbles"]}</td>
                        <td data-tracksscrobbled={_2022["tracks_scrobbled"]}>{_2022["tracks_scrobbled"]}</td>
                        <td data-scrobblesperday={_2022["scrobbles_per_day_avg"]}>{_2022["scrobbles_per_day_avg"]}</td>
                        <td data-artistsscrobbled={_2022["artists_scrobbled"]}>{_2022["artists_scrobbled"]}</td>
                        <td data-albumsscrobbled={_2022["albums_scrobbled"]}>{_2022["albums_scrobbled"]}</td>
                    </tr>
                    <tr>
                        <td>2021</td>
                        <td data-totalscrobbles={_2021["total_scrobbles"]}>{_2021["total_scrobbles"]}</td>
                        <td data-tracksscrobbled={_2021["tracks_scrobbled"]}>{_2021["tracks_scrobbled"]}</td>
                        <td data-scrobblesperday={_2021["scrobbles_per_day_avg"]}>{_2021["scrobbles_per_day_avg"]}</td>
                        <td data-artistsscrobbled={_2021["artists_scrobbled"]}>{_2021["artists_scrobbled"]}</td>
                        <td data-albumsscrobbled={_2021["albums_scrobbled"]}>{_2021["albums_scrobbled"]}</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default ScrobbleDataSummary
