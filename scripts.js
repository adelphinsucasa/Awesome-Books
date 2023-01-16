let books = [];

function addBook(cTitle, cAuthor){
    const o = {title: cTitle,
               author: cAuthor};
    books.push(o);
}

function removeBook(cTitle){
    const result = books.filter(book => book.title != cTitle );
    books = result;

    console.log(books);
}

addBook('Padre Rico Padre Pobre','Robert Kijosaki');
addBook('Absalom, Absalom!','William Faulkner');
addBook('A time to kill','John Grisham');

for  (let i =0; i<books.length; i+=1){
    console.log(books[i]);
}

removeBook('Padre Rico Padre Pobre');