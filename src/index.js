import('/app/index.html')
    .catch(error => {
      console.error(`Hubo un error al cargar la página: ${error}`);
    });

import 'bootstrap/dist/css/bootstrap.css'