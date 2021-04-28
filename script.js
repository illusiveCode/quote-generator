const motivationalStart = ['“Whether you think you can,', '“If you want something you’ve never had,', '“If something stands between you and your success,'];
const motivationalMiddle = ['or you think you can’t, ', 'you must be willing to,', 'move it,'];
const motivationalEnd = ['you’re right.”', 'do something you’ve never done.”', 'never be denied.”'];

function randomQuote(array) {
    return Math.floor((Math.random() * array.length));
}

const successStart = ['“Success is no accident,', '“Success is not final;', '“Success is not the key to happiness,'];
const successMiddle = ['It is hard work, perseverance, learning, studying, sacrifice and most of all,', 'failure is not fatal:', 'Happiness is the key to success,'];
const successEnd = ['love of what you are doing or learning to do.”', 'It is the courage to continue that counts.”', 'If you love what you are doing, you will be successful.”'];

window.onload = function() {
    document.getElementById('btn').addEventListener('click', function() {
        let selectedGenerator = document.getElementById("generator").value;
        let selectedQuoteNumber = document.getElementById("quotenumber").value;
        if (selectedQuoteNumber > 5 || selectedQuoteNumber < 1 || isNaN(selectedQuoteNumber))
            selectedQuoteNumber = 5;
		
		console.log(selectedGenerator, selectedQuoteNumber);
        let sentence;
        let sentences = '';
        for (let i = 0; i < selectedQuoteNumber; i++) {
            if (selectedGenerator === '1') {

                sentence = `${motivationalStart[randomQuote(motivationalStart)]} ${motivationalMiddle[randomQuote(motivationalMiddle)]} ${motivationalEnd[randomQuote(motivationalEnd)]}`;
                sentences += sentence
            } else {
                sentence = `${successStart[randomQuote(successStart)]} ${successMiddle[randomQuote(successMiddle)]} ${successEnd[randomQuote(successEnd)]}`;
                sentences += sentence
            }
        }
        document.getElementById('sentence').innerHTML = sentences;
    });

    document.getElementById('quitbtn').addEventListener('click', function() {
        window.location = 'goodbye.html';
    });
};