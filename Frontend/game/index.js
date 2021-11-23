import { intro } from './scenes/intro.js';
import { startScreen } from './scenes/startScreen.js';
import { menu } from './scenes/menu.js';
import { levels } from './scenes/levels.js';
import{level1} from './scenes/level1.js'
import{level2} from './scenes/level2.js'
import{level3} from './scenes/level3.js'
import { levelComplete } from './scenes/levelComplete.js';
import { credits } from './scenes/credits.js';
import { pause } from './scenes/pause.js';
import { gameOver } from './scenes/gameOver.js';
const config = {
  type: Phaser.AUTO,
  parent: 'game',
  width: 1000,
  height: 600,
  scene: [intro, startScreen, menu,credits, levels,levelComplete,level1,level2,level3,pause,gameOver],
  physics: {
    default: 'arcade',
    arcade: {
      debug: false
    }
  }
}


var game = new Phaser.Game(config);