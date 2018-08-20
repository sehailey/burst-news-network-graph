// articles.json
const fs = require('fs')
const articlesJson = require('./articles.json')
//console.log(articlesJson)

let nodeKey = 0
const nodes = []

const randInt = int => {
    return Math.floor(Math.random() * int)
}
let errorIdx = 0

const sourceIds = ['id1', 'id2', 'id3', 'id4']

const links = []
const randomArticles = []

const colors = ['#f44242', '#4d41f4', '#c3bfff', '#ffb7b7', '#d1d1d1']

const createNode = node => {
    try {
        const newNode = {
            nodeKey: nodeKey, //global

            sourceNewsApiId: node.source.id,
            id: 'id' + nodeKey,
            name: node.name,
            color: colors[randInt(colors.length)],
            val: randInt(4),
            title: node.title,
            desc: node.description,
            url: node.url,
            urlToImage: node.urlToImage,
            publishedAt: node.publishedAt
        }
        nodes.push(newNode)
        // links.push({
        //     source: sourceIds[randInt(sourceIds.length)],
        //     target: newNode.id
        //})
        randomArticles.push('id' + nodeKey)
        nodeKey++
    } catch (e) {
        console.log('error occured!', errorIdx)
        errorIdx++
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
        //console.log('VALUES[i]\n\n\n', values[i], '\n\n\n')
        const sourceArray = values[i]
        createNodes(sourceArray)
    }
}
//const linkSourceNames = Object.keys(articlesJson)
//const links = []

parseJson(articlesJson)

randomArticles.map(id => {
    console.log(id)
    const source = sourceIds[randInt(sourceIds.length)]
    const link = {
        source: source,
        target: id
    }

    console.log(link)
    //const target = randomArticles[randInt(randomArticles.length)]

    links.push(link)
})

//console.log(randomArticles)

fs.writeFileSync('../../client/components/nodes0.json', JSON.stringify(nodes))
fs.writeFileSync('../../client/components/links0.json', JSON.stringify(links))
console.log(nodes.length)
console.log(randomArticles)
console.log('LINKS:', links)

//console.log(linkSources)

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
