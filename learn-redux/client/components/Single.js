import React from 'react'
import Photo from './Photo'
import Comments from './Comments'

const Single = React.createClass({
	render() {
		// the :id in the url
		const { postId } = this.props.params
		const i = this.props.posts.findIndex((post) => post.code === postId)
		const post = this.props.posts[i]
		// assign the post's comments to postComments, if none, set it to an empty array
		const postComments = this.props.comments[postId] || []

		return (
			<div className="single-photo">
				<Photo i={i} post={post} {...this.props} />
				<Comments postComments={postComments} {...this.props} />
			</div>
			)
	}
})

export default Single
