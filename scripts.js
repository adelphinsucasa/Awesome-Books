const btnAdd = document.getElementById('btnAdd');
let aBooks = [];

function addBook(cTitle, cAuthor){
    const o = {title: cTitle,
               author: cAuthor};
    aBooks.push(o);
}

addBook('test1','author1');
addBook('test2','author2');
addBook('test3','author3');

for  (let i =0; i<aBooks.length; i+=1){
    console.log(aBooks[i]);
}