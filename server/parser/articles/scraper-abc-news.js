const fs = require('fs')
const wget = require('node-wget-promise')
const http = require('http')
const abc = require(__dirname + '/articles/abc-news.json')

const urls = abc.articles.map(article => {
  return {
    url: article.url,
    title: article.title
      .toLowerCase()
      .replace(/\s+/g, '_')
      .replace(/\W/g, '')
  }
})

console.log(urls)
const getUrl = async (url, title) => {
  const html = await wget(url, { output: title + '.html' })
  console.log(html)
}

urls.forEach(url => getUrl(url.url, url.title))
//getUrl(url)
