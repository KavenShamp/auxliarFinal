export class BackButton {
    constructor(scene) {
        this.relatedScene = scene;
    }

    preload() {
        this.relatedScene.load.spritesheet('back', './assets/images/interface/backButton.png', { frameWidth: 128, frameHeight: 128 });
        this.relatedScene.load.audio('backSound', './assets/sounds/switch38.ogg');
    }

    create() {
        this.backButton = this.relatedScene.add.sprite(649, 148, 'back').setScale(0.6).setInteractive();
        this.backSample = this.relatedScene.sound.add('backSound');

        this.backButton.on('pointerover', () => {
            this.backButton.setFrame(1);
        });
        this.backButton.on('pointerout', () => {
            this.backButton.setFrame(0);
        });
        this.backButton.on('pointerdown', () => {
                    
                    this.relatedScene.sound.stopAll();
                    this.backSample.play();
                    this.relatedScene.scene.start('startScreen');
        })

      
        
    }
}