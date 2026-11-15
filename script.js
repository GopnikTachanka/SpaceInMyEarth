
// ==================================
// 1. CREAR EL MAPA
// ==================================

var mapa = L.map('mapa').setView(
    [23.6345, -102.5528], 5
);

L.tileLayer('https://basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png?key=cb1_5991_1_326a8d034f2ba838e69d3439', {
    attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
    maxZoom: 20
}).addTo(mapa);


// ==================================
// 2. DATOS DE LOS PUNTOS 				Most of the code is SI-assisted (mostly in roadblocks we faced or debugging), but the translation sections (i.e. "var traducciones" and "function cambiarIdioma" are directly SI-gen. Other than that, SI only directly generated singular lines to patch bugs.)
// ==================================

var puntos = [

    {
        nombre: "Zonas de diagénesis de óxidos del Escudo Báltico (Kiruna, Suecia)",
        nombre_en: "Oxide Diagenesis Zones of the Baltic Shield (Kiruna, Sweden)",
        // A qué cuerpos celestes sirve como análogo
        mundos: ["Marte", "Luna"],
        // Tipo de información
        estado: "Hipotesis",
        coordenadas: [67.85, 20.22],
        icono: "🧲",
        imagen: "Kiruna.jpeg",
        estadisticas: {
        	terreno: 70,
        	termal: 55,
        	hieloAgua: 60,
        	mineralogia: 95,
        	subsuperficie: 90
    	},

	    contenido: {
	        es: {
	        	nombre: "Zonas de diagénesis de óxidos del Escudo Báltico (Kiruna, Suecia)",
	            analogo: "Yacimientos masivos de magnetita y hematita con apatito en rocas encajantes precámbricas; modelado de la mineralogía de óxidos de hierro sin la intervención de una alteración atmosférica de origen biológico en el momento de su formación.",
	            limitaciones: "Fuerte influencia de las glaciaciones del Cuaternario reciente, que han erosionado drásticamente y remodelado el relieve de la superficie expuesta.",
	            uso: "Investigar anomalías magnéticas locales producidas por cuerpos mineralizados densos con el fin de calibrar magnetómetros espaciales orbitales.",
	            comparacion: "Mapas aeromagnéticos terrestres de alta resolución con datos de magnetometría provenientes de misiones espaciales.",
	        },
	        en: {
	        	nombre: "Oxide Diagenesis Zones of the Baltic Shield (Kiruna, Sweden)",
	            analogo: "Massive magnetite and apatite-bearing hematite deposits in Precambrian host rocks, modeling iron oxide mineralogy without active biological atmospheric alteration at origin.",
	            limitaciones: "Strong influence of recent Quaternary glaciations that have drastically scraped and reshaped the exposed surface relief.",
	            uso: "Investigate local magnetic anomalies produced by dense mineralized bodies to calibrate orbital space magnetometers.",
	            comparacion: "High-resolution terrestrial aeromagnetic maps with magnetometry data from space missions.",
	        },
	    },
	},


    {
        nombre: "Campos de Bloques Periglaciales de los Andes Aridos (Argentina y Chile)",
        nombre_en: "Dry Periglacial Block Fields of the Arid Andes (Argentina/Chile)",
        mundos: ["Marte",],
        estado: "Conocido",
        coordenadas: [-27.10, -68.70],
        icono: "🪨",
        imagen: "peri.jpeg",
        estadisticas: {
        	terreno: 90,
        	termal: 70,
        	hieloAgua: 20,
        	mineralogia: 85,
        	subsuperficie: 80
    	},

	    contenido: {
	        es: {
	            analogo: "Acumulaciones de escombros basálticos angulosos y bloques caóticos en laderas de alta montaña, bajo una intensa radiación ultravioleta y una presión atmosférica muy reducida.",
	            limitaciones: "Campos de nieve intermitentes en las cumbres más elevadas y procesos gravitatorios terrestres, acelerados por una gravedad completa de 1 g.",
	            uso: "Analiza el ángulo de reposo del regolito angular suelto en pendientes pronunciadas, a fin de prevenir riesgos de deslizamientos para los vehículos exploradores y las bases humanas.",
	            comparacion: "Modelos digitales de elevación de alta resolución frente a las laderas escarpadas de los cráteres lunares y marcianos.",
	        },
	        en: {
	            analogo: "Accumulations of angular basaltic debris and chaotic blocks on high-mountain slopes under intense UV radiation and greatly reduced atmospheric pressure.",
	            limitaciones: "Intermittent high-summit snowfields and Earth's gravitational processes accelerated by full 1 g gravity.",
	            uso: "Analyze the angle of repose of loose angular regolith on steep slopes to prevent landslide risks for rovers and human bases.",
	            comparacion: "High-resolution digital elevation models versus the steep slopes of lunar and Martian craters.",
	        },
	    },
	},

    {
        nombre: "Costras de sílice opalina de la meseta de Ustyurt (Kazajistán / Uzbekistán)",
        nombre_en: "Opaline Silica Crusts of the Ustyurt Plateau (Kazakhstan / Uzbekistan)",
        mundos: ["Marte"],
        estado: "Hipotesis",
        coordenadas: [43.50, 56.50],
        icono: "💎",
        imagen: "Ustyurt.jpeg",
        estadisticas: {
        	terreno: 75,
        	termal: 60,
        	hieloAgua: 30,
        	mineralogia: 90,
        	subsuperficie: 70
    	},

	    contenido: {
	        es: {
	            analogo: "Formación masiva de costras duras de sílice opalina y cementación mediante fluidos silíceos en un desierto llano, similar a los depósitos descubiertos en Home Plate (Gusev).",
	            limitaciones: "Estratos sedimentarios marinos del Terciario, elevados por tectónica terrestre regional; un fenómeno ausente en la historia tectónica de Marte.",
	            uso: "Evaluar la eficacia de las herramientas abrasivas del vehículo explorador para penetrar costras de sílice endurecidas sin dañar los mecanismos de muestreo.",
	            comparacion: "Mapeo hiperespectral terrestre frente a análisis espectrales orbitales de la mineralogía de sílice.",
	        },
	        en: {
	        	
	            analogo: "Massive formation of opaline silica duricrusts and cementation by siliceous fluids in a flat desert, similar to the deposits discovered at Home Plate (Gusev).",
	            limitaciones: "Tertiary marine sedimentary strata uplifted by regional terrestrial tectonics, absent from Mars' tectonic history.",
	            uso: "Test the efficiency of rover abrasive tools in penetrating hardened silica crusts without damaging sampling mechanisms.",
	            comparacion: "Terrestrial hyperspectral mapping versus orbital spectral analyses of silica mineralogy.",
	        },
	    },
	},

	{
        nombre: "Llanuras evaporitas de Makgadikgadi (Botswana)",
        nombre_en: "Makgadikgadi Evaporite Plains (Botswana)",
        mundos: ["Marte"],
        estado: "Conocido",
        coordenadas: [-20.50, 25.80],
        icono: "🧂",
        imagen: "botsuana.webp",
        estadisticas: {
        	terreno: 80,
        	termal: 65,
        	hieloAgua: 25,
        	mineralogia: 80,
        	subsuperficie: 60
    	},

	    contenido: {
	        es: {
	            analogo: "Vastas extensiones llanas de costras de sulfato de sodio y arcillas extremadamente secas y desecadas que replican cuencas lacustres extintas de baja energía en Marte.",
	            limitaciones: "Inundaciones monzónicas estacionales ocasionales que disuelven y remodelan cíclicamente la superficie.",
	            uso: "Simular la fricción de las ruedas de un vehículo explorador sobre costras delgadas de sulfatos y arcillas contraídas por desecación.",
	            comparacion: "Imágenes multiespectrales terrestres de alta resolución frente a datos composicionales provenientes de instrumentos de análisis in situ a bordo de un vehículo explorador.",
	        },
	        en: {
	        	
	            analogo: "Vast flat expanses of sodium sulfate crusts and ultra-dry desiccated clays that replicate extinct low-energy lake basins on Mars.",
	            limitaciones: "Occasional seasonal monsoon flooding that dissolves and cyclically reshapes the surface.",
	            uso: "Simulate rover wheel friction on thin sulfate crusts and clays contracted by desiccation.",
	            comparacion: "High-resolution terrestrial multispectral images versus compositional data from rover in-situ analysis instruments.",
	        },
	    },
	},



	{
        nombre_en: "Volcanic Sublimations of Ol Doinyo Lengai (Tanzania)",
        nombre: "Sublimaciones volcánicas del Ol Doinyo Lengai (Tanzania)",
        mundos: ["Marte", "Luna"],
        estado: "Hipotesis",
        coordenadas: [-2.76, 35.91],
        icono: "🌋",
        imagen: "lengai.jpg",
        estadisticas: {
        	terreno: 60,
        	termal: 50,
        	hieloAgua: 10,
        	mineralogia: 85,
        	subsuperficie: 50
    	},

	    contenido: {
	        es: {
	            analogo: "Erupción de lavas natrocarbonatíticas ricas en carbonatos de sodio y potasio solubles, lo que constituye un análogo de los flujos volcánicos no silicatados de baja temperatura.",
	            limitaciones: "Vulcanismo activo impulsado por el singular magmatismo basáltico de la Tierra, altamente reactivo ante el agua líquida ambiental.",
	            uso: "Analiza la rápida alteración química de los carbonatos superficiales expuestos a una atmósfera reactiva.",
	            comparacion: "Espectroscopia infrarroja de campo frente a datos procedentes de espectrómetros en órbita planetaria.",
	        },
	        en: {
	        	
	            analogo: "Eruption of natrocarbonatite lavas rich in soluble sodium and potassium carbonates, offering an analog for low-temperature, non-silicate volcanic flows.",
	            limitaciones: "Active volcanism driven by Earth's unique basaltic magmatism, highly reactive to ambient liquid water.",
	            uso: "Analyze the rapid chemical alteration of surface carbonates exposed to a reactive atmosphere.",
	            comparacion: "Field infrared spectroscopy versus data from planetary orbital spectrometers.",
	        },
	    },
	},

	{
        nombre: "Domos de sal hipogénica de Namak Dan (isla de Qeshm, Irán)",
        nombre_en: "Hypogenic Salt Domes of Namak Dan (Qeshm Island, Iran)",
        mundos: ["Marte", "Luna"],
        estado: "Hipotesis",
        coordenadas: [26.65, 55.85],
        icono: "🧂",
        imagen: "qeshm.jpeg",
        estadisticas: {
        	terreno: 70,
        	termal: 40,
        	hieloAgua: 20,
        	mineralogia: 90,
        	subsuperficie: 85
    	},

	    contenido: {
	        es: {
	            analogo: "Estructuras de flujo de halita en el subsuelo y cavidades salinas profundas que replican depósitos de cloruros y cavidades de halita hipotéticas en las tierras altas de Marte.",
	            limitaciones: "La elevada humedad relativa de la atmósfera costera terrestre disuelve rápidamente las formaciones salinas superficiales, un proceso imposible en el clima seco actual de Marte.",
	            uso: "Evaluar la estabilidad estructural de las cavernas de evaporitas y el comportamiento de las estructuras cristalinas bajo cargas mecánicas estáticas.",
	            comparacion: "Modelos de radar de apertura sintética terrestre con mapas de distribución orbital de cloruros.",
	        },
	        en: {
	        	
	            analogo: "Subsurface halite flow structures and deep salt caves that replicate chloride deposits and hypothetical halite cavities in the Martian highlands.",
	            limitaciones: "The high relative humidity of Earth's coastal atmosphere quickly dissolves surface salt formations, something impossible in Mars' current dry climate.",
	            uso: "Assess the structural stability of evaporite caverns and the behavior of crystalline structures under static mechanical loads.",
	            comparacion: "Terrestrial synthetic aperture radar models with orbital chloride distribution maps.",
	        },
	    },
	},

	{
        nombre: "Pozos profundos del complejo ofiolítico de Semail (Omán)",
        nombre_en: "Deep Boreholes of the Semail Ophiolite Complex (Oman)",
        mundos: ["Marte", "Luna"],
        estado: "Hipotesis",
        coordenadas: [23.40, 58.15],
        icono: "🕳️",
        imagen: "semail.webp",
        estadisticas: {
        	terreno: 55,
        	termal: 60,
        	hieloAgua: 40,
        	mineralogia: 80,
        	subsuperficie: 90
    	},

	    contenido: {
	        es: {
	            analogo: "La serpentinización activa en rocas ultramáficas profundas libera hidrógeno y metano de forma abiótica, lo que simula la química del subsuelo marciano.",
	            limitaciones: "La tectónica de placas de la Tierra recicla constantemente la corteza oceánica, un proceso que no ocurre en el Marte actual, que es un planeta estático.",
	            uso: "Calibrar medidores de gas y cromatógrafos de pozos de sondeo para detectar fugas de gases reducidos relacionadas con la actividad geoquímica no biológica.",
	            comparacion: "Datos geoquímicos de perforaciones del ICDP frente a mediciones de metano atmosférico de rovers y orbitadores.",
	        },
	        en: {
	        	
	            analogo: "Active serpentinization in deep ultramafic rocks releases hydrogen and methane abiotically, simulating Martian subsurface chemistry.",
	            limitaciones: "Earth's plate tectonics constantly recycles oceanic crust, a process that is inactive on modern, static Mars.",
	            uso: "Calibrate borehole gas meters and chromatographs to detect leaks of reduced gases linked to non-biological geochemical activity.",
	            comparacion: "ICDP drilling geochemical data versus atmospheric methane measurements from rovers and orbiters.",
	        },
	    },
	},


	{
        nombre: "Dunas de yeso de Cuatrociénegas (México)",
        nombre_en: "Cuatrociénegas Gypsum Dunes (Mexico)",
        mundos: ["Marte"],
        estado: "Conocido",
        coordenadas: [26.85, -102.05],
        icono: "🏜️",
        imagen: "cienegas.jpeg",
        estadisticas: {
        	terreno: 85,
        	termal: 70,
        	hieloAgua: 20,
        	mineralogia: 90,
        	subsuperficie: 60
    	},

	    contenido: {
	        es: {
	            analogo: "Dunas excepcionales formadas por cristales de sulfato de calcio (yeso puro), que reproducen los extensos campos de dunas ricos en sulfato descubiertos por el Curiosity en Marte.",
	            limitaciones: "La microbiología endémica y los manantiales alimentados por aguas subterráneas activas crean un ciclo hidrológico y biológico que no existe en el Marte actual.",
	            uso: "Estudio de la diagénesis y la erosión eólica de los sedimentos de sulfato cristalino para modelar el transporte de dunas no silicatadas bajo los vientos planetarios.",
	            comparacion: "Imágenes orbitales de alta resolución obtenidas por sensores multiespectrales comparadas con los datos composicionales de los orbitadores marcianos de la NASA.",
	        },
	        en: {
	        	
	            analogo: "Exceptional dunes made of calcium sulfate crystals (pure gypsum), replicating the extensive sulfate-rich dune fields discovered by Curiosity on Mars.",
	            limitaciones: "Endemic microbiology and springs fed by active groundwater create a hydrological and biological cycle that is absent on present-day Mars.",
	            uso: "Study the diagenesis and wind erosion of crystalline sulfate sediments to model the transport of non-silicate dunes under planetary winds.",
	            comparacion: "High-resolution orbital images from multispectral sensors versus the compositional data from NASA's Martian orbiters.",
	        },
	    },
	},


	{
        nombre: "Campos basálticos-glaciales del macizo de Kerguelen (Océano Índico meridional)",
        nombre_en: "Basaltic-Glacial Fields of the Kerguelen Massif (Southern Indian Ocean)",
        mundos: ["Marte", "Luna"],
        estado: "Hipotesis",
        coordenadas: [-49.25, 69.16],
        icono: "🌋",
        imagen: "Kerguelen.png",
        estadisticas: {
        	terreno: 85,
        	termal: 45,
        	hieloAgua: 90,
        	mineralogia: 80,
        	subsuperficie: 75
    	},

	    contenido: {
	        es: {
	            analogo: "Interacción directa entre mesetas basálticas masivas y hielo permanente, sometidas a vientos oceánicos constantes con fuerza de huracán.",
	            limitaciones: "Aislamiento oceánico extremo con un clima marítimo húmedo y un rango de temperaturas diarias reducido en comparación con el entorno continental lunar o marciano.",
	            uso: "Evaluar la degradación mecánica de los materiales basálticos por ciclos de congelación en presencia de humedad atmosférica densa.",
	            comparacion: "Modelos morfométricos de la erosión glaciar-volcánica en relación con la topografía de los Apeninos lunares.",
	        },
	        en: {
	        	
	            analogo: "Direct interaction between massive basaltic plateaus and permanent ice, subjected to constant hurricane-force oceanic winds.",
	            limitaciones: "Extreme oceanic isolation with a humid maritime climate and low daily temperature range compared with the continental lunar or Martian environment.",
	            uso: "Evaluate the mechanical degradation of basaltic materials by freeze cycles in the presence of dense atmospheric moisture.",
	            comparacion: "Morphometric models of glacial-volcanic erosion versus the topography of the lunar Apennine Mountains.",
	        },
	    },
	},



];


var traducciones = { //SI used for localization and structure, translation done manually
    			es: {
    				atlas: "Atlas de Análogos",
        			categorias: "Categorías",
        			descripcion: "Explorador Geografico Interactivo para Analogos de la Luna y Marte en la Tierra",
        			idioma: "English",
        			ambos: "Ambos",
        			conocido: "Conocido",
        			hipotesis: "Hipótesis",
        			estado: "Estado de Información",
        			luna: "Luna",
        			marte: "Marte",
        			info: "Selecciona un marcador para consultar sus datos.",
        			estadisticas: "Estadisticas",
        			terreno: "Terreno",
        			termal: "Térmico",
			        hieloAgua: "Hielo y agua",
			        mineralogia: "Mineralogía",
			        subsuperficie: "Subsuperficie",
			        analogo: "¿Qué lo hace análogo?",
			        limitaciones: "¿Dónde se rompe la analogía?",
			        uso: "¿Cómo se utiliza?",
			        comparacion: "Datos para comparar",
   			 	},

	    		en: {
	    			atlas: "Atlas of Analogues",
	        		categorias: "Categories",
	        		descripcion: "Interactive Geographic Explorer for Analogues of Moon and Mars on Earth",
	        		idioma: "Español",
	        		ambos: "Both",
        			conocido: "Known",
        			hipotesis: "Hypothesis",
        			estado: "Info State",
        			luna: "Moon",
        			marte: "Mars",
        			info: "Select a marker to check its data.",
        			estadisticas: "Statistics",
        			terreno: "Terrain",
			        termal: "Thermal",
			        hieloAgua: "Ice and water",
			        mineralogia: "Mineralogy",
			        subsuperficie: "Subsurface",
			        analogo: "What makes it an analogue?",
			        limitaciones: "Where does the analogy break down?",
			        uso: "How is it used?",
			        comparacion: "Comparable data",
			    
	    		}
			};


// ==================================
// 3. COLORES POR CATEGORÍA
// ==================================

var colores = {
    Luna: "#DAEEF2",
    Marte: "#9C2E35",
    Ambos: "#9C2E35"
};


// ==================================
// 4. GRUPO DE MARCADORES
// ==================================

var marcadores = L.layerGroup().addTo(mapa);


// ==================================
// 5. MOSTRAR LOS PUNTOS
// ==================================
var idiomaActual = "es";
function mostrarPuntos() {

    marcadores.clearLayers();

    var filtros = document.querySelectorAll(".filtro:checked");

    var mundosActivos = [];
    var estadosActivos = [];

    filtros.forEach(function(filtro) {

        if (filtro.dataset.grupo === "mundo") {
            mundosActivos.push(filtro.value);
        }

        if (filtro.dataset.grupo === "estado") {
            estadosActivos.push(filtro.value);
        }

    });


    puntos.forEach(function(punto) {

        // Comprobar categoría de mundo

        var coincideMundo = mundosActivos.length === 0 ||
            mundosActivos.includes("Ambos") && punto.mundos.includes("Luna") && punto.mundos.includes("Marte") ||
            mundosActivos.some(function(mundo) {
                return punto.mundos.includes(mundo);
            });


        // Comprobar estado de información

        var coincideEstado = estadosActivos.length === 0 ||
            estadosActivos.includes(punto.estado);


        // Mostrar solamente los puntos que coincidan

        if (coincideMundo && coincideEstado) {

            // Crear icono personalizado

            var color = punto.mundos.length > 1
                ? colores.Ambos
                : colores[punto.mundos[0]];

            var icono = L.divIcon({

                className: "marcador",

                html: `<span style="color:${color}">${punto.icono}</span>`,

                iconSize: [30, 30],

                iconAnchor: [15, 15]

            });


            // Crear marcador

            var marcador = L.marker(
                punto.coordenadas,
                { icon: icono }
            );

            




            // Crear ventana informativa

			marcador.bindPopup(generarPopup(punto));


            marcadores.addLayer(marcador);

        }

    });

}

function generarPopup(punto) { //SI used
    return `
        <div class="popup-cientifico">

            <h2>${idiomaActual === "en" ? (punto.nombre_en || punto.nombre) : punto.nombre}</h2>

            <div class="popup-etiquetas">

                ${(punto.mundos || []).map(mundo => `
                    <span class="etiqueta mundo-${mundo.toLowerCase()}">
                        ${idiomaActual === "en"
                            ? (mundo === "Luna" ? "Moon" : "Mars")
                            : mundo}
                    </span>
                `).join("")}

                <span class="etiqueta estado ${punto.estado === "Conocido" ? "conocido" : "hipotesis"}">
                    ${traducciones[idiomaActual][punto.estado === "Hipotesis" ? "hipotesis" : "conocido"] || punto.estado}
                </span>

            </div>

            <div class="popup-contenido">

                <div class="popup-izquierda">
                    <img src="${punto.imagen}" alt="${punto.nombre}">

                    <h3>${traducciones[idiomaActual].estadisticas}</h3>

                    ${Object.entries(punto.estadisticas || {}).map(([clave, valor]) => `
                        <div class="estadistica">
                            <span>${traducciones[idiomaActual][clave] || clave}</span>
                            <div class="barra">
                                <div class="progreso" style="width: ${valor ?? 0}%"></div>
                            </div>
                        </div>
                    `).join("")}
                </div>

                <div class="popup-derecha">

                    <h3>${traducciones[idiomaActual].analogo}</h3>
                    <p>${punto.contenido?.[idiomaActual]?.analogo || "Información no disponible"}</p>

                    <h3>${traducciones[idiomaActual].limitaciones}</h3>
                    <p>${punto.contenido?.[idiomaActual]?.limitaciones || "Información no disponible"}</p>

                    <h3>${traducciones[idiomaActual].uso}</h3>
                    <p>${punto.contenido?.[idiomaActual]?.uso || "Información no disponible"}</p>

                    <h3>${traducciones[idiomaActual].comparacion}</h3>
                    <p>${punto.contenido?.[idiomaActual]?.comparacion || "Información no disponible"}</p>

                </div>
            </div>
        </div>
    `;
}



// ==================================
// 6. CAMBIAR IDIOMA 					SI used
// ==================================

function cambiarIdioma() {
    idiomaActual = idiomaActual === "es" ? "en" : "es";

    // Traducir los textos fijos de la interfaz.
    document.querySelectorAll("[data-i18n]").forEach(function(elemento) {
        var clave = elemento.dataset.i18n;
        var traduccion = traducciones[idiomaActual][clave];

        if (traduccion !== undefined) {
            elemento.textContent = traduccion;
        }
    });

    // Actualizar el texto del botón.
    document.getElementById("btnIdioma").textContent =
        traducciones[idiomaActual].idioma;

    // Recrear los marcadores y sus popups con el idioma nuevo.
    mostrarPuntos();
}

document.getElementById("btnIdioma").addEventListener("click", cambiarIdioma);

// ==================================
// 7. ACTIVAR LOS FILTROS
// ==================================

document.querySelectorAll(".filtro")
    .forEach(function(filtro) {

        filtro.addEventListener("change", mostrarPuntos);

    });


// ==================================
// 8. INICIAR EL MAPA
// ==================================

mostrarPuntos();
