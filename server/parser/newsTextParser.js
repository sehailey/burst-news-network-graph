const fs = require('fs')
const path = require('path')
const cheerio_ = require('cheerio')
const cheerioAdv = require('cheerio-advanced-selectors')
const cheerio = cheerioAdv.wrap(cheerio_)

const DIR_NAME = path.join(__dirname, 'articles')

const readFiles = (dirname = DIR_NAME, onFileContent, onError) => {
    fs.readdir(dirname, (err, filenames) => {
        if (err) {
            onError(err)
            return
        }
        filenames.forEach(filename => {
            fs.readFile(dirname + filename, 'utf-8', function(err2, content) {
                if (err2) {
                    onError(err2)
                    return
                }
                onFileContent(filename, content)
            })
        })
    })
}

var data = {}
readFiles(
    'dirname/',
    function(filename, content) {
        data[filename] = content
    },
    function(err) {
        throw err
    }
)

const articlePath = path.join(
    __dirname,
    'articles/as_venezuela_crumbles_exodus_reaches_record_level.html'
)
const article = fs.readFileSync(articlePath)
const $ = cheerio.load(article)
const text = $('p')
    .text()
    .replace(/\n/g, '')

fs.writeFileSync('./articlesTxt/text.txt', text)
// const article = fs.readFileSync(
// )

// const newsapipage = path.join(__dirname, '/newsApi.org.sources.html')
//
// const sourcesObj = {}
// function getIds() {
//   const text = fs.readFileSync(newsapipage, 'utf-8')
//   const $ = cheerio.load(text)
//   const sources = []
//   $('.source').each(function(i, elem) {
//     const source = {}
//     const name = $(this)
//       .find('.name')
//       .text()
//       .trim()
//
//     const id = $(this)
//       .find('kbd')
//       .text()
//       .trim()
//
//     source['id'] = id
//     source['name'] = name
//     sourcesObj[name] = id
//
//     sources.push(source)
//   })
