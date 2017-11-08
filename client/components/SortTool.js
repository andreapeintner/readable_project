import React from 'react'

// const SortTool = React.createClass({
class SortTool extends React.Component {
    render() {
        const SortTypes = ['votescore', 'timestamp']
        return (
            <div className="sort-tool">
                <p>sort by: 
                <select>
                    {SortTypes.map((type) => (
                        <option key={type} value='{type}'>{type}</option>
                    ))}
                </select>
                </p>
            </div>
        )
    }
}

export default SortTool
