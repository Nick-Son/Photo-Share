// a reducer takes in two things

// 1. the action (info on what happened)
// 2. a copy of current state

function posts(state = [], action) {
	console.log('the post will change')
	console.log(state, action)
	return state
}

export default posts