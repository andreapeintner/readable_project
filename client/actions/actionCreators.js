import { fetchCategories } from '../utils/api'

export const GET_CATEGORY = 'GET_CATEGORY'

// recieve categories
export function getCategory(categories) {
    return {
        type: GET_CATEGORY,
        categories
    }
}

//get categories from the server
export function getCategories() {
    return (dispatch) => {
        dispatch({
            type: 'FETCHING_CATEGORIES'
        })
        fetchCategories().then(({ categories })  => {
            dispatch(getCategory(categories))
        }).catch( error => {
            dispatch({
                type: 'ERROR'
            })
        })
    }
}


// get posts
export function getAllPosts() {
    return {
        type: GET_ALL_POSTS
    }
}

//increment (later vote)
export function incrementLikes(index) {
    return {
        type: 'INCREMENT_LIKES',
        index
    }
}

//add comment
export function addComment(postId, author, comment) {
    return {
        type: 'ADD_COMMENT',
        postId,
        author,
        comment
    }
}

//delete comment
export function deleteComment(postId, i) {
    return {
        type: 'DELETE_COMMENT',
        i,
        postId
    }
}


//edit comment (later)
export function editComment(postId, author, comment) {
    return {
        type: 'EDIT_COMMENT',
        postId,
        author,
        comment
    }
}
