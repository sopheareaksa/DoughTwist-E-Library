const bookList = [
  {
    id: 1,
    category: "Programming",
    img: "/img/design-pattern.jpg",
    title: "Design Patterns: Elements of Reusable Object-Oriented Software",
    author: "Erich Gamma",
    style: "Architecture"
  },
  {
    id: 2,
    category: "Novel",
    img: "/img/brave-new-world.jpg",
    title: "Brave New World",
    author: "Aldous Huxley",
    style: "Sociology"
  },
  {
    id: 3,
    category: "Comic",
    img: "/img/the-incal.jpg",
    title: "The Incal",
    author: "Alejandro Jodorowsky",
    style: "Architecture"
  },
  {
    id: 4,
    category: "Literature",
    img: "/img/the-sound-and-the-fury.jpg",
    title: "The Sound and the Fury",
    author: "William Faulkner",
    style: "Acoustics"
  },
  {
    id: 5,
    category: "History",
    img: "/img/the-structure-of scientiific-revolutions.jpg",
    title: "The Structure of Scientific Revolutions",
    author: "Thomas S. Kuhn",
    style: "Sociology"
  },
  {
    id: 6,
    category: "Programming",
    img: "/img/The Mythical Man-Month.jpg",
    title: "The Mythical Man-Month",
    author: "Fred Brooks",
    style: "Sociology"
  },
  {
    id: 7,
    category: "Novel",
    img: "/img/The-Pillars-of-the-Earth.jpg",
    title: "The Pillars of the Earth",
    author: "Ken Follett",
    style: "Architecture"
  },
  {
    id: 8,
    category: "Comic",
    img: "/img/Transmetropolitan.jpg",
    title: "Transmetropolitan",
    author: "Warren Ellis",
    style: "Sociology"
  },
  {
    id: 9,
    category: "Literature",
    img: "/img/Les-Misérables.jpg",
    title: "Les Misérables",
    author: "Victor Hugo",
    style: "Sociology"
  },
  {
    id: 10,
    category: "History",
    img: "/img/The-Architecture-of-Happiness.jpg",
    title: "The Architecture of Happiness",
    author: "Alain de Botton",
    style: "Architecture"
  },
  {
    id: 11,
    category: "Programming",
    img: "/img/Designing Data-Intensive Applications.jpg",
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    style: "Architecture"
  },
  {
    id: 12,
    category: "Novel",
    img: "/img/Foucault's Pendulum.jpg",
    title: "Foucault's Pendulum",
    author: "Umberto Eco",
    style: "Acoustics"
  },
  {
    id: 13,
    category: "Comic",
    img: "/img/Maus.jpg",
    title: "Maus",
    author: "Art Spiegelman",
    style: "Sociology"
  },
  {
    id: 14,
    category: "Literature",
    img: "/img/The Hunchback of Notre-Dame.jpg",
    title: "The Hunchback of Notre-Dame",
    author: "Victor Hugo",
    style: "Architecture"
  },
  {
    id: 15,
    category: "History",
    img: "/img/The Soundscape.jpg",
    title: "The Soundscape: Our Sonic Environment and the Tuning of the World",
    author: "R. Murray Schafer",
    style: "Acoustics"
  },
  {
    id: 16,
    category: "Programming",
    img: "/img/Patterns of Enterprise Application Architecture.jpg",
    title: "Patterns of Enterprise Application Architecture",
    author: "Martin Fowler",
    style: "Architecture"
  },
  {
    id: 17,
    category: "Novel",
    img: "/img/1984.jpg",
    title: "1984",
    author: "George Orwell",
    style: "Sociology"
  },
  {
    id: 18,
    category: "Comic",
    img: "/img/Batman.jpg",
    title: "Batman: Death by Design",
    author: "Chip Kidd",
    style: "Architecture"
  },
  {
    id: 19,
    category: "Literature",
    img: "/img/Chamber Music.jpg",
    title: "Chamber Music",
    author: "James Joyce",
    style: "Acoustics"
  },
  {
    id: 20,
    category: "History",
    img: "/img/The Division of Labor in Society.jpg",
    title: "The Division of Labor in Society",
    author: "Émile Durkheim",
    style: "Sociology"
  }
];

function showBook(dataArray = bookList) {
    let items = "";
    for(let i in dataArray){
        items += `
                <div class="collection-card">
                    <a href="book-detail.html" class="card-link">
                        <div class="card-img-wrapper">
                            <img src="${dataArray[i].img}" alt="${dataArray[i].title} cover">
                        </div>
                    </a>
                    <div class="card-content">
                        <span class="tag ${dataArray[i].style.toLowerCase()}">${dataArray[i].category}</span>
                        <h3>${dataArray[i].title}</h3>
                        <p><strong>Author:</strong> ${dataArray[i].author}</p>
                    </div>
                </div>
        `
    }
    document.getElementById("book-list").innerHTML = items;
    if (typeof initReveal === 'function') initReveal();
}
showBook();
function searchBook() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const filteredBooks = bookList.filter(book => book.title.toLowerCase().includes(searchInput));
    showBook(filteredBooks);
}

function filterByCategory(category,event) {
   const buttons = document.querySelectorAll('.filter-pill');
   buttons.forEach(button => button.classList.remove('active'));
   if (event){
     event.target.classList.add('active');
   }
   const filteredBooks = category === 'All' ? bookList : bookList.filter(book => book.category === category);
   showBook(filteredBooks);
}