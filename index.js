const URL = "https://api.pexels.com/v1/search?query=";          // 1) qui stiamo creando la URL di chiamata alle nostre API (in maniera dinamica) 

const btnPrimary = document.querySelector(".btn.btn-primary");      //qui stiamo selezionando i BTN (dall'HTML tramite la loro classe) ====> load-images e secondary-images 
const btnSecondary = document.querySelector(".btn.btn-secondary");  //qui stiamo selezionando i BTN (dall'HTML tramite la loro classe) ====> load-images e secondary-images 

btnPrimary.onclick = () => handlePexelsAPI("lion");       //qui stiamo legando la funzione ONCLICK ai due BTN ====> dopo l'evento click partirà la funzione handlePexelsAPI 
btnSecondary.onclick = () => handlePexelsAPI("giraffe");     //qui stiamo legando la funzione ONCLICK ai due BTN ====> dopo l'evento click partirà la funzione handlePexelsAPI 

const cardRow = document.querySelector(".album .row");      //qui stiamo selezionando la .ROW dentro .ALBUM (dell'HTML)

console.log(btnPrimary, btnSecondary);

const handleImgClick = id => {          //qui stiamo definendo la funzione handleImgClick (con parametro atteso ID-----> si riferisce all'ID immagine)
  //   console.log(photo);
  window.location.assign("./details.html?pexelsId=" + id);        //stiamo reindirizzando alla struttura creata in HTML(details.html) + l'ID univoco dell'immagine
};



const handlePexelsAPI = query => {      // 2) qui stiamo definendo la funzione HandlePexelsAPI tramite metodo "GET" della richiesta di FETCH                                     
  fetch(URL + query, {                  // (richiede al SERVER l'URL(sito di pexels) + le QUERY(che punta alle img)) 
    headers: {
      Authorization: "1GxaNR444AeSSnsbnvvqEu2NOEPkNX6v6vfvKioZnhMR9zUGVxWQc44s"   //qui ci va la mia APIKEY per l'autorizzazione
    }
  })
    .then(resp => {         //la chiamata (PROMISE) .then rqppresenta i vari step di rsposta alla chiamata di fetch, dove ogni then(promise)
      if (resp.ok) {        //attenderà la fine della precedente per far si che venga esguita la chiamata successiva 
        return resp.json();
      }
    })
    .then(pexelsObj => {            //stiamo modificando la struttura della card con i nuovi elementi da noi attesi (foto di pexels)
      cardRow.innerHTML = "";   //modifica della cardRow

      pexelsObj.photos.forEach(photo => {       //stiamo ciclando l'array PHOTOS di pexels (api)
        console.log(photo.photographer);
        const col = document.createElement("div");      //creazione di una nuova CARD ----> col

        col.className = "col-md-4";
            col.innerHTML = ` 
            <div class="card mb-4 shadow-sm">
              <img src=${photo.src.medium} class="bd-placeholder-img card-img-top" alt=${photo.alt} onclick="handleImgClick(${photo.id})"/>     
              <div class="card-body">
                <h5 class="card-title">
                <a href="./details.html?pexelsId=${photo.id}">${photo.photographer}</a>
                </h5>
                <p class="card-text">
                ${photo.alt}
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">
                      View
                    </button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">
                      Edit
                    </button>
                  </div>
                  <small class="text-muted">${photo.id}</small>
                </div>
              </div>
            </div>
          `;        //stiamo inserendo la struttura della card con dei valori dinamici ( ` ${} ` )

        cardRow.appendChild(col);       //stiamo appendendo la COL (card) appena creata alla nostra CARDROW (div contenitore)
      });
    });
};

// const handleSubmit = e => {         //funzione che preleva l'input submit del form (con parametro e = event)
//   e.preventDefault();               //e.preventDefault() fa si che non venga effettuato il REFRESH automatico della pagina dopo l'evento submit del form 

//   const form = e.target;            //creazione della variabile FORM che avrà come valore 
//   const searchQuery = form.elements.userQuery.value;

//   handlePexelsAPI(searchQuery);
// };

// const form = document.querySelector("form");
// form.onsubmit = handleSubmit;