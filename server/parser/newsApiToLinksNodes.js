// articles.json
const fs = require('fs')
const articlesJson = require('./articles.json')
//console.log(articlesJson)

let nodeKey = 0
const nodes = []

let errorIdx = 0
const createNode = node => {
    try {
        const newNode = {
            nodeKey: nodeKey, //global

            sourceNewsApiId: node.source.id,
            name: node.name,
            title: node.title,
            description: node.description,
            url: node.url,
            urlToImage: node.urlToImage,
            publishedAt: node.publishedAt
        }
        nodes.push(newNode)
        nodeKey++
    } catch (e) {
        console.log('error occured!', errorIdx)
        errorIdx++
    } finally {
        console.log('node created!')
    }
}

const createNodes = sourceArray => {
    sourceArray.map(sourceObj => {
        createNode(sourceObj)
    })
}

const parseJson = json => {
    const values = Object.values(json)
    //console.log(values[0])

    for (let i = 0; i < values.length; i++) {
        console.log('VALUES[i]\n\n\n', values[i], '\n\n\n')
        const sourceArray = values[i]
        createNodes(sourceArray)
    }
}
// const parseNewsApiJson = (articlesJson) {
//     const values = Object.values(json)
//     //console.log(values[0])
//
//     for (let i = 0; i < values.length; i++) {
//         console.log('VALUES[i]\n\n\n', values[i], '\n\n\n')
//         createNodes(values[i])
//     }
// }

parseJson(articlesJson)

fs.writeFileSync('./nodes.json', JSON.stringify(nodes))
console.log(nodes.length)
// const nodeStructure = {
//     id: 'id1',
//     key: 0,
//     name: 'id1',
//     val: 5,
//     color: '#f44242'
// }

// (1)loop through articleList keys
//2 loop through articleList.source keys
// (3) push to nodes array

// const articleListStructutre = {
//     source: [
//         {
//             source: { id: newsApiId, name: titleOfSomeSort },
//             author: authorName,
//             title: articleTitle,
//             description: articleDescription,
//             url: articleUrl,
//             urlToImage: articleUrlToImage,
//             publishedAt: date
//         }
//     ], (...)
// }

// const parseArticle = article => {
//     const newsApiId = article.source //same as the nested
//     const author = article.author
//     const title = article.title
//     const description = article.description
//     const url = article.url
//     const urlToImage = article.articleUrlToImage
//     const publishedAt = article.publishedAt
//     return {
//         newsApiId,
//         author,
//         title,
//         description,
//         url,
//         urlToImage,
//         publishedAt
//     }
// }
