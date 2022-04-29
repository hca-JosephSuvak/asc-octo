const KIOSK_API_KEY = "FF4D321CD33F47A7BE64ADFD8429B931";
const KIOSK_HOST_NAME = "http://raspberrypi.local";
async function createCard(imageAssets) {
  let isQueueFull = await isPrintQueueFull()
  if(isQueueFull){
    return `<div class='card'>
    <h1>Sorry, the print queue is full</h1>
    <button class="btn" onclick="()=>console.log('clicked'); window.location.href='/';" >Refresh</button
    </div>`
  }
  const assets = imageAssets.map((i) => {
    return `
    <div class="card" style="margin-bottom: 20px; margin-left: 125px; margin-right: 125px">
      <img src="${i.imagePath}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${i.title}</h5>
          <button type="button" class="btn btn-primary" onclick=addPrintToQueue("${i.octoFilePath}")>Print</button>
        </div>
    </div>
    `;
  });
  return assets.join("");
}


async function addPrintToQueue(filepath) {
  let searchParams = new URLSearchParams(window.location.search);
  // searchParams.has('email')
  let email = searchParams.get("email");

  var form = new FormData();
  form.append(
    "items",
    `[ {
    \"name\": \"${email}|${filepath}\",
    \"path\": \"${filepath}\",
    \"sd\": false,
    \"job\": \"\",
    \"run\": 0
  }
  ]`
  );

  var settings = {
    url: `${KIOSK_HOST_NAME}/plugin/continuousprint/add`,
    method: "POST",
    timeout: 0,
    headers: {
      Authorization: `Bearer ${KIOSK_API_KEY}`,
    },
    processData: false,
    mimeType: "multipart/form-data",
    contentType: false,
    data: form,
    success: function (data) {
      window.location.href = `kiosk-success.html`;
    },
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
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
  let res = await fetch(`${KIOSK_HOST_NAME}/plugin/continuousprint/state`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${KIOSK_API_KEY}`,
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
    title: "Poopmoji",
  },
  {
    imagePath: "assets/img/Spinner.png",
    octoFilePath: "assets/octo4",
    title: "Spinner Top",
  },
  {
    imagePath: "assets/img/XWingKit.png",
    octoFilePath: "assets/octo4",
    title: "X-Wing - Star Fighter",
  },
  {
    imagePath: "assets/img/TinyBot.png",
    octoFilePath: "assets/octo4",
    title: "Tiny Bot Set",
  },
  {
    imagePath: "assets/img/microsaur.png",
    octoFilePath: "assets/octo4",
    title: "Microsauraus Rex",
  },
];
