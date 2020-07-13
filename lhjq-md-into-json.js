exports.lhjqMDintoJSON = function( quizMD ) {
	const reEntry = /---\n\n###### (?<idx>\d+). (?<question>.+)\n(?:\n```(?<codeLang>[a-z]+)\n(?<code>[\s\S]+?)(?:\n```\n))?\n(?<possibleList>[\s\S]+?)(?:\n<details><summary><b>Answer<\/b><\/summary>\n<p>\n\n#### Answer: )(?<answer>[ABCDEF])\n\n(?<reason>.+[\s\S]*?)\n\n<\/p>\n<\/details>/gm
	const rePossibleList = /(?<possibleIdx>[ABCDEF]): (?<possible>[\s\S]+?)\n/gm
	let quizEntries = [...quizMD.matchAll(reEntry)]
	let quizFormatted = []
	let possibleREresp = []
	let possibleArr = [] //possible [answers] Array
	let exactness = 0

	// https://2ality.com/2017/05/regexp-named-capture-groups.html
	for (const [i,	// Index of the `for` loop
		{groups: {	// named capture GROUPs from our fancy regex
			idx,	// if an entry wasn't found by the regex, then i & idx won't have pairty
			question,
			codeLang,	// not all entries will have codeblocks
			code,
			possibleList, // will be split into array
			answer,	// letter to match in possibles
			reason,
		}}] of quizEntries.entries()) {

			possibleREresp = [...possibleList.matchAll(rePossibleList)]
			possibleArr = []

			for (const [i,	// Index of the `for` loop
			{groups: {	// named capture GROUPs from our fancy regex
				possibleIdx,
				possible,
			}}] of possibleREresp.entries()) {
				exactness  = (possibleIdx === answer) ? 1 : 0
				possibleArr.push({
					p: possible,
					e: exactness,  // 0=fail, 1=pass, 0.5=partly true
				})
			}
		quizFormatted.push({
			i: idx,
			q: question,
			l: codeLang,
			c: code,
			// p: possibleList,
			// a: answer,
			pa: possibleArr,
			r: reason,
		})
	}
	return quizFormatted
}
