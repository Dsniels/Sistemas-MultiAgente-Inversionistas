
class Usuario {
    constructor(nombre, peliculasCalificadas){
        this.nombre = nombre;
        this.peliculasCalificadas = peliculasCalificadas;
    }

    peliculasRecomendadas(usuario, usuarios) {
        let usuariosSimilares = this.encontrarUsuariosSimilares(usuarios);
        /* console.log(usuariosSimilares); */
        let recomendacion = this.obtenerPeliculasRecomendadas(usuariosSimilares, usuario);
        console.log(`${this.nombre} recomendo a ${usuario.nombre} estas peliculas : ${recomendacion.join(', ')}`);
        console.log('');
    }

    encontrarUsuariosSimilares(usuarios){
        return usuarios.filter(usuario =>{
            let peliculasMutuas = Object.keys(this.peliculasCalificadas).filter(pelicula =>Object.keys(usuario.peliculasCalificadas).includes(pelicula))
            /* console.log('PeliculasMutuas', peliculasMutuas); */
            let calificacionSimilar = peliculasMutuas.map(pelicula => this.peliculasCalificadas[pelicula] === usuario.peliculasCalificadas[pelicula]);
           /*  console.log('calificacion similar', calificacionSimilar); */

            return calificacionSimilar.length > 0 && calificacionSimilar.every(rating => rating);

        })

    };

    obtenerPeliculasRecomendadas(usuariosSimilares, usuario){
        let peliculasRecomendadas = usuariosSimilares.flatMap(usuario => Object.keys(usuario.peliculasCalificadas));
      /*   console.log('peliculas Recomendadas : ', peliculasRecomendadas); */
        return peliculasRecomendadas.filter(pelicula => !Object.keys(usuario.peliculasCalificadas).includes(pelicula));
    }

}

const Usuario1 = new Usuario('Daniel', {'sherk' : 5, 'Matrix': 2, 'Interestelar' : 5, 'StarWars' : 4, 'El Irlandes' : 5, 'Pulp Fiction': 4,'Paddington 2' : 5});
const Usuario2 = new Usuario('Juan', {'Training Day' : 5, 'Predestinacion' : 5, 'winnePoo' : 2, 'El Irlandes' : 3, 'Batman' : 5});
const Usuario3= new Usuario('Nico', {'Spiderman' : 3, 'Interestelar' : 4, 'Xmen' : 3, 'Men in Black' : 5,  'Paddington 1' : 5, 'Paddington 2' : 4});
const Usuario4 = new Usuario('Laura', {'The Godfather': 5, 'Pulp Fiction': 4, 'Fight Club': 5, 'Matrix': 5, 'Forrest Gump': 4});
const Usuario5 = new Usuario('Carlos', {'The Shawshank Redemption': 5, 'El señor de los anillos': 3,'StarWars' : 2 ,'The Empire Strikes Back': 4, 'The Lion King': 4, 'Jurassic Park': 3});
const Usuario6 = new Usuario('Ana', {'Xmen': 5, 'Buscando a nemo': 4,  'Matrix': 5,'Los increibles': 5, 'Pulp Fiction': 4,'Monsters, Inc.': 4, 'Batman': 3});
const Usuarios = [Usuario1, Usuario2, Usuario3, Usuario4, Usuario5, Usuario6];


Usuario1.peliculasRecomendadas(Usuario2, Usuarios);
Usuario3.peliculasRecomendadas(Usuario1, Usuarios);
Usuario2.peliculasRecomendadas(Usuario3, Usuarios);
Usuario4.peliculasRecomendadas(Usuario5, Usuarios);
Usuario5.peliculasRecomendadas(Usuario6, Usuarios);
Usuario6.peliculasRecomendadas(Usuario4, Usuarios);
Usuario3.peliculasRecomendadas(Usuario6, Usuarios);
Usuario4.peliculasRecomendadas(Usuario1, Usuarios);
Usuario5.peliculasRecomendadas(Usuario2, Usuarios);
Usuario6.peliculasRecomendadas(Usuario3, Usuarios);
