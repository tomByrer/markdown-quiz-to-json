exports.entryInternals = function( quizArr ) {
	newQuestions = [
		"What's the output?",
		"What's the result?",
		"You expect the output to be...?",
		"You believe the result to be which?",
		"What should we get?",
	]
	newLen = newQuestions.length
	let len = quizArr.length
	for( let i=0; i<len; i++ ) {
		if ( quizArr[i].question === "What's the output?" ) {
			quizArr[i].question = newQuestions[Math.floor(Math.random()*newLen)];
		}
		quizArr[i].optionList = shuffleOrder(quizArr[i].options)
	}
	return quizArr
}

// https://javascript.info/task/shuffle
const shuffleOrder = function( array ) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]
  }
}
exports.shuffleOrder = shuffleOrder
