import { BackButton } from "../components/back-button.js";
import { CreditsButton } from "../components/credits-button.js";
import { LevelsButton } from "../components/levels-button.js";
import { StartButtonMenu } from "../components/start-M_button.js";

export class menu extends Phaser.Scene {
    constructor() {
      super({ key: 'menu' });
      this.backButton = new BackButton(this);
      this.creditsButton = new CreditsButton(this);
      this.levelsButton = new LevelsButton(this);
      this.startButtonMenu = new StartButtonMenu(this);
    }
  
    preload() {
      this.load.image('menuBackground', './assets/images/interface/wall_menu.png');
      this.load.image('popUp', './assets/images/interface/popUp.png')
      this.backButton.preload();
      this.creditsButton.preload();
      this.levelsButton.preload();
      this.startButtonMenu.preload();
    }
    
    create() {
      this.cameras.main.fadeIn(2500);
      this.menuBackground = this.add.image(500, 300, 'menuBackground').setScale(0.6);
      this.menuPopUp = this.add.image(500, 300, 'popUp').setScale(0.6);
      this.backButton.create();
      this.creditsButton.create();
      this.levelsButton.create();
      this.startButtonMenu.create();
    }
  }