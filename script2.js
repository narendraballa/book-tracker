fetch(
  "https://www.googleapis.com/books/v1/volumes?q=The+Subtle+Art+of+Not+Giving+a+F*ck"
)
  .then((response) => {
    // console.log("Response");
    // console.log(response);
    return response.json();
  })
  .then((jsonData) => {
    // console.log(jsonData);
    // const result = jsonData.map((element) => element.volumeInfo.title);
    data(jsonData);
  })
  .then((err) => {
    console.log(err);
  });

function data(query) {
  // console.log(query);
  for (const i in query.items) {
    let myData = "";
    query.map((val) => {
    //   myData += `
    //     <div class="card mb-3" style="max-width: 650px">
    //       <div class="row g-1">
    //         <div class="col-md-4">
    //           <img
    //             src="https://www.readriordan.com/wp-content/uploads/2022/02/Lightning-Thief-flat-cover.png"
    //             class="img-fluid rounded-start pt-4"
    //             alt="Book Cover"
    //           />
    //         </div>
    //         <div class="col-md-8">
    //           <div class="card-body">
    //             <h5 class="card-title">${val.items[i].title}</h5>
    //             <p class="card-title"><strong>Author:</strong> Rick Riordan</p>
    //             <p class="card-text">
    //               Percy Jackson & the Olympians is a series of five fantasy novels
    //               written by American author Rick Riordan, and the first book
    //               series in the Camp Half-Blood Chronicles.
    //             </p>
    //             <p><strong>Rating:</strong> 4.5</p>
    //             <a href="#" class="btn btn-outline-danger">Add</a>
    //           </div>
    //         </div>
    //       </div>
    //     </div>`;
    // });
    // console.log(typeof query);
    // document.getElementById("cards").innerHTML = myData;
  }
}
