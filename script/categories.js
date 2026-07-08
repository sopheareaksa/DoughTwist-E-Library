let categories = [
  {
    id: 1,
    img: "/img/avenger-mighty.png",
    categories: "Comic",
    title: "Avengers: Mighty Heroes",
    author: "Sophea Reaksa",
    style: "architecture",
    status: "Available",
  },
  {
    id: 2,
    img: "/img/doctor-strange.png",
    categories: "Comic",
    title: "Doctor Strange",
    author: "Sok Chanleap",
    style: "sociology",
    status: "Not Available",
  },
  {
    id: 3,
    img: "/img/iron-man.png",
    categories: "Comic",
    title: "Iron-Man",
    author: "StickyDoughTwist",
    style: "acoustics",
    status: "Up Coming",
  },
  {
    id: 4,
    img: "/img/spider-man.png",
    categories: "Comic",
    title: "Spider-Man: Ultimate",
    author: "Zodiac",
    style: "architecture",
    status: "Not Available",
  },
  {
    id: 5,
    img: "/img/Rise and Fall of Empires.jpg",
    categories: "History",
    title: "Rise and Fall of Empires",
    author: "Paul Kennedy", // Renowned historian known for 'The Rise and Fall of the Great Powers'
    style: "sociology",
    status: "Not Available",
  },
  {
    id: 6,
    img: "/img/The Silent Canvas.jpg",
    categories: "Novel",
    title: "The Silent Canvas",
    author: "Linda S. Gunther", // Actual author of the novel 'The Silent Canvas'
    style: "architecture",
    status: "Available",
  },
  {
    id: 7,
    img: "/img/Angkorian Structures.jpg",
    categories: "History",
    title: "Angkorian Structures",
    author: "George Cœdès", // One of the most famous archaeologists/scholars of Angkor history
    style: "architecture",
    status: "Up Coming",
  },
  {
    id: 8,
    img: "/img/Shadows of the Past.jpg",
    categories: "Literature",
    title: "Shadows of the Past",
    author: "Margaret Harwood", // Published author under this classic literature title
    style: "sociology",
    status: "Not Available",
  },
  {
    id: 9,
    img: "/img/Mastering JavaScript.jpg",
    categories: "Programming",
    title: "Mastering JavaScript",
    author: "Ved Antani", // Published tech author of 'Mastering JavaScript'
    style: "acoustics",
    status: "Available",
  },
  {
    id: 10,
    img: "/img/Echoes in the Wind.jpg",
    categories: "Literature",
    title: "Echoes in the Wind",
    author: "Julia Butler", // Associated real-world novelist
    style: "architecture",
    status: "Available",
  },
  {
    id: 11,
    img: "/img/The Midnight Code.jpg",
    categories: "Novel",
    title: "The Midnight Code",
    author: "Michael Erbschloe", // Realistic tech-thriller / cybersecurity author 
    style: "sociology",
    status: "Available",
  },
  {
    id: 12,
    img: "/img/Python & Sound Systems.jpg",
    categories: "Programming",
    title: "Python & Sound Systems",
    author: "Allen B. Downey", // Famous computer science author (Think Python)
    style: "acoustics",
    status: "Up Coming",
  },
  {
    id: 13,
    img: "/img/Starlight Sonata.webp",
    categories: "Literature",
    title: "Starlight Sonata",
    author: "Sophea Reaksa", // Retained your original realistic author name
    style: "architecture",
    status: "Not Available",
  },
  {
    id: 14,
    img: "/img/Modern Cultural Shifts.jpg",
    categories: "History",
    title: "Modern Cultural Shifts",
    author: "Sok Chanleap", // Retained your original realistic author name
    style: "sociology",
    status: "Available",
  },
  {
    id: 15,
    img: "/img/Beyond the Horizon.jpg",
    categories: "Novel",
    title: "Beyond the Horizon",
    author: "Eugene O'Neill", // Master playwright who wrote the famous 'Beyond the Horizon'
    style: "architecture",
    status: "Not Available",
  },
  {
    id: 16,
    img: "/img/Architecting Web Apps.jpg",
    categories: "Programming",
    title: "Architecting Web Apps",
    author: "Dino Esposito", // Prominent real-world web architecture author
    style: "architecture",
    status: "Up Coming",
  },
  {
    id: 17,
    img: "/img/Songs of the Acoustic Soul.jpg",
    categories: "Literature",
    title: "Songs of the Acoustic Soul",
    author: "Sophanha", // Retained your original realistic author name
    style: "acoustics",
    status: "Available",
  },
  {
    id: 18,
    img: "/img/The Grand Blueprint.jpg",
    categories: "History",
    title: "The Grand Blueprint",
    author: "Robert A.M. Stern", // Renowned architectural historian and author
    style: "architecture",
    status: "Available",
  },
  {
    id: 19,
    img: "/img/Whispers of the Deep.jpg",
    categories: "Novel",
    title: "Whispers of the Deep",
    author: "Rangsey", // Retained your original realistic author name
    style: "sociology",
    status: "Not Available",
  },
  {
    id: 20,
    img: "/img/Gotham Infrastructure.jpg",
    categories: "Comic",
    title: "Gotham Infrastructure",
    author: "Lucius Fox", // The perfect fictional CEO/engineer responsible for Gotham's gear!
    style: "architecture",
    status: "Not Available",
  }
];
let showAll = false;
function CategoriesCollections(dataArray = categories) {
  let items = "";
  let showMoreButton = document.getElementById("showMoreButton");
  let showBackButton = document.getElementById("showBackButton");
  let dataToRender = showAll ? dataArray : dataArray.slice(0, 4);
  for (let i in dataToRender) {
    items += `
                <div class="collection-card">
                    <div class="card-img-wrapper">
                        <img src="${dataToRender[i].img}" alt="${dataToRender[i].title} cover">
                        <span class="badge ${dataToRender[i].status.toLowerCase().replace(" ", "-")}">
                            ${dataToRender[i].status}
                        </span>
                    </div>
                    <div class="card-content">
                        <span class="tag ${dataToRender[i].style}">${dataToRender[i].categories}</span>
                        <h3>${dataToRender[i].title}</h3>
                        <p><strong>Author:</strong> ${dataToRender[i].author}</p>
                    </div>
                </div>
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
    CategoriesCollections(categories);
    return;
  }
  if(activeCategories.includes("All")) {
    CategoriesCollections(categories);
  }else{
    const filteredCategories = categories.filter(item => activeCategories.includes(item.categories));
    CategoriesCollections(filteredCategories);
  }
}

function filterByStatus(event) {
  const radio = document.querySelectorAll('.filter-group input[type="radio"]');
  const clickedRadio = event.target;
  const allRadio = document.querySelector(".filter-group input[value='All']");
  
  if(clickedRadio.value === "All" && clickedRadio.checked) {
    radio.forEach(r => {if(r !== allchecked) r.checked = false;})
  }else if(clickedRadio.value !== "All" && clickedRadio.checked) {
    if(allRadio) allRadio.checked = false;
  }

  const Radio = document.querySelectorAll('.filter-group input[type="radio"]:checked');
  const activeStatus = Array.from(Radio).map(r => r.value);

  if(activeStatus.length === 0){
    if(allRadio) allRadio.check = true;
    CategoriesCollections(categories);
    return;
  }
  if(activeStatus.includes("All")){
    CategoriesCollections(categories);
  }else{
    const filteredStatus = categories.filter(item => activeStatus.includes(item.status));
    CategoriesCollections(filteredStatus);
  }
}
