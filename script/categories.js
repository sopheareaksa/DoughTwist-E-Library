let showAll = false;
function CategoriesCollections(dataArray = books) {
  let items = "";
  let showMoreButton = document.getElementById("showMoreButton");
  let showBackButton = document.getElementById("showBackButton");
  let dataToRender = showAll ? dataArray : dataArray.slice(0, 4);
  for (let i in dataToRender) {
    items += `
                <a href="book-detail.html?id=${dataToRender[i].id}" class="collection-link">
                    <div class="collection-card">
                        <div class="card-img-wrapper">
                            <img src="../${dataToRender[i].img}" alt="${dataToRender[i].title} cover">
                            <span class="badge ${dataToRender[i].status.toLowerCase().replace(" ", "-")}">
                                ${dataToRender[i].status}
                            </span>
                        </div>
                        <div class="card-content">
                            <span class="tag ${dataToRender[i].style}">${dataToRender[i].category}</span>
                            <h3>${dataToRender[i].title}</h3>
                            <p><strong>Author:</strong> ${dataToRender[i].author}</p>
                        </div>
                    </div>
                </a>
                `;
  }
  document.getElementById("book-grid").innerHTML = items;
  if (typeof initReveal === "function") initReveal();
  if (showMoreButton && showBackButton) {
    if (dataArray.length <= 4) {
      showMoreButton.style.display = "none";
      showBackButton.style.display = "none";
    } else {
      if (showAll === true) {
        console.log("1");
        showMoreButton.style.display = "none";
        showBackButton.style.display = "block"; // Show Back button when list is expanded(all cards)
      } else {
        console.log("2");
        showMoreButton.style.display = "block"; // Show More button when list is collapsed(first 4 cards)
        showBackButton.style.display = "none";
      }
    }
  }
}
window.addEventListener("DOMContentLoaded", () => {
  CategoriesCollections();

  const showMoreBtn = document.getElementById("showMoreButton");
  if (showMoreBtn) {
    showMoreBtn.addEventListener("click", () => {
      showAll = true;
      CategoriesCollections();
    });
  }
  const backBtn = document.getElementById("showBackButton");
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      showAll = false;
      CategoriesCollections();
    });
  }
});

function filterByCategory(event) {
  const checkboxes = document.querySelectorAll('.filter-group input[type="checkbox"]');
  const clickedCheckbox = event.target;
  const allchecked = document.querySelector(".filter-group input[value='All']");
  
  if(clickedCheckbox.value === "All" && clickedCheckbox.checked) {
    checkboxes.forEach(cb => {if(cb !== allchecked) cb.checked = false;})
  }else if(clickedCheckbox.value !== "All" && clickedCheckbox.checked) {
    if(allchecked) allchecked.checked = false;
  }
  const CheckBox = document.querySelectorAll('.filter-group input[type="checkbox"]:checked');
  const activeCategories = Array.from(CheckBox).map(cb => cb.value);

  if(activeCategories.length === 0) {
    if(allchecked) allchecked.checked = true;
    CategoriesCollections(books);
    return;
  }
  if(activeCategories.includes("All")) {
    CategoriesCollections(books);
  }else{
    const filteredCategories = books.filter(item => activeCategories.includes(item.category));
    CategoriesCollections(filteredCategories);
  }
}

function filterByStatus(event) {
  const radio = document.querySelectorAll('.filter-group input[type="radio"]');
  const clickedRadio = event.target;
  const allRadio = document.querySelector(".filter-group input[value='All']");
  
  if(clickedRadio.value === "All" && clickedRadio.checked) {
    radio.forEach(r => {if(r !== allRadio) r.checked = false;})
  }else if(clickedRadio.value !== "All" && clickedRadio.checked) {
    if(allRadio) allRadio.checked = false;
  }

  const Radio = document.querySelectorAll('.filter-group input[type="radio"]:checked');
  const activeStatus = Array.from(Radio).map(r => r.value);

  if(activeStatus.length === 0){
    if(allRadio) allRadio.checked = true;
    CategoriesCollections(books);
    return;
  }
  if(activeStatus.includes("All")){
    CategoriesCollections(books);
  }else{
    const filteredStatus = books.filter(item => activeStatus.includes(item.status));
    CategoriesCollections(filteredStatus);
  }
}
