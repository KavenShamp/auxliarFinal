export class Level4 {
    constructor(scene) {
        this.relatedScene = scene;
    }

    preload() {
        this.relatedScene.load.spritesheet('lvl4', './assets/images/interface/lvl4.png', { frameWidth: 205, frameHeight: 238 });
    }

    create() {
        this.level4 = this.relatedScene.add.sprite(580, 430, 'lvl4').setScale(0.6).setInteractive();

        this.level4.on('pointerover', () => {
            this.level4.setFrame(1);
        });
        this.level4.on('pointerout', () => {
            this.level4.setFrame(0);
        });
        this.level4.on('pointerdown', () => {
            this.relatedScene.scene.start('level4');
        });
    }
}