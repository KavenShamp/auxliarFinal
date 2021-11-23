
export class pause extends Phaser.Scene {
    constructor() {
      super({ key: 'pause' });
      
    }
  
    init(data) {
  
      this.previousScene = data.previous
      this.tempoPause = 3;
      this.text=false
      
    }
  
    preload() {
      this.load.image('pausaBg', './assets/images/interface/paused_wall.png');
      this.load.image('pause_txt', './assets/images/interface/paused_txt.png')
      this.load.spritesheet('resume', './assets/images/interface/resumeButton.png', { frameWidth: 128, frameHeight: 128 });
      this.load.audio('resumeSound', './assets/sounds/switch38.ogg');
  
    }
  
    create() {
      
      this.cameras.main.fadeIn(100);
      this.pauseBackground = this.add.image(450, 350, 'pausaBg').setScale(0.7);
      this.txtpause = this.add.image(470, 250, 'pause_txt').setScale(0.7)
      this.text_prev = this.add.text(480, 250,"",{ fontSize: '90px', fill: '#f57c16', stroke: '#000000', strokeThickness: 3, fontFamily: 'Permanent Marker' });
  
      this.resumeSample = this.sound.add('resumeSound');
  
      this.resumeButton = this.add.sprite(500, 450, 'resume').setScale(0.5).setInteractive();
  
      this.resumeButton.on('pointerover', () => {
        this.resumeButton.setFrame(1);
      });
      this.resumeButton.on('pointerout', () => {
        this.resumeButton.setFrame(0);
      });
      this.resumeButton.on('pointerdown', () => {
        
        this.resumeSample.play();
  
        this.text=true
        this.resumeButton.setVisible(0)
        this.txtpause.setVisible(0)
  
        this.time.addEvent({
          delay: 3000,
          callback: () => {
            this.scene.resume(this.previousScene);
            this.scene.stop()
            this.sound.resumeAll();
  
          },
          callbackScope:this,
          loop: false
        })
        
  
      });
  
  
    }
  
  
    update() {
      if (this.text===true) {
        if (this.tempoPause > 0.9) {
          this.tempoPause -= 0.02;
      }
        this.text_prev.setText(this.tempoPause.toFixed(0))
      }
      
    }
  }