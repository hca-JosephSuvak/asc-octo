const KIOSK_API_KEY = "FF4D321CD33F47A7BE64ADFD8429B931";
const KIOSK_HOST_NAME = "http://raspberrypi.local";

async function createCard(imageAssets) {
  // let isQueueFull = await isPrintQueueFull()
  // if(isQueueFull){
  //   return "<h1>Sorry, the print queue is full</h1>"
  // }
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

  // // fetch("http://raspberrypi.local/plugin/continuousprint/assign", {
  // //   "method": "POST",
  // //   "headers": {
  // //     "cookie": "active_logout_P80=true",
  // //     "Content-Type": "application/x-www-form-urlencoded",
  // //     "Authorization": "Bearer FF4D321CD33F47A7BE64ADFD8429B931"
  // //   },
  // //   "body": {
  // //     "items": "[\t\t{\n\t\t\t\"name\": \"clip2.gcode\",\n\t\t\t\"path\": \"clip2.gcode\",\n\t\t\t\"sd\": false,\n\t\t\t\"job\": \"\",\n\t\t\t\"run\": 0,\n\t\t\t\"start_ts\": null,\n\t\t\t\"end_ts\": null,\n\t\t\t\"result\": null,\n\t\t\t\"retries\": null\n\t\t}\n]",
  // //     "": ""
  // //   }
  // // })
  // // .then(response => {
  // //   console.log(response);
  // // })
  // // .catch(err => {
  // //   console.error(err);
  // // });

  // // fetch(`${KIOSK_HOST_NAME}/plugin/continuousprint/assign`, {
  // //   "method": "POST",
  // //   "headers": {
  // //     "cookie": "SessionID=57eb928d7cd21e13153959f6601d7dda",
  // //     "Content-Type": "application/x-www-form-urlencoded",
  // //     "Authorization": `Bearer ${KIOSK_API_KEY}`
  // //   },
  // //   "body": {
  // //     "items": "[\t\t{\n\t\t\t\"name\": \"clip2.gcode\",\n\t\t\t\"path\": \"clip2.gcode\",\n\t\t\t\"sd\": false,\n\t\t\t\"job\": \"\",\n\t\t\t\"run\": 0,\n\t\t\t\"start_ts\": null,\n\t\t\t\"end_ts\": null,\n\t\t\t\"result\": null,\n\t\t\t\"retries\": null\n\t\t}\n]",
  // //     "": ""
  // //   }
  // // })
  // // .then(response => {
  // //   console.log(response);
  // // })
  // // .catch(err => {
  // //   console.error(err);
  // // });



  
  // let data = {
  //     name: "clip2.gcode",
  //     path: "clip2.gcode",
  //     sd: false,
  //     job: "",
  //     run: 0
  //     // start_ts: null,
  //     // end_ts: null,
  //     // result: null,
  //     // retries: null,
  //   };

    
  //   body = new FormData();
    
  //   // body.append("item", data)
    
  //   // for ( var key in data ) {
  //     //     body.append(key, data[key]);
  //     // }
      
  // let list = [];
      
  // list.push(data);

  // body.append("items", list)
  // const paramsString = new URLSearchParams(data).toString()

  // console.log({data});
  // console.log({body});

  // let res = await fetch(`${KIOSK_HOST_NAME}/plugin/continuousprint/assign`, {
  //   method: "POST",
  //   headers: {
  //     Authorization: `Bearer ${KIOSK_API_KEY}`,
  //     "Content-Type": "application/x-www-form-urlencoded",
  //   },
  //   "body": body,
  // });
  // if(res.ok){
  //   window.alert("you print has been added to the queue!")
  // }
var form = new FormData();
form.append("items", `[ {
\"name\": \"clip2.gcode\",
\"path\": \"clip2.gcode\",
\"sd\": false,
\"job\": \"\",
\"run\": 0,
\"start_ts\": null,
\"end_ts\": null,
\"result\": null,
\"retries\": null
}
]`);

var settings = {
  "url": "http://raspberrypi.local/plugin/continuousprint/assign",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Authorization": "Bearer FF4D321CD33F47A7BE64ADFD8429B931"
  },
  "processData": false,
  "mimeType": "multipart/form-data",
  "contentType": false,
  "data": form
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
  let res = await fetch(`${KIOSK_HOST_NAME}/plugin/continuousprint/assign`, {
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
