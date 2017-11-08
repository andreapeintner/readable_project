import React from 'react'
import CategoryList from './CategoryList'
import SortTool from './SortTool'
import Photo from './Photo'

class Grid extends React.Component {
    render() {
        const {post, comment} = this.props
        return (
            <div>
                <CategoryList 
                    {...this.props}
                    />
                <SortTool />
                <div className="photo-grid">
                    {this.props.posts.map((post, i) => 
                        <Photo 
                            {...this.props} 
                            key={i}
                            i={i}
                            post={post}
                        />
                    )}
                </div>
            </div>
        )
    }
}

export default Grid
