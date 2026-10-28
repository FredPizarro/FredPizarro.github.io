/*
 * Mockup de datos: descripciones que se muestran en la nube al hacer click
 * sobre una imagen de un modal (ver js/modal-tooltip.js).
 *
 * Estructura: ModalDescriptions.DATA[<id del modal>][<id de la imagen>] = { title, text }
 *  - id del modal  : id del div .modal (ej. 'Modal_card-upload-str')
 *  - id de la imagen: atributo id, data-desc-id o nombre del archivo sin extension
 *  - '_default'    : aplica a las imagenes del modal sin entrada propia
 * Sin entrada = no se muestra nube.
 */
class ModalDescriptions {
	static DATA = {
		'Modal_card-location': {
			'card-location': {
				title: 'Card Location Service',
text: `Diseño web (mockup) de tarjeta de ubicación: Interfaz de movilidad urbana con mapa de rutas, geolocalización y 
comparación de 3 destinos según distancia, tiempo estimado, horarios y valoración. Diseño UX/UI enfocado en la claridad visual
 y la toma rápida de decisiones.`
			}
		},
		'Modal_card-color': {
			'card-color': {
				title: 'Card Color Select',
text: `Diseño web (mockup) de selector de color: paleta de colores primarios con cards que muestran cada tono y su código
 hexadecimal, versión compacta de la paleta y escalas de degradado en azules,
 grises y cálidos/verdes para elegir variantes del mismo color.`
			}
		},
		'Modal_card-upload-str': {
			'card-upload-str-1-min': {
				title: 'Subir SRT',
text: `Aplicación web moderna desarrollada en React para la edición de subtítulos en formato .srt. La primera pestaña incorpora
 una zona de carga mediante drag and drop o selección manual, que admite exclusivamente archivos .srt con un tamaño máximo de
 45 KB. El sistema valida automáticamente la estructura del archivo, las marcas de tiempo y la secuencia de subtítulos. 
 Además, contempla medidas de seguridad durante la transferencia, mediante el uso de HTTPS/TLS para cifrar los datos en
 tránsito y controles de validación para prevenir la carga de archivos no permitidos.`
			},
			'card-upload-str-2-min': {
				title: 'Editar Subtítulos',
text: `Segunda pestaña: editor de subtítulos bilingües (español e inglés) con sincronización temporal, codificación por colores
 (amarillo y blanco) y ajustes tipográficos. Incluye limpieza de publicidad, deduplicación de créditos del traductor, gestión
  de colaboradores y opciones de exportación y programación, con una interfaz responsive orientada a la precisión y eficiencia.`
			}
		},
		'Modal_baner-app-download': {
			'baner-app-download': {
				title: 'Banner App Download',
text: `Diseño de banner de descarga de la app QuizCat (banco de preguntas): ícono de la app con el logo QuizCat con un fondo
 ámbar, nombre, descripción, valoración de 4.2 estrellas y botón verde OPEN para abrir la app, con estilo de tienda de 
 aplicaciones.`
			}
		},
		'Modal_03': {
			'report-material-design': {
				title: 'Report statistical',
text: `Diseño UX/UI de dashboard de gestión de proyectos: Interfaz que centraliza el registro de actividades, la asignación de
 colaboradores y el seguimiento de horas trabajadas y facturables, con filtros por fechas y servicios, estados del proyecto y
 resumen de productividad. Destaca la jerarquía visual, la densidad informativa y la trazabilidad operativa para optimizar la
 gestión del tiempo.`
			}
		},
		'Modal_login': {
			'login-component': {
				title: 'Login',
text: `Diseño UX/UI móvil de pantalla de autenticación: Interfaz minimalista con fondo fotográfico desenfocado, campos de correo
 y contraseña, botón principal rosa y accesos para recuperación de contraseña y registro. Se priorizan la jerarquía visual, el
  contraste y la simplicidad de interacción para ofrecer una experiencia de acceso intuitiva y fluida.`
			},
			'signup-component': {
				title: 'Signup',
text: `Diseño UX/UI móvil de pantalla de registro: Interfaz minimalista y coherente con el login, con fondo fotográfico
 desenfocado, campos de usuario, edad, correo y contraseña, botón rosa de registro y enlace para volver al inicio de sesión.
  Se priorizan la consistencia visual, la claridad de los formularios y una experiencia de registro intuitiva.`
			}
		},
		'Modal_icon': {
			'icon-design-material_2': {
				title: 'Icon Design SVG',
text: `Guía de iconografía Material Design: Selección de iconos adaptada a las acciones, vistas y necesidades funcionales de
 cada proyecto, manteniendo la coherencia visual y la usabilidad de las interfaces. Incluye más de 4.000 iconos organizados
  en 17 categorías, índice de navegación y opciones de exportación en SVG y PNG mediante interacción directa.`
			}
		},
		'Modal_color': {
			'colorux_min': {
				title: 'Color palette',
				text: `Kit de color "UI & UX Desing": colores favoritos, ruedas de color y colecciones de paletas listas para usar,
 paleta Material de Google con sus tonos (50 a 900 y acentos A100 a A700) y código hexadecimal, y un detector de color que
 extrae el color dominante y la paleta de una imagen arrastrada. Incluye una tabla de combinaciones de fondo, texto,
 divisores y acentos para temas claro y oscuro, con vista previa en móvil.`
			}
		},
		'Modal_Theme-brackets': {
			'brackets-themes': {
				title: 'Extension Brackets: Material Color',
				text: `Temas "Material Color (dark)" y "Material Color (light)" instalados en el gestor de extensiones de Brackets, con su
 versión 1.2.0 y la cantidad de descargas (más de 19 mil y 29 mil), inspirados en el color del café, Material Color y la
 fuente Roboto.`
			},
			'material-color_(dark)': {
				title: 'Material Color (dark)',
				text: `Búsqueda de "Material Color" en el registro de extensiones de Brackets, con el tema oscuro y el claro disponibles
 en la pestaña Themes, ambos publicados por Fred Pizarro.`
			},
			'theme-dark-less': {
				title: 'Tema dark aplicado a LESS',
				text: `Tema oscuro en el editor Brackets editando un archivo LESS: fondo negro, selectores y propiedades en rojo y
 naranja, valores y llaves resaltados, números de línea y barra lateral con acento verde azulado, para una lectura cómoda.`
			},
			'material-color_(light)': {
				title: 'Material Color (light)',
				text: `Versión clara del tema en el registro de extensiones de Brackets: fondo gris claro con los mismos temas
 "Material Color (light)" y "(dark)", resaltando el tema oscuro seleccionado.`
			},
			'theme-light-css': {
				title: 'Tema light aplicado a CSS',
				text: `Tema claro en el editor Brackets editando un archivo CSS: fondo blanco, selectores en tonos verde azulado,
 propiedades y valores en coral y marrón, con barra de pestañas y panel lateral en armonía con la paleta Material.`
			}
		},
		'Modal_Theme-atom': {
			'atom-theme': {
				title: 'Extension Atom: coffee-color-dark-syntax',
				text: `Tema "coffee-color-dark-syntax" (v1.0.1) publicado en atom.io, encontrado desde Install Themes en la configuración
 de Atom al buscar "Coffee-color". Inspirado en el color del café + Color Material, listo para instalar con un clic.`
			},
			'atom-theme_(coffee-color-dark)': {
				title: 'Coffee Color dark en Atom',
				text: `Tema oscuro de sintaxis aplicado a un proyecto Angular en Atom: fondo oscuro de tonos café, palabras
 clave y funciones en coral, tipos y clases en azul, comentarios atenuados y árbol de archivos coherente con la paleta,
 para una lectura clara del código TypeScript.`
			}
		},
		'Modal_Package-atom': {
			'atom-package': {
				title: 'Extension Atom: ng-ts-snippets',
				text: `Desarrollo de extensión para Atom — ng-ts-snippets v1.0.0: Paquete creado por ProjectsZ que incorpora
 abreviaturas de código (snippets) para Angular y TypeScript, agilizando la escritura de componentes, servicios y estructuras
 recurrentes. Se integra mediante Install Packages en la configuración de Atom, facilitando su instalación, acceso y reutilización en
 el flujo de desarrollo.`
			},
			'atom-package_(generate)': {
				title: 'Extension Atom: ng-ts-snippets',
				text: `Uso del paquete en un archivo TypeScript de un proyecto Angular: al escribir "ng-" el autocompletado sugiere
 snippets como Angular Component, Directive, Pipe, Service, Routes y const FormGroup, además de ayudas para extraer datos
 y manejar errores en respuestas HTTP, generando la estructura base con una sola abreviatura.`
			}
		},
		'Modal_Package-vscode': {
			'coffe-dark-theme_vscode-02': {
				title: 'Coffee Dark Theme en VSCode',
				text: `Tema oscuro aplicado a un archivo TypeScript: fondo oscuro de tonos café,
 palabras clave en rojo coral, clases y tipos en azul, cadenas en naranja y pestaña activa con acento verde azulado, para
 distinguir cada elemento del código de un vistazo.`
			},
			'coffe-dark-theme_vscode-01': {
				title: 'Extensión Coffee Dark Theme',
				text: `Ficha de la extensión "Coffee Dark Theme" (color-syntax.coffee-color-dark, v0.1.1) en el Marketplace de VSCode,
 publicada por SkyRider: tema inspirado en el color del café + Color Material, diseñado para html, css, TS, JS, dart, md,
 json y más, se ocultan los menus y los botones del sidebar, pero se activan y muestran al hacer hover.`
			},
			'coffe-dark-theme_vscode-03': {
				title: 'Tema aplicado a LESS',
				text: `Tema Coffee Dark en VSCode editando un archivo LESS: explorador de archivos con indicadores de
 cambios, selectores en rojo, propiedades y valores diferenciados por color, y barra de actividad con acento verde azulado, tambien un boton
 con color amarillo del scope o codigo minimizado.`
			},
			'coffe-dark-theme_vscode-04': {
				title: 'Tema aplicado a HTML',
				text: `Tema Coffee Dark en VSCode editando el index.html: etiquetas en rojo coral, atributos en naranja,
 valores en verde y guías de indentación, con la ruta de navegación (breadcrumbs) y el explorador integrados a la paleta.`
			},
			'coffe-dark-theme_vscode-05': {
				title: 'Tema aplicado a TypeScript (Angular)',
				text: `Tema Coffee Dark en VSCode editando un servicio Angular de un proyecto: métodos, tipos,
 plantillas de texto y comentarios con colores diferenciados, y el explorador del proyecto con sus módulos, servicios y
 estilos.`
			}
		},
		'Modal_niveles-servicios-precios': {
			'niveles-de-servicios-y-precios': {
				title: 'Niveles de Servicios y Precios',
				text: `Diseño web (mockup) de tarjetas de planes de suscripción: Interfaz comparativa de 3 planes Standard (S/ 50/mes),
 Premium (S/ 120/mes) y Team (S/ 250/mes) con funcionalidades organizadas por categorías, indicadores de alcance y botones de
 conversión. Se destaca el plan Premium mediante jerarquía visual y énfasis gráfico, facilitando la comparación de beneficios y la
 elección del plan adecuado.`
			},
			'niveles-de-servicios-y-precios2': {
				title: 'Planes por monedas (QuizCat)',
				text: `Diseño de tarjetas de planes basados en monedas para exámenes: Free Plan (10 monedas al mes y hasta 5 exámenes),
 Pro Plan (S/ 9.99 al mes, 1050 monedas iniciales, +50 mensuales y hasta 20 exámenes, marcado como popular y con tema oscuro)
 y Flexible Plan (S/ 12.99 por 1000 monedas, sin suscripción). Cada plan muestra indicadores, lista de beneficios y un botón
 de acción.`
			}
		},
		'Modal_pestanhas-design': {
			'pestanhas-design': {
				title: 'Pestañas Design',
				text: `Diseño web (mockup) de componente de pestañas: cuatro secciones (Resumen, Docencia, Publicaciones e
 Investigaciones) con pestañas en gris suave y la pestaña activa resaltada en amarillo con un pequeño indicador triangular
 hacia el contenido, para que el usuario ubique en qué sección está.`
			}
		},
		'Modal_timeline-avance': {
			'timeline-avance': {
				title: 'Timeline de avance del proyecto',
				text: `Diseño de infografía del avance de un proyecto de investigación sobre la detección automática de phytophthora
 palmivora en frutos de cacao mediante redes neuronales convolucionales cuánticas (QCNN). Las etapas Prospecting,
 Qualification, Agreement y Closing se representan con nubes de burbujas que ganan color y definición a medida que avanza
 el proceso: fuentes de datos (IEEE, Scopus, Sciencie), formatos de imagen (CSV, PNG, TIF) y modelos (híbrido, resnet18,
 mobilnet), cada etapa con su cifra y su variación trimestral.`
			}
		},
		'Modal_timeline-secuencial-app-mobil': {
			'timeline-secuencial-app-mobil': {
				title: 'Timeline secuencial (app móvil)',
				text: `Diseño UX/UI móvil de una ruta de aprendizaje (Roadmap) en forma de línea de tiempo vertical sinuosa: cada
 lección (Introducción a HTML5, Etiquetas semánticas, Formularios HTML5, Multimedia y APIs) es una card alternada a
 izquierda y derecha, con ícono, descripción breve, duración y estado "Completado", unidas por nodos de verificación.
 Incluye barra de navegación inferior con Home, Dictionary, Quiz y Roadmap.`
			}
		},
		'Modal_card-registro-usuarios': {
			'card-registro-usuarios': {
				title: 'Card Registro Usuarios',
				text: `Diseño web de "Sistema de Gestión de Empleados": formulario para registrar empleados (nombre, apellido, DNI,
 género y estado civil) con validación y mensaje de confirmación, y listado con búsqueda por nombre, apellido o DNI,
 filtros por género y estado, contador de resultados y tabla con acciones de editar y eliminar por fila.`
			}
		},
		'Modal_dashboard-ui-ux-sgr': {
			'dashboard-ui-ux-SGR': {
				title: 'Dashboard UI/UX SGR',
				text: `Diseño UI/UX de panel administrativo "Gestión de Categorías": barra lateral de navegación con íconos, cabecera
 con usuario y rol, migas de pan y acciones (nueva categoría y exportaciones). Tarjetas de indicadores (totales, activas e
 inactivas), buscador con filtro por estado y lista con alternador tabla/cards, orden, paginación y filas con estado,
 fecha y acciones de ver, editar y eliminar.`
			},
			'dashboard-ui-ux-SGE': {
				title: 'Dashboard UI/UX SGE',
				text: `Diseño UI/UX de panel de "Evaluaciones (Docente)" con la misma estructura del sistema: barra lateral, migas de
 pan, botón "Nueva evaluación" y exportaciones. Incluye buscador por trabajador con filtro por tipo, y una lista con orden,
 paginación y alternador tabla/cards, donde cada fila muestra al trabajador evaluado con su foto, documento y correo, el
 tipo de evaluación, el documento de sustento en PDF, la fecha y las acciones de ver, editar y eliminar.`
			}
		},
		'Modal_mascota-quizcat': {
			'maskota_QuizCat': {
				title: 'Mascota QuizCat',
				text: `Diseño de la mascota de la app QuizCat: un gato de estilo ilustrado con trazo grueso, orejas naranjas, ojos
 grandes de mirada desafiante, cejas marcadas y collar rojo con cascabel. Su expresión segura le da personalidad y
 refuerza la identidad visual de la app junto al logo.`
			}
		},
		'Modal_logo-quizcat': {
			'logo-QuizCat': {
				title: 'Logo QuizCat',
				text: `Diseño del logo de la app QuizCat (banco de preguntas): un gato mascota estilo "maneki-neko" de trazo grueso que
 sostiene una hoja de examen con la palabra TEST y opciones marcadas, con signo de interrogación y destellos, sobre un
 fondo ámbar con círculo amarillo. Transmite el estudio y la práctica de forma amigable.`
			}
		},
		'Modal_table-content-cards': {
			'table-content-cards': {
				title: 'Table Content Cards',
				text: `Diseño de lista con cabecera de herramientas: título "Lista de Formación Académica", selector de orden
 ascendente/descendente, alternador entre vista de tabla y de cards, selector de registros por página y contador de
 resultados. La tabla incluye selección por fila, columnas ordenables (Centro de Estudios, Carrera/Especialidad,
 Experiencia Laboral, Completitud), acciones y estado de carga.`
			}
		},
		'Modal_actions-buttons': {
			'actions-buttons': {
				title: 'Actions Buttons',
				text: `Diseño de botones de acción de exportación: tres botones con ícono para exportar a PDF (activo, resaltado en
 rojo), Excel y a vista de tabla, con bordes redondeados y estados diferenciados por color.`
			},
			'actions-buttons-2': {
				title: 'Actions Buttons: formulario',
				text: `Barra de acciones de un formulario: botón secundario "Cancelar", acción "Verificar" con ícono de check y botón
 principal "Guardar" con ícono de disquete, mostrado en gris para indicar el estado deshabilitado hasta que el formulario
 sea válido.`
			}
		},
		'Modal_design-cv': {
			'design-cv': {
				title: 'Design CV',
				text: `Diseño web de perfil de trabajador (hoja de vida): columna lateral con foto, datos personales y de contacto, y
 panel principal con Experiencia laboral y Formación académica. Pestañas (Resumen, Docencia, Publicaciones,
 Investigaciones), botones de exportación a Word, PDF y Excel, y un aviso informativo cuando faltan datos laborales.`
			}
		},
		'Modal_web-diagrama-gantt': {
			'json-generate-diagrama-gantt-min': {
				title: 'Diagrama de Gantt desde JSON',
				text: 'Plantilla que genera un diagrama de Gantt a partir de un archivo JSON, enfocada en el comportamiento del calendario, la alineación visual de las barras y la compactación estructural por fechas, hitos y tareas secuenciales.'
			}
		}
	};

	/** Devuelve { title, text } para la imagen del modal, o null si no hay datos. */
	static get(modalId, imgId) {
		const modal = ModalDescriptions.DATA[modalId];
		if (!modal) return null;
		return modal[imgId] || modal._default || null;
	}
}
