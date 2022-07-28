var coord = [];
var intervals = [];
var score = 0;
document.getElementById('score').innerHTML = score;
var el = document.getElementById('d');
intervals.push(setInterval(function g(){
    if (+/\d+/.exec(el.style.marginLeft) < 1663) el.style.marginLeft = (-(+/\d+/.exec(el.style.marginLeft)) - 2) + 'px';
    else el.style.marginLeft = 0;
    //console.log(el.style.marginLeft);
}, 10));

intervals.push(setInterval(function ch(){
    coord = [-160, 450, 790, 1200, 1450, 2120, 2460, 2870];
    for (var i = 0; i < coord.length - 1; i++) {
        coord[i] = coord[i] - (+/\d+/.exec(el.style.marginLeft));
    }
}, 10));
var yu = document.getElementById('g').style;
t = 1;
yu.background = "url('images/yu2p.png')";
yu.background = "url('images/yu1p.png')";
yu.background = "url('images/yu2n.png')";
yu.background = "url('images/yu2.png')";
document.getElementById('d').style.background = "url('images/sn.png')";
document.getElementById('d').style.background = "url('images/s2.png')";
intervals.push(setInterval(function a(){
  if (!k){
    if (t) {
      if (dn == 'd') yu.background = "url('images/yu2.png')";
      else yu.background = "url('images/yu2n.png')";
    }
    else {
      if (dn == 'd') yu.background = "url('images/yu1.png')";
      else yu.background = "url('images/yu1n.png')";
    }
    t = !t;
  }
  else {
    if (dn =='d') yu.background = "url('images/yu1p.png')";
    else yu.background = "url('images/yu2p.png')";
    
  }
}, 200));

var tem = setInterval(function dnn() {
  if (score > 10) {
    dn = 'n';
    document.getElementById('d').style.background = "url('images/sn.png')";
    document.body.style.background = '#353739';
    document.getElementById('score').style.border = "10px double white";
    document.getElementById('score').style.color= "white";
    document.getElementById('over').style.color = "white";
    clearInterval(tem);
  }
}, 20);

var k = 0; 
dn = 'd';
yu.marginTop = '-155px';
rr = 0;
intervals.push(setInterval(function df(){
    for (var i = 0; i < coord.length - 1; i++){
        if (coord[i] <= 0 && coord[i] >= -40){
            if (+/\d+/.exec(yu.marginTop) < 215){
              document.getElementById('over').style.display = 'block';
              document.getElementById('over').onclick = function rl() {
                window.location.reload();
              }
              document.getElementById('over').style.cursor = 'cell';
              rr = 1;
                for (var j = 0; j < intervals.length - 1; j++) {
                    clearInterval(intervals[j]);
		                dv = 0;
                    
                }
                
            }
            if (coord[i]== 0) {
              if (!rr) {
                score++;
                document.getElementById('score').innerHTML = score + '';
              }
            }
            
            
        }
    }
}, 10));
var re = setInterval(function rel(){
    if (rr) setTimeout(function(){
      //document.getElementById('over').style.display = 'none';
                        //window.location.reload();
                    }, 3000);
  }, 3000);
var mar = +/\d+/.exec(yu.marginTop);
function jump(e){
    if (e.key == " "){
        gg();   
        
    }
}
var dv = 1;
function gg() {
  var n = 1;
        var s = 0;
        if (!k){
            var i = setInterval(function(){
                k = 1;
                if (mar < 280 && n) {
                  if (dv){
                    yu.marginTop = -(+/\d+/.exec(yu.marginTop) + 10) + 'px';
                    mar = +/\d+/.exec(yu.marginTop);
                  }
                   
                }
                else {
                  if (dv){
                    n = 0;
                    yu.marginTop = -(+/\d+/.exec(yu.marginTop) - 5) + 'px';
                    mar = +/\d+/.exec(yu.marginTop);
                    if (mar == 155) {
                        n = 1;
                        s = 1;
                    }
                  }
                }
                if (mar == 155 && s) {
                    clearInterval(i);
                    k = 0;
                    //console.log('end');
                }
                //console.log(mar);
            }, 20)
        }
}
document.onclick = gg;
    
addEventListener("touchstart", jump);
addEventListener("keydown", jump);
