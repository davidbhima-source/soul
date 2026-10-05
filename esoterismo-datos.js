/* Datos del mapa del esoterismo occidental (camino Ocultismo).
   Nodos (tradiciones, raíces, síntesis e ideas), aristas tipificadas y conceptos
   transversales. Para editar el mapa basta con cambiar este archivo: la página
   esoterismo.html lo dibuja tal cual. */
window.MAPA_ESOTERISMO = {
 "meta": {
  "titulo": "Mapa del esoterismo occidental y sus raíces",
  "version": "1.0",
  "idioma": "es",
  "notas": [
   "'Sofismo' se interpreta como Sufismo (mística islámica).",
   "anio_orden es un año aproximado para ordenar nodos en una línea de tiempo; los años negativos son antes de Cristo.",
   "capa: 0 = raíces, 1 = tradiciones antiguas y medievales, 2 = síntesis renacentista, 3 = síntesis modernas.",
   "Las aristas distinguen transmisión histórica documentada de vínculos legendarios o especulativos: esa diferencia es central para responder si todas comparten 'el mismo origen'."
  ],
  "tipos_de_arista": {
   "documentado": "Transmisión o influencia demostrada con fuentes históricas.",
   "debatido": "Influencia plausible que los especialistas discuten.",
   "legendario": "Vínculo que la propia tradición afirma en sus mitos fundacionales, sin respaldo histórico.",
   "especulativo": "Tesis moderna de un autor concreto, con poco respaldo académico.",
   "intercambio": "Influencia en sentido inverso o mutua."
  },
  "grupos": {
   "raiz": "Contexto cultural o religioso de origen",
   "tradicion": "Corriente esotérica o mística con identidad propia",
   "sintesis": "Movimiento que fusiona deliberadamente varias tradiciones",
   "idea": "Concepto o tesis que organiza la narrativa del conjunto"
  },
  "caracteristicas_faivre": {
   "fuente": "Antoine Faivre, L'ésotérisme (1992). Marco académico más usado para definir el esoterismo occidental.",
   "esenciales": [
    {
     "nombre": "Correspondencias",
     "explicacion": "Todo el universo está ligado por relaciones simbólicas: astros, metales, órganos, letras."
    },
    {
     "nombre": "Naturaleza viviente",
     "explicacion": "La naturaleza está animada, llena de fuerzas y presencias, y puede leerse como un libro."
    },
    {
     "nombre": "Imaginación y mediaciones",
     "explicacion": "La imaginación es un órgano de conocimiento; ángeles, símbolos y rituales median entre niveles de realidad."
    },
    {
     "nombre": "Experiencia de transmutación",
     "explicacion": "El conocimiento transforma a quien lo adquiere, como el plomo en oro."
    }
   ],
   "secundarias": [
    {
     "nombre": "Práctica de la concordancia",
     "explicacion": "Buscar un denominador común entre tradiciones distintas."
    },
    {
     "nombre": "Transmisión",
     "explicacion": "El saber pasa de maestro a discípulo mediante iniciación."
    }
   ]
  },
  "conceptos_transversales": [
   {
    "id": "macro_micro",
    "nombre": "Correspondencia macrocosmos–microcosmos",
    "explicacion": "El ser humano es un universo en miniatura; lo que ocurre arriba se refleja abajo.",
    "nodos": [
     "hermetismo",
     "alquimia",
     "cabala",
     "rosacruz",
     "golden_dawn",
     "teosofia"
    ]
   },
   {
    "id": "emanacion",
    "nombre": "Emanación desde lo Uno",
    "explicacion": "La realidad brota por grados de un principio único e inefable, y el alma puede remontar ese camino.",
    "nodos": [
     "neoplatonismo",
     "hermetismo",
     "cabala",
     "sufismo",
     "teosofia"
    ],
    "equivalencias": {
     "neoplatonismo": "Lo Uno → Intelecto → Alma",
     "cabala": "Ein Sof → Sefirot",
     "sufismo": "Ser único que se manifiesta (Ibn Arabi)",
     "hermetismo": "Nous creador (Poimandres)"
    }
   },
   {
    "id": "hombre_perfecto",
    "nombre": "Hombre primordial o perfecto",
    "explicacion": "Un arquetipo humano cósmico que contiene todos los atributos divinos.",
    "nodos": [
     "hermetismo",
     "cabala",
     "sufismo"
    ],
    "equivalencias": {
     "hermetismo": "Anthropos (Poimandres)",
     "cabala": "Adam Kadmon",
     "sufismo": "al-Insan al-Kamil"
    }
   },
   {
    "id": "transmutacion",
    "nombre": "Transmutación o regeneración interior",
    "explicacion": "El trabajo espiritual transforma la naturaleza del practicante.",
    "nodos": [
     "alquimia",
     "hermetismo",
     "sufismo",
     "rosacruz",
     "masoneria"
    ],
    "equivalencias": {
     "alquimia": "Plomo → oro, Gran Obra",
     "hermetismo": "Regeneración (Tratado XIII)",
     "sufismo": "Fana y baqa",
     "masoneria": "Piedra bruta → piedra cúbica"
    }
   },
   {
    "id": "muerte_iniciatica",
    "nombre": "Muerte y renacimiento iniciático",
    "explicacion": "El iniciado muere simbólicamente para renacer transformado.",
    "nodos": [
     "masoneria",
     "rosacruz",
     "alquimia",
     "golden_dawn"
    ],
    "equivalencias": {
     "masoneria": "Muerte y alzamiento de Hiram Abiff",
     "rosacruz": "Tumba de Christian Rosenkreuz",
     "alquimia": "Nigredo (putrefacción)"
    }
   },
   {
    "id": "letras_sagradas",
    "nombre": "Poder de las letras y los nombres",
    "explicacion": "Las letras de una lengua sagrada son fuerzas creadoras y tienen valor numérico.",
    "nodos": [
     "mistica_judia",
     "cabala",
     "sufismo",
     "golden_dawn"
    ],
    "equivalencias": {
     "cabala": "Gematría, 22 letras hebreas",
     "sufismo": "Ilm al-huruf (ciencia de las letras)",
     "golden_dawn": "22 letras ↔ 22 arcanos mayores del tarot"
    }
   },
   {
    "id": "maestros_ocultos",
    "nombre": "Maestros ocultos y transmisión secreta",
    "explicacion": "Una jerarquía invisible de sabios guía la historia y autoriza a la orden.",
    "nodos": [
     "rosacruz",
     "masoneria",
     "golden_dawn",
     "teosofia"
    ],
    "equivalencias": {
     "rosacruz": "Hermanos invisibles",
     "masoneria": "Superiores Desconocidos (Estricta Observancia, s. XVIII)",
     "golden_dawn": "Anna Sprengel y los Jefes Secretos",
     "teosofia": "Mahatmas del Tíbet"
    }
   }
  ]
 },
 "nodes": [
  {
   "id": "egipto_helenistico",
   "label": "Egipto helenístico",
   "grupo": "raiz",
   "capa": 0,
   "anio_orden": -300,
   "periodo": "s. IV a.C. – s. IV d.C.",
   "region": "Alejandría, Egipto",
   "descripcion": "Crisol donde se mezclaron religión egipcia, filosofía griega, judaísmo y cultos orientales. De aquí salen el Hermetismo, la alquimia greco-egipcia y la formación de Plotino.",
   "conceptos_clave": [
    {
     "nombre": "Sincretismo Thot–Hermes",
     "explicacion": "El dios egipcio de la escritura y la sabiduría se identificó con el Hermes griego, origen de 'Hermes Trismegisto'."
    },
    {
     "nombre": "Gnosis",
     "explicacion": "Conocimiento salvador y directo de lo divino, común a hermetistas y gnósticos de la época."
    }
   ],
   "figuras_clave": [],
   "textos_clave": []
  },
  {
   "id": "neoplatonismo",
   "label": "Neoplatonismo",
   "grupo": "raiz",
   "capa": 0,
   "anio_orden": 250,
   "periodo": "s. III – s. VI",
   "region": "Alejandría, Roma, Atenas",
   "descripcion": "Reinterpretación mística de Platón. Su esquema de emanación y retorno al Uno es el esqueleto filosófico que comparten casi todas las corrientes de este mapa.",
   "conceptos_clave": [
    {
     "nombre": "Lo Uno",
     "explicacion": "Principio absoluto, más allá del ser y del pensamiento."
    },
    {
     "nombre": "Emanación",
     "explicacion": "Del Uno brota el Intelecto (Nous), de este el Alma y de esta el mundo material."
    },
    {
     "nombre": "Retorno",
     "explicacion": "El alma puede ascender por contemplación hasta la unión con el Uno."
    },
    {
     "nombre": "Teúrgia",
     "explicacion": "Ritual para unirse a lo divino, defendido por Jámblico; antecedente de la magia ceremonial."
    }
   ],
   "figuras_clave": [
    {
     "nombre": "Plotino",
     "fechas": "c. 204–270",
     "rol": "Fundador; nacido en Egipto, discípulo de Amonio Saccas en Alejandría"
    },
    {
     "nombre": "Porfirio",
     "fechas": "c. 234–305",
     "rol": "Editor de Plotino"
    },
    {
     "nombre": "Jámblico",
     "fechas": "c. 245–325",
     "rol": "Teúrgia, De los misterios egipcios"
    },
    {
     "nombre": "Proclo",
     "fechas": "412–485",
     "rol": "Sistematizador final"
    }
   ],
   "textos_clave": [
    {
     "titulo": "Enéadas",
     "autor": "Plotino (ed. Porfirio)",
     "fecha": "c. 270"
    }
   ]
  },
  {
   "id": "mistica_judia",
   "label": "Mística judía antigua",
   "grupo": "raiz",
   "capa": 0,
   "anio_orden": 100,
   "periodo": "s. I – s. X",
   "region": "Palestina, Babilonia",
   "descripcion": "Especulación sobre el carro divino de Ezequiel, los palacios celestiales y los nombres de Dios. Es la base sobre la que se construirá la Cábala medieval.",
   "conceptos_clave": [
    {
     "nombre": "Merkavá",
     "explicacion": "Ascenso visionario al trono-carro de Dios."
    },
    {
     "nombre": "Nombres divinos",
     "explicacion": "El Nombre de cuatro letras (Tetragrámaton) y otros nombres como fuerzas reales."
    }
   ],
   "figuras_clave": [],
   "textos_clave": [
    {
     "titulo": "Literatura de Hejalot",
     "autor": "Anónimos",
     "fecha": "s. III–VII"
    }
   ]
  },
  {
   "id": "islam",
   "label": "Islam",
   "grupo": "raiz",
   "capa": 0,
   "anio_orden": 632,
   "periodo": "s. VII en adelante",
   "region": "Arabia, Persia, Al-Ándalus",
   "descripcion": "Además de originar el Sufismo, el mundo islámico tradujo y preservó la filosofía griega, el Hermetismo y la alquimia, y luego los transmitió a Europa vía Al-Ándalus y Sicilia.",
   "conceptos_clave": [
    {
     "nombre": "Movimiento de traducción",
     "explicacion": "Traducción masiva de textos griegos al árabe en Bagdad, especialmente en la Casa de la Sabiduría (s. IX)."
    },
    {
     "nombre": "Hermes = Idris",
     "explicacion": "La tradición islámica identificó a Hermes con el profeta Idris (el Enoc bíblico)."
    }
   ],
   "figuras_clave": [],
   "textos_clave": [
    {
     "titulo": "Teología de Aristóteles",
     "autor": "Anónimo",
     "fecha": "s. IX",
     "nota": "En realidad es una paráfrasis árabe de las Enéadas de Plotino; así entró el neoplatonismo al pensamiento islámico."
    }
   ]
  },
  {
   "id": "oriente",
   "label": "Hinduismo y budismo",
   "grupo": "raiz",
   "capa": 0,
   "anio_orden": -800,
   "periodo": "Upanishads desde c. s. VIII a.C.",
   "region": "India, Tíbet",
   "descripcion": "Prácticamente ausente del esoterismo occidental hasta el siglo XIX, cuando la Teosofía lo incorporó y lo fusionó con el Hermetismo y la Cábala.",
   "conceptos_clave": [
    {
     "nombre": "Karma y reencarnación",
     "explicacion": "Ley de causa moral y ciclo de renacimientos."
    },
    {
     "nombre": "Atman–Brahman",
     "explicacion": "Identidad última entre el yo profundo y el absoluto (Vedanta)."
    }
   ],
   "figuras_clave": [],
   "textos_clave": [
    {
     "titulo": "Upanishads",
     "autor": "Anónimos",
     "fecha": "c. s. VIII–III a.C."
    },
    {
     "titulo": "Bhagavad Gita",
     "autor": "Anónimo",
     "fecha": "c. s. II a.C."
    }
   ]
  },
  {
   "id": "hermetismo",
   "label": "Hermetismo",
   "grupo": "tradicion",
   "capa": 1,
   "anio_orden": 200,
   "periodo": "s. II–III (textos); revivido en el Renacimiento",
   "region": "Egipto helenístico",
   "descripcion": "Conjunto de textos atribuidos a Hermes Trismegisto, figura mítica que fusiona a Hermes y Thot. Enseña que el ser humano puede conocer a Dios porque comparte su naturaleza divina. Se suele distinguir un hermetismo filosófico (Corpus Hermeticum) y uno técnico (astrología, alquimia, magia).",
   "conceptos_clave": [
    {
     "nombre": "Nous",
     "explicacion": "La Mente divina, de la que el ser humano participa."
    },
    {
     "nombre": "Anthropos",
     "explicacion": "El Hombre primordial, creado a imagen de Dios, que cae en la naturaleza (Poimandres)."
    },
    {
     "nombre": "Regeneración",
     "explicacion": "Renacimiento espiritual por la gnosis (Tratado XIII)."
    },
    {
     "nombre": "Como es arriba, es abajo",
     "explicacion": "Principio de correspondencia, formulado en la Tabla Esmeralda."
    }
   ],
   "figuras_clave": [
    {
     "nombre": "Hermes Trismegisto",
     "fechas": "mítico",
     "rol": "Autor atribuido; 'tres veces grande'"
    },
    {
     "nombre": "Marsilio Ficino",
     "fechas": "1433–1499",
     "rol": "Traductor al latín del Corpus (1463)"
    },
    {
     "nombre": "Giordano Bruno",
     "fechas": "1548–1600",
     "rol": "Hermetista radical, quemado por la Inquisición"
    },
    {
     "nombre": "Isaac Casaubon",
     "fechas": "1559–1614",
     "rol": "Demostró en 1614 que los textos eran de la era cristiana y no del Egipto faraónico"
    }
   ],
   "textos_clave": [
    {
     "titulo": "Corpus Hermeticum",
     "autor": "Anónimos atribuidos a Hermes",
     "fecha": "s. II–III",
     "nota": "Colección de tratados griegos; el primero es el Poimandres."
    },
    {
     "titulo": "Asclepio",
     "autor": "Anónimo",
     "fecha": "s. III–IV",
     "nota": "Sobrevivió en latín; habla de animar estatuas de dioses."
    },
    {
     "titulo": "Tabla Esmeralda",
     "autor": "Atribuida a Hermes",
     "fecha": "versión árabe más antigua c. s. VIII–IX",
     "nota": "Texto breve y críptico, fundamental para la alquimia; traducido al latín en el s. XII."
    },
    {
     "titulo": "El Kybalion",
     "autor": "'Tres Iniciados' (atribuido a William Walker Atkinson)",
     "fecha": "1908",
     "nota": "Obra moderna del movimiento estadounidense Nuevo Pensamiento, no un texto hermético antiguo. Sus siete principios no aparecen como tales en el Corpus Hermeticum, aunque el de Correspondencia se inspira en la Tabla Esmeralda y el de Mentalismo resuena con la doctrina del Nous.",
     "siete_principios": [
      {
       "nombre": "Mentalismo",
       "enunciado": "El Todo es Mente; el universo es mental."
      },
      {
       "nombre": "Correspondencia",
       "enunciado": "Como es arriba, es abajo; como es abajo, es arriba."
      },
      {
       "nombre": "Vibración",
       "enunciado": "Nada está inmóvil; todo se mueve y vibra."
      },
      {
       "nombre": "Polaridad",
       "enunciado": "Todo es doble; los opuestos son lo mismo en distinto grado."
      },
      {
       "nombre": "Ritmo",
       "enunciado": "Todo fluye y refluye; la oscilación del péndulo es universal."
      },
      {
       "nombre": "Causa y efecto",
       "enunciado": "Toda causa tiene su efecto; el azar es una ley no reconocida."
      },
      {
       "nombre": "Género",
       "enunciado": "Todo tiene principios masculino y femenino."
      }
     ]
    }
   ],
   "simbolos": [
    "Caduceo",
    "Ouroboros"
   ],
   "advertencia_historica": "La creencia renacentista de que Hermes era contemporáneo de Moisés sostenía la idea de una sabiduría primordial única. Casaubon la refutó en 1614, pero la idea siguió viva en los círculos esotéricos."
  },
  {
   "id": "alquimia",
   "label": "Alquimia",
   "grupo": "tradicion",
   "capa": 1,
   "anio_orden": 300,
   "periodo": "s. I – s. XVIII",
   "region": "Egipto → mundo islámico → Europa latina",
   "descripcion": "Arte de transformar la materia, y en su lectura espiritual, al practicante. Durante siglos fue a la vez protoquímica de laboratorio y disciplina mística; ambas dimensiones no se separaron claramente hasta los siglos XVII y XVIII.",
   "conceptos_clave": [
    {
     "nombre": "Piedra filosofal",
     "explicacion": "Sustancia capaz de transmutar metales en oro y de curar; símbolo de la perfección."
    },
    {
     "nombre": "Gran Obra (Opus Magnum)",
     "explicacion": "Proceso en etapas: nigredo (ennegrecimiento, muerte), albedo (blanqueamiento, purificación), citrinitas (amarilleo) y rubedo (enrojecimiento, consumación)."
    },
    {
     "nombre": "Solve et coagula",
     "explicacion": "Disolver y volver a coagular: descomponer para recomponer en un estado superior."
    },
    {
     "nombre": "Azufre y mercurio",
     "explicacion": "Teoría árabe de que todos los metales se componen de estos dos principios."
    },
    {
     "nombre": "Tria prima",
     "explicacion": "Paracelso añadió la sal: azufre (alma), mercurio (espíritu), sal (cuerpo)."
    }
   ],
   "figuras_clave": [
    {
     "nombre": "María la Judía",
     "fechas": "s. I–III",
     "rol": "Inventora atribuida del baño María"
    },
    {
     "nombre": "Zósimo de Panópolis",
     "fechas": "fl. c. 300",
     "rol": "Primer autor alquímico conocido con escritos extensos"
    },
    {
     "nombre": "Jabir ibn Hayyan",
     "fechas": "s. VIII (corpus atribuido s. IX–X)",
     "rol": "Teoría azufre-mercurio; nombre latinizado como Geber"
    },
    {
     "nombre": "Al-Razi",
     "fechas": "865–925",
     "rol": "Alquimista y médico persa, más experimental"
    },
    {
     "nombre": "Paracelso",
     "fechas": "1493–1541",
     "rol": "Aplicó la alquimia a la medicina (iatroquímica)"
    },
    {
     "nombre": "Isaac Newton",
     "fechas": "1643–1727",
     "rol": "Escribió más de un millón de palabras sobre alquimia"
    },
    {
     "nombre": "Carl Gustav Jung",
     "fechas": "1875–1961",
     "rol": "Reinterpretó la alquimia como proceso psicológico de individuación"
    }
   ],
   "textos_clave": [
    {
     "titulo": "Turba Philosophorum",
     "autor": "Anónimo",
     "fecha": "original árabe c. 900",
     "nota": "Diálogo de filósofos; muy influyente en latín."
    },
    {
     "titulo": "Rosarium Philosophorum",
     "autor": "Anónimo",
     "fecha": "1550",
     "nota": "Serie de grabados que Jung analizó a fondo."
    },
    {
     "titulo": "Atalanta Fugiens",
     "autor": "Michael Maier",
     "fecha": "1617",
     "nota": "Emblemas con música; Maier fue defensor de los rosacruces."
    },
    {
     "titulo": "Mutus Liber",
     "autor": "Anónimo",
     "fecha": "1677",
     "nota": "'Libro mudo': solo imágenes."
    },
    {
     "titulo": "Psicología y alquimia",
     "autor": "C. G. Jung",
     "fecha": "1944",
     "nota": "Lectura moderna, no tradicional."
    }
   ],
   "simbolos": [
    "Ouroboros",
    "Rebis (andrógino)",
    "Sol y Luna",
    "León verde",
    "Pelícano"
   ],
   "advertencia_historica": "La lectura puramente espiritual o psicológica de la alquimia es en buena medida del siglo XIX y XX. Los alquimistas históricos también hacían experimentos reales."
  },
  {
   "id": "cabala",
   "label": "Cábala",
   "grupo": "tradicion",
   "capa": 1,
   "anio_orden": 1180,
   "periodo": "s. XII en adelante (con antecedentes antiguos)",
   "region": "Provenza, Castilla, Safed",
   "descripcion": "Tradición mística judía que describe cómo el Dios infinito se manifiesta en diez atributos (Sefirot) y cómo el ser humano, mediante la Torá y los mandamientos, participa en la reparación del mundo.",
   "conceptos_clave": [
    {
     "nombre": "Ein Sof",
     "explicacion": "'Sin fin': Dios en su aspecto incognoscible."
    },
    {
     "nombre": "Sefirot",
     "explicacion": "Diez emanaciones o atributos divinos: Kéter, Jojmá, Biná, Jésed, Guevurá, Tiféret, Nétsaj, Hod, Yesod y Maljut."
    },
    {
     "nombre": "Árbol de la Vida",
     "explicacion": "Diagrama de las 10 Sefirot unidas por 22 senderos, uno por cada letra hebrea."
    },
    {
     "nombre": "Cuatro mundos",
     "explicacion": "Atzilut (emanación), Beriá (creación), Yetzirá (formación) y Asiyá (acción)."
    },
    {
     "nombre": "Adam Kadmon",
     "explicacion": "Hombre primordial, estructura cósmica de las Sefirot."
    },
    {
     "nombre": "Tzimtzum, Shevirá y Tikún",
     "explicacion": "Doctrina de Luria: Dios se contrae para hacer espacio, los recipientes de luz se rompen y el ser humano repara el mundo."
    },
    {
     "nombre": "Gematría",
     "explicacion": "Interpretación de palabras según el valor numérico de sus letras."
    }
   ],
   "figuras_clave": [
    {
     "nombre": "Isaac el Ciego",
     "fechas": "c. 1160–1235",
     "rol": "Cabalista de Provenza"
    },
    {
     "nombre": "Abraham Abulafia",
     "fechas": "1240–c. 1291",
     "rol": "Cábala extática, meditación con letras"
    },
    {
     "nombre": "Moisés de León",
     "fechas": "c. 1240–1305",
     "rol": "Redactor del Zohar"
    },
    {
     "nombre": "Moisés Cordovero",
     "fechas": "1522–1570",
     "rol": "Sistematizador en Safed"
    },
    {
     "nombre": "Isaac Luria",
     "fechas": "1534–1572",
     "rol": "Cábala luriánica, la más influyente"
    },
    {
     "nombre": "Gershom Scholem",
     "fechas": "1897–1982",
     "rol": "Fundador del estudio académico de la Cábala"
    }
   ],
   "textos_clave": [
    {
     "titulo": "Sefer Yetzirah (Libro de la Formación)",
     "autor": "Anónimo",
     "fecha": "entre s. II y VI (datación discutida)",
     "nota": "Creación a través de 10 números y 22 letras."
    },
    {
     "titulo": "Sefer ha-Bahir",
     "autor": "Anónimo",
     "fecha": "c. 1180, Provenza",
     "nota": "Primer texto propiamente cabalístico."
    },
    {
     "titulo": "Zohar (Libro del Esplendor)",
     "autor": "Moisés de León (atribuido a Shimon bar Yojai, s. II)",
     "fecha": "c. 1280–1290, Castilla",
     "nota": "Comentario místico de la Torá; obra central de la Cábala."
    }
   ],
   "variantes": [
    {
     "nombre": "Cábala judía (Kabbalah)",
     "descripcion": "La tradición original, inseparable de la práctica religiosa judía."
    },
    {
     "nombre": "Cábala cristiana",
     "descripcion": "Desde Pico della Mirandola (1486): usa la Cábala para demostrar verdades cristianas."
    },
    {
     "nombre": "Cábala hermética (Qabalah)",
     "descripcion": "Versión ocultista del s. XIX, central en la Golden Dawn; vincula el Árbol con el tarot y la astrología."
    }
   ],
   "simbolos": [
    "Árbol de la Vida",
    "Tetragrámaton (YHVH)"
   ],
   "advertencia_historica": "La Cábala hermética de los ocultistas es una reelaboración muy alejada de la Cábala judía, que los propios cabalistas judíos no reconocen como suya."
  },
  {
   "id": "sufismo",
   "label": "Sufismo",
   "grupo": "tradicion",
   "capa": 1,
   "anio_orden": 750,
   "periodo": "s. VIII en adelante",
   "region": "Irak, Persia, Anatolia, Al-Ándalus, Norte de África",
   "descripcion": "Dimensión mística del Islam. Busca la unión amorosa con Dios mediante la purificación del ego, el recuerdo constante de Dios y la guía de un maestro dentro de una orden (tariqa).",
   "conceptos_clave": [
    {
     "nombre": "Tariqa",
     "explicacion": "Camino u orden sufí, con una cadena de maestros que se remonta al Profeta."
    },
    {
     "nombre": "Sheij y murid",
     "explicacion": "Maestro y discípulo."
    },
    {
     "nombre": "Dhikr",
     "explicacion": "Recuerdo de Dios por repetición de sus nombres."
    },
    {
     "nombre": "Fana y baqa",
     "explicacion": "Aniquilación del ego en Dios y subsistencia en Él."
    },
    {
     "nombre": "Maqamat y ahwal",
     "explicacion": "Estaciones (logros estables) y estados (dones pasajeros) del camino."
    },
    {
     "nombre": "Insan al-Kamil",
     "explicacion": "El Hombre Perfecto, espejo completo de los atributos divinos."
    },
    {
     "nombre": "Wahdat al-wujud",
     "explicacion": "'Unidad del ser', doctrina asociada a Ibn Arabi (el término lo acuñaron sus seguidores)."
    },
    {
     "nombre": "Ilm al-huruf",
     "explicacion": "Ciencia esotérica de las letras árabes y sus valores numéricos."
    }
   ],
   "figuras_clave": [
    {
     "nombre": "Rabia al-Adawiyya",
     "fechas": "c. 714–801",
     "rol": "Mística del amor puro a Dios"
    },
    {
     "nombre": "Al-Hallaj",
     "fechas": "858–922",
     "rol": "Ejecutado tras decir 'Yo soy la Verdad'"
    },
    {
     "nombre": "Al-Ghazali",
     "fechas": "1058–1111",
     "rol": "Reconcilió el sufismo con la ortodoxia"
    },
    {
     "nombre": "Ibn Arabi",
     "fechas": "1165–1240",
     "rol": "Nacido en Murcia; el gran metafísico del sufismo"
    },
    {
     "nombre": "Farid al-Din Attar",
     "fechas": "c. 1145–1221",
     "rol": "Poeta, La conferencia de los pájaros"
    },
    {
     "nombre": "Rumi",
     "fechas": "1207–1273",
     "rol": "Poeta; inspiró la orden Mevlevi de los derviches giróvagos"
    },
    {
     "nombre": "Inayat Khan",
     "fechas": "1882–1927",
     "rol": "Llevó un 'sufismo universal' a Occidente desde 1910"
    },
    {
     "nombre": "Idries Shah",
     "fechas": "1924–1996",
     "rol": "Popularizador; atribuyó raíces sufíes a la Masonería y a otras corrientes"
    }
   ],
   "textos_clave": [
    {
     "titulo": "Masnavi",
     "autor": "Rumi",
     "fecha": "s. XIII"
    },
    {
     "titulo": "La conferencia de los pájaros",
     "autor": "Attar",
     "fecha": "1177"
    },
    {
     "titulo": "Los engarces de la sabiduría (Fusus al-Hikam)",
     "autor": "Ibn Arabi",
     "fecha": "1229"
    },
    {
     "titulo": "Los sufíes",
     "autor": "Idries Shah",
     "fecha": "1964",
     "nota": "Obra moderna y controvertida."
    }
   ],
   "simbolos": [
    "Danza giratoria (sama)",
    "Ney (flauta de caña)"
   ],
   "advertencia_historica": "El sufismo es parte integral del Islam, no una religión aparte. El 'sufismo universal' desligado del Islam es una adaptación occidental del siglo XX. Es la corriente con menos conexión histórica directa con las demás del mapa."
  },
  {
   "id": "renacimiento",
   "label": "Renacimiento florentino",
   "grupo": "sintesis",
   "capa": 2,
   "anio_orden": 1463,
   "periodo": "s. XV – XVI",
   "region": "Florencia y Europa",
   "descripcion": "Momento en que Hermetismo, neoplatonismo, Cábala y magia se fusionan por primera vez en un solo proyecto intelectual cristiano. Es el verdadero punto de nacimiento del esoterismo occidental como conjunto.",
   "conceptos_clave": [
    {
     "nombre": "Prisca theologia",
     "explicacion": "Teología antigua revelada a sabios paganos que anticipa el cristianismo."
    },
    {
     "nombre": "Magia natural",
     "explicacion": "Uso de las simpatías ocultas de la naturaleza, considerado lícito."
    },
    {
     "nombre": "Dignidad del hombre",
     "explicacion": "El ser humano como ser sin naturaleza fija, capaz de ascender o descender."
    }
   ],
   "figuras_clave": [
    {
     "nombre": "Cosme de Médici",
     "fechas": "1389–1464",
     "rol": "Pidió a Ficino traducir el Corpus Hermeticum antes que a Platón"
    },
    {
     "nombre": "Marsilio Ficino",
     "fechas": "1433–1499",
     "rol": "Traductor de Hermes y Platón"
    },
    {
     "nombre": "Giovanni Pico della Mirandola",
     "fechas": "1463–1494",
     "rol": "Fundador de la Cábala cristiana"
    },
    {
     "nombre": "Johannes Reuchlin",
     "fechas": "1455–1522",
     "rol": "Cábala cristiana en Alemania"
    },
    {
     "nombre": "Heinrich Cornelius Agrippa",
     "fechas": "1486–1535",
     "rol": "Síntesis de la magia renacentista"
    },
    {
     "nombre": "John Dee",
     "fechas": "1527–1608",
     "rol": "Matemático y mago de la corte isabelina; lenguaje enoquiano"
    }
   ],
   "textos_clave": [
    {
     "titulo": "Pimander",
     "autor": "Ficino (trad.)",
     "fecha": "1471 (traducido en 1463)"
    },
    {
     "titulo": "900 Tesis y Discurso sobre la dignidad del hombre",
     "autor": "Pico della Mirandola",
     "fecha": "1486"
    },
    {
     "titulo": "De arte cabalistica",
     "autor": "Reuchlin",
     "fecha": "1517"
    },
    {
     "titulo": "De occulta philosophia",
     "autor": "Agrippa",
     "fecha": "1533"
    },
    {
     "titulo": "Monas Hieroglyphica",
     "autor": "John Dee",
     "fecha": "1564"
    }
   ],
   "advertencia_historica": "La tesis de Frances Yates (1964), que hacía del hermetismo un motor de la revolución científica, fue muy influyente y hoy está muy matizada por los historiadores."
  },
  {
   "id": "philosophia_perennis",
   "label": "Philosophia perennis",
   "grupo": "idea",
   "capa": 2,
   "anio_orden": 1540,
   "periodo": "s. XV hasta hoy",
   "region": "Europa",
   "descripcion": "La idea de que todas las tradiciones espirituales derivan de una única sabiduría primordial. Es exactamente la premisa de la pregunta 'comparten el mismo origen'. Para los historiadores es una idea con una historia propia, no un hecho demostrado: las corrientes del mapa tienen raíces distintas y convergen después.",
   "conceptos_clave": [
    {
     "nombre": "Cadena de sabios",
     "explicacion": "Ficino: Hermes → Orfeo → Pitágoras → Platón, como transmisión de una misma verdad."
    },
    {
     "nombre": "Tradición primordial",
     "explicacion": "Versión del s. XX (Guénon): una revelación original degradada en las religiones históricas."
    }
   ],
   "figuras_clave": [
    {
     "nombre": "Marsilio Ficino",
     "fechas": "1433–1499",
     "rol": "Formula la prisca theologia"
    },
    {
     "nombre": "Agostino Steuco",
     "fechas": "1497–1548",
     "rol": "Acuña el término en De perenni philosophia (1540)"
    },
    {
     "nombre": "René Guénon",
     "fechas": "1886–1951",
     "rol": "Escuela tradicionalista"
    },
    {
     "nombre": "Aldous Huxley",
     "fechas": "1894–1963",
     "rol": "La filosofía perenne (1945), versión popular"
    },
    {
     "nombre": "Wouter Hanegraaff",
     "fechas": "n. 1961",
     "rol": "Historiador que estudia esta idea críticamente"
    }
   ],
   "textos_clave": [
    {
     "titulo": "De perenni philosophia",
     "autor": "Agostino Steuco",
     "fecha": "1540"
    },
    {
     "titulo": "La filosofía perenne",
     "autor": "Aldous Huxley",
     "fecha": "1945"
    }
   ]
  },
  {
   "id": "rosacruz",
   "label": "Rosacruz",
   "grupo": "sintesis",
   "capa": 3,
   "anio_orden": 1614,
   "periodo": "1614 en adelante",
   "region": "Alemania luterana",
   "descripcion": "Movimiento que nace de tres manifiestos anónimos que anunciaban una fraternidad secreta dedicada a reformar el saber y la religión. Fusiona alquimia paracelsiana, hermetismo y Cábala cristiana en clave protestante.",
   "conceptos_clave": [
    {
     "nombre": "Reforma universal",
     "explicacion": "Renovación general de la ciencia, la religión y la sociedad."
    },
    {
     "nombre": "Christian Rosenkreuz",
     "explicacion": "Fundador legendario (1378–1484) que habría aprendido de sabios en Damasco y Fez."
    },
    {
     "nombre": "La tumba",
     "explicacion": "Su sepulcro, hallado intacto 120 años después, simboliza muerte y renacimiento."
    },
    {
     "nombre": "Bodas químicas",
     "explicacion": "Alegoría alquímica de la unión de opuestos en siete días."
    }
   ],
   "figuras_clave": [
    {
     "nombre": "Johann Valentin Andreae",
     "fechas": "1586–1654",
     "rol": "Autor de Las bodas químicas; probable inspirador de los manifiestos, que llamó un 'juego'"
    },
    {
     "nombre": "Michael Maier",
     "fechas": "1568–1622",
     "rol": "Alquimista defensor de los rosacruces"
    },
    {
     "nombre": "Robert Fludd",
     "fechas": "1574–1637",
     "rol": "Médico y hermetista inglés defensor de los rosacruces"
    }
   ],
   "textos_clave": [
    {
     "titulo": "Fama Fraternitatis",
     "autor": "Anónimo",
     "fecha": "1614, Kassel"
    },
    {
     "titulo": "Confessio Fraternitatis",
     "autor": "Anónimo",
     "fecha": "1615"
    },
    {
     "titulo": "Las bodas químicas de Christian Rosenkreuz",
     "autor": "J. V. Andreae",
     "fecha": "1616, Estrasburgo"
    }
   ],
   "organizaciones_posteriores": [
    {
     "nombre": "Rosacruz de Oro (Gold- und Rosenkreuzer)",
     "fecha": "c. 1750–1770",
     "nota": "Orden alemana alquímica de base masónica."
    },
    {
     "nombre": "Societas Rosicruciana in Anglia (SRIA)",
     "fecha": "1866",
     "nota": "Solo para masones; cuna de la Golden Dawn."
    },
    {
     "nombre": "Rosicrucian Fellowship",
     "fecha": "1909",
     "nota": "Max Heindel, con fuerte influencia teosófica."
    },
    {
     "nombre": "AMORC",
     "fecha": "1915",
     "nota": "H. Spencer Lewis, EE. UU.; la más extendida hoy."
    },
    {
     "nombre": "Lectorium Rosicrucianum",
     "fecha": "1935",
     "nota": "Holanda, de orientación gnóstica."
    }
   ],
   "simbolos": [
    "Rosa sobre la cruz"
   ],
   "advertencia_historica": "No hay evidencia de que existiera una fraternidad real en 1614. Las órdenes rosacruces posteriores reivindican un linaje que no puede demostrarse."
  },
  {
   "id": "masoneria",
   "label": "Masonería",
   "grupo": "sintesis",
   "capa": 3,
   "anio_orden": 1717,
   "periodo": "logias operativas medievales; especulativa desde el s. XVII",
   "region": "Escocia e Inglaterra, luego mundial",
   "descripcion": "Fraternidad iniciática que surge de los gremios de constructores y se transforma en una sociedad filosófica que usa las herramientas de la construcción como símbolos morales. No es una doctrina ocultista en sí; el contenido esotérico varía mucho según el rito.",
   "conceptos_clave": [
    {
     "nombre": "Gran Arquitecto del Universo",
     "explicacion": "Nombre neutral para el principio creador, compatible con distintas religiones."
    },
    {
     "nombre": "Grados simbólicos",
     "explicacion": "Aprendiz, Compañero y Maestro."
    },
    {
     "nombre": "Leyenda de Hiram Abiff",
     "explicacion": "Arquitecto del Templo de Salomón asesinado y alzado; núcleo del grado de Maestro."
    },
    {
     "nombre": "Piedra bruta y piedra cúbica",
     "explicacion": "El trabajo de perfeccionarse a uno mismo."
    },
    {
     "nombre": "Templo de Salomón",
     "explicacion": "Modelo simbólico de la logia y del ser humano."
    }
   ],
   "figuras_clave": [
    {
     "nombre": "William Schaw",
     "fechas": "c. 1550–1602",
     "rol": "Sus Estatutos (1598–99) organizan las logias escocesas"
    },
    {
     "nombre": "Elias Ashmole",
     "fechas": "1617–1692",
     "rol": "Iniciado en 1646; también alquimista y admirador de los rosacruces"
    },
    {
     "nombre": "James Anderson",
     "fechas": "c. 1679–1739",
     "rol": "Constituciones de 1723"
    },
    {
     "nombre": "Albert Pike",
     "fechas": "1809–1891",
     "rol": "Llenó el Rito Escocés de Cábala y hermetismo"
    }
   ],
   "textos_clave": [
    {
     "titulo": "Manuscrito Regius",
     "autor": "Anónimo",
     "fecha": "c. 1390",
     "nota": "Documento masónico más antiguo conocido (Old Charges)."
    },
    {
     "titulo": "Constituciones de Anderson",
     "autor": "James Anderson",
     "fecha": "1723"
    },
    {
     "titulo": "Moral y dogma",
     "autor": "Albert Pike",
     "fecha": "1871"
    }
   ],
   "ritos": [
    {
     "nombre": "Rito Escocés Antiguo y Aceptado",
     "nota": "33 grados (1801); el grado 18 es Caballero Rosa-Cruz."
    },
    {
     "nombre": "Rito de York",
     "nota": "Común en el mundo anglosajón."
    },
    {
     "nombre": "Rito de Memphis-Misraim",
     "nota": "Rito 'egipcio' del s. XIX, muy cargado de esoterismo."
    }
   ],
   "simbolos": [
    "Escuadra y compás",
    "Letra G",
    "Columnas Jakin y Boaz",
    "Ojo que todo lo ve",
    "Piso ajedrezado"
   ],
   "advertencia_historica": "Los orígenes templarios o egipcios que algunos ritos reclaman no están documentados. Los historiadores sitúan el paso a la masonería especulativa en la Escocia de finales del s. XVI y el s. XVII (David Stevenson, 1988). La fecha de 1717 es la tradicional; algunos historiadores la discuten."
  },
  {
   "id": "golden_dawn",
   "label": "Golden Dawn",
   "grupo": "sintesis",
   "capa": 3,
   "anio_orden": 1888,
   "periodo": "1888 – c. 1903 (escisiones posteriores)",
   "region": "Londres",
   "descripcion": "Orden Hermética de la Aurora Dorada. Es el punto de máxima fusión del esoterismo occidental: organiza en un solo sistema de grados la Cábala hermética, la alquimia, la astrología, el tarot y la magia ceremonial. Casi todo el ocultismo del siglo XX deriva de ella.",
   "conceptos_clave": [
    {
     "nombre": "Grados en el Árbol de la Vida",
     "explicacion": "Cada grado iniciático corresponde a una Sefirá."
    },
    {
     "nombre": "Tarot y senderos",
     "explicacion": "Los 22 arcanos mayores corresponden a los 22 senderos y letras hebreas."
    },
    {
     "nombre": "Magia ceremonial",
     "explicacion": "Rituales como el Ritual Menor del Pentagrama."
    }
   ],
   "figuras_clave": [
    {
     "nombre": "Éliphas Lévi",
     "fechas": "1810–1875",
     "rol": "Precursor francés; vinculó tarot y letras hebreas"
    },
    {
     "nombre": "William Wynn Westcott",
     "fechas": "1848–1925",
     "rol": "Cofundador; masón y miembro de la SRIA"
    },
    {
     "nombre": "S. L. MacGregor Mathers",
     "fechas": "1854–1918",
     "rol": "Cofundador y autor de los rituales"
    },
    {
     "nombre": "W. B. Yeats",
     "fechas": "1865–1939",
     "rol": "Poeta, Nobel 1923; miembro activo"
    },
    {
     "nombre": "A. E. Waite",
     "fechas": "1857–1942",
     "rol": "Creó el tarot Rider-Waite (1909) con Pamela Colman Smith"
    },
    {
     "nombre": "Aleister Crowley",
     "fechas": "1875–1947",
     "rol": "Ingresó en 1898; luego fundó Thelema"
    }
   ],
   "textos_clave": [
    {
     "titulo": "Dogma y ritual de la alta magia",
     "autor": "Éliphas Lévi",
     "fecha": "1854–1856"
    },
    {
     "titulo": "Manuscritos cifrados",
     "autor": "Desconocido",
     "fecha": "c. 1887",
     "nota": "Base de los rituales; su origen es dudoso."
    }
   ],
   "simbolos": [
    "Árbol de la Vida",
    "Pentagrama",
    "Cruz rosada (Rosa-Cruz)"
   ],
   "advertencia_historica": "La autorización de una supuesta adepta alemana, Anna Sprengel, fue casi con seguridad inventada para dar legitimidad a la orden."
  },
  {
   "id": "teosofia",
   "label": "Teosofía",
   "grupo": "sintesis",
   "capa": 3,
   "anio_orden": 1875,
   "periodo": "1875 en adelante",
   "region": "Nueva York → Adyar (India)",
   "descripcion": "La Sociedad Teosófica sostiene que todas las religiones derivan de una Sabiduría Antigua custodiada por maestros ocultos. Es la primera gran síntesis que integra Oriente (karma, reencarnación) con el esoterismo occidental, y la versión más universal de la philosophia perennis.",
   "conceptos_clave": [
    {
     "nombre": "Tres objetivos",
     "explicacion": "Fraternidad universal sin distinción de raza, credo o sexo; estudio comparado de religión, filosofía y ciencia; investigación de las leyes ocultas de la naturaleza."
    },
    {
     "nombre": "Siete principios del ser humano",
     "explicacion": "Del cuerpo físico al espíritu (Atma), en capas sutiles."
    },
    {
     "nombre": "Mahatmas",
     "explicacion": "Maestros de sabiduría en el Tíbet, como Koot Hoomi y Morya."
    },
    {
     "nombre": "Registros akáshicos",
     "explicacion": "Memoria cósmica de todo lo ocurrido."
    },
    {
     "nombre": "Karma y reencarnación",
     "explicacion": "Tomados del hinduismo y el budismo, reinterpretados como evolución espiritual."
    }
   ],
   "figuras_clave": [
    {
     "nombre": "Helena Petrovna Blavatsky",
     "fechas": "1831–1891",
     "rol": "Cofundadora y autora principal"
    },
    {
     "nombre": "Henry Steel Olcott",
     "fechas": "1832–1907",
     "rol": "Cofundador y presidente"
    },
    {
     "nombre": "William Quan Judge",
     "fechas": "1851–1896",
     "rol": "Cofundador"
    },
    {
     "nombre": "Annie Besant",
     "fechas": "1847–1933",
     "rol": "Sucesora; activista por la autonomía india"
    },
    {
     "nombre": "Jiddu Krishnamurti",
     "fechas": "1895–1986",
     "rol": "Proclamado 'Instructor del Mundo'; rechazó el papel en 1929"
    }
   ],
   "textos_clave": [
    {
     "titulo": "Isis sin velo",
     "autor": "H. P. Blavatsky",
     "fecha": "1877"
    },
    {
     "titulo": "La doctrina secreta",
     "autor": "H. P. Blavatsky",
     "fecha": "1888"
    },
    {
     "titulo": "La clave de la teosofía",
     "autor": "H. P. Blavatsky",
     "fecha": "1889"
    },
    {
     "titulo": "La voz del silencio",
     "autor": "H. P. Blavatsky",
     "fecha": "1889"
    }
   ],
   "legado": [
    {
     "nombre": "Antroposofía",
     "fecha": "1912–1913",
     "nota": "Rudolf Steiner, escisión con enfoque cristiano."
    },
    {
     "nombre": "Escuela Arcana",
     "fecha": "1923",
     "nota": "Alice Bailey."
    },
    {
     "nombre": "New Age",
     "fecha": "desde 1970",
     "nota": "Hereda gran parte de su vocabulario."
    }
   ],
   "lema": "No hay religión más elevada que la verdad.",
   "simbolos": [
    "Sello de la Sociedad: ouroboros, estrella de seis puntas, ankh, esvástica y 'Om'"
   ],
   "advertencia_historica": "El término 'teosofía' también designa la teosofía cristiana de Jakob Böhme (1575–1624), una corriente distinta. El Informe Hodgson (1885) acusó a Blavatsky de fraude; la propia Society for Psychical Research publicó una crítica de ese informe en 1986. La doctrina de las 'razas raíz' tuvo lecturas racistas posteriores."
  }
 ],
 "edges": [
  {
   "id": "e01",
   "from": "egipto_helenistico",
   "to": "hermetismo",
   "tipo": "documentado",
   "etiqueta": "origen",
   "descripcion": "Los textos herméticos se escribieron en griego en el Egipto romano."
  },
  {
   "id": "e02",
   "from": "egipto_helenistico",
   "to": "alquimia",
   "tipo": "documentado",
   "etiqueta": "origen",
   "descripcion": "Los primeros textos alquímicos (Zósimo, María la Judía) son greco-egipcios."
  },
  {
   "id": "e03",
   "from": "egipto_helenistico",
   "to": "neoplatonismo",
   "tipo": "documentado",
   "etiqueta": "Plotino en Alejandría",
   "descripcion": "Plotino nació en Egipto y se formó con Amonio Saccas en Alejandría."
  },
  {
   "id": "e04",
   "from": "neoplatonismo",
   "to": "hermetismo",
   "tipo": "documentado",
   "etiqueta": "fondo filosófico común",
   "descripcion": "Ambos comparten el clima platónico de la época; el Hermetismo usa nociones como el Nous."
  },
  {
   "id": "e05",
   "from": "neoplatonismo",
   "to": "cabala",
   "tipo": "debatido",
   "etiqueta": "emanación",
   "descripcion": "El esquema de las Sefirot recuerda a la emanación neoplatónica; la influencia habría llegado vía filósofos judíos como Ibn Gabirol."
  },
  {
   "id": "e06",
   "from": "neoplatonismo",
   "to": "islam",
   "tipo": "documentado",
   "etiqueta": "Teología de Aristóteles",
   "descripcion": "Paráfrasis árabe de Plotino del s. IX."
  },
  {
   "id": "e07",
   "from": "neoplatonismo",
   "to": "sufismo",
   "tipo": "debatido",
   "etiqueta": "unidad del ser",
   "descripcion": "Paralelos con Ibn Arabi; el grado de influencia directa se discute."
  },
  {
   "id": "e08",
   "from": "mistica_judia",
   "to": "cabala",
   "tipo": "documentado",
   "etiqueta": "origen",
   "descripcion": "La Merkavá y el Sefer Yetzirah son antecedentes directos."
  },
  {
   "id": "e09",
   "from": "mistica_judia",
   "to": "hermetismo",
   "tipo": "debatido",
   "etiqueta": "Génesis en el Poimandres",
   "descripcion": "El relato de la creación del Poimandres muestra paralelos con la versión griega del Génesis."
  },
  {
   "id": "e10",
   "from": "islam",
   "to": "sufismo",
   "tipo": "documentado",
   "etiqueta": "origen",
   "descripcion": "El sufismo es la dimensión mística del Islam."
  },
  {
   "id": "e11",
   "from": "islam",
   "to": "alquimia",
   "tipo": "documentado",
   "etiqueta": "transmisión árabe",
   "descripcion": "La alquimia llegó a Europa en el s. XII a través de traducciones del árabe; la palabra misma viene del árabe al-kimiya."
  },
  {
   "id": "e12",
   "from": "hermetismo",
   "to": "islam",
   "tipo": "intercambio",
   "etiqueta": "Hermes = Idris",
   "descripcion": "El mundo islámico conservó textos herméticos y asimiló a Hermes con el profeta Idris; los sabeos de Harrán lo veneraban."
  },
  {
   "id": "e13",
   "from": "hermetismo",
   "to": "alquimia",
   "tipo": "documentado",
   "etiqueta": "Tabla Esmeralda",
   "descripcion": "La alquimia se llamó 'arte hermético'; la Tabla Esmeralda fue su texto fundacional."
  },
  {
   "id": "e14",
   "from": "sufismo",
   "to": "alquimia",
   "tipo": "debatido",
   "etiqueta": "Jabir 'al-Sufi'",
   "descripcion": "Algunas fuentes dan a Jabir el epíteto al-Sufi; la alquimia sirvió también de lenguaje para la transformación del alma."
  },
  {
   "id": "e15",
   "from": "oriente",
   "to": "sufismo",
   "tipo": "debatido",
   "etiqueta": "influencia india",
   "descripcion": "Se discute si místicos como Bayazid Bastami recibieron influencia del pensamiento indio."
  },
  {
   "id": "e16",
   "from": "hermetismo",
   "to": "renacimiento",
   "tipo": "documentado",
   "etiqueta": "Ficino traduce, 1463",
   "descripcion": "Cosme de Médici prioriza la traducción del Corpus Hermeticum."
  },
  {
   "id": "e17",
   "from": "cabala",
   "to": "renacimiento",
   "tipo": "documentado",
   "etiqueta": "Cábala cristiana, 1486",
   "descripcion": "Pico della Mirandola integra la Cábala en sus 900 Tesis."
  },
  {
   "id": "e18",
   "from": "neoplatonismo",
   "to": "renacimiento",
   "tipo": "documentado",
   "etiqueta": "Ficino traduce a Plotino",
   "descripcion": "Ficino tradujo también a Platón y Plotino."
  },
  {
   "id": "e19",
   "from": "alquimia",
   "to": "renacimiento",
   "tipo": "documentado",
   "etiqueta": "Paracelso",
   "descripcion": "La alquimia médica se integra en la magia natural renacentista."
  },
  {
   "id": "e20",
   "from": "renacimiento",
   "to": "philosophia_perennis",
   "tipo": "documentado",
   "etiqueta": "prisca theologia",
   "descripcion": "Ficino formula la idea; Steuco acuña el término en 1540."
  },
  {
   "id": "e21",
   "from": "renacimiento",
   "to": "rosacruz",
   "tipo": "documentado",
   "etiqueta": "síntesis heredada",
   "descripcion": "Los manifiestos recogen hermetismo, magia y Cábala cristiana."
  },
  {
   "id": "e22",
   "from": "alquimia",
   "to": "rosacruz",
   "tipo": "documentado",
   "etiqueta": "Bodas químicas",
   "descripcion": "La alegoría central rosacruz es alquímica y paracelsiana."
  },
  {
   "id": "e23",
   "from": "sufismo",
   "to": "rosacruz",
   "tipo": "legendario",
   "etiqueta": "Rosenkreuz en Damasco y Fez",
   "descripcion": "La Fama dice que el fundador aprendió de sabios árabes; no hay evidencia histórica."
  },
  {
   "id": "e24",
   "from": "rosacruz",
   "to": "masoneria",
   "tipo": "documentado",
   "etiqueta": "grados rosacruces",
   "descripcion": "En el s. XVIII la Masonería incorpora grados rosacruces, como el grado 18 del Rito Escocés."
  },
  {
   "id": "e25",
   "from": "alquimia",
   "to": "masoneria",
   "tipo": "debatido",
   "etiqueta": "Elias Ashmole",
   "descripcion": "Ashmole fue alquimista y masón temprano; su peso en la transmisión simbólica se discute."
  },
  {
   "id": "e26",
   "from": "cabala",
   "to": "masoneria",
   "tipo": "documentado",
   "etiqueta": "Pike, Moral y dogma",
   "descripcion": "Algunos ritos, sobre todo el Escocés reformado por Pike en 1871, incorporan Cábala de forma explícita."
  },
  {
   "id": "e27",
   "from": "sufismo",
   "to": "masoneria",
   "tipo": "especulativo",
   "etiqueta": "tesis de Idries Shah",
   "descripcion": "Shah sostuvo en 1964 que la Masonería tiene raíces sufíes; los historiadores no lo aceptan."
  },
  {
   "id": "e28",
   "from": "masoneria",
   "to": "golden_dawn",
   "tipo": "documentado",
   "etiqueta": "fundadores masones",
   "descripcion": "Westcott, Mathers y Woodman eran masones y miembros de la SRIA."
  },
  {
   "id": "e29",
   "from": "rosacruz",
   "to": "golden_dawn",
   "tipo": "documentado",
   "etiqueta": "SRIA",
   "descripcion": "La Golden Dawn surge de la Societas Rosicruciana in Anglia; su orden interna se llamaba Rosae Rubeae et Aureae Crucis."
  },
  {
   "id": "e30",
   "from": "hermetismo",
   "to": "golden_dawn",
   "tipo": "documentado",
   "etiqueta": "Orden Hermética",
   "descripcion": "El hermetismo da nombre y marco a la orden."
  },
  {
   "id": "e31",
   "from": "cabala",
   "to": "golden_dawn",
   "tipo": "documentado",
   "etiqueta": "Árbol de la Vida",
   "descripcion": "Toda la estructura de grados se organiza sobre las Sefirot."
  },
  {
   "id": "e32",
   "from": "alquimia",
   "to": "golden_dawn",
   "tipo": "documentado",
   "etiqueta": "simbolismo alquímico",
   "descripcion": "Correspondencias alquímicas integradas al sistema."
  },
  {
   "id": "e33",
   "from": "teosofia",
   "to": "golden_dawn",
   "tipo": "intercambio",
   "etiqueta": "miembros compartidos",
   "descripcion": "Yeats y otros pasaron de la Sociedad Teosófica a la Golden Dawn; las dos competían por el mismo público."
  },
  {
   "id": "e34",
   "from": "hermetismo",
   "to": "teosofia",
   "tipo": "documentado",
   "etiqueta": "fuente declarada",
   "descripcion": "Isis sin velo se apoya ampliamente en fuentes herméticas."
  },
  {
   "id": "e35",
   "from": "cabala",
   "to": "teosofia",
   "tipo": "documentado",
   "etiqueta": "fuente declarada",
   "descripcion": "Blavatsky cita la Cábala como una de las ramas de la Sabiduría Antigua."
  },
  {
   "id": "e36",
   "from": "oriente",
   "to": "teosofia",
   "tipo": "documentado",
   "etiqueta": "karma y reencarnación",
   "descripcion": "La Teosofía introduce masivamente conceptos hindúes y budistas en Occidente."
  },
  {
   "id": "e37",
   "from": "teosofia",
   "to": "oriente",
   "tipo": "intercambio",
   "etiqueta": "influencia de vuelta",
   "descripcion": "Olcott impulsó el renacimiento budista en Sri Lanka (bandera budista, 1885) y Besant apoyó el autogobierno indio."
  },
  {
   "id": "e38",
   "from": "masoneria",
   "to": "teosofia",
   "tipo": "documentado",
   "etiqueta": "vínculo menor",
   "descripcion": "Blavatsky recibió en 1877 un certificado del rito de adopción de John Yarker; la influencia doctrinal es escasa."
  },
  {
   "id": "e39",
   "from": "philosophia_perennis",
   "to": "teosofia",
   "tipo": "documentado",
   "etiqueta": "la universaliza",
   "descripcion": "La Teosofía extiende la idea de sabiduría única a todas las religiones del mundo."
  },
  {
   "id": "e40",
   "from": "rosacruz",
   "to": "teosofia",
   "tipo": "debatido",
   "etiqueta": "maestros ocultos",
   "descripcion": "La figura de los hermanos invisibles anticipa la de los Mahatmas."
  }
 ]
};
