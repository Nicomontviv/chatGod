function containsWord(texto1, texto2) {
    // Convertimos los textos a minúsculas para hacer la comparación insensible a mayúsculas
    const words1 = texto1.toLowerCase().split(" ");
    const words2 = texto2.toLowerCase();
  
    // Verificamos si alguna palabra de texto1 se encuentra en texto2
    for (const word of words1) {
      if (words2.includes(word)) {
        return true;
      }
    }
  
    return false;
  }

// Función para obtener una respuesta aleatoria de la Biblia
function getBibleRandomVerse(texto) {
    const bibleVersesAmor = [

        '"Amarás al Señor tu Dios con todo tu corazón, y con toda tu alma, y con toda tu mente. Este es el primero y grande mandamiento. Y el segundo es semejante: Amarás a tu prójimo como a ti mismo." - Mateo 22:37-39',
  
  '"Y ahora permanecen la fe, la esperanza y el amor, estos tres; pero el mayor de ellos es el amor." - 1 Corintios 13:13',
  
  '"Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna." - Juan 3:16',
  
  '"El amor es sufrido, es benigno; el amor no tiene envidia, el amor no es jactancioso, no se envanece; no hace nada indebido, no busca lo suyo, no se irrita, no guarda rencor." - 1 Corintios 13:4-5',
  
  '"Y ante todo, tened entre vosotros ferviente amor; porque el amor cubrirá multitud de pecados." - 1 Pedro 4:8',
  
  '"El que no ama, no ha conocido a Dios; porque Dios es amor." - 1 Juan 4:8',
  
  '"Porque el amor al dinero es la raíz de todos los males; y algunos, por codiciarlo, se han desviado de la fe y se han causado muchos dolores." - 1 Timoteo 6:10',
  
  '"Sobre todas las cosas, vestíos de amor, que es el vínculo perfecto." - Colosenses 3:14',
  
  '"En esto consiste el amor: no en que nosotros hayamos amado a Dios, sino en que él nos amó a nosotros, y envió a su Hijo en propiciación por nuestros pecados." - 1 Juan 4:10',
  
  '"Amados, amémonos unos a otros; porque el amor es de Dios. Todo aquel que ama, es nacido de Dios, y conoce a Dios." - 1 Juan 4:7',
  
  '"Y por sobre todas estas cosas vestíos de amor, que es el vínculo perfecto." - Colosenses 3:14',
  
  '"En esto conocemos lo que es el amor: en que Jesucristo entregó su vida por nosotros. Así también nosotros debemos entregar la vida por nuestros hermanos." - 1 Juan 3:16',
        ];
  
        const bibleVersesDinero = [
        ' "El dinero mal habido pronto se acaba; quien ahorra, poco a poco se enriquece." - Proverbios 13:11',
  
  '"Honra a Jehová con tus bienes, y con las primicias de todos tus frutos." - Proverbios 3:9',
  
  '"Mejor es lo poco con justicia, que la muchedumbre de frutos sin derecho." - Proverbios 16:8',
  
  '"No os hagáis tesoros en la tierra, donde la polilla y el orín corrompen, y donde ladrones minan y hurtan; sino haceos tesoros en el cielo, donde ni la polilla ni el orín corrompen, y donde ladrones no minan ni hurtan." - Mateo 6:19-20',
  
  '"El impío se presta y no paga; mas el justo tiene misericordia, y da." - Salmo 37:21',
  
  '"No os afanéis por vuestra vida, qué comeréis; ni por el cuerpo, qué vestiréis. La vida es más que la comida, y el cuerpo que el vestido." - Lucas 12:22-23',
  
  '"Guardaos de toda avaricia; porque la vida del hombre no consiste en la abundancia de los bienes que posee." - Lucas 12:15',
  
  '"Porque ¿qué aprovechará al hombre, si ganare todo el mundo, y perdiere su alma?" - Marcos 8:36',
  
  '"No seáis deudores a nadie, sino de amaros unos a otros; porque el que ama al prójimo, ha cumplido la ley." - Romanos 13:8',
  
  '"No os conforméis a este siglo, sino transformaos por medio de la renovación de vuestro entendimiento, para que comprobéis cuál sea la buena voluntad de Dios, agradable y perfecta." - Romanos 12:2',
  
  '"Y mi Dios proveerá a todas vuestras necesidades, conforme a sus riquezas en gloria en Cristo Jesús." - Filipenses 4:19',
  
  '"Más bienaventurado es dar que recibir." - Hechos 20:35',
        ];
  
        const bibleVersesSalud = [
        '"No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios que te esfuerzo; siempre te ayudaré, siempre te sustentaré con la diestra de mi justicia." - Isaías 41:10',
  
  '"Sana Señor mi alma, porque contra ti he pecado." - Salmos 41:4',
  
  '"El Señor te librará de toda enfermedad; él protegerá tu vida." - Salmos 41:3',
  
  '"El Señor está cerca de los quebrantados de corazón, y salva a los heridos de espíritu." - Salmos 34:18',
  
  'Mejor visita a un medico',
  
  '"Vengan a mí todos ustedes, los agotados de llevar cargas pesadas, y yo les daré descanso." - Mateo 11:28',
  
  '"Amado, yo deseo que tú seas prosperado en todas las cosas, y que tengas salud, así como prospera tu alma." - 3 Juan 1:2',
  
  '"Jesús les dijo: Yo soy el camino, la verdad y la vida. Nadie viene al Padre sino por mí." - Juan 14:6',
  
  '"Porque yo soy el Señor, tu Dios, que sostiene tu mano derecha; yo soy quien te dice: No temas, yo te ayudaré." - Isaías 41:13',
  
  '"El que perdona todas tus iniquidades, el que sana todas tus dolencias." - Salmos 103:3',
  
  '"Mas él herido fue por nuestras rebeliones, molido por nuestros pecados; el castigo de nuestra paz fue sobre él, y por su llaga fuimos nosotros curados." - Isaías 53:5',
  
  '"Encomienda a Jehová tu camino, confía en Él, y Él hará." - Salmos 37:5',
        ];
        const bibleVersesNada = [
          "No hay nada que diga que resuelva lo que no quieres aceptar",
          "Las respuestas siempre estuvieron dentro tuyo",
          "¿Realmente esperas que una IA conteste eso? Si tu problema no es grave mejor consulta a un colega. Acabas de gastar tu pregunta",
          "La respuesta ya la sabes",
          "No",
          "La respuesta que buscas, siempre estuvo dentro tuyo",
  
          "'Amarás al Señor tu Dios con todo tu corazón, con toda tu alma y con toda tu mente. Este es el primero y grande mandamiento. Y el segundo es semejante: Amarás a tu prójimo como a ti mismo.' - Mateo 22:37-39",
  
  " 'Porque de tal manera amó Dios al mundo, que ha dado a su primogénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna.' - Juan 3:16",
  
  "'Por tanto, no os afanéis diciendo: ¿Qué comeremos, o qué beberemos, o qué vestiremos? Porque los gentiles buscan todas estas cosas; pero vuestro Padre celestial sabe que tenéis necesidad de todas estas cosas.' - Mateo 6:31-32",
  
  "'Encomienda a Jehová tu camino, confía en Él, y Él hará. - Salmos 37:5'",
  
  "'¿De qué sirve, hermanos míos, si alguno dice que tiene fe, pero no tiene obras? ¿Acaso podrá esa fe salvarlo?' - Santiago 2:14",
  
  " 'No os conforméis a este siglo, sino transformaos por medio de la renovación de vuestro entendimiento, para que comprobéis cuál sea la buena voluntad de Dios, agradable y perfecta.' - Romanos 12:2",
        ];
        

     

        textoInput = texto;

        let grupoDeFrases;

        let frasesAmor = "amor esposo esposa hombre marido mujer novio novia chica chicas chico chicos beso besos sexo quiere ama amar enamorarse enamorado enamorada"
        
        let frasesDinero = "negocio dinero plata economia ganancia emprender negocios emprendedores billetera trabajo asenso ascenso elecciones politica crypto cryptomoneda bitcoin  ";

        let frasesSalud = "salud enfermedad dolor duele hinchado medico hospital remedio cancer tos morir muerto fallecer matar mal siento sangre "; 

        if (containsWord(textoInput, frasesAmor)){
             grupoDeFrases = bibleVersesAmor;
        }else if(containsWord(textoInput, frasesDinero)){
            grupoDeFrases = bibleVersesDinero;
        }else if(containsWord(textoInput, frasesSalud)){
            grupoDeFrases = bibleVersesSalud;
        }else{
          grupoDeFrases = bibleVersesNada
        }
  
  
    const randomIndex = Math.floor(Math.random() * grupoDeFrases.length);
    return grupoDeFrases[randomIndex];
  }
  
// Función para enviar el mensaje del usuario y obtener una respuesta
function sendMessage() {
    const userQuestion = document.getElementById("userQuestion").value.trim();
    const chatMessages = document.getElementById("chatMessages");
    const sendButton = document.getElementById("sendButton");
  
    if (userQuestion !== "") {
      sendButton.disabled = true; // Deshabilitar el botón mientras se procesa la pregunta
  
      const waitTime = 86400000; // 5 segundos en milisegundos
      const lastQuestionTime = localStorage.getItem("lastQuestionTime");
  
      if (!lastQuestionTime || (Date.now() - lastQuestionTime) >= waitTime) {
        // Si es la primera pregunta o ha pasado más de 5 segundos
        let texto = document.getElementById("userQuestion").value;
        const response = getBibleRandomVerse(texto);
  
        const userMessageElement = document.createElement("div");
        userMessageElement.classList.add("message", "user");
        userMessageElement.textContent = userQuestion;
  
        const typingMessageElement = document.createElement("div");
        typingMessageElement.classList.add("message", "typing");
        typingMessageElement.textContent = "Escribiendo...";
  
        const botMessageElement = document.createElement("div");
        botMessageElement.classList.add("message", "bot");
        botMessageElement.textContent = response;
  
        chatMessages.appendChild(userMessageElement);
        chatMessages.appendChild(typingMessageElement);
  
        // Simulamos un efecto de demora de 1.5 segundos antes de mostrar la respuesta
        setTimeout(function () {
          chatMessages.removeChild(typingMessageElement);
          chatMessages.appendChild(botMessageElement);
          chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll al final del chat
  
          localStorage.setItem("lastQuestionTime", Date.now()); // Guardamos la hora de la última pregunta
  
          sendButton.disabled = false; // Habilitar nuevamente el botón
        }, 4500);
      } else {
        alert("Solo puedes hacer una pregunta a dios cada 24 horas.");
        sendButton.disabled = false; // Habilitar nuevamente el botón en caso de error
      }
    }
  }