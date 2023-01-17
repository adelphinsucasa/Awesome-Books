const div = document.querySelector('#bookListContainer');
const ul = document.querySelector('#ulBookList');
const addForm = document.getElementById('addBookForm');

class BookCollection {
  constructor() {
    this.books = [];
  }

  addBook(cTitle, cAuthor) {
    const newBook = {
      title: cTitle,
      author: cAuthor,
    };
    this.books.push(newBook);
    localStorage.setItem('localStorageBooks', JSON.stringify(this.books));
  }

  removeBook(index) {
    const result = this.books.filter((book,i) => i !== index);
    this.books = result;
    localStorage.setItem('localStorageBooks', JSON.stringify(this.books));
    window.location.reload();
  }

  getBooks() {
    return this.books;
  }

  setBooks(books) {
    this.books = books;
  }
}

const newBooksCollection = new BookCollection();

window.addEventListener('load', () => {
  if (JSON.parse(localStorage.getItem('localStorageBooks')) === null) {
    localStorage.setItem('localStorageBooks', JSON.stringify(newBooksCollection.getBooks()));
  } else {
    newBooksCollection.setBooks(JSON.parse(localStorage.getItem('localStorageBooks')));
  }

  /* -------------------------------------------------------------------------- */
  /*                              DOM MANIPULATION                              */
  /* -------------------------------------------------------------------------- */

  let aux = '';
  for (let i = 0; i < newBooksCollection.getBooks().length; i += 1) {
    aux += `<li>
                <p>"${newBooksCollection.getBooks()[i].title}" by ${newBooksCollection.getBooks()[i].author}</p>
                <button class="btnRemove" id="btnRemove${i} type="button">Remove</button>
            </li>`;
  }
  ul.innerHTML = aux;
  div.appendChild(ul);

  document.querySelectorAll('.btnRemove').forEach((btn, index) => {
    btn.addEventListener('click', () => {
      newBooksCollection.removeBook(index);
    });
  });
});

addForm.addEventListener('submit', () => {
  newBooksCollection.addBook(addForm.title.value, addForm.author.value);
});
