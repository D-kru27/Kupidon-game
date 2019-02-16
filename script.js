var cupid = {
    heart:Math.floor((Math.random() * 7) + 1),
    guess:0,
    guesses:0,
    victory:false,
    enteringNameText: "Как тебя зовут?",
    nikitasText: "Купидон: Приветствую, Никита. " +
                "Я украл Ленино сердце, и тебе придётся постараться, чтобы его вернуть. " +
                "Где-то среди этих сердец есть то, которое тебе нужно, и только по-настоящему любящий может пронзить его стрелой купидона." +
                "Тогда Лена будет любить тебя ещё сильнее. " +
                "Но за каждую мою стрелу, не достигшую цели, тебе придётся подарить ей жвачку Love Is.",
    lenasText: "Купидон: Приветствую, Лена. Сегодня я украл Никитино сердце," +
                "но я готов отдать его тебе, если пронзишь его моей стрелой." + 
                "Среди этих сердец спрятано Никитино. Можешь стрелять столько, сколько"+
                " нужно, но за каждую стрелу, не достигшую цели, нужно будет подарить ему жвачку Love Is. ",
    dontNeedText: "Ты не тот, кто мне нужен.",
    makeShotText: "Сделай выстрел (введи цифру 1-7):",
    makeShotText2: "От одного до семи!",
    makeShotText3: "Не оно. Держи ещё стрелу",
    thisIsItText: "Вот оно!",
    
    game: function(){
        while (this.victory === false) {
            this.guess = prompt(this.makeShotText, " ");
            this.guess = parseInt(this.guess);
            if (this.guess < 1 || this.guess > 7 || this.guess === "") {
                alert(this.makeShotText2);
            }
            else if (isNaN(this.guess)) {
                break;
            } else {
                this.guesses = this.guesses + 1;
                var winText = "Стрел " + this.guesses + " значит жвачек тебе нужно подарить " + (this.guesses - 1) + ". С Днём Влюблённых!";
                if (this.guess === this.heart) {
                    this.victory = true;
                    alert(this.thisIsItText);
                    alert(winText);
                } else {
                    alert(this.makeShotText3);
                }
            }
        }
    },

    startPlay: function () {
        while (true) {
            var name = prompt(this.enteringNameText,);
            if (name === "Никита" || name === "никита" || name === "Nikita" || name === "nikita") {
                alert(this.nikitasText);
                this.game();
                break;
            } else if (name === "Лена" || name === "лена" || name === "Елена" || name === "елена" || name === "Lena" || name === "Elena") {
                alert(this.lenasText);
                this.game();
                break;
            } else if (name === "null") {
                break;
            } else {
                alert(this.dontNeedText);
                break;
            }
        }
    }
}

cupid.startPlay();

