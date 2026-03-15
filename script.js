// ============================================
// LIFE TIMELINE TRACKER - JAVASCRIPT MODERNO
// ============================================

// Configuración - AUTOMÁTICA PARA EL AÑO ACTUAL (365 DÍAS)
const START_DATE = new Date(new Date().getFullYear(), 0, 1); // 1 de enero del año actual
const DAYS_TO_SHOW = 50; // Mostrar últimos N días
const COLORS = [
    { gradient: 'linear-gradient(135deg, #ffffff, #e0e0e0)', glow: 'rgba(255, 255, 255, 0.5)', border: 'rgba(255, 255, 255, 0.6)' },
    { gradient: 'linear-gradient(135deg, #f5f5f5, #d0d0d0)', glow: 'rgba(245, 245, 245, 0.5)', border: 'rgba(245, 245, 245, 0.6)' },
    { gradient: 'linear-gradient(135deg, #e8e8e8, #c0c0c0)', glow: 'rgba(232, 232, 232, 0.5)', border: 'rgba(232, 232, 232, 0.6)' },
    { gradient: 'linear-gradient(135deg, #f0f0f0, #d8d8d8)', glow: 'rgba(240, 240, 240, 0.5)', border: 'rgba(240, 240, 240, 0.6)' },
    { gradient: 'linear-gradient(135deg, #ebebeb, #c8c8c8)', glow: 'rgba(235, 235, 235, 0.5)', border: 'rgba(235, 235, 235, 0.6)' },
    { gradient: 'linear-gradient(135deg, #f8f8f8, #e0e0e0)', glow: 'rgba(248, 248, 248, 0.5)', border: 'rgba(248, 248, 248, 0.6)' },
    { gradient: 'linear-gradient(135deg, #e0e0e0, #b8b8b8)', glow: 'rgba(224, 224, 224, 0.5)', border: 'rgba(224, 224, 224, 0.6)' },
    { gradient: 'linear-gradient(135deg, #f2f2f2, #d5d5d5)', glow: 'rgba(242, 242, 242, 0.5)', border: 'rgba(242, 242, 242, 0.6)' },
];

// Array extenso de frases motivadoras
const FRASES_MOTIVADORAS = [
    "Hoy sobreviviste otra vez. No es poco, es todo. Cada amanecer que enfrentas es una prueba de tu fortaleza.",
    "No todos entienden tu batalla, pero eso no le quita validez. Lo que luchas en silencio es tan real como cualquier montaña.",
    "Sigue caminando, paso a paso. No importa la velocidad, lo que importa es que continúas adelante.",
    "A veces el silencio es la respuesta más honesta que puedes dar. And that's perfectly okay.",
    "No te rindas todavía, porque el final de esta historia aún no está escrito, y lo mejor podría estar esperando.",
    "Los días grises también cuentan. En realidad, son esos los que construyen el carácter más resiliente.",
    "Un paso pequeño sigue siendo un paso. La magnitud no determina el valor del progreso.",
    "Respira. Todo pasa. Las tormentas no son eternas, y esta también pasará.",
    "Mañana puede ser diferente si hoy decides que mereces mejor. Tu futuro comienza con una decisión presente.",
    "Tu esfuerzo tiene valor, incluso cuando nadie lo ve. El universo nota cada acto de persistencia.",
    "Cada día es una segunda oportunidad, una nueva hoja en blanco donde puedes escribir una historia diferente.",
    "Eres más fuerte de lo que crees. Has superado el 100% de tus peores días.",
    "El cansancio no es debilidad, es evidencia de que has luchado y continúas en pie.",
    "Merecías mejores días, pero estos también cuentan porque son tuyos y los estás viviendo con integridad.",
    "Tu persistencia es tu superpoder. En un mundo que pide que te rindas, continúas adelante.",
    "Incluso en la oscuridad, algo brilla. Busca esa luz, aunque sea pequeña.",
    "Permitirte existir es suficiente. No necesitas justificarte por tomar espacio en el mundo.",
    "El progreso no es lineal. Los retrocesos son parte del viaje, no el final de él.",
    "Eres digno de paz, descanso y momentos de tranquilidad sin culpa.",
    "Hoy es un día válido, aunque no hayas logrado todo lo que planeaste.",
    "Pequeñas victorias también son victorias. Cada paso cuenta en la dirección correcta.",
    "Tu presencia importa más de lo que jamás sabrás. Alguien está mejor porque existes.",
    "Elegir continuar es el acto más valiente que alguien puede hacer.",
    "Los días difíciles construyen personas fuertes. Estás siendo forjado por la adversidad.",
    "Tienes permiso de tomarte un descanso. No hay competencia que ganar por estar agotado.",
    "Tu historia aún no termina. Esto es solo una página, no el final del libro.",
    "Eres suficiente, tal como eres, sin cambios ni mejoras.",
    "Cada momento de resistencia es un acto de amor propio que honra tu valor.",
    "Las cosas cambiarán. Nada permanece estático, y eso incluye el dolor.",
    "Mereces ser feliz, y esa merced no depende de lo que hayas hecho o dejado de hacer."
    "Hoy no necesitas demostrarle nada al mundo. El simple hecho de seguir aquí, respirando y avanzando aunque sea un poco, ya es una forma silenciosa de victoria."

"A veces la vida se vuelve tan ruidosa que olvidas escucharte a ti mismo. Detente un momento y recuerda que dentro de ti también existe calma."

"No todos los días tienen que ser extraordinarios. Algunos días solo están hechos para resistir, y eso también es parte de la historia."

"Quizá hoy el camino se siente incierto, pero incluso la incertidumbre puede ser el comienzo de algo que todavía no sabes que necesitas."

"Hay días en los que el alma pesa más que el cuerpo, pero incluso entonces sigues caminando. Y eso dice mucho sobre tu fuerza."

"No te preocupes por entenderlo todo ahora. Algunas respuestas llegan cuando menos las buscas."

"Aunque el mundo siga girando rápido, está bien si tú decides avanzar a tu propio ritmo."

"El silencio de algunas noches guarda respuestas que el ruido del día no permite escuchar."

"No todo lo que se rompe está destinado a desaparecer. Algunas cosas se reconstruyen más fuertes."

"Cada amanecer es una oportunidad silenciosa para volver a empezar sin tener que explicarle nada a nadie."

"No te castigues por haber sentido demasiado. Sentir también es una forma de estar vivo."

"A veces lo único que necesitas es un momento de paz para recordar que aún hay mucho por descubrir."

"El tiempo tiene una manera extraña de acomodar las piezas que hoy parecen fuera de lugar."

"Quizá no lo notes ahora, pero cada pequeño esfuerzo está cambiando lentamente el rumbo de tu historia."

"Los días difíciles también cuentan, porque son los que enseñan al corazón a resistir."

"No todos entenderán tu proceso, y eso está bien. Algunas batallas son demasiado personales para explicarlas."

"El hecho de que sigas intentándolo ya significa que dentro de ti hay algo que todavía cree en el mañana."

"Aunque hoy parezca gris, el cielo no olvida cómo volver a llenarse de luz."

"Las historias más importantes rara vez comienzan con certezas. Casi siempre empiezan con alguien que decidió seguir adelante."

"Tal vez el destino no sea un lugar, sino el camino que sigues construyendo incluso cuando no sabes exactamente hacia dónde vas."

"A veces el simple hecho de seguir aquí ya es una forma silenciosa de valentía."

"No todas las batallas se ven desde afuera; algunas ocurren en el corazón y aun así las estás ganando."

"Hay días en los que avanzar significa solo no retroceder, y eso también es progreso."

"Aunque hoy no tenga sentido, el tiempo suele revelar por qué algunas cosas tuvieron que pasar."

"Tu historia no se define por los momentos difíciles, sino por las veces que decidiste continuar."

"A veces la vida se siente pesada porque estás cargando sueños que todavía no han ocurrido."

"No necesitas correr hacia el futuro; incluso los pasos lentos te están llevando a algún lugar."

"El hecho de que sigas intentándolo dice más de ti que cualquier victoria rápida."

"Algunas respuestas llegan tarde, pero cuando llegan cambian todo."

"Cada amanecer es una oportunidad silenciosa para comenzar otra vez."

"No todos entenderán tu proceso, pero eso no hace menos real tu esfuerzo."

"Hay belleza incluso en los momentos donde todo parece detenerse."

"El tiempo tiene una forma extraña de acomodar las cosas cuando menos lo esperas."

"Aunque hoy parezca gris, el cielo siempre recuerda cómo volver a iluminarse."

"Tu camino no necesita ser perfecto para ser valioso."

"A veces perder algo también significa hacer espacio para algo mejor."

"No todo dolor llega para quedarse; algunos solo vienen a enseñarte algo."

"Hay una fuerza dentro de ti que ha sobrevivido a cada uno de tus días difíciles."

"Seguir adelante cuando todo pesa es una forma silenciosa de esperanza."

"Quizá aún no lo ves, pero cada día que continúas estás escribiendo algo importante."
];

// Array extenso de frases reflexivas/tristes
const FRASES_REFLEXIVAS = [
    "No todos los días son buenos, pero siempre hay algo bueno en cada día si tomas el tiempo para buscarlo. Incluso en la sombra más profunda.",
    "A veces avanzar duele profundamente en el alma, pero quedarse quieto duele de una manera diferente, más silenciosa y corrosiva.",
    "La tristeza no es el final del viaje, es parte legítima del camino que recorren todos los que se atreven a sentir.",
    "Duele porque importa. Lo que no te afecta, no tiene control sobre tu corazón.",
    "Algunos días simplemente hay que sobrevivir. No prosperar, no brillar, solo existir. Y eso es suficiente.",
    "El dolor enseña lecciones que la comodidad nunca podría desentrañar con tanta profundidad.",
    "A veces llorar es el acto más valiente que alguien puede hacer, porque requiere vulnerabilidad total.",
    "Lo que no te mata te cansa, te erosiona lentamente, pero aquí sigues, inexplicablemente, día tras día.",
    "El tiempo no cura las heridas, pero cambia la perspectiva sobre ellas. Ése es su mayor regalo.",
    "Estamos todos lidiando con cosas que nadie más puede ver. Todos llevamos un universo de secretos.",
    "El peso disminuye cuando lo compartes con alguien que está dispuesto a cargarlo contigo.",
    "Algunos días son más sombra que luz, donde todo parece teñido de grisáceo sin salvación.",
    "Pero ahí es donde crece lo más hermoso. En las grietas del dolor florece la mayor belleza.",
    "La soledad y la compañía pueden ser idénticas cuando no te entienden, incluso estando rodeado.",
    "No es debilidad sentir tanto. Es evidencia de un corazón que se niega a endurecerse completamente.",
    "El cansancio tiene textura, forma, peso. Es algo tan real como cualquier objeto tangible.",
    "A veces necesitamos caer completamente para aprender a subir con verdadera sabiduría.",
    "Tu silencio es un idioma válido. No todos necesitan palabras para comunicar lo que sienten.",
    "Lo frágil también puede ser asombrosamente fuerte. La resistencia no siempre es visible.",
    "Algunos días son únicamente para superar, no para prosperar. La supervivencia es suficiente.",
    "La esperanza y la desesperación bailan juntas en la oscuridad, inseparables e inevitables.",
    "El cambio duele antes de sanar. La transformación es traumática por naturaleza.",
    "A veces la única opción es continuar, incluso sin saber hacia dónde vas.",
    "La belleza existe en lo roto también. De hecho, es en la fractura donde se ve la verdadera luz.",
    "Estás haciendo lo mejor que puedes con lo que tienes, y eso es más que suficiente.",
    "Algunos días son únicamente para sentir todo sin intentar arreglarlo o comprenderlo.",
    "La vida no siempre es justa, pero sigues aquí, resistiendo, persistiendo, existiendo.",
    "Lo que hoy duele intensamente, mañana enseña una lección que no olvidarás.",
    "Tu lucha es válida aunque nadie más la vea, aunque nadie te lo reconozca jamás.",
    "Continuamos, no porque sea fácil o hermoso, sino porque es necesario y porque somos dignos de intentarlo."
    "Hoy avanzaste aunque nadie lo notara. A veces las victorias más grandes son las que ocurren en silencio."

"Hay momentos en los que el corazón solo necesita tiempo, no respuestas."

"No todo lo que duele está destinado a destruirte. Algunas heridas solo están enseñándote a sentir diferente."

"Quizá el universo no te está deteniendo, tal vez solo te está preparando para algo que aún no puedes ver."

"El hecho de que sigas aquí significa que todavía hay capítulos por escribir en tu historia."

"A veces el progreso se ve como descanso, como silencio, como desaparecer un rato para volver más fuerte."

"Tu vida no necesita ser perfecta para ser valiosa."

"Los días difíciles no definen quién eres, pero sí revelan la fuerza que llevas dentro."

"Respira profundo. Incluso los momentos más caóticos terminan encontrando su calma."

"No todos los caminos están hechos para entenderse de inmediato."

"Hay una versión futura de ti que está orgullosa de que no te hayas rendido hoy."

"Algunas noches están hechas para pensar demasiado, pero también para recordar que sigues aquí."

"Las tormentas también enseñan a apreciar el cielo despejado."

"Aunque el mundo cambie constantemente, tu capacidad de levantarte sigue siendo tu mayor poder."

"Cada día que decides continuar es una pequeña rebelión contra todo lo que intentó detenerte."

"No necesitas correr hacia el futuro. A veces basta con caminar."

"Las historias más reales están llenas de dudas, pausas y segundas oportunidades."

"Puede que hoy no veas la luz completa, pero incluso una chispa es suficiente para empezar."

"No subestimes los días tranquilos; muchas veces ahí es donde el alma se reconstruye."

"Seguir adelante no siempre se siente heroico, pero sigue siendo un acto de valentía."

"Quizá el sentido de todo esto no esté en llegar rápido, sino en aprender mientras avanzas."

"Cada respiración es un recordatorio silencioso de que aún hay tiempo para cambiar las cosas."

"Hay belleza incluso en los momentos donde todo parece detenerse."

"El tiempo no borra todo, pero sí enseña a vivir con lo que permanece."

"Aunque hoy no lo notes, algo dentro de ti sigue creciendo."

"A veces sobrevivir al día ya es una victoria silenciosa que nadie ve, pero que dice todo sobre tu fuerza."

"No todo progreso hace ruido; algunas de las transformaciones más grandes ocurren en silencio."

"Hay días en los que solo estás aprendiendo a respirar de nuevo, y eso también cuenta como avanzar."

"Aunque hoy parezca igual que ayer, algo dentro de ti ya está cambiando."

"Las noches largas también tienen su propósito: recordarte que la luz siempre vuelve."

"No necesitas tener todo claro para seguir caminando; a veces el camino se revela mientras avanzas."

"El tiempo no siempre cura todo, pero sí enseña al corazón a cargar menos peso."

"A veces el universo solo te pide paciencia mientras acomoda las piezas de tu historia."

"Seguir adelante cuando todo pesa es una forma de valentía que pocos entienden."

"No todos los días están hechos para brillar; algunos están hechos simplemente para resistir."

"Lo que hoy parece un final puede ser solo un giro inesperado en tu historia."

"Cada día que decides continuar es una pequeña revolución contra todo lo que intentó detenerte."

"No subestimes tu capacidad de levantarte; ya lo has hecho más veces de las que recuerdas."

"El silencio también puede ser un refugio cuando el mundo se vuelve demasiado ruidoso."

"Aunque hoy te sientas perdido, todavía estás en el camino."

"La vida cambia lentamente, casi imperceptiblemente, hasta que un día todo es diferente."

"Las cicatrices no son el final de la historia; son evidencia de que sobreviviste."

"A veces el mayor acto de amor propio es simplemente no rendirse."

"No todo lo que se rompe desaparece; algunas cosas se reconstruyen más fuertes."

"Quizá el sentido de todo esto es descubrir que siempre fuiste más fuerte de lo que pensabas."
    
];

// Array combinado para mezcla aleatoria
const TODAS_LAS_FRASES = [...FRASES_MOTIVADORAS, ...FRASES_REFLEXIVAS];

// Variables globales
let currentDay = 1;
let currentQuote = '';
let currentColor = {};

// ============================================
// FUNCIONES PRINCIPALES
// ============================================

/**
 * Calcula el número de días desde la fecha inicial - COMPLETAMENTE AUTOMÁTICO
 */
function calculateDayNumber() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const start = new Date(START_DATE);
    start.setHours(0, 0, 0, 0);
    
    const diffTime = Math.abs(today - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
    
    return diffDays;
}

/**
 * Obtiene una frase aleatoria del array
 */
function getRandomQuote() {
    return TODAS_LAS_FRASES[Math.floor(Math.random() * TODAS_LAS_FRASES.length)];
}

/**
 * Determina si una frase es motivadora o reflexiva
 */
function isMotivationalQuote(quote) {
    return FRASES_MOTIVADORAS.includes(quote);
}

/**
 * Obtiene un color aleatorio del array
 */
function getRandomColor() {
    return COLORS[Math.floor(Math.random() * COLORS.length)];
}

/**
 * Genera un color basado en el índice (para consistencia)
 */
function getColorByIndex(index) {
    return COLORS[index % COLORS.length];
}

/**
 * Actualiza la tarjeta de frase principal
 */
function updateQuoteCard() {
    currentDay = calculateDayNumber();
    currentQuote = getRandomQuote();
    currentColor = getRandomColor();

    // Actualizar elementos
    const dayDisplay = document.getElementById('dayDisplay');
    const quoteText = document.getElementById('quoteText');
    const quoteType = document.getElementById('quoteType');
    const dayCounter = document.getElementById('dayCounter');

    // Animación de salida
    quoteText.style.animation = 'none';
    setTimeout(() => {
        quoteText.style.animation = 'textFade 0.6s ease-in-out';
        quoteText.textContent = currentQuote;
    }, 10);

    dayDisplay.textContent = `Día ${currentDay}`;
    dayCounter.textContent = currentDay;
    quoteType.textContent = isMotivationalQuote(currentQuote) ? 'Motivadora' : 'Reflexiva';

    // Animar el botón
    const newQuoteBtn = document.getElementById('newQuoteBtn');
    newQuoteBtn.style.animation = 'none';
    setTimeout(() => {
        newQuoteBtn.style.animation = 'scaleUp 0.4s ease-in-out';
    }, 10);

    // Aplicar glow
    const quoteCard = document.querySelector('.quote-card');
    quoteCard.style.background = currentColor.gradient;
    quoteCard.style.boxShadow = `0 8px 40px ${currentColor.glow}, inset 0 1px 0 rgba(255, 255, 255, 0.1)`;
}



/**
 * Actualiza la visualización de la tarjeta de frase
 */
function updateQuoteDisplay() {
    const dayDisplay = document.getElementById('dayDisplay');
    const quoteText = document.getElementById('quoteText');
    const quoteType = document.getElementById('quoteType');
    const dayCounter = document.getElementById('dayCounter');
    const quoteCard = document.querySelector('.quote-card');

    // Animación de salida
    quoteText.style.animation = 'none';
    setTimeout(() => {
        quoteText.style.animation = 'textFade 0.6s ease-in-out';
        quoteText.textContent = currentQuote;
    }, 10);

    dayDisplay.textContent = `Día ${currentDay}`;
    dayCounter.textContent = currentDay;
    quoteType.textContent = isMotivationalQuote(currentQuote) ? 'Motivadora' : 'Reflexiva';

    // Aplicar estilo del color
    quoteCard.style.background = currentColor.gradient;
    quoteCard.style.boxShadow = `0 8px 40px ${currentColor.glow}, inset 0 1px 0 rgba(255, 255, 255, 0.1)`;
}



/**
 * Configura los eventos de los botones
 */
function setupEventListeners() {
    // Botón de nueva frase
    const newQuoteBtn = document.getElementById('newQuoteBtn');
    newQuoteBtn.addEventListener('click', () => {
        updateQuoteCard();
        // Animación de glow
        newQuoteBtn.style.animation = 'none';
        setTimeout(() => {
            newQuoteBtn.style.animation = 'glow 0.6s ease-in-out';
        }, 10);
    });

    // Botón de compartir
    const shareBtn = document.getElementById('shareBtn');
    shareBtn.addEventListener('click', shareQuote);
}

/**
 * Función para compartir la frase
 */
function shareQuote() {
    const text = `${currentQuote} - Día ${currentDay} 🌟 Life Timeline Tracker`;
    
    if (navigator.share) {
        navigator.share({
            title: 'Life Timeline Tracker',
            text: text,
            url: window.location.href
        }).catch(err => console.log('Error al compartir:', err));
    } else {
        // Fallback: copiar al portapapeles
        navigator.clipboard.writeText(text).then(() => {
            showNotification('¡Copiado al portapapeles! 📋');
        });
    }
}

/**
 * Muestra una notificación temporal
 */
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #00d4ff, #ff0099);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        font-weight: 600;
        box-shadow: 0 0 30px rgba(0, 212, 255, 0.4);
        animation: slideInUp 0.4s ease-out;
        z-index: 9999;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.4s ease-out forwards';
        setTimeout(() => notification.remove(), 400);
    }, 3000);
}

/**
 * Inicializa la aplicación
 */
function initialize() {
    // Esperar a que cargue el contenido
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', startApp);
    } else {
        startApp();
    }
}

function startApp() {
    // Inicializar día actual y frase
    currentDay = calculateDayNumber();
    currentQuote = getRandomQuote();
    currentColor = getRandomColor();

    // Actualizar elementos
    document.getElementById('dayDisplay').textContent = `Día ${currentDay}`;
    document.getElementById('quoteText').textContent = currentQuote;
    document.getElementById('quoteType').textContent = isMotivationalQuote(currentQuote) ? 'Motivadora' : 'Reflexiva';

    // Aplicar color
    const quoteCard = document.querySelector('.quote-card');
    quoteCard.style.background = currentColor.gradient;

    // Configurar eventos
    setupEventListeners();

    // Animaciones CSS adicionales
    addCustomAnimations();
}

/**
 * Agrega animaciones personalizadas adicionales
 */
function addCustomAnimations() {
    // Agregar estilo para animación fadeOut
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeOut {
            from {
                opacity: 1;
                transform: translateY(0);
            }
            to {
                opacity: 0;
                transform: translateY(-20px);
            }
        }
    `;
    document.head.appendChild(style);
}

/**
 * Efecto parallax en scroll
 */
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.aurora');
    if (parallax) {
        parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Iniciar aplicación cuando el DOM esté listo
initialize();

// ============================================
// MEJORAS ADICIONALES
// ============================================

// Detección de modo oscuro del sistema (ya está en dark por defecto)
// Pero podríamos agregar un toggle en el futuro

// Manejo de visibilidad de la página
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        // Cuando vuelve a la pestaña, actualizar el día si cambió
        const newDay = calculateDayNumber();
        if (newDay !== currentDay) {
            startApp();
        }
    }
});





// Smooth scroll behavior para navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

console.log('✨ Life Timeline Tracker iniciado correctamente');
console.log(`📅 Día actual: ${currentDay}`);
