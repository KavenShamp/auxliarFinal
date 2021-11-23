export class levelComplete extends Phaser.Scene {
  constructor() {
    super({ key: 'levelComplete' });
  }

  preload() {
    this.load.image('completed', './assets/images/interface/levelComplete.png');
  }

  create() {
    this.cameras.main.fadeIn(3500);
    this.completedBackground = this.add.image(500, 300, 'completed').setScale(0.6);
  }

  update() {
    this.time.addEvent({
      delay: 5000,
      callback: () => {
        this.scene.start('levels'); /* Aun no se implementa el menu o pantalla de pausa */
      },
      loop: false
    })
  }
}