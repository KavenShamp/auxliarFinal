export class Level2 {
    constructor(scene) {
        this.relatedScene = scene;
    }

    preload() {
        this.relatedScene.load.spritesheet('lvl2', './assets/images/interface/lvl2.png', { frameWidth: 205, frameHeight: 238 });
    }

    create() {
        this.level2 = this.relatedScene.add.sprite(580, 270, 'lvl2').setScale(0.6).setInteractive();

        this.level2.on('pointerover', () => {
            this.level2.setFrame(1);
        });
        this.level2.on('pointerout', () => {
            this.level2.setFrame(0);
        });
        this.level2.on('pointerdown', () => {
            this.relatedScene.scene.start('level2');
        });
    }
}