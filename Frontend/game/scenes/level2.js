
/*-----------------CEMENTERIO-----------------*/
export class level2 extends Phaser.Scene {
    constructor() {
        super({ key: 'level2' });



    }
    init() {

        this.box = null;
        this.linea = null;
        this.groundBottom = null;
        this.groundTop = null;
        this.jumpCount = 0;
        this.isGravityInverted = false;
        this.spikes = null;
        this.hellPlataforma = null;
        this.portalFlap = null;
        this.isFlapMode = false;
        this.portalGravity = null;
        this.portal = null;
        this.portalNoFlap = null;
        //this.sky = null;
        this.hellTile = null;
        this.hellPartTile = null;
        this.batTile = null;
        this.boxPos = null;
        this.puertaInfernal = null;





        this.timmer = 80;//variable del tiempo
        this.tempCounteat = 0;//para resetear las veces de aumento de tiempo
        this.aumentVel = 0;
        this.typeFood = 10;
        this.energy = null;
        this.valueEnergy = 5;


    }

    preload() {

        /*level3*/
        this.load.image('batTile', './assets/images/level3/batTile.png')
        this.load.image('hellTile', './assets/images/level3/cementary.png');
        this.load.image('hellPartTile', './assets/images/level3/cementaryParticulas.png ');
        this.load.image('groundBottom', './assets/images/level3/cementaryBot.png');
        this.load.image('groundTop', './assets/images/level3/cementaryTop.png');

        this.load.image('spikeBottom', './assets/images/level3/skeleton.png');
        this.load.image('spikeTop', './assets/images/level3/phantom.png');
        this.load.image('spikeSide', './assets/images/level3/spide.png');

        this.load.image('puertaInfernal', './assets/images/level3/puertaInfernal.png');


        /*levels*/
        this.load.image('linea', './assets/images/levels/linea.png')
        this.load.image('portalFlap', './assets/images/levels/portalFlap.png');
        this.load.image('portalGravity', './assets/images/levels/portalGravity.png');
        this.load.image('portalGravity2', './assets/images/levels/portalGravity.png');
        this.load.image('portal', './assets/images/levels/portal.png');
        this.load.image('portal2', './assets/images/levels/portal.png');

        this.load.image('hellPlataforma', './assets/images/levels/hellPlataforma.png');

        this.load.image('xob', './assets/images/levels/xob.png');
        this.load.image('rocket', './assets/images/levels/rocket.png');
        this.load.image('box', './assets/images/levels/box.png');



        this.load.image('level2', './assets/images/level3/level2.png')


        /*sonidos*/
        this.load.audio('cementeryTheme', './assets/sounds/cementeryTheme.mp3')



        this.load.image('anana', './assets/images/food/anana.png')
        this.load.image('pera', './assets/images/food/pera.png')
        this.load.image('pizza', './assets/images/food/pizza.png')
        this.load.spritesheet('energy', './assets/images/interface/energia.png', { frameWidth: 586, frameHeight: 67 })



    }

    create() {
        this.cameras.main.fadeIn(500);
        this.game.sound.stopAll();



        getLevel(3).then((response) => {

            let obstacles = [];
            response.obstacles.forEach(element => {
                obstacles.push(element);
            });

            this.hellPlataforma = this.physics.add.group();
            this.spikes = this.physics.add.group();

            this.crear_obstaculos(this.hellPlataforma, this.spikes, obstacles)
            this.spikes.setVelocityX(-700);
            this.hellPlataforma.setVelocityX(-700);
            this.physics.add.collider(this.box, this.spikes, this.gameOver, null, this)
            this.physics.add.collider(this.box, this.hellPlataforma)


        });

        getFood(3).then((response) => {
            let foods = [];
            response.foods.forEach(element => {
                foods.push(element);
            });

            this.badFoods = this.physics.add.group();
            this.goodFoods = this.physics.add.group();

            this.crear_food(this.goodFoods, this.badFoods, foods);
            this.badFoods.setVelocityX(-700);
            this.goodFoods.setVelocityX(-700);
            this.physics.add.overlap(this.box, this.goodFoods, this.plustemp, null, this)
            this.physics.add.overlap(this.box, this.badFoods, this.resttemp, null, this)

        });


        this.hellTile = this.add.tileSprite(0, 0, 1000, 600, "hellTile");
        this.hellTile.setOrigin(0, 0);
        this.hellTile.setScrollFactor(0);

        this.hellPartTile = this.add.tileSprite(0, 0, 1000, 600, "hellPartTile");
        this.hellPartTile.setOrigin(0, 0);
        this.hellPartTile.setScrollFactor(0);

        this.batTile = this.add.tileSprite(0, 0, 1000, 600, "batTile");
        this.batTile.setOrigin(0, 0);
        this.batTile.setScrollFactor(0);

        this.cementeryTheme = this.sound.add('cementeryTheme');
        this.cementeryTheme.play();
        this.box = this.physics.add.sprite(300, 300, 'box');
        this.linea = this.physics.add.sprite(-3, 300, 'linea')
            .setImmovable(true);
        this.physics.add.overlap(this.box, this.linea, this.gameOver, null, this);
        this.groundBottom = this.physics.add.sprite(0, 650, 'groundBottom')
            .setOrigin(0, 1)
            .setImmovable(true);
        this.groundTop = this.physics.add.sprite(0, -50, 'groundTop')
            .setOrigin(0, 0)
            .setImmovable(true);
        this.box.body.gravity.y = 4000;
        this.physics.add.collider(this.box, this.groundBottom);
        this.physics.add.collider(this.box, this.groundTop);
        /*---------------------PARA EDITAR OBSDTACULOS DEL NIVEL SIN DB
                //plataformas 
                // this.hellPlataforma = this.physics.add.group();
        
        
                // for (let plataf of hellPlataformaList3) {
                //     let positionX = 0;
                //     for (let i = 0; i < plataf.quantity; i++) {
                //         let platAux = this.hellPlataforma.create((plataf.seconds * 700) + positionX, plataf.y, 'hellPlataforma').setOrigin(0, 1);
                //         positionX += platAux.width;
                //         platAux.setImmovable(true);
                //     }
        
                // }
                // this.physics.add.collider(this.box, this.hellPlataforma);
                // //obstacles
                // this.spikes = this.physics.add.group();
                // for (let spike of spikeBottomList3) {
                //     let positionX = 0;
                //     for (let i = 0; i < spike.quantity; i++) {
                //         let spikeAux = this.spikes.create((spike.seconds * 700) + positionX, spike.y, 'spikeBottom').setOrigin(0, 1);
                //         positionX += spikeAux.width;
                //     }
                // }
                // for (let spike of spikeTopList3) {
                //     let positionX = 0;
                //     for (let i = 0; i < spike.quantity; i++) {
                //         let spikeAux = this.spikes.create((spike.seconds * 700) + positionX, spike.y, 'spikeTop').setOrigin(0, 1);
                //         positionX += spikeAux.width;
                //     }
                // }
        
                // for (let spike of spikeSideList3) {
                //     let positionY = 0;
                //     for (let i = 0; i < spike.quantity; i++) {
                //         let spikeAux = this.spikes.create((spike.seconds * 700), spike.y + positionY, 'spikeSide').setOrigin(0, 1);
                //         positionY += spikeAux.width;
                //     }
                // }
        
                // this.spikes.setVelocityX(-700);
                // this.hellPlataforma.setVelocityX(-700);
        
                // //esta comentado para probar los niveles
                // //this.physics.add.collider(this.box, this.spikes, this.gameOver, null, this)
                // this.physics.add.collider(this.box, this.hellPlataforma, null, this)
        /*-------------------------------------------*/
        //portalGravity
        this.portalGravity = this.physics.add.sprite(7 * 700, 465, 'portalGravity').setOrigin(0, 1);
        this.portalGravity.body.velocity.x = -700;
        this.physics.add.overlap(this.box, this.portalGravity, this.invertGravity, null, this);

        //portalGravity2
        this.portalGravity2 = this.physics.add.sprite(17 * 700, 465, 'portalGravity2').setOrigin(0, 1);
        this.portalGravity2.body.velocity.x = -700;
        this.physics.add.overlap(this.box, this.portalGravity2, this.invertGravity, null, this);

        //portal
        this.portal = this.physics.add.sprite(15 * 700, 465, 'portal').setOrigin(0, 1);
        this.portal.body.velocity.x = -700;
        this.physics.add.overlap(this.box, this.portal, this.normal, null, this);
        //portal2
        this.portal2 = this.physics.add.sprite(23 * 700, 465, 'portal2').setOrigin(0, 1);
        this.portal2.body.velocity.x = -700;
        this.physics.add.overlap(this.box, this.portal2, this.normal, null, this);

        //puertaInfernal
        this.puertaInfernal = this.physics.add.sprite(58 * 700, 565, 'puertaInfernal').setOrigin(0, 1);
        this.puertaInfernal.body.velocity.x = -700;
        this.physics.add.overlap(this.box, this.puertaInfernal, this.win, null, this);


        //INPUTS
        this.input.on('pointerdown', this.jump, this);
        this.input.keyboard.on('keydown-SPACE', this.jump, this);
        this.input.keyboard.on('keydown-ESC', this.pause, this);


        /*-------------Comidas y time------------------*/

        this.Time = this.add.text(790, 560, 'Time: ' + this.timmer, { fontSize: '30px', fill: '#c8fd56', stroke: '#000000', strokeThickness: 3, fontFamily: 'Permanent Marker' });



        /*--------------PARA EDITAR comidas DEL NIVEL SIN DB----------------*/
        // this.goodFoods = this.physics.add.group();

        // this.crear_food(this.goodFoods, ananaList3, 'anana');
        // this.crear_food(this.goodFoods, peraList3, 'pera');

        // this.goodFoods.setVelocityX(-700);


        // this.physics.add.overlap(this.box, this.goodFoods, this.plustemp, null, this)

        // this.badFoods = this.physics.add.group();

        // this.crear_badfood(this.badFoods, pizzaList3, 'pizza');

        // this.badFoods.setVelocityX(-700);

        // this.physics.add.overlap(this.box, this.badFoods, this.resttemp, null, this)
        /*------------------------------*/


        this.level3 = this.add.sprite(490, 580, 'level2')
        this.level3.scaleX = 0.3;
        this.level3.scaleY = 0.3;


        this.energy = this.add.sprite(150, 570, 'energy').setScale(0.5)

        this.energy.setFrame(this.valueEnergy)






    }

    update() {
        this.hellTile.tilePositionX += 0.5;
        this.hellPartTile.tilePositionX += 1;
        this.batTile.tilePositionX += 2;

        if (this.box.body.touching.down || this.box.body.touching.up) {
            this.jumpCount = 0;
        }

        if (this.isFlapMode && this.input.activePointer.isDown) {
            this.jump();
        }
        if (this.box.body.positionX <= 10) {

            this.gameOver();
        }






        if (this.timmer > 0) {
            this.timmer -= 0.02;
        }
        this.Time.setText('Time: ' + this.timmer.toFixed(0));
        if (this.timmer <= 40 && this.timmer > 20) {
            this.Time.setColor('#f57c16')
        } else if (this.timmer <= 20) {
            this.Time.setColor('#e62020')
        } else (
            this.Time.setColor('#c8fd56')
        )


        if (this.timmer <= 0.2 || this.valueEnergy === 0) {
            this.gameOver();
        }

        this.energy.setFrame(this.valueEnergy);

        if (this.box.body.onOverlap == false) {
            this.temCount = 0;//no sirve
        }



    }

    crear_obstaculos(platformGrup, spikeGrup, lista) {

        for (let name of lista) {
            let positionX = 0;
            let positionY = 0;

            for (let i = 0; i < name.cantidad; i++) {
                if (name.tipo === "hellPlataforma") {
                    platformGrup.create((name.segundos * 700), name.posY, name.name).setOrigin(0, 1).setImmovable(true);

                } else if (name.tipo === "spike") {
                    if (name.name === "spikeBottom" || name.name === "spikeTop") {
                        let spikeAuxX = spikeGrup.create((name.segundos * 700) + positionX, name.posY, name.name).setOrigin(0, 1);
                        positionX += spikeAuxX.width;
                    } else if (name.name === "spikeSide") {
                        let spikeAuxY = spikeGrup.create((name.segundos * 700), name.posY + positionY, name.name).setOrigin(0, 1);
                        positionY += spikeAuxY.width;
                    }

                }
            }

        }



    }

    crear_food(goodGrup, badGrup, lista) {


        for (let name of lista) {

            for (let i = 0; i < name.cantidad; i++) {
                if (name.tipo === "good") {
                    goodGrup.create((name.segundos * 700), name.posY, name.name).setOrigin(0, 1).setImmovable(true).setScale(0.3);

                } else if (name.tipo === "bad") {
                    badGrup.create((name.segundos * 700), name.posY, name.name).setOrigin(0, 1).setImmovable(true).setScale(0.27);

                }

            }
        }


    }



    plustemp(box, goodFood) {

        this.contTempo();
        if (this.tempCounteat >= 1) {
            return;
        }
        if (this.valueEnergy < 5) {
            this.valueEnergy += 1
        }
        this.timmer += this.typeFood;
        goodFood.disableBody(true, true);

    }

    contTempo() {
        this.tempCounteat++;
        if (this.tempCounteat >= 9) {
            this.tempCounteat = 0;
        }
    }


    resttemp(box, badFood) {

        this.contTempo();
        if (this.tempCounteat >= 1) {
            return;
        }
        this.valueEnergy -= 1;
        this.timmer -= this.typeFood;
        badFood.disableBody(true, true);

    }

    jump() {


        if (this.isFlapMode) {
            this.box.body.velocity.y = -800;
            return;
        }

        if (this.jumpCount >= 2) {
            return;
        }
        this.jumpCount++;
        if (this.isGravityInverted) {
            this.box.body.velocity.y = 900;
        } else {
            if (this.isFlapMode) {
                this.box.body.velocity.y = -200;
                return;
            }
            this.box.body.velocity.y = -1100;
        }


    }

    onChangeToFlap() {
        this.isFlapMode = true;
        this.box.setTexture('rocket');
        this.box.body.gravity.y = 4000;
    }

    invertGravity() {
        this.isGravityInverted = true
        this.box.body.gravity.y = -4000;
        this.box.setTexture('xob');
    }

    normal() {
        this.isGravityInverted = false
        this.box.body.gravity.y = 4000;
        this.box.setTexture('box');
    }

    noFlap() {
        this.isFlapMode = false;
        this.box.setTexture('box');

    }

    win() {
        this.time.addEvent({
            delay: 700,
            callback: () => {
                this.scene.start('levelComplete');
            },
            loop: false
        })

    }

    pause() {

        this.scene.pause();
        this.game.sound.pauseAll();
        this.scene.launch('pause', { previous: "level2" });

    }

    gameOver() {
        this.game.sound.stopAll();
        this.physics.pause();
        this.box.visible = false;


        this.time.addEvent({
            delay: 200,
            callback: () => {
                this.scene.start('gameOver',{previous:"level2"});
            },
            loop: false
        })
    }
}


