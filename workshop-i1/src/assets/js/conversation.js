/* The chat const defines the Peekobot conversation.
 *
 * It should be an object with numerical property names, and each property is an entry
 * in the conversation.
 *
 * A conversation entry should have:
 *  - A "text" property that is what the chatbot says at this point in the conversation
 *  - Either:
 *     - A "next" property, which defines the next chat entry by stating a numerical key
 *       of the chat object and is used when the chatbot needs to say several things
 *       without input from the user
 *    OR
 *     - An "options" property that defines the choices a user can take this is an
 *       array of option objects
 *
 * An options object should have:
 *  - a "text" property that is the label for the user's choice
 *  AND EITHER
 *  - a "next" property that defines the next chat entry by stating a numerical key of
 *    the chat object and is used when the user selects this option
 *  OR
 *  - a "url" property that defines a link for the user to be taken to
 *
 * A simple example chat object is:
 * const chat = {
 *     1: {
 *         text: 'Good morning sir',
 *         next: 2
 *     },
 *     2: {
 *         text: 'Would you like tea or coffee with your breakfast?',
 *         options: [
 *             {
 *                 text: 'Tea',
 *                 next: 3
 *             },
 *             {
 *                 text: 'Coffee',
 *                 next: 4
 *             }
 *         ]
 *     },
 *     3: {
 *         text: 'Splendid - a fine drink if I do say so myself.'
 *     },
 *     4: {
 *         text: 'As you wish, sir'
 *     }
 * }
 */
const chat = {
    1: {
        text: 'Bonjour, comment puis-je vous aider?',
        mood:'hello',
        options: [
            {
                text: 'j’ai une question sur la cybersécurité.',
                next: 2

            },
            {
              text: 'J’ai subi une cyber attaque',
              next:3
            }
        ]
    },
    2: {
        text: 'Quels sujets vous interessent?',
        mood:'green',
        options: [
        {
          text: 'les types d’attaques.',
          next: 4
        },
        {
          text: 'La prévention.',
          next: 5
        }
      ]
    },
    3: {
        text: 'Avez-vous besoin d’un diagnostique ou d’une assistance en ligne?',
        mood:'red',
        options: [
          {
            text: 'Oui.',
            next: 6
          },
          {
            text: 'Non.',
            next: 7
          }
        ]
    },
    4: {
        text: 'Quels types d’attaques vous interessent?',
        mood:'green',
        options: [
        {
          text: 'Les cyberattaques.',
          next: 8
        },
        {
          text: 'Les arnaques.',
          next: 9
        }
      ]
    },
    5: {
        text: 'Quelles parties de la prévention?',
        mood:'green',
        options: [
        {
          text: 'Généralitées.',
          next: 10
        },
        {
          text:'Autres',
          next: 11
        }
    ]
    },
    6: {
        text: 'Voici le lien pour un diagnostique',
        mood:'green',
        options: [
        {
        text: 'diagnostique',
        url:'https://www.cybermalveillance.gouv.fr/diagnostic/11213c45-e17d-4b49-9867-333a2bddf5b9',
        next: 7
        }
      ]
    },
    7:
      {
        text: 'Besoin d’autre chose ?',
        mood:'green',
        option : [
          {
          text: 'Oui.',
          next: 12
          },
          {
          text: 'Non.',
          next: 13
        }
      ]
    },
    8: {
    text: 'Voici les différents types d’attaques que je peux vous proposer',
    mood: 'green',
    option:
      [
        {
          text: 'Piratage de compte en ligne.',
          next: 14
        },
        {
          text: 'Rançongiciel.',
          next: 15
        },
        {
          text: 'Hameçonnage (phishing en anglais).',
          next: 16
        }
      ]
    },
    9:{
      text :'Voici les différents types d’arnaques que je peux vous proposer',
      option : [
        {
          text: 'Arnaque au chantage à l’ordinateur ou webcam prétendus piratés.',
          next: 17
        },
        {
          text: 'Escroquerie au Compte Personnel de Formation (CPF).',
          next: 18
        }
      ]
    },
    10:{
      text : 'Voici quelques sujets traitant de la prévention.',
      option :[
        {
          text: 'Les mesures préventives?',
          next: 19
        },
        {
          text: 'Alerte de cybersécurité.',
          next: 20
        }

      ]
    },
    11: {
      text :'Quel genre de prévention vous interesse?',
    option :[
      {
        text: 'Violation de données',
        next: 21
      },
      {
        text : 'Faille de sécurité.',
        next :22
      }
    ]
    },
    12: {
      text:'Que puis-je faire d’autre pour vous ?',
      option : [
        {
          text:'Cybersécurité',
          next:2
        },
        {
          text:'Cyberattaque',
          next:3
        }
      ]
   },
  13:{
      text:'D’accord ! Merci beaucoup.',
      mood:'green',
      next: 12
  },
  14: {
      text: 'Voici un lien pour la sensibilisation du piratage de compte en ligne. ',
      options: [
        {
        text: 'j’y vais!',
        mood:'green',
        url: 'https://www.cybermalveillance.gouv.fr/diagnostic/38722346-0542-45a5-ba5c-599e8e6f1b2c',
        next: 12
      }
    ]
  },
  15: {
      text: 'Voici un lien pour les Rançongiciel ',
      mood:'green',
      options: [
      {
        text: 'j’y vais!',
        url: 'https://www.cybermalveillance.gouv.fr/diagnostic/a31112bc-47ad-4e3b-b7cc-a40bd3242090',
      next: 12
      }
    ]

  },
  16 : {
    text: 'Voici un lien pour l’hameçonnage',
    mood:'green',
    options: [
      {
        text: 'j’y vais!',
        url: 'https://www.cybermalveillance.gouv.fr/diagnostic/a31112bc-47ad-4e3b-b7cc-a40bd3242090',
        next: 12
      }
    ]
  },
  17: {
    text: 'Voici un lien pour l’arnaque au chantage',
    mood:'green',
    options: [
      {
        text: 'j’y vais!',
        url: 'https://www.cybermalveillance.gouv.fr/diagnostic/2236fedf-262f-483c-be6f-52f482d74088',
        next: 12,
      }
    ]
  },
  18:{
    text: 'Voici un lien pour l’escroquerie au Compte Personnel de Formation',
    mood:'green',
    options: [
      {
        text: 'j’y vais!',
        url: 'https://www.cybermalveillance.gouv.fr/diagnostic/ee45031f-0ea7-485e-bce6-ab1cbe69d08f',
        next: 12
      }
    ]
  },
  19 :{
    text : 'Voici un lien pour avoir des notions sur les mesures préventives',
    mood:'green',
    options: [
      {
        text: 'j’y vais!',
        url: 'https://www.cybermalveillance.gouv.fr/tous-nos-contenus/bonnes-pratiques/10-mesures-essentielles-assurer-securite-numerique',
        next: 12
      }
   ]
  },
  20:{
    text : 'Voici un lien pour les alertes de cybersécurité',
    mood:'green',
    options: [
      {
        text: 'j’y vais!',
        url: 'https://www.cybermalveillance.gouv.fr/tous-nos-contenus/bonnes-pratiques/10-mesures-essentielles-assurer-securite-numerique',
        next: 12
      }
   ]
  },
  21 : {
    text : 'Voici un lien pour les violation de données personnelles',
    mood:'green',
    options: [
      {
        text: 'j’y vais!',
        url: 'https://www.cybermalveillance.gouv.fr/diagnostic/552c1a5f-53b4-436a-abe7-7158e1f123be',
        next: 12
      }
   ]
  },
  22:{
    text : 'Voici un lien pour les failles de sécurité.',
    mood:'green',
    options: [
      {
        text: 'j’y vais!',
        url: 'https://www.cybermalveillance.gouv.fr/diagnostic/11213c45-e17d-4b49-9867-333a2bddf5b9',
        next: 12
      }
    ]
  }
}
;
