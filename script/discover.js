function showBook(dataArray = books) {
    let items = "";
    for(let i in dataArray){
        items += `
                <a href="book-detail.html?id=${dataArray[i].id}" class="collection-link">
                    <div class="collection-card">
                        <div class="card-img-wrapper">
                            <img src="../${dataArray[i].img}" alt="${dataArray[i].title} cover">
                        </div>
                        <div class="card-content">
                            <span class="tag ${dataArray[i].style.toLowerCase()}">${dataArray[i].category}</span>
                            <h3>${dataArray[i].title}</h3>
                            <p><strong>Author:</strong> ${dataArray[i].author}</p>
                        </div>
                    </div>
                </a>
        `
    }
    document.getElementById("book-list").innerHTML = items;
    if (typeof initReveal === 'function') initReveal();
}
showBook();
function searchBook() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(searchInput));
    showBook(filteredBooks);
}

function filterByCategory(category,event) {
   const buttons = document.querySelectorAll('.filter-pill');
   buttons.forEach(button => button.classList.remove('active'));
   if (event){
     event.target.classList.add('active');
   }
   const filteredBooks = category === 'All' ? books : books.filter(book => book.category === category);
   showBook(filteredBooks);
}
