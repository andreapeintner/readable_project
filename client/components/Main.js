import React from 'react'
import { Link } from 'react-router'

class Main extends React.Component {
// const Main = React.createClass({
    render() {
        return (
            <div>
                <h1>
                    <Link to="/">Readable</Link>
                </h1>
                <br/><br/>
                {React.cloneElement(this.props.children, this.props)}
            </div>
        )
    }
}

export default Main
