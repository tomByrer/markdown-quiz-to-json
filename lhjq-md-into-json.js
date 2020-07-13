// github.com/lydiahallie/javascript-questions or similar format into JSON
// API v1.0

exports.lhjqMDintoJSON = function( quizMD ) {
	const reEntry = /---\n\n###### (?<idx>\d+). (?<question>.+)\n(?:\n```(?<codeLang>[a-z]+)\n(?<code>[\s\S]+?)(?:\n```\n))?\n(?<optionList>[\s\S]+?)(?:\n<details><summary><b>Answer<\/b><\/summary>\n<p>\n\n#### Answer: )(?<answer>[ABCDEF])\n\n(?<reason>.+[\s\S]*?)\n\n<\/p>\n<\/details>/gm
	const reoptionList = /(?<optionIdx>[ABCDEF]): (?<option>[\s\S]+?)\n/gm
	let quizEntries = [...quizMD.matchAll(reEntry)]
	let quizFormatted = []
	let optionREresp = []
	let optionArr = [] //option [answers] Array
	let accuracy = 0

	// https://2ality.com/2017/05/regexp-named-capture-groups.html
	for (const [i,	// Index of the `for` loop
		{groups: {	// named capture GROUPs from our fancy regex
			idx,	// if an entry wasn't found by the regex, then i & idx won't have pairty
			question,
			codeLang,	// not all entries will have codeblocks
			code,
			optionList, // will be split into array
			answer,	// letter to match in options
			reason,
		}}] of quizEntries.entries()) {

			optionREresp = [...optionList.matchAll(reoptionList)]
			optionArr = []

				for (const [i,	// Index of the `for` loop
				{groups: {	// named capture GROUPs from our fancy regex
					optionIdx,
					option,
				}}] of optionREresp.entries()) {
					accuracy  = (optionIdx === answer) ? 1 : 0
					optionArr.push({
						option,
						accuracy,  // 0=fail, 1=pass, 0.5=partly true
					})
				}
			quizFormatted.push({
				idx,
				question,
				codeLang,
				code,
				options: optionArr,
				reason,
			})
	}
	return quizFormatted
}
