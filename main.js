const audio = document.getElementById('audio');
const pause = document.getElementById('pause');
const icon = document.getElementById('icon');
const seekBar = document.getElementById('seekBar');
const h1 = document
  .getElementById('h1');
const p = document
  .getElementById('p')
const video=document
  .createElement('video');
  const nextAudio=document.getElementById('right');
  const prevAudio=document.getElementById('left');
  const img=document.
    getElementById('img');

// Toggle play/pause when clicking the icon
pause.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    icon.classList.remove('fa-play');
    icon.classList.add('fa-pause');
    
  } 
  else {
    audio.pause();
    icon.classList.remove('fa-pause');
    icon.classList.add('fa-play');
  }
});
  
        //Files
  const imgSrc=[
    '/videos/consume.jpeg',
    '/videos/artic.jpeg',
    '/videos/muto.jpeg',
    '/videos/fafa.jpg'
  ]
  
  const playlist=[
    "/videos/song2.mp3",
    '/videos/waguri.mp3',
    '/videos/multo.mp3',
    '/videos/IloveYou.mp3'
  ]
  
  const videos=[
    'videos/heya1.mp4',
    '/videos/wagori.mp4',
    '',
    '/videos/frie.mp4'
  ]
  
  let i=0
  audio.src = playlist[i]
  audio.load()
  
  video.autoplay=true
  video.muted=true
  video.loop=true
  video.controls = false;
  
  nextAudio.addEventListener('click', () =>{ 
    i++
    audio.src = playlist[i]
    img.src= imgSrc[i]
    audio.load()
    
     if(i >= playlist.length){
    i=0
    audio.src = playlist[i]
    img.src= imgSrc[i]
    audio.load()
    clearVideoSource()
  }
    main()
  })
  
  prevAudio.addEventListener
  ('click', () =>{
    if(i>0){
      i--
      audio.src = playlist[i]
    img.src= imgSrc[i]
    audio.load()
    }
    main()
    console.log(i)
  })
  
  audio.addEventListener('play', () => {
    audio.addEventListener('timeupdate', () => {
  if (audio.currentTime >= 4 && !document.body.contains(video) && i === 0) {
    createVideoSource(i);
    video.currentTime = 0;
  }
});

  if (i === 1) {
    createVideoSource(i)
  }
  
  if (i === 3){
    createVideoSource(i)
  }
});
  
  const musec=document.getElementById('huhu');
  const musicBox=document.getElementById('container')
  
  musec.addEventListener('click',() => { 
    let existingList=document.getElementById('musicLi')
    if (existingList) return;
    
    const musicLi=document.createElement('div');
     musicLi.id='musicLi'
    
  
    const s1=document.createElement('div')
    const img1=document
      .createElement('img')
      img1.src=imgSrc[0]
    const h1One=document.
      createElement('h1')
      h1One.textContent='Consume'
        s1.appendChild(img1)
        s1.appendChild(h1One)
        musicLi.appendChild(s1)
    
    const s2=document
      .createElement('div')
    const img2=document
      .createElement('img')
      img2.src=imgSrc[1]
    const h1Two=document.
      createElement('h1')
      h1Two.textContent='Number 1 Party Anthem'
        s2.appendChild(img2)
        s2.appendChild(h1Two)
        musicLi.appendChild(s2)
      
    const s3=document.
      createElement('div')
      const img3=document
      .createElement('img')
      img3.src=imgSrc[2]
    const h1Three=document.
      createElement('h1')
      h1Three.textContent='Multo'
        s3.appendChild(img3)
        s3.appendChild(h1Three)
        musicLi.appendChild(s3)
      
    const s4=document.
      createElement('div')
    const img4=document
      .createElement('img')
      img4.src=imgSrc[3]
    const h1Four=document.
      createElement('h1')
      h1Four.textContent='A Thousand Years'
        s4.appendChild(img4)
        s4.appendChild(h1Four)
        musicLi.appendChild(s4)
    
    
      s1.classList.add('song')
      s2.classList.add('song')
      s3.classList.add('song')
      s4.classList.add('song')
     
    musicBox.appendChild(musicLi)
    
    s1.addEventListener('click'
   ,() => {
     haha(0)
    })
    
    s2.addEventListener('click'
   ,() => {
     haha(1)
    })
    
    s3.addEventListener('click'
   ,() => {
     haha(2)
    })
    
    s4.addEventListener('click'
   ,() => {
     haha(3)
    })
    
  })
  
  function haha(index){
     musicBox.removeChild(musicLi)
     i=index
      audio.src = playlist[i]
      img.src = imgSrc[i]
      audio.load()
      main()
  }
  
  function main(){
    switch (i){
      case 0:
        icon.classList.remove('fa-pause');
      icon.classList.add('fa-play')
     h1.textContent='Consume'
    p.textContent='Chase Atlantic'
    clearVideoSource()
      break;
      
      case 1:
      icon.classList.remove('fa-pause');
    icon.classList.add('fa-play')
    h1.textContent = 'No.1 Party Anthem';
      p.textContent = 'Artic Monkeys';
      clearVideoSource()
      break;
      
      case 2:
        icon.classList.remove('fa-pause');
    icon.classList.add('fa-play')
        h1.textContent='Multo'
      p.textContent='Cup of Joe'
      clearVideoSource()
      break;
      
      case 3:
        icon.classList.remove('fa-pause');
      icon.classList.add('fa-play')
        h1.textContent='A Thousand Years'
      p.textContent='Christina Perri'
      clearVideoSource()
      break;
    }
  }
  
  function clearVideoSource() {
  if (document.body.contains(video)) {
    document.body.removeChild(video);
  }
  while (video.firstChild) {
    video.removeChild(video.firstChild);
  }
  }
  
function createVideoSource(index) {
  if (!videos[index]) return;

  clearVideoSource();

  const newSource = document.createElement('source');
  newSource.src = videos[index];
  newSource.type = 'video/mp4';

  video.appendChild(newSource);
  document.body.appendChild(video);
  video.load();
  video.play();
}
  
// Set seekBar max when audio is ready
audio.addEventListener('canplaythrough', () => {
  seekBar.max = audio.duration;
});

// Update seekBar value as audio plays
audio.addEventListener('timeupdate', () => {
  seekBar.value = audio.currentTime;
});

// Seek when user drags the slider
seekBar.addEventListener('input', () => {
  audio.currentTime = seekBar.value;
});
