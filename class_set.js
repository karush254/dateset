class MyDate {
    _year = 1970;
    _month = 0;
    _date = 1;
    _hours = 0;
    _minutes = 0;
    _second = 0;
    _milisecond = 0;
    _day = this.date;
    set year(value) {
        this._year = value
    };
    get year() {
        return this._year
    };
    set month(value) {
        this.year += Math.floor(value / 12);
        this._month = value % 12
    };
    get month() {
        return this._month
    };
    set date (value) {
        let monthDayes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        while (value > monthDayes[this.month]) {
            value -= monthDayes[this.month];
            this.month ++
        } return this._date = value
    };
    get date() {
        return this._date
    };
    set hours (value) {
        this.date += Math.floor(value / 24);
        this._hours = value % 24;
    };
    get hours () {
        return this._hours
    };
    set minutes (value) {
        this.hours += Math.floor(value / 60);
        this._minutes = value % 60
    };
    get minutes () {
        return this._minutes
    };
    set second (value) {
        this.minutes += Math.floor(value / 60);
        this._second = value % 60
    };
    get second () {
        return this._second
    };
    set milisecond (value) {
        this.second += Math.floor(value / 1000);
        this._milisecond = value % 1000
    };
    get milisecond () {
        return this._milisecond
    };

    get day() {
    this._day = Math.floor(this.date / 5)
    if (this.date <= 6) {
        this._day = this.date
    }
    return this._day = weekDays[this._day]
};

get fulldate() {
    this._month = monthNames[this._month]
    return `${this.day} / ${this._year} / ${this._month} ${this._date} / ${this._hours}:${this._minutes}:${this._second}`
};
};
const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let d = new MyDate();
d.year = 2000;
d.month = 24;
d.date = 35;
d.hours = 48;
d.minutes = 120;
d.second = 60;
d.milisecond = 1000;
console.log(d);
console.log(d.fulldate);

//1 jarangum
console.log("araji jarangum-MyBirthday");
class MyBirthday extends MyDate{
    constructor(tari,amis,or) {
        super(),
        this.year = tari,
        this.month = amis,
        this.date = or
    }

    get fulldate() {
        this._month = monthNames[this._month]
        return `${this._date} / ${this._month} / ${this._year}`
    };
};

let g = new MyBirthday(1998,18,59);
console.log(g.fulldate);

console.log("erkrod jarangum-MyBirthday2");
//2 jarangum
class MyBirthday2 extends MyDate {};

let k = new MyBirthday2();
k.year = 2005;
k.month = 13;
console.log(k);
console.log(k.day);