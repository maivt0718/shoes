$.renderFlashSale = () => {
  content = "";
  result = $.GetCarouseShoeInfo(2, 10, 17);
  result
    .then((res) => {
      for (const element of res) {
        let { description, image, categories } = element;

        content += `
            <div class="col-12 col-md-12 col-lg-4 deal_item">
              <div class="deal_outside col-12 col-sm-12 col-md-12 col-lg-4">
                <div class="deal_overlay">
                  <div><i class="fa-solid fa-arrow-right"></i></div>
                  <h3 class="${categories[0].id}">${categories[0].id}</h3>
                  
                </div>
                <img src="${image}" alt="" srcset="">
              </div>
            </div>
            `;
      }
      
      
      $(".deal_list").html(content);
    })
    .catch((err) => {
      console.log(err);
    });
};


$.renderFlashSale()
