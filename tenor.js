const input = document.getElementById('userInput')
const searchBtn = document.getElementById('searchButton')
const container = document.getElementById('container')
const apiKey = 'Your Api Key';

searchBtn.addEventListener('click', getGifs)

function getGifs(){
    search = input.value
    let myRequest = new XMLHttpRequest();
    myURL = `https://tenor.googleapis.com/v2/search?q=${search}&key=${apiKey}`

    myRequest.open('GET', myURL);

    myRequest.onreadystatechange = function() {
        if (myRequest.readyState === 4 && myRequest.status === 200) {
          handleData(myRequest.response)
        }
    };
    
    myRequest.send()
}

function handleData(data){
    myData = JSON.parse(data)
    result  = myData.results
    container.innerHTML = ''
    for (let i = 0; i < result.length; i++){
        new_image = document.createElement('img')
        new_image.setAttribute('src', result[i].media_formats.gif.url)
        container.appendChild(new_image)
    }
}
