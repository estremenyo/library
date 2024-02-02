// Existing books
const library = [
    // If you uncomment these, it will break the script.
    // { title: "The Brothers Karamazov", author: "Fyodor Dostoyevsky", year: 1870, read: false, },
    // { title: "The Stranger", author: "Albert Camus", year: 1942, read: true, },
    // { title: "War and Peace", author: "Leo Tolstoy", year: 1868, read: false, },
];

function Book(title, author, year, read) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.read = read;
}

// Add existing books to page
// library.forEach(book => addBookToLibrary(book));


// Add a book to the array and to the pages a card.
function addBookToLibrary(book) {
    // Create and set attributes for the card and add it to the page.
    const card = document.createElement("div");
    card.classList.add("card");
    // The data-index will match up with the book object's position in the array.
    card.setAttribute("data-index", library.length);
    document.querySelector("main").appendChild(card);

    // Create all of the card's child elements i.e. fields and delete and change status buttons.
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("del-btn");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", handleDelete);

    let changeButton = document.createElement("button");
    changeButton.classList.add("change-btn");
    changeButton.textContent = "Change Read Status";
    changeButton.addEventListener("click", handleChange);

    card.appendChild(deleteButton);
    card.appendChild(changeButton);
    for (let property in book) {
        const field = document.createElement("p");
        field.textContent = book[property];
        card.appendChild(field);
    }
    // Add the card to the JavaScript library array.
    library.push(book);
}

// Read the submitted form data into an object and call addBookToLibrary to add it to the page.
function handleSubmit() {
    const submission = new Book();
    submission.title = document.getElementById("title").value;
    submission.author = document.getElementById("author").value;
    submission.year = document.getElementById("year").value;
    submission.read = document.querySelector("input[name='read']:checked").value;
    addBookToLibrary(submission);
}

// Delete the card from both the array and page and correctly reshuffle the card data-indexes.
function handleDelete() {

}

// Change the read status of the book both in the page and in the object in the library.
function handleChange() {

}

const addButton = document.querySelector("#add-book-btn");
const dialog = document.querySelector("dialog");
addButton.addEventListener("click", () => dialog.showModal());

document.querySelector("dialog > form").addEventListener("submit", handleSubmit);
