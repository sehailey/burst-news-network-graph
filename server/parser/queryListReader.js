const fs = require('fs')
const path = require('path')

// const exampleQueryList = {
//   status: 'ok',
//   totalResults: 841,
//   // 20 articles per page
//   articles: []
// }
//
// const exampleArticle = {
//   source: { id: 'techradar', name: 'TechRadar' },
//   author: 'Matt Swider',
//   title: 'Back to School 2018 sales: the best deals for tech supplies',
//   description: 'New Back to School sales updated multiple times a day',
//   url: 'https://www.techradar.com/news/back-to-school-2018',
//   urlToImage:
//     'https://cdn.mos.cms.futurecdn.net/gL5UPFKUBR3FXury7LWWYX-1200-80.jpg',
//   publishedAt: '2018-08-02T16:40:45Z'
// }

const querylists = fs.readdirSync(path.join(__dirname, '/querylists'))

const sources = []
const obj = {}
querylists.map(file => {
  const querylist = JSON.parse(fs.readFileSync('./querylists/' + file, 'utf-8'))
  const articles = querylist.articles

  articles.map(article => {
    sources.push(article.source.id)
    if (!obj[article.source.id]) {
      obj[article.source.id] = [article]
    } else {
      obj[article.source.id].push(article)
    }
  })
})

fs.writeFileSync('articles.json', JSON.stringify(obj))
fs.writeFileSync('sources.js', 'const sources = ' + JSON.stringify(sources))
// Code Review is going to be at 11:15
// - Get Sources Displaying
// - Find algorithm for displaying political max...
// - The ability to save an article
// - Add to waffle some issues for "Features", "Decisions Needing to be made", and "???" to keep track of these
// -
