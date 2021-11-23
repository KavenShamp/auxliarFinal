export class CreditsButton {
    constructor(scene) {
        this.relatedScene = scene;
    }

    preload() {
        this.relatedScene.load.spritesheet('credits', './assets/images/interface/creditsButton.png', { frameWidth: 385, frameHeight: 131 });
        this.relatedScene.load.audio('creditsSound', './assets/sounds/rollover2.ogg');
    }

    create() {
        this.creditsButton = this.relatedScene.add.sprite(500, 425, 'credits').setScale(0.6).setInteractive();
        this.creditsSample = this.relatedScene.sound.add('creditsSound');

        this.creditsButton.on('pointerover', () => {
            this.creditsButton.setFrame(1);
        });
        this.creditsButton.on('pointerout', () => {
            this.creditsButton.setFrame(0);
        });
        this.creditsButton.on('pointerdown', () => {
            this.creditsSample.play();
            this.relatedScene.scene.start('credits');
        });
    }
}