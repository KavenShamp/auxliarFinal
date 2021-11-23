export class LevelsButton {
    constructor(scene) {
        this.relatedScene = scene;
    }

    preload() {
        this.relatedScene.load.spritesheet('levels', './assets/images/interface/levelsButton.png', { frameWidth: 385, frameHeight: 131 });
        this.relatedScene.load.audio('levelsSound', './assets/sounds/switch16.ogg');
    }

    create() {
        this.levelsButton = this.relatedScene.add.sprite(500, 340, 'levels').setScale(0.6).setInteractive();
        this.levelsSample = this.relatedScene.sound.add('levelsSound');

        this.levelsButton.on('pointerover', () => {
            this.levelsButton.setFrame(1);
        });
        this.levelsButton.on('pointerout', () => {
            this.levelsButton.setFrame(0);
        });
        this.levelsButton.on('pointerdown', () => {
            this.levelsSample.play();
            this.relatedScene.scene.start('levels');
        });
    }
}