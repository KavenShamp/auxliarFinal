export class MenuButton {
    constructor(scene) {
        this.relatedScene = scene;
    }

    preload() {
        this.relatedScene.load.spritesheet('menu', './assets/images/interface/menuButton.png', { frameWidth: 127, frameHeight: 127 });
        this.relatedScene.load.audio('menuSound', './assets/sounds/switch16.ogg');
    }

    create() {
        this.menuButton = this.relatedScene.add.sprite(435, 450, 'menu').setScale(0.6).setInteractive();
        this.menuSample = this.relatedScene.sound.add('menuSound');

        this.menuButton.on('pointerover', () => {
            this.menuButton.setFrame(1);
        });
        this.menuButton.on('pointerout', () => {
            this.menuButton.setFrame(0);
        });
        this.menuButton.on('pointerdown', () => {
            this.relatedScene.sound.stopAll();
            this.menuSample.play();
            this.relatedScene.scene.start('menu');
        });
    }
}