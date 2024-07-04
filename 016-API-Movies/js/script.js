let pagina = 1;
const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');

btnSiguiente.addEventListener('click', async () => {
  if (pagina < 1000) {
    pagina++;
    await cargarPeliculas();
  }
});

btnAnterior.addEventListener('click', async () => {
  if (pagina > 1) {
    pagina--;
    await cargarPeliculas();
  }
});

const cargarPeliculas = async () => {
  try {
    const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=192e0b9821564f26f52949758ea3c473&language=es-MX&page=${pagina}`);
    
    if (respuesta.ok) {
      const datos = await respuesta.json();
      let peliculasHTML = '';
      
      datos.results.forEach(pelicula => {
        peliculasHTML += `
          <div class="pelicula">
            <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}" alt="${pelicula.title}">
            <h3 class="titulo">${pelicula.title}</h3>
          </div>
        `;
      });
      
      document.getElementById('contenedor').innerHTML = peliculasHTML;
    } else {
      if (respuesta.status === 401) {
        console.log('Error: Se ingresó incorrectamente la llave de API.');
      } else if (respuesta.status === 404) {
        console.log('Error: No se encontró la página solicitada.');
      } else {
        console.log('Error inesperado al cargar las películas.');
      }
    }
  } catch (error) {
    console.error('Error en la carga de películas:', error);
  }
};

// Cargar películas al iniciar la página
cargarPeliculas();
