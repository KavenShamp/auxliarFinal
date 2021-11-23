import { MenuButton } from "../components/menu-button.js";

export class gameOver extends Phaser.Scene {
  constructor() {
    super({ key: 'gameOver' });
    this.menuButton = new MenuButton(this);
  }

  init(data) {
    this.previousScene = data.previous;
  }

  preload() {
    this.load.image("gameOverBackground", "./assets/images/interface/wall_gameOver.png");
    this.load.image("gameOverTXT", "./assets/images/interface/gameOver_txt.png");
    this.load.spritesheet("restart", "./assets/images/interface/resumeButton.png", { frameWidth: 128, frameHeight: 128 });
    this.menuButton.preload();
    this.load.audio("restartSound", "./assets/sounds/switch38.ogg");
  }

  create() {
    this.cameras.main.fadeIn(500);
    this.sound.pauseOnBlur = false;
    this.gameOverBack = this.add.image(500, 300, "gameOverBackground").setScale(0.6);
    this.gameOverTitle = this.add.image(500, 280, "gameOverTXT").setScale(0.6);
    this.menuButton.create();
    this.restartSample = this.sound.add("restartSound");

    this.restartButton = this.add.sprite(565, 450, "restart").setScale(0.6).setInteractive();

    this.restartButton.on('pointerover', () => {
      this.restartButton.setFrame(1);
    });
    this.restartButton.on('pointerout', () => {
      this.restartButton.setFrame(0);
    });
    this.restartButton.on('pointerdown', () => {
      this.restartSample.play();

      this.time.addEvent({
        delay: 500,
        callback: () => {
          this.scene.start(this.previousScene);
          this.scene.stop();
          
        },
        callbackScope: this,
        loop: false
      })
    });


  }
}
