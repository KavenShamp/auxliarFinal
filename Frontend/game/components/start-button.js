export class StartButton {
    constructor(scene) {
        this.relatedScene = scene;
    }

    preload() {
        this.relatedScene.load.spritesheet('start', './assets/images/interface/startButton.png', { frameWidth: 304, frameHeight: 80 });
        this.relatedScene.load.audio('startSound', './assets/sounds/switch30.ogg');
    }

    create() {
        this.startButton = this.relatedScene.add.sprite(500, 530, 'start').setScale(0.6).setInteractive();
        this.startSample = this.relatedScene.sound.add('startSound');

        this.startButton.on('pointerover', () => {
            this.startButton.setFrame(1);
        });
        this.startButton.on('pointerout', () => {
            this.startButton.setFrame(0);
        });
        this.startButton.on('pointerdown', () => {
            this.startSample.play();
            this.relatedScene.scene.start('menu');
        });
    }
}