import { useEffect } from 'react'
import { withRouter } from 'react-router-dom'


/**
 * Scroll back to the top of the home page after navigating between other pages. Somehow it's not the default operation...
 * @param {} history 
 */
function ScrollToTop({ history }) {
    useEffect(() => {
        const unlisten = history.listen(() => {
            window.scrollTo(0, 0);
        });
        return () => {
            unlisten();
        }
    }, []);

    return (null);
}

export default withRouter(ScrollToTop);
