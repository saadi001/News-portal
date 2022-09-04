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
    // append the news 
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = ``;
    allNews.forEach(news =>{
        
        console.log(news);
        const newsDiv = document.createElement('div');
        newsDiv.innerHTML = `
        <div class="row g-0 p-3 my-2 bg-white rounded">
        <div class="col-12  col-md-3 "><img class="img-fluid headline-image" src="${news.thumbnail_url}" alt=""></div>
        <div class="col-md-9 p-3">
          <div>
            <h3 class="fw-bold">${news.title}</h3>
            <p class="py-1 text-muted">${news.details}</p>
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
  
            <div class="d-flex">
              <div>Ratings: ${news.rating.number}</div>
            </div>
  
            <div><i class="fa-solid fa-circle-right text-primary"></i></div>
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

loadNews('08');