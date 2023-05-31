const toggleBtn = document.querySelector('.toggle-btn');
const toggleIcon = document.querySelector('.toggle-btn i');
const dropDownMenu = document.querySelector('.dropdown-menu');

toggleBtn.onclick = function() {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open');
    
    toggleIcon.classList = isOpen
     ? 'fa-solid fa-xmark'
     : 'fa-solid fa-bars'

}



var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 300,
      modifier: 1,
      slideShadows: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

  class musicPlayer {
    constructor() {
        this.play = this.play.bind(this);
        this.playBtn = document.getElementById('play');
        this.playBtn.addEventListener('click', this.play);
        this.controlPanel = document.getElementById('control-panel');
        this.infoBar = document.getElementById('info');
        this.status = false;
    }

    play() {
        var audio = document.getElementById('Music'); 
        let controlPanelObj = this.controlPanel,
        infoBarObj = this.infoBar
        Array.from(controlPanelObj.classList).find(function(element){   
            return element !== "active" ? controlPanelObj.classList.add('active') : controlPanelObj.classList.remove('active');       
        });

        Array.from(infoBarObj.classList).find(function(element){
            return element !== "active" ? infoBarObj.classList.add('active') : infoBarObj.classList.remove('active');
        });

        this.status = !this.status;

        if(this.status == true){
            audio.play(); 
        }else{
            audio.pause();
        }


    }

}

const newMusicPlayer = new musicPlayer();


  