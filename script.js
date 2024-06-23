function encryptText() {
    let inputText = document.getElementById('inputText').value;
    if (!inputText) return;
    
    showGif('encrypt');

    setTimeout(() => {
        let encryptedText = inputText
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
        
        document.getElementById('outputText').value = encryptedText;
        hideGif();
    }, 2000); 
}

function decryptText() {
    let inputText = document.getElementById('inputText').value;
    if (!inputText) return;

    showGif('decrypt');

    setTimeout(() => {
        let decryptedText = inputText
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
        
        document.getElementById('outputText').value = decryptedText;
        hideGif();
    }, 2000); 
}

function copyText() {
    let outputText = document.getElementById('outputText');
    outputText.select();
    outputText.setSelectionRange(0, 99999); 
    document.execCommand('copy');
    alert('Texto copiado para a área de transferência!');
}

function showGif(action) {
    let gif = document.getElementById('gif');
    if (action === 'encrypt') {
        gif.src = 'https://media.giphy.com/media/26BRuo6sLetdllPAQ/giphy.gif'; 
    } else if (action === 'decrypt') {
        gif.src = 'https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif'; 
    }
    gif.style.display = 'block';
}

function hideGif() {
    let gif = document.getElementById('gif');
    gif.style.display = 'none';
    gif.src = ''; 
}
