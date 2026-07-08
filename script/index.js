let homepage = [
    {
        id:1,
        img:"img/avenger-mighty.png",
        categories:"Comic",
        title:"Avengers: Mighty Heroes",
        author:"Sophea Reaksa",
        style:"architecture",
    },
    {
        id:2,
        img:"img/doctor-strange.png",
        categories:"Comic",
        title:"Doctor Strange",
        author:"Sok Chanleap",
        style:"sociology",
    },
    {
        id:3,
        img:"img/iron-man.png",
        categories:"Comic",
        title:"Iron-Man",
        author:"StickyDoughTwist",
        style:"acoustics",
    },
    {
        id:4,
        img:"img/spider-man.png",
        categories:"Comic",
        title:"Spider-Man",
        author:"Zodiac",
        style:"architecture",
    },
]

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

function FeaturesCollections(dataArray = homepage){
    let items = "";
    for(let i = 0; i < dataArray.length; i++){
        items += `     
                <div class="collection-card">
                    <div class="card-img-wrapper">
                        <img src="${dataArray[i].img}" alt="${dataArray[i].title} cover">
                    </div>
                    <div class="card-content">
                        <span class="tag ${dataArray[i].style}">${dataArray[i].categories}</span>
                        <h3>${dataArray[i].title}</h3>
                        <p><strong>Author:</strong> ${dataArray[i].author}</p>
                    </div>
                </div>
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
    const filteredCollections = homepage.filter(collection => {
        return  collection.title.toLowerCase().includes(input) || 
                collection.author.toLowerCase().includes(input) || 
                collection.categories.toLowerCase().includes(input);
    });
    FeaturesCollections(filteredCollections);
}
