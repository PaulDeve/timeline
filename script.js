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
