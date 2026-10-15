/* Ampliaciones de vocabulario y práctica para los módulos B2 y C1. */
(function () {
  "use strict";

  const EXTRA = {
    "b1-pasados": {
      voc: [["🧳", "hacer una excursión", "to go on a day trip"], ["🏨", "alojarse", "to stay somewhere"], ["📷", "sacar una foto", "to take a photo"], ["⏰", "justo cuando", "just as"]],
      ex: [
        { q: "Cuando entramos, los niños ___ en el jardín.", o: ["jugaron", "jugaban", "han jugado"], a: 1, t: "El imperfecto describe una acción en desarrollo." },
        { q: "Ayer ___ una excursión por la montaña.", o: ["hacemos", "hicimos", "hacíamos"], a: 1, t: "Ayer sitúa la acción en un tiempo terminado." },
        { q: "¿Qué ___ mientras yo preparaba la cena?", a: ["hacías"], t: "Mientras + imperfecto para una acción simultánea." },
        { w: "Estábamos cenando cuando sonó el teléfono.", t: "We were having dinner when the phone rang." }
      ]
    },
    "b1-plusc": {
      voc: [["⏮️", "hasta entonces", "until then"], ["🧹", "darse cuenta de", "to realize"], ["📌", "resultar que", "to turn out that"], ["🗓️", "el día anterior", "the day before"]],
      ex: [
        { q: "Cuando llegamos a la estación, el tren ya ___.", o: ["salió", "había salido", "salía"], a: 1, t: "El pluscuamperfecto expresa una acción anterior a otra pasada." },
        { q: "No encontraba las llaves hasta que me ___ de que estaban en el bolso.", o: ["di cuenta", "había dado cuenta", "daba cuenta"], a: 0, t: "La expresión es darse cuenta de algo." },
        { q: "Me dijo que había visitado el museo el día ___.", a: ["anterior"], t: "El día anterior indica el día previo a un momento pasado." },
        { w: "Nunca había probado un plato tan picante hasta aquel viaje.", t: "I had never tried such a spicy dish until that trip." }
      ]
    },
    "b1-porpara": {
      voc: [["📬", "por correo electrónico", "by email"], ["🏃", "pasar por casa", "to stop by the house"], ["🎯", "estar hecho para", "to be made for"], ["🛣️", "por el camino", "along the way"]],
      ex: [
        { q: "Te he enviado los billetes ___ correo electrónico.", o: ["por", "para"], a: 0, t: "Por indica el medio: por correo electrónico." },
        { q: "Este regalo es ___ mi hermana.", o: ["por", "para"], a: 1, t: "Para indica el destinatario." },
        { q: "Mañana pasaré ___ tu casa antes de ir al trabajo.", a: ["por"], t: "Pasar por un lugar expresa atravesarlo o hacer una visita breve." },
        { w: "Salimos temprano para llegar antes de que anochezca.", t: "We left early in order to arrive before it gets dark." }
      ]
    },
    "b1-fut": {
      voc: [["🔭", "seguramente", "probably"], ["🗓️", "dentro de poco", "before long"], ["🌦️", "hacer buen tiempo", "to be nice weather"], ["✈️", "el próximo verano", "next summer"]],
      ex: [
        { q: "El año que viene mis amigos ___ en otra ciudad.", o: ["vivieron", "vivirán", "vivían"], a: 1, t: "El futuro simple habla de una acción posterior." },
        { q: "Mañana ___ sol, según las previsiones.", o: ["hará", "hizo", "hacía"], a: 0, t: "El futuro irregular de hacer es hará." },
        { q: "¿Qué ___ después del curso? (tú, hacer)", a: ["harás"], t: "Pregunta sobre planes futuros." },
        { w: "Dentro de poco empezaremos un proyecto nuevo.", t: "Before long, we will start a new project." }
      ]
    },
    "b1-cond": {
      voc: [["🌟", "si tuviera la oportunidad", "if I had the opportunity"], ["💡", "tomar una decisión", "to make a decision"], ["🕰️", "sería mejor", "it would be better"], ["🌧️", "pedir consejo", "to ask for advice"]],
      ex: [
        { q: "En tu lugar, ___ más información antes de decidir.", o: ["buscaría", "buscaré", "buscaba"], a: 0, t: "El condicional sirve para dar un consejo hipotético." },
        { q: "¿___ explicarme cómo llegar a la plaza?", o: ["Podría", "Podrá", "Pudo"], a: 0, t: "El condicional hace más cortés la petición." },
        { q: "A mí me ___ aprender a tocar la guitarra.", a: ["gustaría"], t: "Gustaría expresa un deseo de forma cortés." },
        { w: "Yo que tú hablaría con la profesora antes del examen.", t: "If I were you, I would talk to the teacher before the exam." }
      ]
    },
    "b1-imp": {
      voc: [["🪑", "siéntate", "sit down"], ["🚪", "pase, por favor", "come in, please"], ["🧂", "no añadas sal", "don't add salt"], ["🗺️", "sigue todo recto", "keep going straight"]],
      ex: [
        { q: "___ la puerta, por favor. (cerrar, tú)", o: ["Cierra", "Cierras", "Cerrar"], a: 0, t: "El imperativo afirmativo de cerrar es cierra." },
        { q: "No ___ aquí; es una zona para peatones. (aparcar, tú)", o: ["aparca", "aparques", "aparcar"], a: 1, t: "No + subjuntivo forma el imperativo negativo." },
        { q: "___ a la derecha en el próximo cruce. (girar, tú)", a: ["Gira"], t: "Instrucción afirmativa con tú." },
        { w: "No te olvides de traer el libro mañana.", t: "Don't forget to bring the book tomorrow." }
      ]
    },
    "b1-subj": {
      voc: [["✨", "espero que", "I hope that"], ["📢", "quiero que", "I want you to"], ["🎓", "antes de que salgas", "before you leave"], ["😊", "cuando termine", "when it ends"]],
      ex: [
        { q: "Espero que mañana ___ buen tiempo.", o: ["hace", "haga", "hará"], a: 1, t: "Esperar que expresa un deseo: subjuntivo." },
        { q: "Me encanta que mis amigos ___ a visitarme.", o: ["vienen", "vengan", "vendrán"], a: 1, t: "Una reacción emocional seguida de que lleva subjuntivo." },
        { q: "Te aconsejo que ___ el museo con tiempo. (visitar, tú)", a: ["visites"], t: "Aconsejar que + subjuntivo." },
        { w: "Ojalá encontremos pronto una solución.", t: "I hope we find a solution soon." }
      ]
    },
    "b1-indir": {
      voc: [["❓", "preguntar dónde", "to ask where"], ["📣", "según me contó", "according to what they told me"], ["🗓️", "el día de la entrevista", "the day of the interview"], ["📍", "mandar un mensaje", "to send a message"]],
      ex: [
        { q: "«Estoy cansada». Ana dijo que ___ cansada.", o: ["está", "estaba", "estará"], a: 1, t: "El presente suele pasar a imperfecto en el estilo indirecto." },
        { q: "«¿Vienes mañana?» → Me preguntó ___ iba al día siguiente.", o: ["que", "si", "dónde"], a: 1, t: "Las preguntas de sí o no se introducen con si." },
        { q: "«Vivo aquí». → Dijo que vivía ___.", a: ["allí"], t: "Aquí suele cambiar a allí en el estilo indirecto." },
        { w: "El profesor explicó que el examen empezaría a las nueve.", t: "The teacher explained that the exam would start at nine." }
      ]
    },
    "b1-medio": {
      voc: [["🌾", "la agricultura ecológica", "organic farming"], ["🌡️", "la ola de calor", "heatwave"], ["💨", "las emisiones", "emissions"], ["🪴", "plantar árboles", "to plant trees"]],
      ex: [
        { q: "Un periodo de temperaturas muy altas es una…", o: ["ola de calor", "sequía", "inundación"], a: 0, t: "Una ola de calor es un periodo de calor excepcional." },
        { q: "Los coches y las fábricas producen ___.", a: ["emisiones"], t: "Las emisiones son gases que se liberan a la atmósfera." },
        { q: "La ___ ecológica evita usar algunos productos químicos.", a: ["agricultura"], t: "La agricultura ecológica limita el uso de productos sintéticos." },
        { w: "El ayuntamiento plantará árboles para dar sombra en las calles.", t: "The city council will plant trees to provide shade in the streets." }
      ]
    },
    "b1-tec": {
      voc: [["🔐", "la memoria USB", "USB drive"], ["📱", "la aplicación móvil", "mobile app"], ["📶", "la conexión a internet", "internet connection"], ["🔄", "actualizar el programa", "to update the software"]],
      ex: [
        { q: "Para proteger tu cuenta, usa una ___ difícil de adivinar.", a: ["contraseña"], t: "Una contraseña protege el acceso a una cuenta." },
        { q: "Voy a ___ la aplicación para instalar la nueva versión.", o: ["actualizar", "conectar", "descargarme"], a: 0, t: "Actualizar instala la versión más reciente." },
        { q: "No puedo ver el vídeo porque no tengo buena ___ a internet.", a: ["conexión"], t: "La conexión permite acceder a internet." },
        { w: "Descargué una aplicación móvil para practicar español.", t: "I downloaded a mobile app to practise Spanish." }
      ]
    },
    "b1-emoc": {
      voc: [["😌", "estar tranquilo", "to be calm"], ["😳", "sentir vergüenza", "to feel embarrassed"], ["🎉", "llevarse una sorpresa", "to get a surprise"], ["😟", "preocuparse por", "to worry about"]],
      ex: [
        { q: "Antes del examen, estaba muy ___ y no podía dormir.", o: ["preocupado", "orgulloso", "divertido"], a: 0, t: "Preocupado expresa inquietud." },
        { q: "Me ___ una gran sorpresa cuando llegaron mis amigos.", a: ["llevé"], t: "La expresión es llevarse una sorpresa." },
        { q: "Al hablar delante de tanta gente, sintió ___.", a: ["vergüenza"], t: "Sentir vergüenza describe incomodidad o timidez." },
        { w: "Aunque estaba nerviosa, se quedó tranquila durante la entrevista.", t: "Although she was nervous, she stayed calm during the interview." }
      ]
    },
    "b1-medios": {
      voc: [["🎤", "el reportaje", "feature story / report"], ["🗞️", "la noticia de última hora", "breaking news"], ["📡", "la emisora de radio", "radio station"], ["📝", "publicar un artículo", "to publish an article"]],
      ex: [
        { q: "El texto breve que resume una noticia se llama…", o: ["titular", "entrevista", "emisora"], a: 0, t: "El titular presenta el tema principal de una noticia." },
        { q: "La periodista ___ a la cantante sobre su nueva gira.", a: ["entrevistó"], t: "Entrevistar a alguien es hacerle preguntas." },
        { q: "Escucho las noticias en una ___ de radio local.", a: ["emisora"], t: "Una emisora transmite programas de radio." },
        { w: "El periódico publicó un artículo sobre el festival de cine.", t: "The newspaper published an article about the film festival." }
      ]
    },
    "b1-cultura": {
      voc: [["🎭", "la obra de teatro", "play"], ["🎟️", "sacar entradas", "to get tickets"], ["🎶", "la música en directo", "live music"], ["🏛️", "el museo de arte", "art museum"]],
      ex: [
        { q: "Ayer vimos una ___ de teatro muy divertida.", a: ["obra"], t: "La expresión es una obra de teatro." },
        { q: "Para asistir al concierto, hay que ___ las entradas con antelación.", a: ["sacar", "comprar"], t: "Sacar entradas significa conseguirlas o comprarlas." },
        { q: "La banda toca en el escenario; hay música ___.", a: ["en directo"], t: "Música en directo se interpreta frente al público." },
        { w: "El museo organiza una visita guiada todos los sábados.", t: "The museum organizes a guided tour every Saturday." }
      ]
    },
    "b1-frases": {
      voc: [["😮", "quedarse de piedra", "to be astonished"], ["🤔", "no tener ni idea", "to have no idea"], ["⏳", "de vez en cuando", "from time to time"], ["🎯", "dar en el clavo", "to hit the nail on the head"]],
      ex: [
        { q: "Cuando le contaron la noticia, se quedó ___.", a: ["de piedra"], t: "Quedarse de piedra significa sorprenderse mucho." },
        { q: "No sé dónde está el teatro; no tengo ___ idea.", a: ["ni"], t: "La expresión fija es no tener ni idea." },
        { q: "Visitamos a mis abuelos ___ cuando. (from time to time)", a: ["de vez"], t: "La expresión completa es de vez en cuando." },
        { w: "Tu explicación dio en el clavo: era exactamente eso.", t: "Your explanation hit the nail on the head: that was exactly it." }
      ]
    },
    "b1-laboral": {
      voc: [["🧑‍💼", "la vacante", "job vacancy"], ["📄", "el currículum vítae", "résumé"], ["🤝", "el compañero de trabajo", "colleague"], ["📅", "tener una reunión", "to have a meeting"]],
      ex: [
        { q: "Antes de solicitar el puesto, actualicé mi ___.", a: ["currículum", "currículo", "cv"], t: "El currículum resume la formación y experiencia laboral." },
        { q: "Mañana tengo una ___ de trabajo a las diez.", a: ["entrevista"], t: "Una entrevista de trabajo forma parte del proceso de selección." },
        { q: "Mi ___ me ayudará a preparar la presentación.", a: ["compañero", "compañera"], t: "Un compañero de trabajo es una persona del mismo equipo." },
        { w: "Tenemos una reunión con el equipo para organizar el proyecto.", t: "We have a meeting with the team to organize the project." }
      ]
    },
    "b2-subjuntivo": {
      voc: [["🧭", "la incertidumbre", "uncertainty"], ["📌", "resulta imprescindible que", "it is essential that"], ["🌦️", "aunque se trate de", "even if it is about"], ["🤝", "a condición de que", "provided that"]],
      ex: [
        { q: "Es imprescindible que la comisión ___ todas las propuestas.", o: ["revise", "revisa", "revisará"], a: 0, t: "Es imprescindible que + subjuntivo." },
        { q: "No estoy convencido de que esa medida ___ suficiente.", o: ["es", "sea", "será"], a: 1, t: "La duda expresada con negación suele llevar subjuntivo." },
        { q: "Aunque ___ complicado, lo resolveremos juntos. (ser)", a: ["sea"], t: "Una situación hipotética o irrelevante admite subjuntivo." },
        { w: "Te ayudaré a condición de que me cuentes lo ocurrido.", t: "I'll help you provided that you tell me what happened." }
      ]
    },
    "b2-condicionales": {
      voc: [["🌀", "de no ser por", "if it weren't for"], ["🧮", "la consecuencia", "consequence"], ["🗓️", "siempre y cuando", "as long as"], ["💭", "en el supuesto de que", "in the event that"]],
      ex: [
        { q: "De no ser ___ tu ayuda, no habría terminado a tiempo.", a: ["por"], t: "La locución es de no ser por." },
        { q: "Te prestaré el coche siempre y cuando ___ con cuidado.", o: ["conduzcas", "conducirías", "conduces"], a: 0, t: "Siempre y cuando + subjuntivo expresa una condición." },
        { q: "Si hubiéramos reservado antes, ___ una mesa junto a la ventana.", o: ["tendríamos", "habríamos conseguido", "consigamos"], a: 1, t: "Una condición y un resultado pasados irreales se expresan con pluscuamperfecto de subjuntivo y condicional compuesto." },
        { w: "En el supuesto de que surgiera algún imprevisto, avísanos.", t: "In the event that something unexpected happens, let us know." }
      ]
    },
    "b2-relativas": {
      voc: [["🧑‍🔬", "alguien que domine el tema", "someone who knows the subject"], ["🧾", "el informe al que se refiere", "the report being referred to"], ["🔗", "la razón por la cual", "the reason why"], ["🌐", "cualquier lugar donde", "any place where"]],
      ex: [
        { q: "Necesitamos una persona que ___ experiencia en mediación.", o: ["tiene", "tenga", "tuvo"], a: 1, t: "El antecedente aún no está identificado: se usa el subjuntivo." },
        { q: "La autora ___ entrevisté publicará otro libro.", o: ["a quien", "cuyo", "lo cual"], a: 0, t: "A quien se refiere a una persona como complemento directo." },
        { q: "El documento sobre ___ debatimos ya está disponible.", a: ["el que", "el cual"], t: "La preposición sobre precede al relativo." },
        { w: "Busco una plataforma que permita comparar distintas fuentes.", t: "I'm looking for a platform that allows different sources to be compared." }
      ]
    },
    "b2-pasiva": {
      voc: [["📰", "la fuente no identificada", "unidentified source"], ["🔎", "poner el énfasis en", "to emphasize"], ["📝", "la autoría", "authorship"], ["📣", "por unanimidad", "unanimously"]],
      ex: [
        { q: "Durante la sesión ___ a las personas afectadas.", o: ["se escuchó", "se escucharon", "escucharon se"], a: 0, t: "La construcción impersonal con se y complemento personal va en singular." },
        { q: "Las normas ___ ayer por el comité.", o: ["aprobaron", "fueron aprobadas", "se aprobó"], a: 1, t: "La pasiva concuerda en género y número con normas." },
        { q: "En este edificio ___ bicicletas en el vestíbulo.", a: ["no se permiten"], t: "En la pasiva refleja, el verbo concuerda con bicicletas." },
        { w: "Se estima que las obras terminarán antes de diciembre.", t: "The work is expected to be completed before December." }
      ]
    },
    "b2-conectores": {
      voc: [["🧭", "a grandes rasgos", "broadly speaking"], ["⚖️", "por el contrario", "on the contrary"], ["🧵", "en lo que atañe a", "as far as ... is concerned"], ["🔚", "en definitiva", "ultimately"]],
      ex: [
        { q: "El plan reducirá los costes; ___, mejorará el servicio.", o: ["por el contrario", "asimismo", "pese a"], a: 1, t: "Asimismo añade un argumento en la misma dirección." },
        { q: "___ la financiación, todavía no se ha tomado una decisión.", a: ["En lo que atañe a", "A pesar de"], t: "En lo que atañe a introduce el tema del que se habla." },
        { q: "El plazo es breve, ___ tendremos que priorizar las tareas.", o: ["por consiguiente", "sin embargo", "por más que"], a: 0, t: "Por consiguiente introduce una consecuencia." },
        { w: "A grandes rasgos, la propuesta es viable, aunque requiere algunos ajustes.", t: "Broadly speaking, the proposal is viable, although it requires some adjustments." }
      ]
    },
    "b2-perifrasis": {
      voc: [["📆", "llevar dos años viviendo", "to have been living for two years"], ["🛑", "dejar de consumir", "to stop consuming"], ["🚀", "echarse a reír", "to burst out laughing"], ["🔜", "estar por terminar", "to be about to finish"]],
      ex: [
        { q: "Llevamos ___ la misma estrategia desde enero.", o: ["probar", "probando", "probada"], a: 1, t: "Llevar + gerundio expresa una acción que continúa." },
        { q: "Cuando oyó la noticia, se ___ a llorar.", o: ["echó", "dejó", "llevó"], a: 0, t: "Echarse a + infinitivo expresa el comienzo repentino de una acción." },
        { q: "La conferencia ___ de terminar; están apagando las luces.", a: ["acaba"], t: "Acabar de + infinitivo expresa una acción recién terminada." },
        { w: "Sigue trabajando en el informe, aunque ya lleva revisadas veinte páginas.", t: "She is still working on the report, although she has already reviewed twenty pages." }
      ]
    },
    "b2-nominalizacion": {
      voc: [["📉", "el descenso", "decline"], ["📈", "el crecimiento", "growth"], ["✅", "la puesta en marcha", "launch / implementation"], ["🔍", "la evaluación de resultados", "assessment of results"]],
      ex: [
        { q: "El ___ de los precios sorprendió a los analistas. (descender)", a: ["descenso"], t: "Descender se nominaliza como descenso." },
        { q: "La empresa decidió ___ el proyecto en mayo.", o: ["poner en marcha", "puesta en marcha", "poniendo en marcha"], a: 0, t: "Después de decidió se utiliza el infinitivo." },
        { q: "La ___ de las medidas se hará pública la semana que viene. (evaluar)", a: ["evaluación"], t: "Evaluar se nominaliza como evaluación." },
        { w: "El crecimiento de la demanda obligó a ampliar la plantilla.", t: "The growth in demand made it necessary to expand the workforce." }
      ]
    },
    "b2-discurso": {
      voc: [["🗣️", "recalcar que", "to emphasize that"], ["📌", "hacer hincapié en", "to stress"], ["🙏", "instar a que", "to urge that"], ["🧾", "según fuentes oficiales", "according to official sources"]],
      ex: [
        { q: "«No olviden traer el documento». La coordinadora les pidió que no ___ el documento.", o: ["olvidan", "olvidaran", "olvidarán"], a: 1, t: "Pedir que + imperfecto de subjuntivo expresa una petición referida en pasado." },
        { q: "«Lo enviaremos mañana». Indicaron que lo enviarían ___.", a: ["al día siguiente", "el día siguiente"], t: "Mañana suele convertirse en al día siguiente." },
        { q: "El portavoz hizo hincapié ___ la necesidad de dialogar.", a: ["en"], t: "La expresión es hacer hincapié en algo." },
        { w: "La directora recalcó que las solicitudes debían presentarse por escrito.", t: "The director emphasized that applications had to be submitted in writing." }
      ]
    },
    "b2-educacion": {
      voc: [["🧑‍🏫", "la enseñanza semipresencial", "blended learning"], ["📑", "el expediente académico", "academic record"], ["🔄", "la formación permanente", "lifelong learning"], ["🏅", "obtener una titulación", "to obtain a qualification"]],
      ex: [
        { q: "El documento que recoge las calificaciones de un estudiante es su…", o: ["expediente académico", "plan de estudios", "plazo"], a: 0, t: "El expediente académico registra los resultados de los estudios." },
        { q: "Compatibilizar clases en línea y en el aula es una modalidad…", o: ["semipresencial", "autónoma", "continua"], a: 0, t: "Semipresencial combina actividades presenciales y a distancia." },
        { q: "La actualización de conocimientos a lo largo de la carrera es formación ___.", a: ["permanente"], t: "La formación permanente se mantiene a lo largo de la vida laboral." },
        { w: "Para obtener una titulación, tendrá que completar todos los créditos.", t: "To obtain a qualification, she will have to complete all the credits." }
      ]
    },
    "b2-empleo": {
      voc: [["🧰", "la jornada flexible", "flexible working hours"], ["📑", "el periodo de prueba", "probation period"], ["🧑‍💻", "trabajar por cuenta propia", "to be self-employed"], ["📈", "la promoción interna", "internal promotion"]],
      ex: [
        { q: "Antes de confirmar el puesto, comprobó cuánto duraba el…", o: ["periodo de prueba", "plan de estudios", "margen de beneficio"], a: 0, t: "El periodo de prueba forma parte del inicio de una relación laboral." },
        { q: "Quien ofrece sus servicios sin ser empleado de una empresa trabaja…", o: ["por cuenta propia", "a jornada partida", "por turnos"], a: 0, t: "Trabajar por cuenta propia es ser autónomo." },
        { q: "La empresa ofrece una ___ flexible para facilitar la conciliación.", a: ["jornada"], t: "Jornada flexible." },
        { w: "La promoción interna permite crecer profesionalmente dentro de la empresa.", t: "Internal promotion allows employees to grow professionally within the company." }
      ]
    },
    "b2-ciencia": {
      voc: [["🧪", "la muestra representativa", "representative sample"], ["📐", "la metodología", "methodology"], ["🔁", "reproducir un experimento", "to replicate an experiment"], ["🧾", "los datos cuantitativos", "quantitative data"]],
      ex: [
        { q: "El conjunto de métodos que se siguen en un estudio es la…", o: ["metodología", "hipótesis", "divulgación"], a: 0, t: "La metodología describe cómo se realiza la investigación." },
        { q: "Una muestra que refleja las características del conjunto es…", o: ["representativa", "clínica", "provisional"], a: 0, t: "Una muestra representativa permite estudiar un grupo de manera más fiable." },
        { q: "Otros equipos deben poder ___ los resultados del experimento.", a: ["reproducir"], t: "Reproducir un experimento permite contrastar sus resultados." },
        { w: "La metodología debe describirse con suficiente detalle para replicar el estudio.", t: "The methodology should be described in enough detail to replicate the study." }
      ]
    },
    "b2-sociedad": {
      voc: [["🏘️", "el arraigo", "sense of belonging"], ["🌍", "la población migrante", "migrant population"], ["🧑‍🤝‍🧑", "el tejido asociativo", "community network"], ["⚖️", "la movilidad social", "social mobility"]],
      ex: [
        { q: "El conjunto de asociaciones y grupos de una comunidad forma su…", o: ["tejido asociativo", "tasa de natalidad", "brecha generacional"], a: 0, t: "El tejido asociativo reúne las organizaciones de una comunidad." },
        { q: "El vínculo de una persona con el lugar donde vive se llama…", o: ["arraigo", "despoblación", "inclusión"], a: 0, t: "Arraigo describe el vínculo con un lugar o comunidad." },
        { q: "La posibilidad de cambiar de posición económica se denomina movilidad ___.", a: ["social"], t: "La expresión es movilidad social." },
        { w: "El tejido asociativo favorece la participación y el arraigo en el barrio.", t: "Community networks encourage participation and a sense of belonging in the neighbourhood." }
      ]
    },
    "b2-ciudadania": {
      voc: [["📬", "el registro electrónico", "online registry"], ["🪪", "acreditar la identidad", "to verify one's identity"], ["📝", "el certificado de empadronamiento", "residence certificate"], ["📆", "la sede electrónica", "online government office"]],
      ex: [
        { q: "Para presentar una solicitud por internet, se puede usar la…", o: ["sede electrónica", "comisión parlamentaria", "fuente primaria"], a: 0, t: "La sede electrónica permite hacer trámites en línea." },
        { q: "El documento que certifica el domicilio de una persona es el…", o: ["certificado de empadronamiento", "contrato indefinido", "expediente académico"], a: 0, t: "El certificado de empadronamiento acredita la residencia municipal." },
        { q: "Para completar el trámite, tendrá que ___ su identidad.", a: ["acreditar", "verificar"], t: "Acreditar la identidad es confirmar quién presenta la solicitud." },
        { w: "La solicitud quedó registrada en la sede electrónica.", t: "The application was registered on the online government portal." }
      ]
    },
    "b2-salud": {
      voc: [["🫀", "la atención primaria", "primary care"], ["🧘", "la gestión del estrés", "stress management"], ["🩹", "la rehabilitación", "rehabilitation"], ["🛌", "la higiene del sueño", "sleep hygiene"]],
      ex: [
        { q: "La asistencia médica general suele recibirse primero en…", o: ["atención primaria", "un ensayo clínico", "la prevención laboral"], a: 0, t: "La atención primaria es el primer nivel de asistencia sanitaria." },
        { q: "Los ejercicios pautados para recuperar la movilidad forman parte de la…", o: ["rehabilitación", "prevención", "diagnosis"], a: 0, t: "La rehabilitación ayuda a recuperar funciones tras una lesión." },
        { q: "Los hábitos que favorecen un sueño reparador son la higiene del ___.", a: ["sueño"], t: "La expresión es higiene del sueño." },
        { w: "La gestión del estrés puede mejorar el descanso y el bienestar diario.", t: "Managing stress can improve rest and everyday wellbeing." }
      ]
    },
    "b2-cultura": {
      voc: [["🎟️", "la taquilla", "box office"], ["🏺", "la pieza expuesta", "exhibited artefact"], ["🧑‍🎨", "la artista emergente", "emerging artist"], ["🗺️", "la visita guiada", "guided tour"]],
      ex: [
        { q: "El lugar del teatro donde se compran las entradas es la…", o: ["taquilla", "reseña", "muestra"], a: 0, t: "La taquilla es el punto de venta de entradas." },
        { q: "Una artista que empieza a ser conocida puede llamarse…", o: ["emergente", "agotada", "patrimonial"], a: 0, t: "Emergente se aplica a talentos que empiezan a destacar." },
        { q: "La explicación de una colección hecha por un guía es una visita ___.", a: ["guiada"], t: "La colocación es visita guiada." },
        { w: "La visita guiada ofrece contexto histórico sobre cada pieza expuesta.", t: "The guided tour provides historical context for each exhibited piece." }
      ]
    },
    "c1-subjuntivo": {
      voc: [["🕰️", "aun cuando hubiera ocurrido", "even if it had happened"], ["📨", "lamentar que", "to regret that"], ["🪞", "no parecía que", "it did not seem that"], ["🎯", "dejar constancia de que", "to put on record that"]],
      ex: [
        { q: "Lamentó que la reunión ___ antes de que pudiera intervenir.", o: ["terminara", "terminó", "terminaría"], a: 0, t: "Un sentimiento en pasado suele ir seguido de imperfecto de subjuntivo." },
        { q: "No parecía que el acuerdo ___ a todas las partes.", o: ["satisfacía", "satisficiera", "satisfará"], a: 1, t: "No parecer que expresa una impresión no afirmada: subjuntivo." },
        { q: "Me alegra que ya ___ el expediente. (tú, revisar)", a: ["hayas revisado"], t: "Pretérito perfecto de subjuntivo para una acción anterior al presente." },
        { w: "Quisiera dejar constancia de que no he recibido la notificación.", t: "I would like to put on record that I have not received the notice." }
      ]
    },
    "c1-condicionales": {
      voc: [["🪞", "de haber mediado un acuerdo", "if an agreement had been reached"], ["🧮", "la hipótesis contrafactual", "counterfactual hypothesis"], ["🛤️", "si se diera el caso", "if that were to happen"], ["📍", "en caso de que fuera necesario", "if it were necessary"]],
      ex: [
        { q: "Si se hubieran publicado los datos, ahora ___ comparar los resultados.", o: ["podríamos", "habríamos podido", "podamos"], a: 0, t: "Una condición pasada puede producir una consecuencia en el presente." },
        { q: "De ___ más presupuesto, el equipo habría ampliado la investigación.", a: ["haber tenido"], t: "De + infinitivo compuesto equivale a una condición irreal pasada." },
        { q: "Si el informe ___ más claro, nadie habría malinterpretado la conclusión.", o: ["fuera", "hubiera sido", "sería"], a: 1, t: "La condición pasada irreal lleva pluscuamperfecto de subjuntivo." },
        { w: "En caso de que fuera necesario, podríamos aplazar la decisión.", t: "If necessary, we could postpone the decision." }
      ]
    },
    "c1-concesion": {
      voc: [["⚖️", "por más que se insista", "no matter how much one insists"], ["🛡️", "aun admitiendo que", "even while acknowledging that"], ["↔️", "lejos de resultar sencillo", "far from being straightforward"], ["🧱", "con independencia de que", "regardless of whether"]],
      ex: [
        { q: "Aun ___ que los costes subirán, la reforma sigue siendo necesaria.", o: ["admitiendo", "admitamos", "admitido"], a: 0, t: "Aun + gerundio puede introducir una concesión." },
        { q: "Con independencia de que ___ acuerdo o no, votaremos hoy.", o: ["estés", "estás", "estarás"], a: 0, t: "Con independencia de que + subjuntivo." },
        { q: "El proceso está lejos de ___ sencillo.", a: ["ser", "resultar"], t: "Lejos de + infinitivo." },
        { w: "Por más que se insista en el cambio, todavía no hay consenso.", t: "No matter how much people insist on change, there is still no consensus." }
      ]
    },
    "c1-relativas": {
      voc: [["📜", "el organismo cuya función", "the organization whose role"], ["🧭", "allá donde", "wherever"], ["🧩", "todo cuanto se ha debatido", "everything that has been discussed"], ["🔗", "el criterio conforme al cual", "the criterion according to which"]],
      ex: [
        { q: "Publicaron un informe ___ conclusiones suscitaron debate.", o: ["cuyas", "las cuales", "lo que"], a: 0, t: "Cuyas concuerda con conclusiones, el elemento poseído." },
        { q: "El procedimiento, conforme ___ se seleccionó al equipo, era público.", a: ["al cual", "a lo cual"], t: "Conforme al cual retoma procedimiento, masculino singular." },
        { q: "Compartió ___ había recopilado durante décadas.", a: ["cuanto", "todo cuanto"], t: "Cuanto equivale a todo lo que." },
        { w: "El archivo, cuya consulta es gratuita, reúne documentos de varias épocas.", t: "The archive, which can be consulted free of charge, contains documents from several periods." }
      ]
    },
    "c1-impersonales": {
      voc: [["📊", "se desprende de los datos", "it follows from the data"], ["⚖️", "se hace constar", "it is hereby recorded"], ["🔎", "en lo sucesivo", "hereinafter"], ["🧾", "queda pendiente de aprobación", "remains subject to approval"]],
      ex: [
        { q: "Del análisis ___ que hace falta revisar el procedimiento.", o: ["se desprende", "se desprenden", "fue desprendido"], a: 0, t: "Se desprende que introduce una conclusión inferida." },
        { q: "En la presente acta ___ constar el acuerdo alcanzado.", a: ["se hace"], t: "La expresión formal es hacer constar." },
        { q: "Las recomendaciones ___ pendientes de aprobación.", o: ["queda", "quedan", "se queda"], a: 1, t: "El verbo concuerda con recomendaciones, plural." },
        { w: "Se hace constar que la decisión se revisará en la próxima sesión.", t: "It is hereby recorded that the decision will be reviewed at the next meeting." }
      ]
    },
    "c1-estilo-indirecto": {
      voc: [["📰", "según trascendió", "as it emerged"], ["🗣️", "aducir que", "to put forward that"], ["📌", "reiterar que", "to reiterate that"], ["🔍", "atribuir a alguien", "to attribute to someone"]],
      ex: [
        { q: "«No conocíamos esos datos». Admitieron que no ___ esos datos.", o: ["conocen", "conocían", "habían conocido"], a: 2, t: "El imperfecto puede pasar a pluscuamperfecto al referir una situación pasada." },
        { q: "La portavoz reiteró ___ el plan seguía vigente.", a: ["que"], t: "Reiterar que introduce el contenido de la declaración." },
        { q: "Adujo que no ___ intervenir en la negociación.", o: ["podía", "puede", "podrá"], a: 0, t: "El imperfecto mantiene el marco temporal pasado de la declaración." },
        { w: "Según trascendió, ambas partes se reunirían al día siguiente.", t: "As it emerged, both parties would meet the following day." }
      ]
    },
    "c1-modalidad": {
      voc: [["🔮", "todo apunta a que", "everything points to the fact that"], ["📉", "difícilmente", "hardly / unlikely to"], ["🧭", "presumiblemente", "presumably"], ["⚖️", "no es descartable que", "it cannot be ruled out that"]],
      ex: [
        { q: "Todo ___ a que el acuerdo se firmará esta semana.", o: ["apunta", "descarta", "duda"], a: 0, t: "La expresión es todo apunta a que." },
        { q: "No es descartable que el comité ___ la propuesta.", o: ["acepte", "acepta", "aceptará"], a: 0, t: "No es descartable que + subjuntivo." },
        { q: "A juzgar por el ruido, los vecinos ___ en casa.", a: ["estarán"], t: "El futuro puede expresar una conjetura sobre el presente." },
        { w: "Presumiblemente, la decisión se anunciará después de la reunión.", t: "Presumably, the decision will be announced after the meeting." }
      ]
    },
    "c1-conectores": {
      voc: [["🧾", "en consonancia con", "in line with"], ["⚖️", "a la luz de", "in light of"], ["↔️", "por añadidura", "furthermore"], ["🪜", "dicho lo cual", "having said that"]],
      ex: [
        { q: "___ los nuevos datos, conviene revisar la conclusión.", a: ["A la luz de"], t: "A la luz de introduce la información que fundamenta una decisión." },
        { q: "El plazo es ajustado; ___, se añadirá una semana.", o: ["dicho lo cual", "en consonancia", "por añadidura"], a: 0, t: "Dicho lo cual introduce una consideración posterior que matiza lo anterior." },
        { q: "___ su trayectoria, la candidata fue elegida para coordinar el equipo.", a: ["En consonancia con"], t: "En consonancia con indica correspondencia o coherencia." },
        { w: "Por añadidura, el informe incluye recomendaciones para su aplicación.", t: "Furthermore, the report includes recommendations for its implementation." }
      ]
    },
    "c1-academico": {
      voc: [["📚", "el marco teórico", "theoretical framework"], ["🧪", "la variable independiente", "independent variable"], ["📏", "la validez de los resultados", "validity of the results"], ["🗒️", "la revisión bibliográfica", "literature review"]],
      ex: [
        { q: "La sección que sitúa un estudio en las teorías existentes es el…", o: ["marco teórico", "hallazgo", "margen de beneficio"], a: 0, t: "El marco teórico presenta los conceptos y teorías relevantes." },
        { q: "En un experimento, el factor que se manipula es la variable…", o: ["independiente", "dependiente", "representativa"], a: 0, t: "La variable independiente es la que se modifica para observar sus efectos." },
        { q: "Antes de redactar el trabajo, hizo una revisión ___ exhaustiva.", a: ["bibliográfica"], t: "La revisión bibliográfica reúne estudios previos." },
        { w: "La validez de los resultados depende también de la selección de la muestra.", t: "The validity of the results also depends on how the sample was selected." }
      ]
    },
    "c1-instituciones": {
      voc: [["⚖️", "el órgano regulador", "regulatory body"], ["📜", "la disposición transitoria", "transitional provision"], ["📣", "la comparecencia pública", "public appearance"], ["🏛️", "el ámbito competencial", "scope of authority"]],
      ex: [
        { q: "El organismo que supervisa el cumplimiento de una normativa es el…", o: ["órgano regulador", "tejido asociativo", "organismo emisor"], a: 0, t: "El órgano regulador supervisa y hace cumplir las normas de su sector." },
        { q: "Una regla temporal para facilitar la aplicación de una nueva ley es una disposición…", o: ["transitoria", "parlamentaria", "unánime"], a: 0, t: "Una disposición transitoria regula el paso de un marco anterior al nuevo." },
        { q: "La responsabilidad legal de una institución define su ámbito ___.", a: ["competencial"], t: "Ámbito competencial." },
        { w: "El órgano regulador compareció ante la comisión para explicar sus decisiones.", t: "The regulatory body appeared before the committee to explain its decisions." }
      ]
    },
    "c1-economia": {
      voc: [["📉", "la solvencia", "solvency"], ["🧮", "el flujo de caja", "cash flow"], ["📑", "la auditoría externa", "external audit"], ["🤝", "las condiciones contractuales", "contractual terms"]],
      ex: [
        { q: "La capacidad de una empresa para hacer frente a sus deudas es su…", o: ["solvencia", "liquidación", "licitación"], a: 0, t: "La solvencia mide la capacidad de cumplir las obligaciones financieras." },
        { q: "La revisión independiente de las cuentas de una entidad es una…", o: ["auditoría externa", "prórroga", "cláusula"], a: 0, t: "Una auditoría externa examina la información financiera de forma independiente." },
        { q: "El ___ de caja refleja entradas y salidas de dinero.", a: ["flujo"], t: "La expresión es flujo de caja." },
        { w: "Antes de renovar el acuerdo, ambas partes revisaron las condiciones contractuales.", t: "Before renewing the agreement, both parties reviewed the contractual terms." }
      ]
    },
    "c1-medios": {
      voc: [["🗞️", "el titular sensacionalista", "sensationalist headline"], ["🔬", "la verificación de datos", "fact-checking"], ["📢", "la nota de rectificación", "correction notice"], ["🧭", "la línea editorial", "editorial stance"]],
      ex: [
        { q: "La comprobación sistemática de afirmaciones y cifras se llama…", o: ["verificación de datos", "encuadre", "viralización"], a: 0, t: "La verificación de datos contrasta afirmaciones con evidencia." },
        { q: "El enfoque general que adopta un medio es su línea…", a: ["editorial"], t: "La línea editorial define la orientación del medio." },
        { q: "El medio publicó una nota de ___ para corregir el dato.", a: ["rectificación"], t: "Nota de rectificación." },
        { w: "Un titular sensacionalista puede distorsionar el contenido de una noticia.", t: "A sensationalist headline can distort the content of a news story." }
      ]
    },
    "c1-sostenibilidad": {
      voc: [["⚡", "la descarbonización", "decarbonization"], ["🌿", "la restauración de ecosistemas", "ecosystem restoration"], ["♻️", "el análisis del ciclo de vida", "life-cycle assessment"], ["🌍", "los límites planetarios", "planetary boundaries"]],
      ex: [
        { q: "Reducir las emisiones asociadas al uso de combustibles fósiles es la…", o: ["descarbonización", "despoblación", "divulgación"], a: 0, t: "La descarbonización reduce las emisiones de carbono." },
        { q: "La evaluación del impacto de un producto desde su fabricación hasta su descarte es el análisis del ___ de vida.", a: ["ciclo"], t: "La expresión es análisis del ciclo de vida." },
        { q: "La recuperación de hábitats degradados contribuye a la ___ de ecosistemas.", a: ["restauración"], t: "La restauración de ecosistemas recupera su funcionamiento y diversidad." },
        { w: "La planificación debe respetar los límites planetarios y reducir la pérdida de biodiversidad.", t: "Planning should respect planetary boundaries and reduce biodiversity loss." }
      ]
    },
    "c1-relaciones": {
      voc: [["🪞", "la ambivalencia", "ambivalence"], ["🧱", "poner límites", "to set boundaries"], ["💬", "mostrarse comprensivo", "to be understanding"], ["🕊️", "reconciliarse con", "to come to terms with"]],
      ex: [
        { q: "Tener sentimientos o actitudes contradictorios produce…", o: ["ambivalencia", "arraigo", "cohesión"], a: 0, t: "Ambivalencia es la coexistencia de sentimientos opuestos." },
        { q: "Para cuidar su tiempo y energía, aprendió a ___ límites.", a: ["poner", "establecer"], t: "Las colocaciones habituales son poner o establecer límites." },
        { q: "Aunque no compartía la decisión, intentó mostrarse ___.", a: ["comprensiva", "comprensivo"], t: "Mostrarse comprensivo concuerda con quien habla." },
        { w: "Le costó reconciliarse con la idea de que el proyecto había terminado.", t: "It was difficult for her to come to terms with the project having ended." }
      ]
    },
    "c1-colocaciones": {
      voc: [["📍", "dejar entrever", "to hint at"], ["🧩", "arrojar luz sobre", "to shed light on"], ["🛑", "zanjar una cuestión", "to settle an issue"], ["🧵", "guardar coherencia con", "to be consistent with"]],
      ex: [
        { q: "El informe ayuda a ___ luz sobre las causas del retraso.", a: ["arrojar"], t: "La colocación es arrojar luz sobre un asunto." },
        { q: "La investigación dejó ___ que existía un problema estructural.", a: ["entrever"], t: "Dejar entrever es insinuar o sugerir algo." },
        { q: "La explicación debe guardar coherencia ___ los datos.", a: ["con"], t: "La construcción es guardar coherencia con algo." },
        { w: "La reunión permitió zanjar una cuestión que llevaba meses pendiente.", t: "The meeting made it possible to settle an issue that had been pending for months." }
      ]
    }
  };

  Object.keys(EXTRA).forEach(id => {
    const module = window.CAMINO.find(item => item.id === id);
    if (!module) throw new Error(`No se encontró el módulo para ampliar: ${id}`);
    module.voc.push(...EXTRA[id].voc);
    module.ex.push(...EXTRA[id].ex);
  });
})();
