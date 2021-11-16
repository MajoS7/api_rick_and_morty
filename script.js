const contenedor = document.querySelector('#container');
const allcards = document.querySelector('#allCards');
const todas = document.querySelector('#todas');
const vacio = document.querySelector('#vacio');

const URL = 'https://rickandmortyapi.com/api/character/';



function fetch_results(){
    fetch(URL)
    .then(response=>response.json())
    .then(data=>{
        const selector_content  = data.results;
        selector_content.map(item => {
            const opcion = document.createElement('option');
            opcion.setAttribute('id_target', item.id); 
            opcion.textContent=item.name;
            contenedor.appendChild(opcion);
        })
        return data.results;
    })
    .catch(error=>console.log(error));
}

fetch_results();

contenedor.addEventListener('change', (event) => {
    

    fetch(URL)
    .then(response=>response.json())
    .then(data=>{
        const lista  = data.results;
        
        lista.map(Element => {
            if (Element.name==event.target.value){
                allcards.innerHTML='';
                const card = document.createElement('div');
                const image = document.createElement('img');
                const titule = document.createElement('h2');

                image.setAttribute('src', Element.image);
                titule.textContent=Element.name;

                card.appendChild(image);
                card.appendChild(titule);
                allcards.appendChild(card);
            }
            if (event.target.value==vacio.value){
                allcards.innerHTML='';
            }
            if (event.target.value==todas.value){
                const card = document.createElement('div');
                const image = document.createElement('img');
                const titule = document.createElement('h2');

                image.setAttribute('src', Element.image);
                titule.textContent=Element.name;

                card.appendChild(image);
                card.appendChild(titule);
                allcards.appendChild(card);
            }
        })
        
                
        return data.results;
    })
    .catch(error=>console.log(error));

})