var flipCanvas = function(){
    x.save();
    x.translate(w, 0);
    x.scale(-1,1);
    x.drawImage(v, 0, 0, w, h);
    x.restore();
}