/*- Los paises se ordenarán en orden alfabético (recuerda el método `sort`). Recuerda que para ordenar no es lo mismo mayúsculas que minúsculas. Si comparas que sea lo mismo... pasa los nombres a mayúsculas si te parece más sencillo para la comparación.
- La información detallada incluye la bandera del país, la capital, la población y el lado de la carretera donde se circula. Este flotante se quedará fijo y centrado hasta que se cierre.
- La aplicación está diseñada con un enfoque simple y utiliza funciones asíncronas para manejar las solicitudes a la API. Recuerda que podrás usar fetch, Async/Await...
- Puedes manipular el `HTML` si lo necesitaras. 
- Si necesitas añadir clases a un elemento mediante JS, lo puedes hacer con `elemento.classList.add('clase que quieres añadir')` y para eliminar `elemento.classList.remove('clase que quieres añadir')`
https://restcountries.com/v3/all     */

const getFlags = async () => {
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

            });

            
    /*const dataMayuscula = data.sort(function(A, B) {
        if (A.name.toUpperCase() < B.name.toUpperCase()){return -1;}
        if (A.name.toUpperCase() > B.name.toUpperCase()){return 1;}
        return 0;
        console.log(dataMayuscula)
        });*/
        
                //getFlags().then((data)=> (data))

                
            

        

