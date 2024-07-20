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
  content = "";
  result
    .then((res) => {
      for (const element of res) {
        let { description, image, categories } = element;

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
        `;
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

$.renderCarousel();

function layDuLieuGiay() {
  let promise = axios({
    url: "https://shop.cyberlearn.vn/api/Product",
    method: "GET",
  });
  promise
    .then((res) => {
      console.log(res);
      renderDuLieuGiay(res.data.content);
    })
    .catch((err) => {
      console.log(err);
    });
}
layDuLieuGiay();

// function renderDuLieuGiay(arrGiay, idSort = "all") {
//   let content = "";
//   for (let giay of arrGiay) {
//     let { image, name, price } = giay;
//     content += `
//     <div class="col-12 col-md-6 col-lg-4 col-xl-3">
//                 <div class="product_item animate__animated animate__zoomIn">
//                   <div class="sales_container">
//                     <!-- todo: sale-img -->
//                     <div class="sales_img">
//                       <img src="${image}" alt="Sales Pic 1">
//                       <div class="img_interact">
//                         <i class="fa-regular fa-heart" onclick="likeShoes(this)"></i>
//                         <i class="fa-regular fa-images"></i>
//                       </div>
//                       <div class="img_add">
//                         <h5>QUICK ADD</h5>
//                       </div>
//                     </div>
//                     <!-- todo: sale-info -->
//                     <div class="sales_info">
//                       <a href="../views/detail.html?id=1">
//                         <h4>${name}</h4>
//                       </a>
//                       <div class="info_stars">
//                         <i class="fa-solid fa-star"></i>
//                         <i class="fa-solid fa-star"></i>
//                         <i class="fa-solid fa-star"></i>
//                         <i class="fa-solid fa-star"></i>
//                         <i class="fa-solid fa-star-half-stroke"></i>
//                       </div>
//                       <div class="info_prices">
//                         <h5>${price}</h5>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//     `;
//   }
//   document.getElementById(idSort).innerHTML = content;
// }
