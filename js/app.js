const loadNews = () => {
    fetch('https://openapi.programming-hero.com/api/news/category/01')
    .then(res => res.json())
    .then(data => displayNews(data.data))
    .catch(error => console.log(error))
}

const displayNews = (allNews) =>{
    const newsContainer = document.getElementById('news-container');
    allNews.forEach(news =>{
        const newsDiv = document.createElement('div');
        newsDiv.innerHTML = `
        <div class="row g-0 p-3 my-2 bg-white rounded">
        <div class="col-12  col-md-3 "><img class="img-fluid headline-image" src="images/image2.png" alt=""></div>
        <div class="col-md-9 p-3">
          <div>
            <h3 class="fw-bold">This will be the headline of news hakdjfdskdfjsdk</h3>
            <p class="py-1 text-muted">this will be description of the news if news description is more than 200 hundred
              it
              will be stop as 3 dot and still i don't know what or how to do that..</p>
          </div>
          <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex">
              <div><img style="height: 40px; width:40px;" class="rounded-circle" src="images/image1.jpeg" alt=""></div>
              <div class="px-3">
                <p class="fw-bold l-height">jane cooper</p>
                <p class="text-muted l-height">jan 10,2022</p>
              </div>
            </div>
  
            <div class="d-flex">
              <div><i class="fa-regular fa-eye"></i></div>
              <div class="fw-bold mx-1">1.5M</div>
            </div>
  
            <div class="d-flex">
              <div><i class="fa-regular fa-star-half-stroke m-1"></i></div>
              <div><i class="fa-regular fa-star m-1"></i></div>
              <div><i class="fa-regular fa-star m-1"></i></div>
              <div><i class="fa-regular fa-star m-1"></i></div>
              <div><i class="fa-regular fa-star m-1"></i></div>
            </div>
  
            <div><i class="fa-solid fa-circle-right text-primary"></i></div>
          </div>
        </div>
      </div>
        `;
        newsContainer.appendChild(newsDiv);
       
    })
}

loadNews();