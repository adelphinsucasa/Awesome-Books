let localStorageBooks = [];
const div = document.querySelector('#bookListContainer');
const ul = document.querySelector('#ulBookList');
const addForm = document.getElementById('addBookForm');

function addBook(cTitle, cAuthor) {
  const newBook = {
    title: cTitle,
    author: cAuthor,
  };
  localStorageBooks.push(newBook);
  localStorage.setItem('localStorageBooks', JSON.stringify(localStorageBooks));
}

function removeBook(index) {
  const aux = localStorageBooks[index].title
  const result = localStorageBooks.filter(book => book.title != aux)
  localStorageBooks = result
  localStorage.setItem('localStorageBooks', JSON.stringify(localStorageBooks));
  window.location.reload();
}

window.addEventListener('load', () => {


  if (JSON.parse(localStorage.getItem('localStorageBooks')) === null) {
    localStorage.setItem('localStorageBooks', JSON.stringify(localStorageBooks));
  } else {
    localStorageBooks = JSON.parse(localStorage.getItem('localStorageBooks'));
  }

  /* -------------------------------------------------------------------------- */
  /*                              DOM MANIPULATION                              */
  /* -------------------------------------------------------------------------- */

  let aux = '';
  for (let i = 0; i < localStorageBooks.length; i += 1) {
    aux += `<li>
                <p>${localStorageBooks[i].title}</p>
                <p>${localStorageBooks[i].author}</p>
                <button class="btnRemove" id="btnRemove${i} type="button">Remove</button>
                <hr />
            </li>`;
  }
  ul.innerHTML = aux;
  div.appendChild(ul);

  document.querySelectorAll('.btnRemove').forEach((btn, index) => {
    btn.addEventListener('click', () => {
      removeBook(index);
    });
  });
});

addForm.addEventListener('submit', () => {
  addBook(addForm.title.value, addForm.author.value);
});




