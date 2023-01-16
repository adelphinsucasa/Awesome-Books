const btnAdd = document.getElementById('btnAdd');
let aBooks = [];

function addBook(cTitle, cAuthor){
    const o = {title: cTitle,
               author: cAuthor};
    aBooks.push(o);
}

btnAdd.addEventListener('click',()=>{
    console.log('Adding');
    const txtTitle = document.getElementById('title');
    const txtAuthor = document.getElementById('author');

    console.log(txtTitle.textContent);
    console.log(txtAuthor.textContent);
});