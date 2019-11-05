function drawSmall(frames) {
  var canvas = document.getElementById('canvas');
  const frame = frames;
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    for (let i = 0; i < frame.length; i++) {
      const row = frame[i];
      for (let j = 0; j < row.length; j++) {
        const column = row[j];
        ctx.fillStyle = "#" + column;
        ctx.fillRect(i*128, j*128, 128, 128);
      }
    }
  }
}

function drawBig(frames) {
  var canvas = document.getElementById('canvas');
  const frame = frames;
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    for (let i = 0; i < frame.length; i++) {
      const row = frame[i];
      for (let j = 0; j < row.length; j++) {
        const column = row[j];
        ctx.fillStyle = `rgba(${column[0]}, ${column[1]}, ${column[2]}, ${column[3]})`;
        ctx.fillRect(i*16, j*16, 16, 16);
      }
    }
  }
}

function canvasImg(img) {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d')
  var pic = new Image();
      pic.src = img;
      pic.onload = function () {
          ctx.drawImage(pic, 0, 0, 512, 512);
      }
}

document.getElementById('drow').addEventListener('click', () => {
  const url = 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/4x4.json'
  let someData;
  fetch(url)
    .then(res => res.json())
    .then(data => someData = data)
    .then(() => drawSmall(someData));
})

document.getElementById('drow32').addEventListener('click', () => {
  const url = 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/32x32.json'
  let someData;
  fetch(url)
    .then(res => res.json())
    .then(data => someData = data)
    .then(() => drawBig(someData));
})

document.getElementById('drow256').addEventListener('click', () => {
  let img = './img/image.png';
  canvasImg(img);
})
