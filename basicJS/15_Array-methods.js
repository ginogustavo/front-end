let articles = [
    {name: "Bicycle",cost: 3000},
    {name: "TV",cost: 2500},
    {name: "Book",cost: 320},
    {name: "Cellphone",cost: 10000},
    {name: "Laptop",cost: 20000},
    {name: "Keyboard",cost: 500},
    {name: "Headset",cost: 1700}
]

//filter() - creates a new array with all elements that pass the 
// test implemented by the provided function.
let filterArticles = articles.filter( function(article){
    return article.cost<=500;
    }
);
console.log(filterArticles);

//map() 
///Aksing from all articles the name of each one.
let mappedArticles = articles.map(function(article){
    return article.name;
});
// a new array is generated with the names values
console.log(mappedArticles);

//find() function with parameter article that we are looking for
let foundArticle = articles.find(function(article){
    return article.name === "Laptop";
});
console.log(foundArticle)

//forEach() - no generate new array, modify the existing one.
articles.forEach(function(article){
    console.log(article.name);
    // if(a.cost>1000){
    //     a.cost = 1001
    // }
    // a.year = 2010;
    // delete a.year
});

//some() - return true or false for items that comply that validation
var articlesCheap = articles.some(function(article){
    return article.cost <=700;
});
console.log(articlesCheap); // true (in your array there is items <=700)

///Map() 
let contacts = new Map()
contacts.set('Jessie', {phone: "213-555-1234", address: "123 N 1st Ave"})
contacts.has('Jessie') // true
contacts.get('Hilary') // undefined
contacts.set('Hilary', {phone: "617-555-4321", address: "321 S 2nd St"})
contacts.get('Jessie') // {phone: "213-555-1234", address: "123 N 1st Ave"}
contacts.delete('Raymond') // false
contacts.delete('Jessie') // true
console.log(contacts.size) // 1