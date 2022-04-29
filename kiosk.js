const KIOSK_API_KEY = "FF4D321CD33F47A7BE64ADFD8429B931";
const KIOSK_HOST_NAME = "http://raspberrypi.local";
const MAX_QUEUE_LENGTH = 6;

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
          <button type="button" class="btn btn-primary" onclick=addPrintToQueue("${i.id}")>Print</button>
        </div>
    </div>
    `;
  });
  return assets.join("");
}


async function addPrintToQueue(fileID) {
  filepath = imageAssets.find(i => i.id==fileID).octoFilePath;
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

async function isPrintQueueFull(){
  let isQueueFull = false;
  let res = await fetch(`${KIOSK_HOST_NAME}/plugin/continuousprint/state`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${KIOSK_API_KEY}`,
    },
  })
  let response = await res.json();
  if(response.queue.length >= MAX_QUEUE_LENGTH){
    isQueueFull = true
  }
  else {
    isQueueFull = false
  }
  return isQueueFull
}



const imageAssets = [
  {
    id: 1,
    imagePath: "assets/img/CaliCat.png",
    octoFilePath: "Cali Cat_55m.gcode",
    title: "Cali Cat",
  },
  {
    id: 2,
    imagePath: "assets/img/CrystalGem.png",
    octoFilePath: "Crystal Gem_48m.gcode",
    title: "Crystal Gem",
  },
  {
    id: 3,
    imagePath: "assets/img/20die.png",
    octoFilePath: "D20 Dice_59m.gcode",
    title: "20-sided die",
  },
  {
    id: 4,
    imagePath: "assets/img/Fidgetgear.png",
    octoFilePath: "Fidget Gear_1h10m.gcode",
    title: "Fidget Gears",
  },
  {
    id: 4,
    imagePath: "assets/img/FlexSnake.png",
    octoFilePath: "Flex Snake_1h12m.gcode",
    title: "Flexible Snake",
  },
  {
    id: 5,
    imagePath: "assets/img/OwlBookmark.png",
    octoFilePath: "Owl Bookmark_1h2m.gcode",
    title: "Owl Bookmark",
  },
  {
    id: 6,
    imagePath: "assets/img/PoopEmoji.png",
    octoFilePath: "Poop Emoji_56m.gcode",
    title: "Poopmoji",
  },
  {
    id: 7,
    imagePath: "assets/img/Spinner.png",
    octoFilePath: "Spinner_58m.gcode",
    title: "Spinner Top",
  },
  {
    id: 8,
    imagePath: "assets/img/XWingKit.png",
    octoFilePath: "XWing Kit_57m.gcode",
    title: "X-Wing - Star Fighter",
  },
  {
    id: 9,
    imagePath: "assets/img/TinyBot.png",
    octoFilePath: "Tiny Bot_1h3m.gcode",
    title: "Tiny Bot Set",
  },
  {
    id: 10,
    imagePath: "assets/img/microsaur.png",
    octoFilePath: "Dino Clip_1h0m.gcode",
    title: "Microsauraus Rex",
  },
];