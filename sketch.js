let data;
let url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQGkTzDQGe3aUvnCxEpCp4mvAliUd-_kIcpsiwsNMPcuZK1XnZhM-sKKDQiY-XvOrqrwiwMxLxojOMl/pub?gid=0&single=true&output=csv";
function preload() {
  data = loadTable(url, 'csv', 'header');
}

function setup() {
  let canvas = createCanvas(800, 400);
  //canvas.parent('data');
  //noLoop();

}

function draw() {
  background(50);

  if (data) {
    let numRows = data.getRowCount();
    let bloom = data.getColumn('Blooming Days Per Year');
    let flowers = data.getColumn('Fowers per Stem');
    
     
    for (let i = 0; i < numRows; i++) {

      let name = data.getString(i,"Common Name");
      let x = 50;
      let y = 100 + i * 50;
      let h = 20
      let w = flowers[i] * 30;
      rect(x, y, w, h);

      fill(255);
      textSize(14);
      text(name,x, y-5);
    }
  }
}