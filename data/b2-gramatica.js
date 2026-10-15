/* Camino al Español · Nivel B2 · contenido */
window.CAMINO = window.CAMINO || [];
window.CAMINO.push(
{
  id: "b2-subjuntivo",
  lvl: "B2",
  k: "g",
  t: "Subjuntivo: contraste y emoción",
  en: "Subjunctive: contrast and emotion",
  ic: "🎭",
  th: `<div class="card"><h2>Indicativo o subjuntivo <span class="en">(indicative or subjunctive)</span></h2>
<p>El <b>indicativo</b> presenta una información como afirmada; el <b>subjuntivo</b> la enfoca como deseo, valoración, duda o información no identificada.</p>
<table><tr><th>Estructura</th><th>Ejemplo</th></tr><tr><td>Creo que + indicativo</td><td>Creo que <b>tiene</b> razón.</td></tr><tr><td>No creo que + subjuntivo</td><td>No creo que <b>tenga</b> razón.</td></tr><tr><td>Me alegra que + subjuntivo</td><td>Me alegra que <b>hayas venido</b>.</td></tr><tr><td>Puede que + subjuntivo</td><td>Puede que <b>lleguen</b> tarde.</td></tr></table>
<p>Con verbos de opinión afirmativos suele ir indicativo; en preguntas, negaciones y expresiones de emoción o valoración, subjuntivo.</p></div>
<div class="tip"><b>Matiz:</b> «Aunque es caro, lo compro» presenta el precio como un hecho; «Aunque sea caro, lo compraré» lo plantea como una posibilidad irrelevante.</div>`,
  voc: [["🎭","la valoración","assessment"],["🤔","la duda","doubt"],["✨","me alegra que","I'm glad that"],["⚖️","es probable que","it is likely that"],["💭","no es que","it's not that"],["🔎","darse cuenta de que","to realize that"]],
  ex: [
    { q: "Me alegra que por fin ___ una solución.", o: ["encontramos","hayamos encontrado","encontraremos"], a: 1, t: "Me alegra que expresa una reacción: subjuntivo." },
    { q: "Estoy convencida de que el plan ___ viable.", o: ["sea","es","fuera"], a: 1, t: "Una convicción afirmativa normalmente lleva indicativo." },
    { q: "Puede que ellos ___ más tarde.", a: ["lleguen"], t: "Puede que + subjuntivo." },
    { w: "Aunque sea complicado, merece la pena intentarlo.", t: "Even if it is complicated, it is worth trying." },
    { w: "No es que no quiera ayudarte; es que hoy no puedo.", t: "It is not that I don't want to help; I just can't today." }
  ],
  tx: { ti: "Una decisión inesperada", b: `A Clara le ofrecieron un puesto en otra ciudad. <u>Le ilusionaba que el proyecto fuera</u> innovador, pero <u>le preocupaba que su familia tuviera</u> que mudarse. Su pareja le dijo: «<u>No creo que sea</u> una decisión que debas tomar con prisa. Aunque <u>el cambio parezca</u> difícil, quizá <u>te venga</u> bien». Clara pidió unos días. <u>Cuando supo</u> que podría trabajar a distancia, aceptó. Se alegró de que <u>la empresa hubiera sido</u> flexible y de que <u>su familia la apoyara</u>.` },
  q: [["¿Qué le preocupaba a Clara?", ["Que el proyecto fuera nuevo","Que su familia tuviera que mudarse","Que no pudiera trabajar"], 1],["¿Qué hizo posible que aceptara?",["El trabajo a distancia","Un aumento de sueldo","La mudanza inmediata"],0]],
  sp: ["¿Qué decisión importante te alegra haber tomado?","¿Qué te preocupa que pueda ocurrir en tu ciudad?","Expresa una opinión y después matízala con «aunque»."]
},
{
  id: "b2-condicionales",
  lvl: "B2",
  k: "g",
  t: "Condicionales y situaciones hipotéticas",
  en: "Conditionals and hypothetical situations",
  ic: "🔀",
  th: `<div class="card"><h2>Si + hipótesis <span class="en">(if-clauses)</span></h2>
<table><tr><th>Situación</th><th>Forma</th><th>Ejemplo</th></tr><tr><td>Posible</td><td>si + presente, futuro</td><td>Si <b>ahorras</b>, <b>podrás</b> viajar.</td></tr><tr><td>Hipotética</td><td>si + imperfecto de subjuntivo, condicional</td><td>Si <b>viviera</b> cerca, <b>iría</b> andando.</td></tr><tr><td>Irreal en el pasado</td><td>si + pluscuamperfecto de subjuntivo, condicional compuesto</td><td>Si <b>hubiera salido</b> antes, <b>habría llegado</b>.</td></tr></table>
<p>En la condición hipotética se dice <b>si tuviera</b>, no <s>si tendría</s>. También: <i>De haberlo sabido, te habría llamado.</i></p></div>
<div class="tip"><b>Fíjate:</b> «Si hubiera estudiado, habría aprobado» habla de una oportunidad pasada que ya no se puede cambiar.</div>`,
  voc: [["🧭","si tuviera la oportunidad","if I had the opportunity"],["⏳","de haberlo sabido","had I known"],["💡","de lo contrario","otherwise"],["🌧️","si no fuera por","if it weren't for"],["🔁","en ese caso","in that case"],["🎯","habría podido","would have been able to"]],
  ex: [
    { q: "Si tuviera más tiempo, ___ otro idioma.", o: ["estudio","estudiaría","habría estudiado"], a: 1, t: "Hipótesis presente: imperfecto de subjuntivo + condicional." },
    { q: "Si ___ antes, no habríamos perdido el tren.", o: ["salíamos","hubiéramos salido","saldremos"], a: 1, t: "Condición irreal en el pasado." },
    { q: "Si me lo ___, te habría ayudado. (decir)", a: ["hubieras dicho","hubieses dicho"], t: "Pluscuamperfecto de subjuntivo." },
    { w: "De haberlo sabido, habría reservado una mesa.", t: "Had I known, I would have booked a table." },
    { w: "Si yo estuviera en tu lugar, aceptaría la propuesta.", t: "If I were in your position, I would accept the offer." }
  ],
  tx: { ti: "La oportunidad perdida", b: `«<u>Si hubiera leído</u> el correo con atención, <u>habría visto</u> la fecha límite», pensó Daniel. La beca habría cubierto el curso que tanto le interesaba. <u>Si aún estuviera abierta</u> la convocatoria, volvería a solicitarla, pero ya se había cerrado. Su tutora lo animó: «<u>De haberlo sabido</u> antes, te habría avisado. Si preparas la próxima solicitud con tiempo, <u>tendrás</u> muchas posibilidades». Daniel decidió apuntar los plazos en el calendario.` },
  q: [["¿Por qué no solicitó la beca?",["No encontró el correo","Se le pasó la fecha límite","No le interesaba el curso"],1],["¿Qué hará Daniel para evitarlo?",["Apuntará los plazos","Cambiará de tutora","Esperará otra invitación"],0]],
  sp: ["¿Qué habrías hecho de haber elegido otra carrera?","Si pudieras cambiar una norma de tu ciudad, ¿cuál cambiarías?","¿Qué oportunidad no dejarías pasar si se presentara?"]
},
{
  id: "b2-relativas",
  lvl: "B2",
  k: "g",
  t: "Oraciones de relativo y antecedente",
  en: "Relative clauses and antecedents",
  ic: "🧩",
  th: `<div class="card"><h2>Especificar o explicar <span class="en">(defining or adding information)</span></h2>
<p>Sin comas, la relativa <b>identifica</b>: «Las personas <u>que llegan tarde</u> esperan fuera». Con comas, añade un dato sobre un referente ya identificado: «Las personas, <u>que llegaron tarde</u>, esperaron fuera».</p>
<table><tr><th>Relativo</th><th>Uso</th><th>Ejemplo</th></tr><tr><td>que</td><td>Personas y cosas</td><td>El informe <b>que</b> leí.</td></tr><tr><td>quien / quienes</td><td>Personas, a menudo con preposición</td><td>La colega con <b>quien</b> hablé.</td></tr><tr><td>el cual / la cual</td><td>Registro formal; evita ambigüedad</td><td>Una medida, <b>la cual</b> se revisará.</td></tr><tr><td>lo que</td><td>Idea o hecho completo</td><td><b>Lo que</b> propones es viable.</td></tr></table>
<p>Usa subjuntivo cuando el antecedente es desconocido, hipotético o inexistente: «Busco a alguien que <b>sepa</b> japonés».</p></div>`,
  voc: [["🧩","el antecedente","antecedent"],["🔗","con quien","with whom"],["📄","el cual","which (formal)"],["❓","quienquiera que","whoever"],["🔍","lo que","what / that which"],["🧑‍💼","una persona que sepa","someone who knows"]],
  ex: [
    { q: "Buscamos una sala que ___ capacidad para cien personas.", o: ["tiene","tenga","tuvo"], a: 1, t: "La sala todavía no está identificada: subjuntivo." },
    { q: "El artículo, ___ se publicó ayer, analiza el tema.", o: ["quien","el cual","lo que"], a: 1, t: "El cual concuerda con el antecedente masculino singular." },
    { q: "La investigadora con ___ colaboro trabaja en Lima.", a: ["quien"], t: "Con personas tras preposición: con quien." },
    { w: "Lo que más me sorprendió fue la rapidez de la respuesta.", t: "What surprised me most was the speed of the response." },
    { w: "No conozco a nadie que pueda traducir ese documento.", t: "I don't know anyone who can translate that document." }
  ],
  tx: { ti: "El equipo que hacía falta", b: `La asociación publicó una oferta para contratar a alguien <u>que tuviera experiencia</u> en mediación. La convocatoria, <u>que se difundió</u> en varias universidades, recibió cientos de solicitudes. Al final eligieron a Inés, <u>con quien</u> ya habían colaborado en un proyecto local. <u>Lo que más valoró</u> el comité fue su capacidad para escuchar. El plan, <u>el cual comenzará</u> el mes próximo, conectará a vecinos de distintos barrios.` },
  q: [["¿Qué buscaba la asociación?",["Una persona con experiencia en mediación","Una universidad nueva","Un traductor"],0],["¿Qué valoró especialmente el comité?",["Su formación técnica","Su capacidad de escuchar","Su disponibilidad"],1]],
  sp: ["Describe a alguien con quien hayas aprendido algo importante.","¿Qué característica debería tener un trabajo que te interese?","Explica lo que más valoras de tu barrio usando oraciones de relativo."]
},
{
  id: "b2-pasiva",
  lvl: "B2",
  k: "g",
  t: "Pasiva, se y construcciones impersonales",
  en: "Passive and impersonal constructions",
  ic: "🔄",
  th: `<div class="card"><h2>Varias formas de centrar la información</h2>
<table><tr><th>Construcción</th><th>Ejemplo</th><th>Enfoque</th></tr><tr><td>Pasiva con ser</td><td>El puente <b>fue diseñado</b> por una arquitecta.</td><td>Resultado y agente</td></tr><tr><td>Pasiva refleja</td><td><b>Se publicaron</b> los resultados.</td><td>Hecho; agente no relevante</td></tr><tr><td>Impersonal con se</td><td><b>Se vive</b> bien aquí.</td><td>Personas en general</td></tr><tr><td>Impersonal con tercera persona plural</td><td><b>Dicen</b> que habrá cambios.</td><td>Fuente imprecisa</td></tr></table>
<p>La pasiva refleja concuerda: <i>se vende una casa</i> / <i>se venden casas</i>. La impersonal con <i>a</i> personal queda en singular: <i>Se entrevistó a las candidatas</i>.</p></div>
<div class="tip"><b>Estilo:</b> En español suele preferirse «Se publicaron los datos» frente a la pasiva larga «Los datos fueron publicados».</div>`,
  voc: [["📰","se anunció","it was announced"],["🏗️","fue construido","was built"],["📢","se solicita","wanted / required"],["👥","se entrevistó a","people were interviewed"],["📊","los resultados","results"],["✍️","el agente","agent (grammar)"]],
  ex: [
    { q: "En este centro ___ cursos de español.", o: ["se ofrece","se ofrecen","es ofrecido"], a: 1, t: "La pasiva refleja concuerda con «cursos»." },
    { q: "Ayer ___ a todas las candidatas.", o: ["se entrevistaron","se entrevistó","fueron entrevista"], a: 1, t: "Con «a» personal, la impersonal con se va en singular." },
    { q: "La novela ___ por una autora chilena.", a: ["fue escrita","ha sido escrita"], t: "Pasiva con ser: ser conjugado + participio concordado." },
    { w: "Se buscan voluntarios para el proyecto.", t: "Volunteers are wanted for the project." },
    { w: "El edificio fue rehabilitado por el ayuntamiento.", t: "The building was restored by the city council." }
  ],
  tx: { ti: "La biblioteca del barrio", b: `Ayer <u>se inauguró</u> una biblioteca en el antiguo mercado. Durante la reforma <u>se conservaron</u> las columnas originales y <u>se instalaron</u> paneles solares. La obra <u>fue financiada</u> por el ayuntamiento y varias asociaciones. Para el puesto de coordinación <u>se entrevistó</u> a doce personas. Se espera que el espacio abra también los fines de semana, porque en el barrio <u>se necesitan</u> más lugares de estudio.` },
  q: [["¿Dónde se instaló la biblioteca?",["En una escuela","En el antiguo mercado","En el ayuntamiento"],1],["¿Quién financió la reforma?",["El ayuntamiento y asociaciones","Una empresa extranjera","Los estudiantes"],0]],
  sp: ["¿Qué edificio de tu ciudad debería rehabilitarse?","Cuenta una noticia sin decir quién realizó la acción.","¿Qué servicios se necesitan en tu barrio?"]
},
{
  id: "b2-conectores",
  lvl: "B2",
  k: "g",
  t: "Conectores para argumentar",
  en: "Connectors for argumentation",
  ic: "🧵",
  th: `<div class="card"><h2>Organiza el razonamiento <span class="en">(structure your argument)</span></h2>
<table><tr><th>Función</th><th>Conectores</th><th>Ejemplo</th></tr><tr><td>Oposición</td><td>sin embargo, no obstante, ahora bien</td><td>Es una medida costosa; <b>sin embargo</b>, sería eficaz.</td></tr><tr><td>Concesión</td><td>aunque, pese a que, por más que</td><td><b>Aunque</b> haya dudas, conviene probar.</td></tr><tr><td>Causa / consecuencia</td><td>puesto que, dado que / por consiguiente, de ahí que</td><td>Faltan datos; <b>de ahí que</b> pidamos un estudio.</td></tr><tr><td>Ejemplificación</td><td>en concreto, por ejemplo</td><td>Hay alternativas; <b>en concreto</b>, el tren.</td></tr></table>
<p><i>De ahí que</i> suele ir con subjuntivo. <i>A pesar de que</i> admite indicativo si el hecho se presenta como conocido y subjuntivo si es hipotético.</p></div>`,
  voc: [["⚖️","sin embargo","however"],["🔎","en concreto","specifically"],["🔗","de ahí que","hence (subjunctive)"],["🪜","por consiguiente","consequently"],["🛡️","ahora bien","that said"],["🧭","desde esta perspectiva","from this perspective"]],
  ex: [
    { q: "La propuesta es ambiciosa; ___, requiere más financiación.", o: ["por consiguiente","sin embargo","en concreto"], a: 1, t: "Sin embargo introduce contraste." },
    { q: "No hay pruebas suficientes, de ahí que ___ prudente esperar.", o: ["es","sea","será"], a: 1, t: "De ahí que + subjuntivo." },
    { q: "___ el coste inicial, el ahorro a largo plazo será considerable.", a: ["A pesar del","Pese al"], t: "A pesar de + sustantivo." },
    { w: "La medida puede ser eficaz; ahora bien, hace falta evaluarla.", t: "The measure may be effective; that said, it needs to be evaluated." },
    { w: "No se han publicado los datos; de ahí que no podamos concluir nada.", t: "The data have not been published; hence, we cannot conclude anything." }
  ],
  tx: { ti: "Una propuesta para el transporte", b: `El uso del coche particular ha aumentado. <u>Ahora bien</u>, ampliar las carreteras no resolvería por sí solo el problema. <u>Dado que</u> el transporte público no llega a todos los barrios, conviene mejorar las conexiones. <u>En concreto</u>, podrían aumentarse las frecuencias y crearse carriles exclusivos. La inversión inicial sería considerable; <u>sin embargo</u>, reduciría la congestión. <u>De ahí que</u> varios expertos <u>recomienden</u> combinar medidas en lugar de apostar por una única solución.` },
  q: [["¿Qué problema se describe?",["El aumento del uso del coche","La falta de carreteras","El precio del combustible"],0],["¿Qué enfoque recomiendan los expertos?",["Una única medida","Combinar varias medidas","Eliminar el transporte público"],1]],
  sp: ["Defiende una propuesta y presenta una objeción con «ahora bien».","¿Qué problema de tu ciudad requiere una solución a largo plazo?","Resume dos perspectivas distintas sobre el teletrabajo."]
},
{
  id: "b2-perifrasis",
  lvl: "B2",
  k: "g",
  t: "Perífrasis y aspecto verbal",
  en: "Verb phrases and aspect",
  ic: "⏱️",
  th: `<div class="card"><h2>El momento y el desarrollo de la acción</h2>
<table><tr><th>Perífrasis</th><th>Significado</th><th>Ejemplo</th></tr><tr><td>llevar + gerundio</td><td>Duración hasta ahora</td><td><b>Lleva trabajando</b> tres años aquí.</td></tr><tr><td>acabar de + infinitivo</td><td>Acción recién terminada</td><td><b>Acabo de enviar</b> el informe.</td></tr><tr><td>seguir / continuar + gerundio</td><td>Continuidad</td><td><b>Sigue buscando</b> una solución.</td></tr><tr><td>dejar de + infinitivo</td><td>Interrupción</td><td><b>Dejó de fumar</b> el año pasado.</td></tr><tr><td>llevar + participio</td><td>Resultado acumulado</td><td><b>Llevamos revisadas</b> veinte páginas.</td></tr></table>
<p>Con <i>llevar</i> se expresa el tiempo transcurrido: <i>Llevo dos meses estudiando</i>. No se usa <i>desde</i> con una duración: <i>desde enero</i> sí, <i>dos meses</i> sí.</p></div>`,
  voc: [["⌛","llevar + gerundio","to have been doing"],["✅","acabar de","to have just"],["🔁","seguir haciendo","to keep doing"],["⏹️","dejar de","to stop doing"],["📚","llevar revisado","to have reviewed"],["🚦","estar a punto de","to be about to"]],
  ex: [
    { q: "Llevamos ___ este proyecto desde enero.", o: ["coordinar","coordinando","coordinado"], a: 1, t: "Llevar + gerundio expresa duración." },
    { q: "La reunión ___ de empezar; entra.", o: ["acaba","sigue","deja"], a: 0, t: "Acabar de indica una acción recién ocurrida." },
    { q: "Ya ___ corregidas treinta redacciones.", a: ["llevamos"], t: "Llevar + participio concuerda con el objeto: corregidas." },
    { w: "Sigo aprendiendo cosas nuevas en mi trabajo.", t: "I keep learning new things at work." },
    { w: "Acabamos de recibir los resultados.", t: "We have just received the results." }
  ],
  tx: { ti: "Una investigación en marcha", b: `El equipo <u>lleva investigando</u> el uso del agua desde hace dos años. Al principio, sus integrantes <u>seguían analizando</u> datos de distintas regiones sin encontrar un patrón claro. Hace poco <u>acabaron de revisar</u> las mediciones y <u>llevan publicados</u> tres informes. Aún <u>están a punto de presentar</u> una propuesta. Aunque el estudio no ha terminado, <u>siguen colaborando</u> con las comunidades locales.` },
  q: [["¿Cuánto tiempo lleva investigando el equipo?",["Unos meses","Dos años","Tres años"],1],["¿Qué sigue pendiente?",["Presentar una propuesta","Revisar los datos","Publicar el primer informe"],0]],
  sp: ["¿Cuánto tiempo llevas aprendiendo español?","¿Qué acabas de hacer y qué sigues haciendo esta semana?","Habla de un proyecto que esté a punto de comenzar."]
},
{
  id: "b2-nominalizacion",
  lvl: "B2",
  k: "g",
  t: "Nominalización y estilo formal",
  en: "Nominalization and formal style",
  ic: "📝",
  th: `<div class="card"><h2>De la acción al concepto</h2>
<p>La nominalización convierte acciones o cualidades en nombres. Es frecuente en informes, prensa y textos académicos.</p>
<table><tr><th>Verbo / adjetivo</th><th>Nombre</th><th>Ejemplo</th></tr><tr><td>investigar</td><td>la investigación</td><td>La investigación <b>del equipo</b> continúa.</td></tr><tr><td>reducir</td><td>la reducción</td><td>La reducción <b>de emisiones</b> es prioritaria.</td></tr><tr><td>posible</td><td>la posibilidad</td><td>Existe la posibilidad <b>de revisar</b> el acuerdo.</td></tr><tr><td>aprobar</td><td>la aprobación</td><td>La aprobación <b>del presupuesto</b> fue unánime.</td></tr></table>
<p>En estilo formal, sustituye secuencias repetitivas por sustantivos con complementos claros, sin perder quién hace qué.</p></div>
<div class="tip"><b>Claridad:</b> No encadenes demasiados nombres abstractos. «El comité revisó la norma» suele ser más claro que «La realización de la revisión de la norma…».</div>`,
  voc: [["🔬","la investigación","research"],["📉","la reducción","reduction"],["✅","la aprobación","approval"],["🔄","la mejora","improvement"],["📣","la propuesta","proposal"],["📊","el incremento","increase"]],
  ex: [
    { q: "La ___ del consumo de agua es un objetivo prioritario. (reducir)", a: ["reducción","reduccion"], t: "Reducir se nominaliza como la reducción." },
    { q: "El comité ___ la solicitud ayer.", o: ["aprobó","aprobación","aprobando"], a: 0, t: "Aquí se necesita la acción verbal conjugada." },
    { q: "La propuesta pretende ___ el acceso a la vivienda. (mejorar)", a: ["mejorar"], t: "Pretender + infinitivo." },
    { w: "La aprobación del proyecto permitió iniciar las obras.", t: "The project's approval made it possible to start the work." },
    { w: "El equipo propuso reducir el consumo energético.", t: "The team proposed reducing energy consumption." }
  ],
  tx: { ti: "Un informe de movilidad", b: `El informe analiza la <u>reducción</u> del tráfico en el centro. Según sus autores, la <u>ampliación</u> de la red de autobuses y la <u>creación</u> de carriles bici han contribuido a una <u>mejora</u> de la calidad del aire. La <u>evaluación</u> de los datos confirma un descenso de los desplazamientos en coche. El equipo recomienda mantener las medidas y estudiar la <u>posibilidad</u> de extenderlas a otros barrios.` },
  q: [["¿Qué analiza el informe?",["La reducción del tráfico","La construcción de viviendas","El precio de los autobuses"],0],["¿Qué recomienda el equipo?",["Cancelar las medidas","Extenderlas a otros barrios","Sustituir los carriles bici"],1]],
  sp: ["Resume una mejora reciente de tu ciudad usando dos nominalizaciones.","¿Qué ventajas y riesgos tiene el estilo formal?","Explica una recomendación de tu trabajo o estudios."]
},
{
  id: "b2-discurso",
  lvl: "B2",
  k: "g",
  t: "Discurso referido y cambios de perspectiva",
  en: "Reported speech and shifts in perspective",
  ic: "💬",
  th: `<div class="card"><h2>Reproducir palabras con precisión</h2>
<table><tr><th>Estilo directo</th><th>Estilo indirecto</th></tr><tr><td>«<b>Estoy</b> preparada».</td><td>Dijo que <b>estaba</b> preparada.</td></tr><tr><td>«<b>He terminado</b>».</td><td>Afirmó que <b>había terminado</b>.</td></tr><tr><td>«<b>Lo entregaré mañana</b>».</td><td>Prometió que <b>lo entregaría al día siguiente</b>.</td></tr><tr><td>«<b>Ven aquí</b>».</td><td>Me pidió que <b>fuera allí</b>.</td></tr></table>
<p>Si el verbo introductor está en pasado, suelen cambiar los tiempos, los pronombres y las referencias temporales y espaciales. Una orden o petición se expresa con <b>pedir que + subjuntivo</b>.</p></div>`,
  voc: [["🗣️","afirmar que","to state that"],["📢","sostener que","to maintain that"],["🙏","pedir que","to ask that"],["📅","al día siguiente","the following day"],["📍","allí","there"],["🤝","comprometerse a","to commit to"]],
  ex: [
    { q: "«Mañana terminaré el informe». Dijo que ___ al día siguiente.", o: ["terminará","terminaría","terminó"], a: 1, t: "El futuro pasa a condicional en el estilo indirecto referido desde el pasado." },
    { q: "«Ven aquí». Me pidió que ___ allí.", o: ["vengo","fuera","iré"], a: 1, t: "Una petición se expresa con pedir que + subjuntivo." },
    { q: "«Ya he llamado». Aseguró que ya ___ llamado.", a: ["había"], t: "El pretérito perfecto pasa normalmente a pluscuamperfecto." },
    { w: "La portavoz afirmó que las conversaciones continuarían.", t: "The spokesperson stated that the talks would continue." },
    { w: "Nos pidió que entregáramos los documentos al día siguiente.", t: "They asked us to hand in the documents the following day." }
  ],
  tx: { ti: "La rueda de prensa", b: `La portavoz <u>afirmó que las conversaciones habían avanzado</u>, aunque reconoció que todavía quedaban asuntos pendientes. También <u>aseguró que publicarían</u> un nuevo calendario el viernes. Cuando un periodista preguntó por los retrasos, ella <u>respondió que el equipo estaba revisando</u> cada propuesta. Al final, <u>pidió a los asistentes que enviaran</u> sus preguntas por escrito.` },
  q: [["¿Qué publicaría el equipo?",["Un nuevo calendario","Una lista de asistentes","Un informe financiero"],0],["¿Cómo pidió enviar las preguntas?",["Por teléfono","Por escrito","En una reunión privada"],1]],
  sp: ["Resume una noticia que hayas leído y atribuye las opiniones a sus fuentes.","¿Qué te pidió alguien recientemente? Cuéntalo en estilo indirecto.","Transforma una promesa pasada en estilo indirecto."]
}
);
