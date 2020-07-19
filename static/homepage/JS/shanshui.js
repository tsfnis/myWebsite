//generative shanshui homepage
//create a new one on mouse mouseClicked
//
//
var peaks = 5;           //how many mountains
//var seals = 4;          //how many seals
var images = [];
var img;
var myName, about, works;
var aboutX, aboutY, worksX, worksY;

function preload() {
  //seals
  myName = loadImage('http://localhost:1313/homepage/images/name.png');
  about = loadImage('http://localhost:1313/homepage/images/about.png');
  works = loadImage('http://localhost:1313/homepage/images/works.png');

  //mountains
  for(let i = 1; i < 8; i++){
    images.push(loadImage('http://localhost:1313/homepage/images/'+i+'.png'));
  }

  console.log(images)

}

function setup() {
  createCanvas(windowWidth, windowHeight);

  makeMountain(peaks);
  makeSeal();

}


function draw() {
  //literally nothing needs to loop rn...

}


//buttons need to work, iff not on button regenerate
function mouseClicked(){
  if(aboutX < mouseX && mouseX < aboutX+120
      && aboutY < mouseY && mouseY < aboutY+200){
        //window.location.href = "www.itsthisnow.com/about";
      }
  else if(worksX < mouseX && mouseX < worksX+150
    && worksY < mouseY && mouseY < worksY+150){
      window.location.href = "http://localhost:1313/portfolio/";
    }
  else{
    peaks = Math.floor(random(2,7));
    makeMountain(peaks);
    makeSeal();
  }
}


function makeMountain(howMany){
  background(255,255,255);
  for(i=0; i<howMany; i++){
    //which mountain
    let pic = random(0, 7);
    pic = Math.floor(pic)
    //where
    let x = random(100, windowWidth-700);
    let y = random(50, windowHeight-700);
    image(images[pic], x, y);
  }
}

//always some, maybe more
function makeSeal(){
  let x = random(10, 100);
  let y = random(10, 100);
  image(myName, x, y);

   aboutX = random(10, 150);
   aboutY = random(300, 500);
   image(about, aboutX, aboutY);

   worksX = random(400, windowWidth-200);
   worksY = random(10, 100);
   image(works, worksX, worksY);
}
