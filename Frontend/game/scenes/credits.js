export class credits extends Phaser.Scene {
  constructor() {
    super({ key: 'credits' });
  }

  preload() {
    this.load.image("creditsBackground", "./assets/images/interface/wallCredits.png");
    this.load.image("creditsTitle", "./assets/images/interface/credits_txt.png");
    this.load.image("Llampa", "./assets/images/interface/kevin.png");
    this.load.image("Romero", "./assets/images/interface/ema.png");
    this.load.image("Castro", "./assets/images/interface/belu.png");
    this.load.image("Romitti", "./assets/images/interface/maciel.png");
    this.load.image("foot", "./assets/images/interface/foot.png");
  }

  create() {
    this.cameras.main.once('camerafadeincomplete',function(camera) {
      camera.fadeOut(5000);
    });
    this.cameras.main.fadeIn(5000);
    this.creditsBack = this.add.image(500, 300, "creditsBackground").setScale(0.6);
    this.creditsTitle = this.add.image(470, 80, "creditsTitle").setScale(0.5);
    this.llampaCredits = this.add.image(350, 300, "Llampa").setScale(0.5);
    this.romeroCredits = this.add.image(450, 300, "Romero").setScale(0.5);
    this.castroCredits = this.add.image(550, 300, "Castro").setScale(0.5);
    this.romittiCredits = this.add.image(650, 300, "Romitti").setScale(0.5);
    this.foot = this.add.image(500, 550, "foot").setScale(0.5);
    this.sound.pauseOnBlur = false;
  }

  update() {
    this.time.addEvent({
      delay: 10000,
      callback: () => {
        
        this.sound.stopAll();
        this.scene.start('startScreen');
      },
      loop: false
    })
  }
}