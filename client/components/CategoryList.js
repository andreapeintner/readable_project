import React from 'react'
import { getCategories } from '../actions/actionCreators'
import { Link } from 'react-router'
import { connect } from 'react-redux'


class CategoryList extends React.Component {

    componentWillMount(){
        this.props.fetchCategories()
    }

    render() {
        // const categoryType = ['React', 'Redux', "Other"]
        const { categories } = this.props

        return (
             <div className="categories">
                <ul className="category-types">
                <div className='categories-nav'>
                    {categories.map((category) => (
                        <button key={category.name} className="ctg_button">
                            {category.name}
                        </button>
                    ))}
                </div>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        categories: state.categories
    }
}
const mapDispatchToProps = dispatch => {
    return {
      fetchCategories: () => dispatch(getCategories())
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)

// export default CategoryList
