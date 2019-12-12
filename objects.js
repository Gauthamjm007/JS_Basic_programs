// objects are unordered,string indexed and collection of values

const article = {
    id:1,
    title:'Future of JS',
    body:'Technology perspective',
    author:'Anirudhha',
    Publishdate:new Date()
}

//reading a key value pair
console.log(article.Publishdate)
console.log(`${article.author} has published an article on "${article.title}"`)
//Output:Anirudhha has published an article on "Future of JS"

//Adding a key value pair to an article 

article.rating=5
console.log(`${article.author} has published an article on "${article.title}" and the article has been rated ${article.rating} stars`)
//Output:Anirudhha has published an article on "Future of JS" and the article has been rated 5 stars

//updating a value pair
article.title='JS v/s TypeScript v/s Elm'

//Deleting a key value pair from an article
delete article.rating
console.log(`${article.author} has published an article on "${article.title}" and the article has been rated ${article.rating} stars`)

//to know all keys of an object
console.log(Object.keys(article))

//to know value of keys in an article
console.log(Object.values(article))

//to check if a certain element is present in an object
console.log(Object.keys(article).includes('url'))//false

//to check if a key exists within an object and there is  no inbuilt method called as has own value
console.log(article.hasOwnProperty('title'))//false

//check if a value is present in an object
console.log(Object.values(article).includes('Anirudhha'))//true

