let explores = [
    {
        id:1,
        img:"img/arts.png",
        title:"Arts & Design",
    },
    {
        id:2,
        img:"img/science.png",
        title:"Science",
    },
    {
        id:3,
        img:"img/literature.png",
        title:"Literature",
    },
    {
        id:4,
        img:"img/history.png",
        title:"History",
    },
]

function FeaturesCollections(dataArray = books){
    let items = "";
    for(let i = 0; i < dataArray.length; i++){
        items += `
                <a href="pages/book-detail.html?id=${dataArray[i].id}" class="collection-link">
                    <div class="collection-card">
                        <div class="card-img-wrapper">
                            <img src="${dataArray[i].img}" alt="${dataArray[i].title} cover">
                        </div>
                        <div class="card-content">
                            <span class="tag ${dataArray[i].style}">${dataArray[i].category}</span>
                            <h3>${dataArray[i].title}</h3>
                            <p><strong>Author:</strong> ${dataArray[i].author}</p>
                        </div>
                    </div>
                </a>
                `
            }
            document.getElementById("collection").innerHTML = items;
            if (typeof initReveal === 'function') initReveal();
}
FeaturesCollections();
    
function ExploreCollections(dataArray = explores){
    let items = "";
    for(let i in dataArray){
        items += `
               <div class="domain-card">
                    <img src="${dataArray[i].img}" alt="${dataArray[i].title}">
                    <div class="domain-overlay">
                        <h3>${dataArray[i].title}</h3>
                    </div>
                </div>
        `
    }
    document.getElementById("explore").innerHTML = items;
    if (typeof initReveal === 'function') initReveal();
}
ExploreCollections();

function searchCollections(){
    const input = document.getElementById("search").value.toLowerCase();
    const filteredCollections = books.filter(collection => {
        return  collection.title.toLowerCase().includes(input) || 
                collection.author.toLowerCase().includes(input) || 
                collection.category.toLowerCase().includes(input);
    });
    FeaturesCollections(filteredCollections);
}
