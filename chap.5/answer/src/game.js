'use strict'
import * as sound from './sound.js';
import Field from './field.js';

export default class Game {
    constructor(gameDuration, carrotCount, bugCount) {
        this.gameDuration = gameDuration;
        this.carrotCount = carrotCount;
        this.bugCount = bugCount;

        this.started = false;
        this.score = 0;
        this.timer = undefined;

        this.gameTimer = document.querySelector('.game__timer');
        this.gameScore = document.querySelector('.game__score');
        this.gameBtn = document.querySelector('.game__button');

        this.gameBtn.addEventListener('click', () => {
            if (this.started) {
                this.stop();
            } else {
                this.start();
            }
            this.started = !this.started;
        });


        this.gameField = new Field(this.carrotCount,this.bugCount);
        this.gameField.setClickListener(this.onItemClick);

    };
        setGameStopListener(onGameStop) {
            this.onGameStop = onGameStop;
        };


        start() {
            this.started = true;
            this.initGame();
            this.showStopButton();
            this.showTimerAndScore();
            this.startGameTimer();
            sound.playBackground();
        };
        
        stop() {
            this.started = false;
            this.stopGameTimer();
            this.hideGameButton();
            sound.playAlert();
            sound.stopBackground();
            this.onGameStop &&this.onGameStop('cancel');
        };

        
        finishGame(win) {
            this.started = false;
            this.hideGameButton();
            if(win) {
                sound.playWin();
            }else{
                sound.playBug();
            }
            this.stopGameTimer();
            sound.stopBackground();
            this.onGameStop &&this.onGameStop(win? 'win' : 'lose');
        };

        onItemClick = (item) => {
            if (!this.started) {
                return;
            }
            if (item === 'carrot') {
                //당근!!
                this.score++;       
                this.updateScoreBoard();
                if (this.score === this.carrotCount) {
                    this.finishGame(true);
                }
            } else if (item === 'bug') {
                //벌레!!
                this.finishGame(false);
            }
        };

        

        showStopButton() {
            const icon = this.gameBtn.querySelector('.toggleBtn');
            icon.classList.add('fa-stop');
            icon.classList.remove('fa-play');
            this.gameBtn.style.visibility = 'visible';
        };


        hideGameButton() {
            this.gameBtn.style.visibility = 'hidden';
        };

        showTimerAndScore() {
            this.gameTimer.style.visibility = 'visible';
            this.gameScore.style.visibility = 'visible';
        };

        startGameTimer() {
            let remainingTimeSec = this.gameDuration;
            this.updateTimerText(remainingTimeSec);
            this.timer = setInterval(() => {
                if (remainingTimeSec <= 0) {
                    clearInterval(this.timer);
                    this.finishGame(this.carrotCount === this.score);
                    return;
                }
                this.updateTimerText(--remainingTimeSec);

            }, 1000);
        };

        stopGameTimer() {
            clearInterval(this.timer);
        };

        updateTimerText(time) {
            const minutes = Math.floor(time / 60);
            const seconds = time % 60;
            this.gameTimer.innerText = `${minutes}:${seconds}`;
        };

        initGame() {
            //벌레와 당근을 생성한뒤 field에 추가해줌
            // console.log(fieldRect);
            this.score = 0 ;
            
            this.gameScore.innerText = this.carrotCount;
            this.gameField.init();
            
        };


        updateScoreBoard() {
            this.gameScore.innerText = this.carrotCount - this.score;
        };


    
};