import React from 'react';


const AllScreenshotsComponent = (screenshots) => {
    let screenshotsArr = screenshots['screenshots'];

    return (
        (screenshotsArr.length > 0) ?
        <div className='all-screenshots'>
        {
            screenshotsArr.slice(3, screenshotsArr.length).map(((sc, i) => {
                return <div className="screenshot" key={sc}>
                    <img src={sc} alt={`${sc}`} />
                </div>
            }))
        }
        </div>
        :
        <div>No more screenshots</div>
    )
}


export default AllScreenshotsComponent;
