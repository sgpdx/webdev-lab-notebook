// Code updated by Serena Glick / sglick@pdx / sgpdx@github

const url = "https://anapioficeandfire.com/api/books/";

const app = document.querySelector("#books");

const fetchData = (url) => {
  // Fetch all books from the API of Ice and Fire and append them to the DOM
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      data.forEach((book) => {
        console.log(
          book.name,
          book.authors[0],
          book.numberOfPages,
          book.released
        );
        addBooktoDOM(book);
      });
    })
    .catch((error) => {
      console.error(error);

      let element = document.createElement("div");
      element.textContent = "An error occurred.  Please reload the page.";
      app.appendChild(element);
    })
    .finally(() => {
      let loader = document.querySelector("#loading");
      app.removeChild(loader);
    });
};

// Create an element for each book that contains title, author, publication year, and number of pages

const addBooktoDOM = (book) => {
  let element = document.createElement("div");
  let title = document.createElement("h3");
  let author = document.createElement("p");
  let released = document.createElement("p");
  let pages = document.createElement("p");

  title.textContent = book.name;
  author.textContent = book.authors[0];
  released.textContent = book.released.substring(0, 4);
  pages.textContent = `${book.numberOfPages} pages`;

  element.appendChild(title);
  element.appendChild(author);
  element.appendChild(released);
  element.appendChild(pages);

  app.appendChild(element);

  // Update the styles in JavaScript to center all the books in the container given
  // Note: already centered via bootstrap code
  // Additional styling done via elements <h3> and <p>
  // However, to be explicit:
  element.style.display = "flex";
  element.style.flexDirection = "column";
  element.style.alignItems = "center";
  element.style.marginTop = "20px";
};

// Running the main function that calls the API
fetchData(url);
