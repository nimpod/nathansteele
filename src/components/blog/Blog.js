import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { connect}  from 'react-redux'

class Blog extends Component {

    render() {
        const { posts } = this.props;       // json data from redux data store
        console.log(posts);
        
        const postsDisplayed = posts.map(p => {
            return (                
                <tr key={p.id}>
                    <td> {p.id} </td>
                    <td> <Link to={'/blog/' + p.id}>{p.title}</Link> </td>
                    <td> {p.date} </td>
                    <td> 
                        {p.tags.split(';').map(function(tag, index) {
                            if (tag) {
                                return <div className="tag" key={index} >
                                    <span className={tag}>
                                        { tag }
                                    </span> 
                                </div>
                            }
                        })}
                    </td>
                </tr>
            )
        })

        return(
            <div className="page-wrapper blog">
                <h2 className="page-title center-me">Thoughts, tutorials & more!</h2>
                <div className="posts-container">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Date</th>
                                <th>Tags</th>
                            </tr>
                        </thead>
                        <tbody>
                            { postsDisplayed }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

}

/**
 * [function: Connect this React component to the Redux data store]
 * @param {*} state 
 */
const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Blog)