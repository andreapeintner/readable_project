import React from 'react'
import { Link } from 'react-router'

class Single_Category extends React.Component {
// const Single_Category = React.createClass({
    render() {
        return (
            <div>
                <div className="categories">
                    <h2>Category</h2>
                </div>
                <div className="photo-grid">
                    this is the grid of the certain category
                </div>
            </div>
        )
    }
}

export default Single_Category
