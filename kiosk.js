function createCard(imageAssets) {
  const assets = imageAssets.map((i) => {
    return `
    <div class="card" style="width: 18rem;">
      <img src="${i.imagePath}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${i.title}</h5>
          <button type="button" class="btn btn-primary" onclick=console.log("${i.octoFilePath}")>Print</button>
        </div>
    </div>
    `;
  });
  return assets.join("");
}

function loadfirstpage(Email, Terms) {
  let terms = Terms;
  let email = Email;

  if (email === null) {
    return;
  }
  if (terms === null) {
    return `
        < div className = "modal" tabIndex = "-1" >
        < div className = "modal-dialog" >
        < div className = "modal-content" >
        < div className = "modal-header" >
        < h5 className = "modal-title" > Modal title < /h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
        <div className="modal-body">
            <p>Modal body text goes here.</p>
        </div>
        <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
        </div>
    </div>
    </div>
    </div>
    }
        `;
  }
}

const imageAssets = [
  {
    imagePath: "assets/img/CaliCat.png",
    octoFilePath: "assets/octo1",
    title: "Cat 1",
  },
  {
    imagePath: "assets/img/CaliCat.png",
    octoFilePath: "assets/octo2",
    title: "Cat 2",
  },
  {
    imagePath: "assets/img/CaliCat.png",
    octoFilePath: "assets/octo3",
    title: "Cat 3",
  },
  {
    imagePath: "assets/img/CaliCat.png",
    octoFilePath: "assets/octo4",
    title: "Cat 4",
  },
  /*{
        "imagePath":"assets/img",
        "octoFilePath" : "assets/octo"
    },
    {
        "imagePath":"assets/img",
        "octoFilePath" : "assets/octo"
    },
    {
        "imagePath":"assets/img",
        "octoFilePath" : "assets/octo"
    },
    {
        "imagePath":"assets/img",
        "octoFilePath" : "assets/octo"
    },
    {
        "imagePath":"assets/img",
        "octoFilePath" : "assets/octo"
    },
    {
        "imagePath":"assets/img",
        "octoFilePath" : "assets/octo"
    },
    {
        "imagePath":"assets/img",
        "octoFilePath" : "assets/octo"
    },
    {
        "imagePath":"assets/img",
        "octoFilePath" : "assets/octo"
    },
    {
        "imagePath":"assets/img",
        "octoFilePath" : "assets/octo"
    },
    {
        "imagePath":"assets/img",
        "octoFilePath" : "assets/octo"
    },
    {
        "imagePath":"assets/img",
        "octoFilePath" : "assets/octo"
    },
    {
        "imagePath":"assets/img",
        "octoFilePath" : "assets/octo"
    },
    {
        "imagePath":"assets/img",
        "octoFilePath" : "assets/octo"
    },
    {
        "imagePath":"assets/img",
        "octoFilePath" : "assets/octo"
    },
    {
        "imagePath":"assets/img",
        "octoFilePath" : "assets/octo"
    },
    {
        "imagePath":"assets/img",
        "octoFilePath" : "assets/octo"
    },
    {
        "imagePath":"assets/img",
        "octoFilePath" : "assets/octo"
    },
    {
        "imagePath":"assets/img",
        "octoFilePath" : "assets/octo"
    },
    {
        "imagePath":"assets/img",
        "octoFilePath" : "assets/octo"
    },
    {
        "imagePath":"assets/img",
        "octoFilePath" : "assets/octo"
    },
    {
        "imagePath":"assets/img",
        "octoFilePath" : "assets/octo"
    },
    {
        "imagePath":"assets/img",
        "octoFilePath" : "assets/octo"
    },
    {
        "imagePath":"assets/img",
        "octoFilePath" : "assets/octo"
    },*/
];
