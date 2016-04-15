angular.module('MainCtrl', []).controller('MainController', function($scope) {

	var d = new Date();

  $scope.code = '';
  
  $scope.menu = [ 
  {name:"Home",url:"home.html"},
  {name:"Historia",url:"history.html"},
  {name:"Nosotros",url:"us.html"},
  {name:"Contacto",url:"info.html"},
  {name:"Cancionero",url:"songs.html"},
  {name:"Descargas",url:"downloads.html"}]

  $scope.footer = "Derechos Reservados Tuna de la Universidad de Concepción. webtuna@udec.cl. " + d.getFullYear(); + ".";

  //editar acá si cambia esta información de contacto
  $scope.contact = [ 
  {name:"Pablo Calderon",phone:"+56 9 93534620"},
  {name:"Francisco Salazar",phone:"+56 9 76021203"}
  ]

  // esta informacion se muestra en la pagina de contacto segun esta configuracion.
  $scope.trainningDays = "Martes y Jueves";
  $scope.trainningTime = "20:00 a 22:00 hrs";
  $scope.trainningLocation = "el segundo piso de la Casa del Deporte de la Universidad de Concepcion";

  // En la pagina de contacto se listan las redes sociales. acá se maneja ese contenido en caso que se requiera agregar o editar informacion
  $scope.social = [ 
  {name:"Facebook",url:"https://www.facebook.com/tunaudec",image:"http://www.rsu1.org/userfiles/2015-04/3ddc5ecd-a955-456c-901d-c42cbf5b67d0.jpg"},
  {name:"Twitter",url:"https://twitter.com/tunaudec",image:"http://www.kent.ac.uk/graduateschool/images/twitter-thumbnail.jpg"},
  //{name:"Instagram",url:"",image:""},
  {name:"Youtube",url:"https://www.youtube.com/user/fbuginij/videos",image:"http://bizbloggingbuzz.com/wp-content/uploads/2012/10/youtube-logo-150x150.jpg"}
  
  ]

  //la seccion de noticias es alimentada desde acá. se muestran de arriba hacia abajo en la pagina (en el mismo orden que acá)
  //Los campos textTop y textBottom van antes y despues del video respectivamente. 
  //el campo embeedcode es todo lo que se necesita para mostrar el video

  $scope.news = [
    { tittle:"Chile Conectado",
      date:"24-08-2015",
      textTop:"Nuestros amigos de Chile Conectado nos hicieron una visita donde los acompañamos a recorer nuestro campus con alegres melodias",
      textBottom:"Recuerda que ensayamos los Martes y Jueves en la casa del Deporte. Te esperamos!!!",
      embedCode:"yiV4bSgzVlI", 
      refLinkUrl:"https://www.youtube.com/watch?v=yiV4bSgzVlI",
      refLinkDisplay:"Ver en YouTube.",
      author:"Perrick"
    },
    { tittle:"Gala",
      date:"25-08-2015",
      textTop:"Revisa la primera parte de nuestra Gala realizada para finalizar el semestre",
      textBottom:"Recuerda que ensayamos los Martes y Jueves en la casa del Deporte. Te esperamos",
      embedCode:"NsXr3FMIdCA", 
      refLinkUrl:"https://www.youtube.com/watch?v=NsXr3FMIdCA",
      refLinkDisplay:"Ver en YouTube",
      author:"Perrick"
    }
  ]

  // acá esta la seccion de descargas que tambien es configurable en caso que quieran agregarse o eliminarse items. Una buena idea es
  //dejar los archivos en la carpeta contenido_descargas y despues crear un item acá donde URl es el nombre del archivo. ej: contenido_descargas/nuevo_item.pdf
  $scope.downloads = [
    {name:"Disco XV Aniversario Tuna Universidad de Concepcion (Demo)",url:"contenido_descargas/discotuna.html"},
    {name:"La Tuna, Una Tradicion Universitaria (Rafael Perez. Tuna Udec)",url:"contenido_descargas/ensayo_rafael_perez.pdf"},
    {name:"La Tuna",url:"contenido_descargas/La Tuna.pdf"},
    {name:"Historia de la Vida del Buscon (Francisco Quevedo)",url:"contenido_descargas/historia-de-la-vida-del-buscon.pdf"},
    {name:"El Lazarillo de Tormes",url:"contenido_descargas/Lazarillo de Tormes.pdf"},
    {name:"Libro del Buen Tunar (Capitulo I)",url:"contenido_descargas/Libro del Buen Tunar.pdf"},
    {name:"Las Siete Partidas (Alfonso X , El Sabio)",url:"http://www2.udec.cl/~webtuna/contenido_descargas/lspaes22.doc"}
  
  ]

  // para agregar canciones al cancionero, estas deben ser puestas en la carpeta canciones_cancionero. una vez el archivo esta ahi
  // se debe agregar una linea con el nombre y localizacion del archivo respetando EL ORDEN ALFABETICO 

  $scope.songs= [
    // A
    {tittle:"Adiós Santiago Querido",url:"canciones_cancionero/1.pdf"},
    {tittle:"Alcalá de Henares",url:"canciones_cancionero/2.pdf"},
    {tittle:"Alma llanera",url:"canciones_cancionero/4.pdf"},
    {tittle:"Amorosa Guajira",url:"canciones_cancionero/gua.pdf"},
    {tittle:"Angélica",url:"canciones_cancionero/5.pdf"},

    // B,
    {tittle:"Barlovento Estanislao",url:"canciones_cancionero/barlo.pdf"},
    {tittle:"Barrio Brujo",url:"canciones_cancionero/6.pdf"},

    // C
    {tittle:"Caja de Música",url:"canciones_cancionero/7.pdf"},
    {tittle:"Callejón",url:"canciones_cancionero/8.pdf"},
    {tittle:"Cambalache",url:"canciones_cancionero/9.pdf"},
    {tittle:"Canto a Murcia",url:"canciones_cancionero/10.pdf"},
    {tittle:"Chavala",url:"canciones_cancionero/11.pdf"},
    {tittle:"Clavelitos",url:"canciones_cancionero/12.pdf"},
    {tittle:"Contigo Aprendí",url:"canciones_cancionero/13.pdf"},
    {tittle:"Copla del Rondador",url:"canciones_cancionero/14.pdf"},

    // D
    {tittle:"Desafinado",url:"canciones_cancionero/15.pdf"},
    {tittle:"Despierta",url:"canciones_cancionero/16.pdf"},
    {tittle:"Doce Cascabeles",url:"canciones_cancionero/doce.pdf"},
    {tittle:"Dos Gardenias",url:"canciones_cancionero/gard.pdf"},

    //E
    {tittle:"El Alcalde Arrigorriaga",url:"canciones_cancionero/17.pdf"},
    {tittle:"El Cordobés",url:"canciones_cancionero/18.pdf"},
    {tittle:"El Parque",url:"canciones_cancionero/19.pdf"},
    {tittle:"Elsa",url:"canciones_cancionero/20.pdf"},
    {tittle:"El Volcán",url:"canciones_cancionero/21.pdf"},
    {tittle:"Entrega Total",url:"canciones_cancionero/22.pdf"},
    {tittle:"Estudiantina Madrileña",url:"canciones_cancionero/23.pdf"},
    {tittle:"Estudiantina Portuguesa",url:"canciones_cancionero/24.pdf"},

    //F

    {tittle:"Folía Canaria",url:"canciones_cancionero/25.pdf"},

    //G

    {tittle:"Guitarrico",url:"canciones_cancionero/26.pdf"},
    
    // H
    {tittle:"Horas de Ronda",url:"canciones_cancionero/27.pdf"},

    // I
    {tittle:"Imágenes de Ayer",url:"canciones_cancionero/28.pdf"},
    {tittle:"Isa Canaria",url:"canciones_cancionero/29.pdf"},
    {tittle:"Isa de Candidito",url:"canciones_cancionero/candi.pdf"},
    {tittle:"Isa Parrandera",url:"canciones_cancionero/30.pdf"},

    // J
    {tittle:"Jota de los Estudiantes",url:"canciones_cancionero/31.pdf"},

    // L
    {tittle:"La Bikina",url:"canciones_cancionero/32.pdf"},  
    {tittle:"La Hiedra",url:"canciones_cancionero/33.pdf"},
    {tittle:"La Media Vuelta",url:"canciones_cancionero/34.pdf"},
    {tittle:"La Viajerita",url:"canciones_cancionero/viajer.pdf"},
    {tittle:"Lagrimas Negras",url:"canciones_cancionero/lag.pdf"},
    {tittle:"Las Cintas de mi Capa",url:"canciones_cancionero/35.pdf"},
    {tittle:"Letras de Ronda",url:"canciones_cancionero/36.pdf"},
    {tittle:"Los Niños del Pireo",url:"canciones_cancionero/nin.pdf"},
    {tittle:"Luna de España",url:"canciones_cancionero/37.pdf"},

    // M
    {tittle:"Malegueñas de Sal, Retama y Llano",url:"canciones_cancionero/malag.pdf"},
    {tittle:"María Dolores",url:"canciones_cancionero/38.pdf"},
    {tittle:"Morena de mi Copla",url:"canciones_cancionero/39.pdf"},
    {tittle:"Motivos",url:"canciones_cancionero/40.pdf"},
    {tittle:"Muchachita Sabanera",url:"canciones_cancionero/41.pdf"},

    // N
    {tittle:"Noche de Ronda",url:"canciones_cancionero/42.pdf"},
    {tittle:"Nube Gris",url:"canciones_cancionero/nube.pdf"},

    // O
    {tittle:"Ojos de Cristal",url:"canciones_cancionero/43.pdf"},

    // P
    {tittle:"Parrandero",url:"canciones_cancionero/44.pdf"},
    {tittle:"Perfidia",url:"canciones_cancionero/perf.pdf"},
    {tittle:"Pescador de Morenas",url:"canciones_cancionero/45.pdf"},
    {tittle:"Piel Canela",url:"canciones_cancionero/piel.pdf"},
    {tittle:"Popurri de Valses",url:"canciones_cancionero/47.pdf"},
    {tittle:"Popurri Vasco",url:"canciones_cancionero/48.pdf"},
    {tittle:"Pobrecillo Novio, Pobre Rafael",url:"canciones_cancionero/49.pdf"},

    // Q
    {tittle:"Que Nadie sepa mi Sufrir",url:"canciones_cancionero/knadie.pdf"},

    // R
    {tittle:"Romances del Mediterraneo",url:"canciones_cancionero/roma.pdf"},
    {tittle:"Rosario",url:"canciones_cancionero/52.pdf"},
    {tittle:"Ronda en Santa Cruz",url:"canciones_cancionero/51.pdf"},

    // S
    {tittle:"San Cayetano",url:"canciones_cancionero/54.pdf"},
    {tittle:"Sabor a mi",url:"canciones_cancionero/53.pdf"},
    {tittle:"Sentimental",url:"canciones_cancionero/55.pdf"},
    {tittle:"Serenata Andaluza",url:"canciones_cancionero/56.pdf"},
    {tittle:"Solamente una Vez",url:"canciones_cancionero/sol.pdf"},
    {tittle:"Solo la Luna",url:"canciones_cancionero/57.pdf"},
    {tittle:"Somos Costeros",url:"canciones_cancionero/58.pdf"},

    // T
    {tittle:"Te lo voy a decir cantando",url:"canciones_cancionero/59.pdf"},
    {tittle:"Tuna Compostelana",url:"canciones_cancionero/60.pdf"},
    {tittle:"Tuna de Ingenieros",url:"canciones_cancionero/61.pdf"},
    {tittle:"Tuna Universidad de Concepción",url:"canciones_cancionero/tudec.pdf"},

    // U
    {tittle:"Un Paseo por las Nubes",url:"canciones_cancionero/paseo.pdf"},
    {tittle:"Una Aventura mas",url:"canciones_cancionero/62.pdf"},

    // V
    {tittle:"Vampiro",url:"canciones_cancionero/63.pdf"},
    {tittle:"Vagabundo por Santa Cruz",url:"canciones_cancionero/vaga.pdf"},
    {tittle:"Veinte Años",url:"canciones_cancionero/veinte.pdf"},

    {tittle:"Y",url:"canciones_cancionero/64.pdf"}

  ] 
  
}).directive('myYoutube', function($sce) {
  return {
    restrict: 'EA',
    scope: { code:'=' },
    replace: true,
    template: '<div style="height:400px;"><iframe style="overflow:hidden;height:100%;width:100%" width="100%" height="100%" src="{{url}}" frameborder="0" allowfullscreen></iframe></div>',
    link: function (scope) {
        console.log('here');
        scope.$watch('code', function (newVal) {
           if (newVal) {
               scope.url = $sce.trustAsResourceUrl("http://www.youtube.com/embed/" + newVal);
           }
        });
    }
  };
});



