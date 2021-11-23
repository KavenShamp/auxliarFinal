import { BackButton } from "../components/back-button.js";
import { Level1 } from "../components/lvl1.js";
import { Level2 } from "../components/lvl2.js";
import { Level3 } from "../components/lvl3.js";
//import { Level4 } from "../components/lvl4.js";

export class levels extends Phaser.Scene {
    constructor() {
      super({ key: 'levels' });
      this.backButton = new BackButton(this);
      this.Level1Button = new Level1(this);
      this.Level2Button = new Level2(this);
      this.Level3Button = new Level3(this);
      //this.Level4Button = new Level4(this);
    }
  
    preload() {
      this.load.image('levelsPopUp', './assets/images/interface/levels.png');
      this.backButton.preload();
      this.Level1Button.preload();
      this.Level2Button.preload();
      this.Level3Button.preload();
     // this.Level4Button.preload();
    }
    
    create() {
      this.cameras.main.fadeIn(2500);
      this.levelsBackground = this.add.image(500, 300, 'menuBackground').setScale(0.6);
      this.levelsPopUp = this.add.image(500, 300, 'levelsPopUp').setScale(0.6);
      this.backButton.create();
      this.Level1Button.create();
      this.Level2Button.create();
      this.Level3Button.create();
      //this.Level4Button.create();
    }
  }