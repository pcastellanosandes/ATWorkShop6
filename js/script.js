
var totalColors = 5;
var interval = 1/totalColors;

function randomPalette(){
  var tonality = Math.floor(Math.random() * 360)/360;
  var rgb, hexa;
  var colors = [];

  for(var i=0; i<totalColors;i++){
    rgb = hslToRgb(tonality,0.7,0.7);
    console.log(rgb);
    colors.push(rgbToHex(Math.floor(rgb[0]),Math.floor(rgb[1]),Math.floor(rgb[2])));
    tonality = nextTonality(tonality,interval);

  }

  showColors(colors);
  generateRules(colors);
}

function nextTonality(tonality,interval){
  var nextTon = tonality + interval;
  if(nextTon>1)
    nextTon -= 1;
  return nextTon;
}

function generateRules(colors){
  var rules =".website-background{ color: "+colors[0]+";} \n"+
             ".element-text{ color: "+colors[1]+";}\n"+
             ".element-border{ border-color: "+colors[2]+";}\n"+
             ".element-background{ background-color: "+colors[3]+";}\n"+
             ".header{ color: "+colors[4]+";}\n";
 $("#css-rules").val(rules);
}

function showColors(colors){
  for(var i=0; i<colors.length;i++){
    $("#color"+(i+1)).css("background-color", colors[i]);
  }
}

function clean(){
  var colors = ["#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF"];
  showColors(colors);
  generateRules(colors);
}
