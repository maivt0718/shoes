$.GetCarouseShoeInfo = async (...ids) => {
  let total = [];
  try {
    for (const id of ids) {
      let result = await instance.get(`Product/getbyid?id=${id}`);
      total.push(result.data.content);
    }
    return total;
  } catch (err) {
    console.error(err);
  }
};

$.renderCarousel = () => {
  result = $.GetCarouseShoeInfo(12, 11);
  content = ""
  result
    .then((res) => {
      for (const element of res) {
        let {description, image,categories} = element
        console.log(categories[0].id)
        content += `
        <div class="carousel-item">
            <div class="row">
              <div class="item-left col-md-6 col-sm-12 col-12 ">
                <h2 class="text-uppercase animate__animated animate__fadeInTopLeft ">new arrival</h2>
                <h1 class="text-uppercase animate__animated animate__fadeInLeft">${categories[0].id}</h1>
                <p class="animate__animated animate__fadeInUp">${description}</p>
                <button class="animate__animated animate__fadeInUp animate__delay-5s text-capitalize">shop now</button>
              </div>
              <div class="item-right col-md-6 col-sm-12 col-12">
                <img src="${image}" class="d-block w-100 animate__animated animate__fadeInTopRight" alt="...">
              </div>
            </div>
            
          </div>
        `
      }
      $("#home_carousel").html(content);
    $("#home_carousel > div:first-child").addClass("active");
    })
    .catch((err) => {
      console.log(err);
    });
    
};

const instance = axios.create({
  baseURL: "https://shop.cyberlearn.vn/api/",
  timeout: 30000,
  // headers: {'X-Custom-Header': 'foobar'}
});

$.renderCarousel()
