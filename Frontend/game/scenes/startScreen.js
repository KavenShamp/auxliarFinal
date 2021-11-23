import { StartButton } from "../components/start-button.js";

export class startScreen extends Phaser.Scene {
  constructor() {
    super({ key: 'startScreen' });
    this.startButton = new StartButton(this);
  }

  preload() {
    
    this.load.image('autumm', './assets/images/interface/Autumm.png');
    this.load.image('vegPow', './assets/images/interface/vp.png');
    this.load.image('startScreenBack', './assets/images/interface/wall.png');
    this.load.audio('menu', './assets/sounds/menuVPHP.mp3');
    this.startButton.preload();
  }

  create() {
    this.cameras.main.fadeIn(3500);
    this.startScreenBackground = this.add.image(500, 300, 'startScreenBack').setScale(0.6);
    this.sound.pauseOnBlur = false;
    this.menuSample = this.sound.add('menu');
    this.menuSample.play();
    this.startButton.create();
    this.devTeam = this.add.image(500, 40, 'autumm').setScale(0.6);
    this.title = this.add.image(500, 250, 'vegPow').setScale(0.6);
  }
}