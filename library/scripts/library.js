let book_element = document.createElement('div');
let books_container = document.getElementById('books_container');
let title_p_element = document.createElement('p');
let number_of_pages_p_element = document.createElement('p');

//author, title, number_of_pages, read

function Book(author, title, number_of_pages){
    this.author = author,
    this.title = title,
    this.number_of_pages = number_of_pages,
    this.read = false
};

let library = [
    new Book ('Ben Dover', 'GameOfWhores', 420),
    new Book ('Ben Dover', 'GameOfWhores', 420),
    new Book ('Ben Dover', 'GameOfWhores', 420),
    new Book ('Ben Dover', 'GameOfWhores', 420),
    new Book ('Ben Dover', 'GameOfWhores', 420),    
    new Book ('Ben Dover', 'GameOfWhores', 420),
    new Book ('Ben Dover', 'GameOfWhores', 420),
    new Book ('Ben Dover', 'GameOfWhores', 420),
    new Book ('Ben Dover', 'GameOfWhores', 420),   
    new Book ('Ben Dover', 'GameOfWhores', 420),
    new Book ('Ben Dover', 'GameOfWhores', 420),
    new Book ('Ben Dover', 'GameOfWhores', 420),
    new Book ('Ben Dover', 'GameOfWhores', 420),
    new Book ('Ben Dover', 'GameOfWhores', 420),
    new Book ('Ben Dover', 'GameOfWhores', 420),
    new Book ('Ben Dover', 'GameOfWhores', 420),
    new Book ('Ben Dover', 'GameOfWhores', 420),
];

function createBookElement(book) {
    const newBookElement = document.createElement('div');
    newBookElement.classList.add('book');
  
    const author_p_element = document.createElement('p');
    author_p_element.textContent = book.author;
    author_p_element.classList.add('book_author', 'card_text');
    newBookElement.appendChild(author_p_element);
  
    const title_p_element = document.createElement('p');
    title_p_element.textContent = book.title;
    title_p_element.classList.add('book_title', 'card_text');
    newBookElement.appendChild(title_p_element);
  
    const number_of_pages_p_element = document.createElement('p');
    number_of_pages_p_element.textContent = book.number_of_pages;
    number_of_pages_p_element.classList.add('book_number_of_pages', 'card_text');
    newBookElement.appendChild(number_of_pages_p_element);
  
    const read_button = document.createElement('button');
    read_button.classList.add('read_button');
    read_button.textContent = book.read ? 'Unread ○' : 'Read ⦿';
    read_button.addEventListener('click', () => {
      book.read = !book.read;
      read_button.textContent = book.read ? 'Unread ○' : 'Read ⦿';
      newBookElement.style.borderLeftColor = book.read ? 'green' : 'red';
    });
    newBookElement.appendChild(read_button);
  
    // Set color based on book.read (optional)
    newBookElement.style.borderLeftColor = book.read ? 'green' : 'red'; // Use ternary operator
  
    return newBookElement;
}


for (const book of library){
    const bookElement = createBookElement(book);
    books_container.appendChild(bookElement);
}





const addNewBookButton = document.querySelector('.add_new_book');

addNewBookButton.addEventListener('click', () => {
  // Get values from input fields
  const authorInput = document.getElementById('insert_author');
  const titleInput = document.getElementById('inser_title');
  const pagesInput = document.getElementById('insert_number_of_pages');

  const newAuthor = authorInput.value;
  const newTitle = titleInput.value;
  const newPages = parseInt(pagesInput.value);

  // Validate inputs (optional)
  if (!newAuthor || !newTitle || !newPages) {
    alert('Please fill in all fields!');
    return;
  }

  // Create a new book object
  const newBook = new Book(newAuthor, newTitle, newPages);

  // Create book element and populate it with new book data
  const bookElement = createBookElement(newBook);
  books_container.appendChild(bookElement);

  // Reset input fields
  authorInput.value = '';
  titleInput.value = '';
  pagesInput.value = '';

});




