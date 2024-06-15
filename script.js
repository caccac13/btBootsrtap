// const getListItem = async () => {
//   const response = await fetch(
//     "https://tiki.vn/api/personalish/v1/blocks/listings?limit=40&include=advertisement&aggregations=2&version=home-persionalized&trackity_id=280aa997-1b97-df1a-8e99-598d18acf5c6&category=11884&page=1&urlKey=xe-con-tay"
//   );
//   const json = await response.json();
//   const data = json.data;
//   console.log(data);

//   let listProd = document.querySelector(".content .list-prod");
//   listProd.innerHTML = "";
//   data.forEach((item) => {
//     let wrapper = document.createElement("div");
//     wrapper.className += "col-4 gy-5";
//     wrapper.innerHTML = `
//         <div class="card" >
//                     <img src="${
//                       item.thumbnail_url
//                     }" class="card-img-top" alt="..." />
//                     <div class="card-body">
//                       <h5 class="name">${item.name}</h5>
//                       <h6 class="price">$ ${item.price.toLocaleString()}</h6>
//                       <p class="des">*****
//                       </p>
//                     </div>
//                   </div>
//     `;
//     listProd.appendChild(wrapper);
//   });

// var honda = data.filter(function (list) {
//   return list.brand_name === "Honda";
// });
// console.log(honda);

// var yamaha = data.filter(function (list) {
//   return list.brand_name === "Yamaha";
// });
// console.log(yamaha);

//   carouselItem.forEach((item) => {});
// };
// getListItem();

fetch(
  "https://tiki.vn/api/personalish/v1/blocks/listings?limit=40&include=advertisement&aggregations=2&version=home-persionalized&trackity_id=280aa997-1b97-df1a-8e99-598d18acf5c6&category=11884&page=1&urlKey=xe-con-tay"
)
  .then((response) => response.json())
  .then((data) => {
    let items = data.data;
    console.log(items);
    let listProd = document.querySelector(".content .list-prod");
    listProd.innerHTML = "";
    items.forEach((item) => {
      let wrapper = document.createElement("div");
      wrapper.className += "col-12 col-lg-4 col-md-6 gy-5";
      wrapper.innerHTML = `
        <div class="card" >
                    <img src="${
                      item.thumbnail_url
                    }" class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="name">${item.name}</h5>
                      <h6 class="price">$ ${item.price.toLocaleString()}</h6>
                      <p class="des">*****
                      </p>
                    </div>
                  </div>
    `;
      listProd.appendChild(wrapper);
    });

    function displayYamahaItems() {
      var listYamahaItem = items.filter((item) => {
        return item.brand_name === "Yamaha";
      });
      let listProd = document.querySelector(".content .list-prod");
      listProd.innerHTML = "";
      listYamahaItem.forEach((item) => {
        let wrapper = document.createElement("div");
        wrapper.className += "col-12 col-lg-4 col-md-6 gy-5";
        wrapper.innerHTML = `
            <div class="card" >
                        <img src="${
                          item.thumbnail_url
                        }" class="card-img-top" alt="..." />
                        <div class="card-body">
                          <h5 class="name">${item.name}</h5>
                          <h6 class="price">$ ${item.price.toLocaleString()}</h6>
                          <p class="des">*****
                          </p>
                        </div>
                      </div>
        `;
        listProd.appendChild(wrapper);
      });
    }

    function displayHondaItems() {
      var listHondaItem = items.filter((item) => {
        return item.brand_name === "Honda";
      });
      console.log(listHondaItem);
      let listProd = document.querySelector(".content .list-prod");
      listProd.innerHTML = "";
      listHondaItem.forEach((item) => {
        let wrapper = document.createElement("div");
        wrapper.className += "col-12 col-lg-4 col-md-6 gy-5";
        wrapper.innerHTML = `
            <div class="card" >
                        <img src="${
                          item.thumbnail_url
                        }" class="card-img-top" alt="..." />
                        <div class="card-body">
                          <h5 class="name">${item.name}</h5>
                          <h6 class="price">$ ${item.price.toLocaleString()}</h6>
                          <p class="des">*****
                          </p>
                        </div>
                      </div>
        `;
        listProd.appendChild(wrapper);
      });
    }
    // displayHondaItems()

    var yamahaBrand = document.getElementById("yamahaBrand");
    yamahaBrand.addEventListener("click", displayYamahaItems);

    var hondaBrand = document.getElementById("hondaBrand");
    hondaBrand.addEventListener("click", displayHondaItems);

    
    // console.log(menuMobile)
  });
