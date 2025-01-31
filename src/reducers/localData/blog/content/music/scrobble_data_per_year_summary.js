import React, {Component} from 'react'

// SCD = SCrobble Data (abbreviating it to make code more readable)
let SCD = require('./scrobble_data.json');

class ScrobbleDataSummary extends Component {
    render() {
        return(
            <table>
                <thead>
                    <th>Year</th>
                    <th>Total scobbles</th>
                    <th>Tracks scrobbled</th>
                    <th>Scrobbles per day avg</th>
                    <th>Artists scrobbled</th>
                    <th>Albums scrobbled</th>
                </thead>
                <tbody>
                    <tr>
                        <td>2024</td>
                        <td data-totalscrobbles={SCD["2024"]["total_scrobbles"]}>{SCD["2024"]["total_scrobbles"]}</td>
                        <td data-tracksscrobbled={SCD["2024"]["tracks_scrobbled"]}>{SCD["2024"]["tracks_scrobbled"]}</td>
                        <td data-scrobblesperday={SCD["2024"]["scrobbles_per_day_avg"]}>{SCD["2024"]["scrobbles_per_day_avg"]}</td>
                        <td data-artistsscrobbled={SCD["2024"]["artists_scrobbled"]}>{SCD["2024"]["artists_scrobbled"]}</td>
                        <td data-albumsscrobbled={SCD["2024"]["albums_scrobbled"]}>{SCD["2024"]["albums_scrobbled"]}</td>
                    </tr>
                    <tr>
                        <td>2023</td>
                        <td data-totalscrobbles={SCD["2023"]["total_scrobbles"]}>{SCD["2023"]["total_scrobbles"]}</td>
                        <td data-tracksscrobbled={SCD["2023"]["tracks_scrobbled"]}>{SCD["2023"]["tracks_scrobbled"]}</td>
                        <td data-scrobblesperday={SCD["2023"]["scrobbles_per_day_avg"]}>{SCD["2023"]["scrobbles_per_day_avg"]}</td>
                        <td data-artistsscrobbled={SCD["2023"]["artists_scrobbled"]}>{SCD["2023"]["artists_scrobbled"]}</td>
                        <td data-albumsscrobbled={SCD["2023"]["albums_scrobbled"]}>{SCD["2023"]["albums_scrobbled"]}</td>
                    </tr>
                    <tr>
                        <td>2022</td>
                        <td data-totalscrobbles={SCD["2022"]["total_scrobbles"]}>{SCD["2022"]["total_scrobbles"]}</td>
                        <td data-tracksscrobbled={SCD["2022"]["tracks_scrobbled"]}>{SCD["2022"]["tracks_scrobbled"]}</td>
                        <td data-scrobblesperday={SCD["2022"]["scrobbles_per_day_avg"]}>{SCD["2022"]["scrobbles_per_day_avg"]}</td>
                        <td data-artistsscrobbled={SCD["2022"]["artists_scrobbled"]}>{SCD["2022"]["artists_scrobbled"]}</td>
                        <td data-albumsscrobbled={SCD["2022"]["albums_scrobbled"]}>{SCD["2022"]["albums_scrobbled"]}</td>
                    </tr>
                    <tr>
                        <td>2021</td>
                        <td data-totalscrobbles={SCD["2022"]["total_scrobbles"]}>{SCD["2021"]["total_scrobbles"]}</td>
                        <td data-tracksscrobbled={SCD["2021"]["tracks_scrobbled"]}>{SCD["2021"]["tracks_scrobbled"]}</td>
                        <td data-scrobblesperday={SCD["2021"]["scrobbles_per_day_avg"]}>{SCD["2021"]["scrobbles_per_day_avg"]}</td>
                        <td data-artistsscrobbled={SCD["2021"]["artists_scrobbled"]}>{SCD["2021"]["artists_scrobbled"]}</td>
                        <td data-albumsscrobbled={SCD["2021"]["albums_scrobbled"]}>{SCD["2021"]["albums_scrobbled"]}</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default ScrobbleDataSummary
