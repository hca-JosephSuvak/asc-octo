async function createCard(imageAssets) {
  let isQueueFull = await isPrintQueueFull()
  if(isQueueFull){
    return "<h1>Sorry, the print queue is full</h1>"
  }
  const assets = imageAssets.map((i) => {
    return `
    <div class="card">
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

async function isPrintQueueFull(){
  let isQueueFull = false;
  let res = await fetch("http://raspi.local/plugin/continuousprint/state", {
    method: "GET",
    headers: {
      Authorization: "Bearer AC2A27BA72C541EFB2E52AAE3D001AB1",
    },
  })
  let response = await res.json();
  if(response.queue.length >= 6){
    isQueueFull = true
  }
  else {
    isQueueFull = false
  }
  return isQueueFull
}



const imageAssets = [
  {
    imagePath: "assets/img/CaliCat.png",
    octoFilePath: "assets/octo1",
    title: "Cali Cat",
  },
  {
    imagePath: "assets/img/CrystalGem.png",
    octoFilePath: "assets/octo2",
    title: "Crystal Gem",
  },
  {
    imagePath: "assets/img/20die.png",
    octoFilePath: "assets/octo3",
    title: "20-sided die",
  },
  {
    imagePath: "assets/img/Fidgetgear.png",
    octoFilePath: "assets/octo4",
    title: "Fidget Gears",
  },
  {
    imagePath: "assets/img/FlexSnake.png",
    octoFilePath: "assets/octo4",
    title: "Flexible Snake",
  },
  {
    imagePath: "assets/img/OwlBookmark.png",
    octoFilePath: "assets/octo4",
    title: "Owl Bookmark",
  },
  {
    imagePath: "assets/img/PoopEmoji.png",
    octoFilePath: "assets/octo4",
    title: "Poop Emoji",
  },
  {
    imagePath: "assets/img/Spinner.png",
    octoFilePath: "assets/octo4",
    title: "Spinner Top",
  },
  {
    imagePath: "assets/img/StegosaurusCard.png",
    octoFilePath: "assets/octo4",
    title: "Dino Model Set",
  },
  {
    imagePath: "assets/img/TinyBot.png",
    octoFilePath: "assets/octo4",
    title: "Tiny Bot Set",
  },
];
