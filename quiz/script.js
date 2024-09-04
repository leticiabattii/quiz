function calculateResult() {
    const emotionCounts = {
        Alegria: 0,
        Medo: 0,
        Raiva: 0,
        Tristeza: 0,
        Nojo: 0,
        Vergonha: 0
    };
    const answers = document.querySelectorAll('input[type="radio"]:checked');
    answers.forEach(answer => {
        const value = answer.value.split(' ')[0]; // Extract the emotion part
        if (emotionCounts.hasOwnProperty(value)) {
            emotionCounts[value]++;
        }
    });
    const maxEmotion = Object.keys(emotionCounts).reduce((a, b) => emotionCounts[a] > emotionCounts[b] ? a : b);
    let resultText = `Sua emoção predominante é: ${maxEmotion}.`;
    if (Object.values(emotionCounts).every(count => count === 0)) {
        resultText = "Você não selecionou nenhuma resposta.";
    }
    document.getElementById('result-text').textContent = resultText;
    document.getElementById('result').style.display = 'block';
}

