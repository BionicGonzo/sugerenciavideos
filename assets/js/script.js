// EDICIÓN
// 2. Clase Padre Multimedia
class Multimedia {
    // 2.2 Se protege a través de closures
    constructor(url) {
        let _url = url;
        this.getUrl = () => _url; // retorna valor línea 4
        this.setUrl = (nueva_url) => _url = nueva_url;
    }

    /* Métodos públicos llamando variables privadas */
    get url() {
        return this.getUrl();
    }

    set url(nueva_url) {
        this.setUrl(nueva_url);
    }

    // 2.3 Método setInicio
    setInicio() {
        return `Este método es para realizar un cambio en la URL del vídeo.`;
    }
} // Fin Multimedia

// 3. Clase Hija Reproductor
class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        let _id = id;
        this.getId = () => _id;
        this.setId = (id) => id = id;
    }

    /* Métodos públicos llamando variables privadas */
    get id() {
        return this.getId();
    }

    set url(nueva_id) {
        this.setId(nueva_id);
    }

    playMultimedia() {
        // Llamado a la función IIFE
        let elIframe = document.getElementById(this.getId());
        elIframe.setAttribute('src', this.getUrl());
    }
    
    // 3.3 Método setInicio con “?start=${tiempo}”.
    setInicio(tiempo) {
        console.log("Ingresó a setInicio() y el tiempo establecido es: "+tiempo)
        let nuevaUrl = this.getUrl().concat(`?start=${tiempo}`);
        console.log(nuevaUrl);
        this.setUrl(nuevaUrl);
    }
} // Fin Reproductor

// EJECUCIÓN

// Función IIFE que utiliza las clases
const miReproductor = (() => {
    let miMetodoPrivado;
    miMetodoPrivado = () => {
        var musica1 = new Reproductor("https://www.youtube.com/embed/PeYUTbU_iTw", "musica");
        var pelicula1 = new Reproductor("https://www.youtube.com/embed/zSWdZVtXT7E", "peliculas");
        var series1 = new Reproductor("https://www.youtube.com/embed/DPHtPfaEbUQ", "series");

        console.log(musica1.url, musica1.id);
        console.log(pelicula1.url, pelicula1.id);
        console.log(series1.url, series1.id);

        musica1.setInicio(0); // porque, ¿quién quiere ver un video cortado? pero está el código.
        musica1.playMultimedia();

        pelicula1.setInicio(0);
        pelicula1.playMultimedia();

        series1.setInicio(0);
        series1.playMultimedia();
    }

    return {
        miFuncionPublica: () => {
            miMetodoPrivado();
        }
    }
})(); // Fin miReproductor

miReproductor.miFuncionPublica();