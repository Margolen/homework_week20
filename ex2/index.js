let searchButton = document.getElementById('search');

searchButton.addEventListener('click', () => {
    let phrase = document.getElementById('phrase');

    fetch(`http://api.giphy.com/v1/gifs/random?tag=${phrase.value}&api_key=OoQqgPS8ckk08RVrN8BvC924MoBJOE1s`)
        .then(response => response.json())
        .then(response => {
            let iframe = document.createElement('iframe');
            iframe.src = response.data.embed_url;
            iframe.className = 'gif';

            document.getElementById('container').appendChild(iframe);

            console.log(response);
        });
});