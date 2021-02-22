
class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.daysRef = document.querySelector('[data-value="days"]');
        this.hoursRef = document.querySelector('[data-value="hours"]');
        this.minsRef = document.querySelector('[data-value="mins"]');
        this.secsRef = document.querySelector('[data-value="secs"]');
        this.time = null;
        this.timer = null;
    }
    
    countdown() {
        this.time = Date.now() - this.targetDate;
        const days = Math.floor(this.time / (1000 * 60 * 60 * 24)) * -1;
        const hours = Math.floor((this.time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) * -1;
        const mins = Math.floor((this.time % (1000 * 60 * 60)) / (1000 * 60)) * -1;
        const secs = Math.floor((this.time % (1000 * 60)) / 1000) * -1;
        this.daysRef.textContent = days;
        this.hoursRef.textContent = hours;
        this.minsRef.textContent = mins;
        this.secsRef.textContent = secs;
    }

    startCountdown() {
        this.countdown();
        setInterval(this.countdown.bind(this), 1000);
    }
    
    // startCountdown() {
    //     clearTimeout(this.timer);
    //     const time = Date.now() - this.targetDate;
    //     const days = Math.floor(time / (1000 * 60 * 60 * 24)) * -1;
    //     const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) * -1;
    //     const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)) * -1;
    //     const secs = Math.floor((time % (1000 * 60)) / 1000) * -1;
    //     this.daysRef.textContent = days;
    //     this.hoursRef.textContent = hours;
    //     this.minsRef.textContent = mins;
    //     this.secsRef.textContent = secs;
    //     this.timer = setTimeout(this.startCountdown.bind(myTimer), 1000);
    // }
}


const options = {
    selector: 'myTimer', targetDate: new Date('Jul 17, 2022'),
}

const myTimer = new CountdownTimer(options);
myTimer.startCountdown();