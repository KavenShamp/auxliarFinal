export class intro extends Phaser.Scene {
  constructor() {
    super({ key: 'intro' });
  }

  preload() {
    //this.load.image('autumm', './assets/images/interface/Autumm.png');
    this.load.image('autumm', './assets/images/interface/Autumm.png');
    this.load.image('startScreenBack', './assets/images/interface/wall.png');
    this.load.audio('intro', './assets/sounds/introVPHP.mp3')
  }

  create() {
    this.cameras.main.once('camerafadeincomplete',function(camera) {
      camera.fadeOut(2000);
    });
    this.cameras.main.fadeIn(2000);
    this.introSample = this.sound.add('intro');
    this.introSample.play();
    
    this.introBackground = this.add.image(500, 300, 'startScreenBack').setScale(0.6);
    this.devTeam = this.add.image(500, 300, 'autumm').setScale(1);
    this.sound.pauseOnBlur = false;
    
    /* this.devTeam = this.physics.add.image(500, -100, 'autumm').setScale(1);
    this.devTeam.body.gravity.y = 3000;
    this.devTeam.setBounce(0.7);
    this.devTeam.setCollideWorldBounds(true);  <-- Este codigo da gravedad y bote al logo de los desarrolladores*/
  }

  update() {
    this.time.addEvent({
      delay: 5500,
      callback: () => {
        this.introSample.stop();
        this.scene.start('startScreen');
      },
      loop: false
    })
  }
}