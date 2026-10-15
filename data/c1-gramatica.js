/* Camino al Español · Nivel C1 · contenido */
window.CAMINO = window.CAMINO || [];
window.CAMINO.push(
{
  id: "c1-subjuntivo",
  lvl: "C1",
  k: "g",
  t: "Subjuntivo y correlación temporal",
  en: "Subjunctive and sequence of tenses",
  ic: "🎚️",
  th: `<div class="card"><h2>El tiempo depende del punto de vista</h2>
<table><tr><th>Verbo principal</th><th>Acción simultánea o posterior</th><th>Acción anterior</th></tr><tr><td>Presente / futuro</td><td>Espero que <b>llegue</b>.</td><td>Me alegra que <b>haya llegado</b>.</td></tr><tr><td>Pasado / condicional</td><td>Esperaba que <b>llegara</b>.</td><td>Me alegró que <b>hubiera llegado</b>.</td></tr></table>
<p>El imperfecto de subjuntivo también aparece en fórmulas de cortesía: <i>Quisiera hacer una consulta</i>. Si el sujeto es el mismo, suele preferirse el infinitivo: <i>Deseo participar</i>.</p>
<p>La elección modal aporta perspectiva: <i>No negó que estaba cansado</i> presenta un hecho; <i>No negó que estuviera cansado</i> lo deja en segundo plano o lo enfoca como información no afirmada.</p></div>
<div class="tip"><b>Atención:</b> No es una correspondencia mecánica. El hablante puede mantener el presente de subjuntivo para una situación vigente: «Me pidió que le llame mañana».</div>`,
  voc: [["🕰️","simultaneidad","simultaneity"],["⏮️","anterioridad","anteriority"],["💬","quisiera","I would like"],["🔎","poner en duda","to call into question"],["🧭","el punto de vista","point of view"],["🧩","la correlación temporal","sequence of tenses"]],
  ex: [
    { q: "La directora pidió que el equipo ___ el informe antes del viernes.", o: ["entregue","entregara","entregará"], a: 1, t: "El verbo principal en pasado suele llevar imperfecto de subjuntivo para una acción posterior." },
    { q: "Me sorprendió que ya ___ todos los datos.", o: ["hubieran analizado","analizaran","analizarán"], a: 0, t: "La acción es anterior a «me sorprendió»: pluscuamperfecto de subjuntivo." },
    { q: "Me alegra que ___ venir a la reunión. (tú, poder)", a: ["hayas podido"], t: "Acción anterior a la reacción: pretérito perfecto de subjuntivo." },
    { w: "Quisiera saber si sería posible aplazar la entrevista.", t: "I would like to know whether it would be possible to postpone the interview." },
    { w: "Dudaba que la medida tuviera los efectos esperados.", t: "I doubted that the measure would have the expected effects." }
  ],
  tx: { ti: "La revisión del proyecto", b: `La coordinadora pidió que cada área <u>presentara</u> sus conclusiones y se alegró de que el equipo <u>hubiera detectado</u> varios errores a tiempo. Aunque algunos asistentes dudaban de que la propuesta <u>fuera</u> viable, nadie negó que <u>había</u> mejorado el plan inicial. La directora sugirió que <u>se revisaran</u> los costes antes de que el comité <u>tomara</u> una decisión definitiva.` },
  q: [["¿Qué pidió la coordinadora?",["Que cada área presentara conclusiones","Que se aplazara la reunión","Que se publicaran los costes"],0],["¿Qué debía ocurrir antes de la decisión?",["Revisar los costes","Cambiar a la directora","Aprobar otro proyecto"],0]],
  sp: ["¿Qué te alegró que alguien hubiera hecho por ti?","Explica una petición que te hicieran en el pasado.","Formula una petición cortés usando «quisiera»."]
},
{
  id: "c1-condicionales",
  lvl: "C1",
  k: "g",
  t: "Hipótesis complejas y condicionales mixtas",
  en: "Complex and mixed conditionals",
  ic: "🔀",
  th: `<div class="card"><h2>Relacionar pasado, presente y consecuencia</h2>
<table><tr><th>Relación</th><th>Ejemplo</th></tr><tr><td>Condición y resultado pasados</td><td>Si <b>hubiera aceptado</b>, <b>habría trabajado</b> en Bogotá.</td></tr><tr><td>Condición pasada, resultado actual</td><td>Si <b>hubiera ahorrado</b>, ahora <b>tendría</b> más margen.</td></tr><tr><td>Condición actual, resultado pasado</td><td>Si <b>fuera</b> más organizado, no <b>habría olvidado</b> la cita.</td></tr></table>
<p>Alternativas formales: <i>De haberlo sabido…</i>, <i>En caso de que surgiera algún problema…</i>, <i>Siempre que se cumplan los requisitos…</i>.</p>
<p>«Como + subjuntivo» puede introducir una advertencia: <i>Como no confirmes hoy, perderás la plaza</i>.</p></div>
<div class="tip"><b>Clave:</b> Primero decide cuándo se sitúa la condición y cuándo la consecuencia; después elige los tiempos de cada parte por separado.</div>`,
  voc: [["🔀","una condición mixta","mixed condition"],["🧭","siempre que","provided that"],["⚠️","como no…","if you don't…"],["📌","en caso de que","in the event that"],["🪞","de haberlo sabido","had I known"],["🔓","de lo contrario","otherwise"]],
  ex: [
    { q: "Si hubiera aceptado aquel trabajo, ahora ___ en otro país.", o: ["viviría","habría vivido","viva"], a: 0, t: "Condición irreal pasada con consecuencia presente." },
    { q: "Si ___ más atento, no habrías enviado el archivo equivocado.", o: ["fueras","hubieras sido","serías"], a: 1, t: "La condición pasada exige pluscuamperfecto de subjuntivo." },
    { q: "Te dejaré las llaves siempre que me ___ la dirección.", a: ["envíes","mandes"], t: "Siempre que + subjuntivo expresa condición." },
    { w: "De haberlo previsto, habríamos reservado una sala más grande.", t: "Had we foreseen it, we would have booked a larger room." },
    { w: "Como no confirmes la asistencia hoy, cancelaremos la reserva.", t: "If you don't confirm attendance today, we'll cancel the booking." }
  ],
  tx: { ti: "Una decisión con consecuencias", b: `Si el equipo <u>hubiera previsto</u> que tantas personas asistirían, ahora <u>tendría</u> una sala más amplia. La convocatoria se difundió más de lo esperado. «<u>De haberlo sabido</u>, habríamos limitado las inscripciones», explicó la organizadora. En la próxima edición, ampliarán el espacio, <u>siempre que</u> el presupuesto <u>lo permita</u>. Como no <u>confirmen</u> el local esta semana, tendrán que buscar otra sede.` },
  q: [["¿Qué habría cambiado si lo hubieran previsto?",["Habrían elegido una sala mayor","Habrían cancelado el evento","Habrían reducido el presupuesto"],0],["¿Qué condición plantean para ampliar el espacio?",["Que el presupuesto lo permita","Que haya menos asistentes","Que se cambie la fecha"],0]],
  sp: ["¿Qué situación pasada tiene todavía efectos en tu presente?","¿Qué habrías hecho de haber sabido algo antes?","Inventa una advertencia que empiece con «Como no…»."]
},
{
  id: "c1-concesion",
  lvl: "C1",
  k: "g",
  t: "Concesión y contraste sutil",
  en: "Concession and nuanced contrast",
  ic: "⚖️",
  th: `<div class="card"><h2>Admitir una objeción sin abandonar la tesis</h2>
<table><tr><th>Conector</th><th>Uso</th><th>Ejemplo</th></tr><tr><td>aunque</td><td>Indicativo: hecho conocido; subjuntivo: supuesto o irrelevante</td><td><b>Aunque cuesta</b>, lo mantendremos. / <b>Aunque cueste</b>, lo mantendremos.</td></tr><tr><td>por más que / por mucho que</td><td>Subjuntivo; esfuerzo o intensidad no cambia el resultado</td><td><b>Por mucho que insista</b>, no cambiará la decisión.</td></tr><tr><td>pese a que / a pesar de que</td><td>Hecho o hipótesis</td><td><b>Pese a que llovía</b>, salimos.</td></tr><tr><td>y eso que</td><td>Hecho inesperado, registro conversacional</td><td>Llegó tarde, <b>y eso que</b> salió pronto.</td></tr></table>
<p>«Si bien» introduce una concesión formal; «ahora bien» marca el giro hacia el argumento principal.</p></div>`,
  voc: [["⚖️","si bien","although (formal)"],["🌧️","y eso que","even though"],["🔁","por más que","no matter how much"],["🛡️","aun así","even so"],["🧭","ahora bien","that said"],["🧱","lejos de","far from"]],
  ex: [
    { q: "___ los datos son preliminares, ofrecen una primera orientación.", o: ["Aunque","Por más que","Aun así"], a: 0, t: "Se presenta como hecho conocido: aunque + indicativo." },
    { q: "Por mucho que ___, no conseguiremos acabar hoy.", o: ["trabajamos","trabajemos","trabajaremos"], a: 1, t: "Por mucho que + subjuntivo." },
    { q: "El cambio, lejos de ___ el problema, lo agravó.", a: ["resolver","solucionar"], t: "Lejos de + infinitivo." },
    { w: "Si bien el proyecto es ambicioso, su impacto aún está por demostrar.", t: "While the project is ambitious, its impact remains to be demonstrated." },
    { w: "Aun así, conviene analizar las consecuencias a largo plazo.", t: "Even so, it is worth analysing the long-term consequences." }
  ],
  tx: { ti: "Una reforma debatida", b: `<u>Si bien la reforma ha simplificado</u> algunos trámites, todavía genera dudas. <u>Aunque el plazo parece</u> suficiente, varias organizaciones sostienen que no lo es. <u>Por mucho que se haya ampliado</u> la información disponible, hay colectivos que no han podido participar. <u>Ahora bien</u>, suspender la reforma tampoco resolvería las dificultades; <u>aun así</u>, habría que revisar sus efectos antes de extenderla.` },
  q: [["¿Qué aspecto positivo se reconoce?",["Se han simplificado algunos trámites","Se ha ampliado el plazo para todos","Se ha suspendido la reforma"],0],["¿Qué propone el texto?",["Revisar los efectos antes de extenderla","Ampliarla de inmediato","Eliminar todos los trámites"],0]],
  sp: ["Defiende una idea y reconoce una objeción con «si bien».","¿Qué cambio sería útil aunque implicara dificultades?","Da un ejemplo de algo que no haya mejorado por mucho que se haya intentado."]
},
{
  id: "c1-relativas",
  lvl: "C1",
  k: "g",
  t: "Relativas complejas: cuyo, lo cual y cuanto",
  en: "Advanced relative clauses",
  ic: "🧩",
  th: `<div class="card"><h2>Precisión y cohesión <span class="en">(precision and cohesion)</span></h2>
<table><tr><th>Forma</th><th>Uso</th><th>Ejemplo</th></tr><tr><td>cuyo / cuya / cuyos / cuyas</td><td>Posesión; concuerda con lo poseído</td><td>Una autora <b>cuyas novelas</b> leí.</td></tr><tr><td>lo cual</td><td>Retoma una idea anterior completa</td><td>Cancelaron el vuelo, <b>lo cual</b> causó retrasos.</td></tr><tr><td>cuanto / cuanta / cuantos / cuantas</td><td>Todo lo que; registro formal</td><td>Compartió <b>cuanto sabía</b>.</td></tr><tr><td>donde / adonde</td><td>Lugar / dirección</td><td>El barrio <b>donde nació</b>; el lugar <b>adonde vamos</b>.</td></tr></table>
<p>Con preposición, usa artículo + que o quien: <i>el asunto sobre el que debatimos</i>, <i>la persona a quien se dirigió</i>. Las explicativas se aíslan con comas.</p></div>`,
  voc: [["🧬","cuyo","whose"],["📌","lo cual","which (referring to a clause)"],["📚","cuanto","everything that"],["🗺️","adonde","to where"],["🧭","en virtud de lo cual","by virtue of which"],["🔗","el asunto sobre el que","the matter about which"]],
  ex: [
    { q: "Conocimos a una investigadora ___ trabajo se centra en el clima.", o: ["que","cuyo","la cual"], a: 1, t: "Cuyo concuerda con «trabajo», lo poseído." },
    { q: "El museo cerró por reformas, ___ sorprendió a los visitantes.", o: ["lo cual","cuyo","cuanto"], a: 0, t: "Lo cual retoma toda la oración anterior." },
    { q: "La asociación compartió ___ había aprendido.", a: ["cuanto","todo cuanto"], t: "Cuanto equivale a todo lo que en registro formal." },
    { w: "La autora, cuyas obras se han traducido a varios idiomas, dará una charla.", t: "The author, whose works have been translated into several languages, will give a talk." },
    { w: "No explicó los motivos por los cuales decidió retirarse.", t: "They did not explain the reasons why they decided to withdraw." }
  ],
  tx: { ti: "Un archivo abierto", b: `La universidad digitalizó el archivo de una fotógrafa <u>cuyas imágenes</u> documentan la vida portuaria. El catálogo, <u>lo cual</u> facilitó el acceso, permite consultar miles de documentos. Las investigadoras visitaron el barrio <u>donde trabajó</u> la artista y entrevistaron a varias personas <u>a quienes</u> había retratado. La familia compartió <u>cuanto conservaba</u>, incluidos cuadernos en los que explicaba sus métodos.` },
  q: [["¿Qué documentan las imágenes?",["La vida portuaria","La historia universitaria","Los métodos de digitalización"],0],["¿Qué compartió la familia?",["Todo lo que conservaba","Solo las fotografías","El catálogo universitario"],0]],
  sp: ["Describe a una persona cuyas ideas te hayan influido.","Explica una decisión reciente, lo cual te haya sorprendido.","¿Qué lugar visitarías y por qué? Usa «adonde»."]
},
{
  id: "c1-impersonales",
  lvl: "C1",
  k: "g",
  t: "Impersonalidad y foco informativo",
  en: "Impersonal structures and information focus",
  ic: "📰",
  th: `<div class="card"><h2>Elegir qué información destacar</h2>
<table><tr><th>Estructura</th><th>Ejemplo</th><th>Enfoque</th></tr><tr><td>Se + verbo singular</td><td><b>Se entrevistó</b> a las portavoces.</td><td>Agente humano no especificado; «a» personal</td></tr><tr><td>Se + verbo concordado</td><td><b>Se aprobaron</b> las enmiendas.</td><td>Pasiva refleja; el sujeto concuerda</td></tr><tr><td>Ser + participio</td><td>Las enmiendas <b>fueron aprobadas</b> por unanimidad.</td><td>Resultado o agente explícito</td></tr><tr><td>Verbo en 3.ª plural</td><td><b>Han anunciado</b> nuevas medidas.</td><td>Fuente indeterminada</td></tr></table>
<p>En registros formales, <i>cabe señalar</i>, <i>conviene recordar</i> y <i>se estima que</i> permiten presentar análisis sin personalizar al emisor. Evita el «se» ambiguo si no queda claro quién realiza la acción.</p></div>`,
  voc: [["📰","cabe señalar","it should be noted"],["📊","se estima que","it is estimated that"],["📢","han anunciado","it has been announced"],["✅","fueron aprobadas","were approved"],["🧩","la pasiva refleja","reflex passive"],["🔎","el foco informativo","information focus"]],
  ex: [
    { q: "Ayer ___ a las representantes de las asociaciones.", o: ["se entrevistaron","se entrevistó","fueron entrevistó"], a: 1, t: "Con «a» personal, la impersonal con se se mantiene en singular." },
    { q: "En la sesión ___ varias enmiendas.", o: ["se aprobó","se aprobaron","fueron aprobar"], a: 1, t: "La pasiva refleja concuerda con «enmiendas»." },
    { q: "___ recordar que el plazo termina el lunes.", a: ["Conviene","Cabe"], t: "Expresiones impersonales formales: conviene recordar, cabe señalar." },
    { w: "Se estima que la demanda crecerá durante los próximos meses.", t: "Demand is expected to grow over the coming months." },
    { w: "Las conclusiones fueron aprobadas por unanimidad.", t: "The conclusions were unanimously approved." }
  ],
  tx: { ti: "Un acuerdo unánime", b: `Durante la sesión <u>se escuchó</u> a las personas afectadas y <u>se revisaron</u> las propuestas recibidas. Finalmente, <u>se aprobaron</u> tres enmiendas. <u>Cabe señalar</u> que el acuerdo no entrará en vigor hasta enero. Según el comunicado, <u>se estima que</u> las nuevas medidas beneficiarán a más de dos mil familias; sus efectos <u>serán evaluados</u> dentro de un año.` },
  q: [["¿Qué ocurrió antes de aprobar las enmiendas?",["Se escuchó a las personas afectadas","Se publicó la evaluación","Entraron en vigor las medidas"],0],["¿Cuándo se evaluarán los efectos?",["Dentro de un año","En enero","Antes de la sesión"],0]],
  sp: ["Resume un acuerdo público sin centrarte en quién lo aprobó.","¿Cuándo es útil usar una construcción impersonal?","Presenta una conclusión formal con «cabe señalar»."]
},
{
  id: "c1-estilo-indirecto",
  lvl: "C1",
  k: "g",
  t: "Estilo indirecto y distancia enunciativa",
  en: "Reported speech and speaker stance",
  ic: "💬",
  th: `<div class="card"><h2>Informar, atribuir y tomar distancia</h2>
<p>El estilo indirecto reproduce el contenido y puede marcar la actitud de quien lo transmite.</p>
<table><tr><th>Matiz</th><th>Verbos y estructuras</th><th>Ejemplo</th></tr><tr><td>Neutral</td><td>decir, explicar, señalar</td><td>Explicó que <b>no había recibido</b> el aviso.</td></tr><tr><td>Compromiso</td><td>admitir, reconocer, sostener</td><td>Reconoció que <b>se habían equivocado</b>.</td></tr><tr><td>Distancia</td><td>alegar, asegurar, pretender</td><td>Alegó que <b>no conocía</b> el acuerdo.</td></tr><tr><td>Petición</td><td>pedir / proponer que + subjuntivo</td><td>Propuso que <b>se aplazara</b> la votación.</td></tr></table>
<p>Con un verbo introductor en pasado, las referencias cambian según el punto de vista: <i>hoy → ese día</i>, <i>mañana → al día siguiente</i>, <i>aquí → allí</i>. En informes se puede omitir lo que ya se sobreentiende.</p></div>`,
  voc: [["🗣️","reconocer","to acknowledge"],["🛡️","alegar","to claim"],["📌","señalar","to point out"],["🤝","proponer que","to propose that"],["↔️","tomar distancia","to distance oneself"],["📅","al día siguiente","the following day"]],
  ex: [
    { q: "«No recibimos el aviso». Alegaron que no ___ el aviso.", o: ["reciben","habían recibido","recibirían"], a: 1, t: "El indefinido pasa normalmente a pluscuamperfecto al referirlo desde el pasado." },
    { q: "«Aplacemos la votación». Propuso que ___ la votación.", a: ["se aplazara","se aplazase"], t: "Proponer que + imperfecto de subjuntivo en estilo indirecto pasado." },
    { q: "«Mañana publicaremos el informe». Aseguró que lo publicarían ___.", a: ["al día siguiente","el día siguiente"], t: "Mañana cambia a al día siguiente." },
    { w: "La portavoz reconoció que no habían previsto el retraso.", t: "The spokesperson acknowledged that they had not anticipated the delay." },
    { w: "Según el comunicado, se revisarían los criterios ese mismo día.", t: "According to the statement, the criteria would be reviewed that same day." }
  ],
  tx: { ti: "Declaraciones tras la reunión", b: `La portavoz <u>reconoció que no habían previsto</u> la magnitud del retraso. Añadió que <u>revisarían</u> los criterios <u>ese mismo día</u>. Al preguntarle por las responsabilidades, <u>alegó que todavía no conocía</u> todos los detalles. Un representante sindical <u>propuso que se publicara</u> un calendario de seguimiento y pidió que la próxima reunión se celebrara en una sede independiente.` },
  q: [["¿Qué reconoció la portavoz?",["Que no previeron la magnitud del retraso","Que el calendario ya estaba publicado","Que la reunión no se celebró"],0],["¿Qué propuso el representante sindical?",["Publicar un calendario de seguimiento","Cambiar los criterios","Cancelar la próxima reunión"],0]],
  sp: ["Resume dos opiniones distintas y atribúyelas a sus autores.","¿Qué verbo usarías para expresar distancia frente a una afirmación?","Cuenta una petición que alguien hiciera durante una reunión."]
},
{
  id: "c1-modalidad",
  lvl: "C1",
  k: "g",
  t: "Modalidad, conjetura y probabilidad",
  en: "Modality, conjecture and probability",
  ic: "🔮",
  th: `<div class="card"><h2>Inferir sin afirmar de más</h2>
<table><tr><th>Forma</th><th>Valor</th><th>Ejemplo</th></tr><tr><td>futuro simple</td><td>Conjetura sobre el presente</td><td><b>Estará</b> en una reunión. (= probablemente está)</td></tr><tr><td>futuro compuesto</td><td>Conjetura sobre el pasado</td><td><b>Habrá salido</b> ya. (= quizá salió)</td></tr><tr><td>condicional simple</td><td>Probabilidad en el pasado</td><td><b>Tendría</b> unos treinta años.</td></tr><tr><td>condicional compuesto</td><td>Conjetura sobre una acción pasada</td><td><b>Habría olvidado</b> la cita.</td></tr></table>
<p>Para graduar certeza: <i>es posible que + subjuntivo</i>; <i>probablemente / seguramente + indicativo o subjuntivo</i> según la perspectiva; <i>no cabe descartar que + subjuntivo</i>.</p></div>
<div class="tip"><b>Matiz:</b> «Habrá llegado» no siempre habla del futuro: puede significar «supongo que ya ha llegado».</div>`,
  voc: [["🔮","probablemente","probably"],["🧩","no cabe descartar","cannot rule out"],["📉","es poco probable que","it is unlikely that"],["⏳","habrá terminado","will have finished / probably finished"],["🤔","a juzgar por","judging by"],["⚖️","cabe la posibilidad","there is a possibility"]],
  ex: [
    { q: "No contesta; ___ el teléfono en silencio.", o: ["pondrá","pondría","habría puesto"], a: 0, t: "El futuro simple puede expresar conjetura sobre el presente." },
    { q: "A juzgar por la puerta cerrada, ya ___.", o: ["se habrá ido","se irá","se iba"], a: 0, t: "Futuro compuesto: conjetura sobre una acción pasada." },
    { q: "No cabe descartar que los resultados ___ mañana.", o: ["se publiquen","se publican","se publicarán"], a: 0, t: "No cabe descartar que + subjuntivo." },
    { w: "Habría unos veinte asistentes, a juzgar por las fotografías.", t: "There were probably about twenty attendees, judging by the photographs." },
    { w: "Es poco probable que el paquete llegue antes del viernes.", t: "The package is unlikely to arrive before Friday." }
  ],
  tx: { ti: "Un retraso sin explicación", b: `El tren debía llegar a las ocho. A las ocho y media aún no había noticias. «<u>Habrá ocurrido</u> alguna incidencia», comentó una pasajera. Según la aplicación, el convoy <u>estaría</u> detenido a las afueras, aunque <u>no cabía descartar</u> que se hubiera desviado. Al final, el operador explicó que un fallo eléctrico <u>habría afectado</u> a la señalización. Los viajeros recibieron una actualización cuando el tren <u>estaba a punto de</u> reanudar el trayecto.` },
  q: [["¿Qué conjeturó una pasajera?",["Que había ocurrido una incidencia","Que el tren ya había llegado","Que se canceló el trayecto"],0],["¿Qué causó el retraso?",["Un fallo eléctrico","Una huelga","Una avería en la aplicación"],0]],
  sp: ["Formula tres hipótesis sobre por qué alguien no ha llegado.","¿Cómo expresarías una posibilidad sin presentarla como segura?","Describe una noticia y distingue hechos de conjeturas."]
},
{
  id: "c1-conectores",
  lvl: "C1",
  k: "g",
  t: "Cohesión y conectores de registro formal",
  en: "Cohesion and formal discourse markers",
  ic: "🧵",
  th: `<div class="card"><h2>Conectar ideas con precisión</h2>
<table><tr><th>Relación</th><th>Conectores</th><th>Construcción</th></tr><tr><td>Causa</td><td>habida cuenta de que, dado que</td><td><b>Habida cuenta de que</b> faltan datos, se aplaza la decisión.</td></tr><tr><td>Consecuencia</td><td>de ahí que, por consiguiente</td><td>Los plazos son breves, <b>de ahí que se requiera</b> apoyo.</td></tr><tr><td>Reformulación</td><td>es decir, dicho de otro modo</td><td><b>Dicho de otro modo</b>, falta consenso.</td></tr><tr><td>Concesión</td><td>con todo, aun cuando</td><td><b>Con todo</b>, la propuesta merece estudio.</td></tr><tr><td>Orden argumentativo</td><td>por un lado… por otro, en última instancia</td><td><b>En última instancia</b>, decide el comité.</td></tr></table>
<p>«De ahí que» y «aun cuando» suelen construirse con subjuntivo cuando introducen una consecuencia o hipótesis.</p></div>`,
  voc: [["📌","habida cuenta de que","given that"],["➡️","de ahí que","hence"],["🔄","dicho de otro modo","in other words"],["⚖️","con todo","nevertheless"],["🪜","en última instancia","ultimately"],["🧭","por lo que respecta a","with regard to"]],
  ex: [
    { q: "El plazo es reducido, de ahí que ___ apoyo adicional.", o: ["se necesita","se necesite","se necesitará"], a: 1, t: "De ahí que + subjuntivo." },
    { q: "___ los recursos disponibles, habrá que priorizar las tareas.", a: ["Habida cuenta de","Dicho de otro modo"], t: "Habida cuenta de + sustantivo." },
    { q: "___, la medida no resolverá el problema de fondo.", o: ["Dicho de otro modo","Por consiguiente","Habida cuenta de"], a: 0, t: "Dicho de otro modo introduce una reformulación." },
    { w: "Con todo, convendría evaluar la propuesta antes de descartarla.", t: "Nevertheless, it would be advisable to evaluate the proposal before dismissing it." },
    { w: "Por lo que respecta al presupuesto, aún no se ha tomado una decisión.", t: "With regard to the budget, no decision has yet been made." }
  ],
  tx: { ti: "Una evaluación pendiente", b: `<u>Habida cuenta de que</u> el proyecto afecta a varios municipios, el comité ha solicitado más información. <u>Por un lado</u>, los datos iniciales apuntan a una mejora; <u>por otro</u>, todavía no se ha medido su impacto a largo plazo. <u>De ahí que se haya encargado</u> una evaluación independiente. <u>Con todo</u>, las autoridades consideran que la propuesta merece seguir adelante. <u>En última instancia</u>, la decisión dependerá de los resultados.` },
  q: [["¿Por qué solicitó más información el comité?",["El proyecto afecta a varios municipios","Faltaba aprobar el presupuesto","No había datos iniciales"],0],["¿De qué dependerá la decisión final?",["De los resultados de la evaluación","De una votación municipal","Del calendario del proyecto"],0]],
  sp: ["Presenta dos argumentos opuestos sobre una propuesta.","¿En qué situaciones usarías «habida cuenta de que»?","Reformula una idea con «dicho de otro modo»."]
}
);
