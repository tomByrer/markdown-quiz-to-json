# Markdown-Quiz-to-JSON

Tosses a few RegEx and loops at a specifically formatted MarkDown file to spit out a JSON file so custom quiz software can be created easier.  Right now the only format it is comptable with is [lydiahallie/javascript-questions](https://github.com/lydiahallie/javascript-questions), a very popular list of advanced JavaScript questions.

## Instalition

Inside the parent folder where you locally downloaded `lydiahallie/javascript-questions`:
`git clone https://github.com/tomByrer/markdown-quiz-to-json`

## Use

Inside `markdown-quiz-to-json` folder:
`node cli`
 A new 	`quiz.json` should be output.  If you want process another file, edit the `fs.readFileSync` filename.

The key-names should be self-explainitory.   Note that only 1 code example is allowed in the current API.  So you'll have to combine seperate 'files' (eg HTML & CSS) into 1 file.

If the source markdown has a [bad entry](https://github.com/lydiahallie/javascript-questions/pull/385), the RegEx will likely skip it, but still capture the ohter entries.

## TODO

* Create question & answer shufflers
* Give semi-correct answers a "exactness" rating between 0 & 1.
* Make into an API, likely with [Cloudflare WOrkers](https://github.com/tomByrer/awesome-cloudflare-workers).  But IMHO loading direct from
`https://raw.githubusercontent.com/tomByrer/markdown-quiz-to-json/master/quiz.json`
should be fine with a small userbase.  Might configure to use [jsDelivr OSS CDN](https://www.jsdelivr.com/) instead.
* Seperate answers from quiz; conceal/randomize possible-answer IDs

## License

* quiz.json -  MIT: (c)2019-2020 Lydia Hallie
* Code - MIT: (C)2020 Tom Byrer

Freely use in your own app, but please give credit & link to both of us clearly in the front page of your app & README.
