export class StartButtonMenu {
    constructor(scene) {
        this.relatedScene = scene;
    }

    preload() {
        this.relatedScene.load.spritesheet('startMenu', './assets/images/interface/startButtonMenu.png', { frameWidth: 385, frameHeight: 131 });
        this.relatedScene.load.audio('startSoundM', './assets/sounds/switch25.ogg');
    }

    create() {
        this.startButtonMenu = this.relatedScene.add.sprite(500, 255, 'startMenu').setScale(0.6).setInteractive();
        this.startSampleM = this.relatedScene.sound.add('startSoundM');

        this.startButtonMenu.on('pointerover', () => {
            this.startButtonMenu.setFrame(1);
        });
        this.startButtonMenu.on('pointerout', () => {
            this.startButtonMenu.setFrame(0);
        });
        this.startButtonMenu.on('pointerdown', () => {
            this.startSampleM.play();
            this.relatedScene.scene.start('game');
        });
    }
}