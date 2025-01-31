//nos traemos los elementos del DOM
const countriesList = document.getElementById("countries-list");
const modal = document.querySelector(".modal");

//ordenamos los paises alfabeticamente
const sortCountries = (countries) => {
    const orderedCountries = countries.sort((a, b) => {
        return a.name.common.localeCompare(b.name.common);
    });
    return orderedCountries;
};

//función para cerrar modal
const closeModal = () => {
    modal.classList.add("hide");
};

//pintamos en el modal el pais seleccionado
const printCountry = (country) => {
    modal.classList.remove("hide"); //quitamos la clase hide del modal para que se muestre
    const capital = country.capital ? country.capital[0] : "No tiene capital"; //si no hay capital que muestre "no tiene capital"
    //pintamos en el modal los valores del país seleccionado
    modal.innerHTML = `
    <div class="img-info-container">
    <img src="${country.flags[1]}" alt="image country"/>
    <div>
    <h2>${country.name.common}</h2>
    <p>Capital: ${capital}</p>
    <p>Población:${country.population}</p>
    <p>Lado de carretera:${country.car.side}</p>
    </div>
    </div>
    <div class="btn-container">
    <button onclick="closeModal()">Cerrar</button>
    </div>
    `;
};

//pintamos los paises
const printCountries = (countries) => {
    //pintamos en el elemento countriesList la imagen y el nombre del pais
    countries.forEach((country) => {
        countriesList.innerHTML += `
        <div class="country-card">
        <img src="${country.flags[1]}" alt="image country"/>
        <p>${country.name.common}</p>
        </div>
        `;
    });

    //añadimos a cada div de cada card del pais el evento "click" para que cuando hagamos click se ejecute a función printCountry
    countries.forEach((country, index) => {
        //me traigo la card usando el indice
        const countryElement =
            document.getElementsByClassName("country-card")[index];
        //y a la card le añado el evento "click"
        countryElement.addEventListener("click", () => printCountry(country));
    });
};

//me traigo los paises
const getCountries = async() => {
    try {
        //hacemos la petición fetch a la API
        const res = await fetch("https://restcountries.com/v3/all");
        //comprobamos que vaya ben la petición
        if (!res.ok) {
            throw new Error("Hubo un error cargando los paises");
        }
        //parseamos la respuesta para acceder a los paises
        const countries = await res.json();
        //ordenamos alfabeticamente ls countries y las guardamos en una constante
        const orderedCountries = sortCountries(countries);
        //llamamos a la función printCountries para que pinte los paises
        printCountries(orderedCountries);
    } catch (error) {
        //mostramos por consola el error
        console.error(error)
            //pintamos el error en el DOM
        countriesList.innerHTML = error
    }
};

getCountries();



/*- Los paises se ordenarán en orden alfabético (recuerda el método `sort`). Recuerda que para ordenar no es lo mismo mayúsculas que minúsculas. Si comparas que sea lo mismo... pasa los nombres a mayúsculas si te parece más sencillo para la comparación.
- La información detallada incluye la bandera del país, la capital, la población y el lado de la carretera donde se circula. Este flotante se quedará fijo y centrado hasta que se cierre.
- La aplicación está diseñada con un enfoque simple y utiliza funciones asíncronas para manejar las solicitudes a la API. Recuerda que podrás usar fetch, Async/Await...
- Puedes manipular el `HTML` si lo necesitaras. 
- Si necesitas añadir clases a un elemento mediante JS, lo puedes hacer con `elemento.classList.add('clase que quieres añadir')` y para eliminar `elemento.classList.remove('clase que quieres añadir')`
https://restcountries.com/v3/all     */

/*const getFlags = async () => {
    try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        if (!response.ok) {
            throw new Error('Ha surgido un error', response.status);
        }
        const data = await response.json();
        return data;
        }
        catch (error){
            console.log('Error al obtener los datos', error);
        };
    }    
    getFlags().then((flags)=>{
        let showFlags ='';
        flags.forEach(flag=>{
            const div =document.createElement("div");
            div.classList.add("bandera")
            showFlags += `<div class="bandera">
            <img src="${flag.flag}" alt="${flag.name}"/>
            </div>`;
            });
            const div2 = document.createElement("div");
            div2.classList.add("flags")

            });*/

            
    /*const dataMayuscula = data.sort(function(A, B) {
        if (A.name.toUpperCase() < B.name.toUpperCase()){return -1;}
        if (A.name.toUpperCase() > B.name.toUpperCase()){return 1;}
        return 0;
        console.log(dataMayuscula)
        });*/
        
                //getFlags().then((data)=> (data))

                
            

        

