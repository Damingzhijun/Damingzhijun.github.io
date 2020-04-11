 function myShow(obj,time){
    var height = obj.style.posHeight;
    var width = obj.style.posWidth;
    var times = time / 20;
    obj.style.height = 0;
    obj.style.width = 0;
    obj.style.display = 'block';
    obj.style.opacity = '0';
    obj.style.filter='alpha(opacity=0)';

    for(var i=0;i<times;i++){
        setTimeout(function(){
            obj.style.posHeight += height/times;
            if(obj.style.posHeight > height){
                obj.style.posHeight = height;
            }
            obj.style.posWidth += width/times;
            if(obj.style.posWidth > width){
                obj.style.posWidth = width;
            }
            var opacity = parseFloat(obj.style.opacity,10) + 1/times;
            obj.style.opacity = opacity;
            obj.style.filter='alpha(opacity=' + parseFloat(opacity) * 100 + ')';
        },20*i);
    }
}
window.onload = function(){
    var test = document.getElementById("test");
    myShow(test,500);
}