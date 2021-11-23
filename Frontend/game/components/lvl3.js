export class Level3 {
    constructor(scene) {
        this.relatedScene = scene;
    }

    preload() {
        this.relatedScene.load.spritesheet('lvl3', './assets/images/interface/lvl3.png', { frameWidth: 205, frameHeight: 238 });
    }

    create() {
        this.level3 = this.relatedScene.add.sprite(500, 430, 'lvl3').setScale(0.6).setInteractive();

        this.level3.on('pointerover', () => {
            this.level3.setFrame(1);
        });
        this.level3.on('pointerout', () => {
            this.level3.setFrame(0);
        });
        this.level3.on('pointerdown', () => {
            this.relatedScene.scene.start('level3');
        });
    }
}