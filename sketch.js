let data;
let url =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQGkTzDQGe3aUvnCxEpCp4mvAliUd-_kIcpsiwsNMPcuZK1XnZhM-sKKDQiY-XvOrqrwiwMxLxojOMl/pub?gid=0&single=true&output=csv";
function preload() {
  data = loadTable(url, "csv", "header");
}

function setup() {
  let canvas = createCanvas(800, 400);
  //canvas.parent('data');
  //noLoop();
}

function draw() {
  background(255, 230, 243);

  if (data) {
    let numRows = data.getRowCount();
    let bloom = data.getColumn("Blooming Days Per Year");
    let flowers = data.getColumn("Flowers per Stem");

    for (let i = 0; i < numRows; i++) {
      //text(table.getString(i, 0) 2 * 6 + 60, 25);

      let name = data.getString(i, "Common Name");
      let x = 50;
      let y = 100 + i * 50;
      let h = 20;
      let w = flowers[i] * 30;

      fill(128, 0, 128);// I'm calling your fill command before all shapes
      rect(x, y, w, h);

      //fill(128, 0, 128); // here was the original placement of your fill command
      textSize(18);
      textStyle("bold")
      textFont("Trebuchet MS")
      text(name, x, y - 5);

      //text within the bar graph
      fill(255); //since this text is within the purple graph, I used a white fill for the text
      text(flowers[i], x + 5, y + 15);

      //text to the right of the bar graph
      fill(128, 0, 128); //since this text is to the right of the purple graph, I used the purple color for the fill
      //text(flowers[i], x + w + 5, y + 15);

  
    }
  }
}
