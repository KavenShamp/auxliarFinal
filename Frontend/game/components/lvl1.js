export class Level1 {
    constructor(scene) {
        this.relatedScene = scene;
    }

    preload() {
        this.relatedScene.load.spritesheet('lvl1', './assets/images/interface/lvl1.png', { frameWidth: 205, frameHeight: 238 });
        
    }

    create() {
        //Futura actualizacion
        // getStarsLevel(1).then((response) => {
        //     console.log(response);      
            
        //     let stars = [];
        //     response.levelBricks.forEach(element => {
        //       keyBricks.push(element.brick);
        //     });
               // this.stars = this.relatedScene.add.sprite(426, 304, 'stars').setScale(0.6);
        // this.stars.setFrame(this.relatedScene.cantidadEstrellas)// se obtiene del BD
        this.level1 = this.relatedScene.add.sprite(420, 270, 'lvl1').setScale(0.6).setInteractive();
 

        this.level1.on('pointerover', () => {
            this.level1.setFrame(1);
        });
        this.level1.on('pointerout', () => {
            this.level1.setFrame(0);
        });
        this.level1.on('pointerdown', () => {
            this.relatedScene.scene.start('level1');
        });
     //});
    }
}