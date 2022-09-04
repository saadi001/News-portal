const loadNews = (id) => {
    fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
    .then(res => res.json())
    .then(data => displayNews(data.data))
    .catch(error => console.log(error))
}

const displayNews = (allNews) =>{
    
    // checking news found or not 
    const noNewsDiv = document.getElementById('no-news-found');
    if(allNews.length === 0){
        noNewsDiv.classList.remove('d-none')
    }else{
        noNewsDiv.classList.add('d-none')
    }

    // item found 
    const itemFound = document.getElementById('found-section');
    
    const item = allNews.length;
    itemFound.innerText = item;

    // append the news 
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = ``;
    allNews.forEach(news =>{
        
        // console.log(news);
        const newsDiv = document.createElement('div');
        newsDiv.innerHTML = `
        <div class="row g-0 p-3 my-3 bg-white rounded ">
        <div class="col-12  col-md-3 "><img class="img-fluid headline-image h-100 w-100" src="${news.thumbnail_url ? news.thumbnail_url : 'No thumbnail found'}" alt=""></div>
        <div class="col-md-9 p-4">
          <div>
            <h3 class="fw-bold">${news.title ? news.title : "No title found"}</h3>
            <p class="py-1 text-muted">${news.details.slice(0,300)}...</p>
          </div>
          <div class="d-flex justify-content-between align-items-center flex-wrap">
            <div class="d-flex">
              <div><img style="height: 40px; width:40px;" class="rounded-circle" src="${news.author.img}" alt=""></div>
              <div class="px-3">
                <p class="fw-bold l-height">${news.author.name ? news.author.name : 'No author found'}</p>
                <p class="text-muted l-height">${news.author.published_date ? news.author.published_date : 'No data found'}</p>
              </div>
            </div>
  
            <div class="d-flex">
              <div><i class="fa-regular fa-eye fw-bold"></i></div>
              <div class=" mx-1">View: ${news.total_view}</div>
            </div>
  
            <div class="mx-2">
              <div>Ratings: ${news.rating.number}</div>
            </div>
  
            <div onclick="loadModal('${news._id}')" class="mx-2" role="button" data-bs-toggle="modal" data-bs-target="#newsDetailModal"><i class="fa-solid fa-circle-right text-primary"></i></div>
          </div>
        </div>
      </div>

        `;
        newsContainer.appendChild(newsDiv);
       
    });
    toggleSpinner(false);
}

const searchNews = (searchId) => {
    loadNews(searchId);
    toggleSpinner(true);
}

const toggleSpinner = isLoading =>{
    const loaderSection = document.getElementById('loader');
    if(isLoading){
        loaderSection.classList.remove('d-none');
    }
    else{
        loaderSection.classList.add('d-none')
    }
}
// modal data load 
const loadModal = (modalId) =>{
    fetch(`https://openapi.programming-hero.com/api/news/${modalId}`)
    .then(res => res.json())
    .then(data => displayModalDetail(data.data[0]))
}
const displayModalDetail = (modalNews) =>{
    console.log(modalNews);
    const modalTitle = document.getElementById('newsDetailModalLabel');
    modalTitle.innerText = modalNews.title;
    const modalDetails = document.getElementById('news-detail');
    modalDetails.innerText = modalNews.details;
}

loadNews('01');