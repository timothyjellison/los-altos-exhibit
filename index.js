const clipNames = [
  'fire-audio-excerpt',
  'police-audio-excerpt'
];

function setup(x, y) {
  afterglow.on(clipNames[x],'play', function(){
    const otherplayer = afterglow.getPlayer(clipNames[y]);
    otherplayer.load();
  });
}

setup(0, 1);
setup(1, 0);
