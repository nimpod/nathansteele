import React from 'react';

export default function DataTable({ data }) {
    // get list of the columns
    const columns = data[0] && Object.keys(data[0]);

    return <table cellPadding={0} cellSpacing={0}>
        <thead>
            {data[0] && columns.map(heading => <th>{heading}</th>)}
        </thead>
        <tbody>
            {data.map(row => <tr>
                {
                    columns.map(column => <td>{row[column]}</td>)
                }
            </tr>)}
        </tbody>
    </table>
}