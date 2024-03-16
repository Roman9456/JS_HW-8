import './js/app.js';
import './css/style.css' 

import Game, { GameSavingData, readGameSaving, writeGameSaving } from './game.js';

const game = new Game();
game.start();