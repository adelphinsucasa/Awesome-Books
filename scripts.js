let localStorageBooks = []

function addBook(cTitle, cAuthor) {
    const newBook = {
        title: cTitle,
        author: cAuthor
    };

    localStorageBooks.push(newBook);
    localStorage.setItem('localStorageBooks', JSON.stringify(localStorageBooks));

    console.log(localStorageBooks);
}

function removeBook(cTitle) {
    //const result = localStorageBooks.filter(book => book.title != cTitle);
    //books = result;
}
//addBook('Try Again','bbb')
//removeBook('Padre Rico Padre Pobre');

/* -------------------------------------------------------------------------- */
/*                              DOM MANIPULATION                              */
/* -------------------------------------------------------------------------- */
const div = document.querySelector('#bookListContainer')
const ul = document.querySelector('#ulBookList')

let aux = ''

for (let i = 0; i < localStorageBooks.length; i++) {
    aux += `<li>
                <p>${localStorageBooks[i].title}</p>
                <p>${localStorageBooks[i].author}</p>
                <button id="btnRemove${i} type="button">Remove</button>
                <hr />
            </li>`

}
ul.innerHTML = aux;
div.appendChild(ul)

const addForm = document.getElementById('addBookForm')

addForm.addEventListener('submit', ()=>{
    addBook(addForm['title'].value, addForm['author'].value);
    window.location.reload();
});

window.addEventListener('load', () => {
    if (JSON.parse(localStorage.getItem('localStorageBooks')) === null) {
        localStorage.setItem('localStorageBooks', JSON.stringify(localStorageBooks));
    } else {
        localStorageBooks = JSON.parse(localStorage.getItem('localStorageBooks'));
        
    }
});