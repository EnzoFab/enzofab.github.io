import { DATA_SCIENCE, WEB, MOBILE, SOFTWARE } from "./topics";
import keywords from "./keywords";

/*
  project structure possible attribute
  {
    title: String,
    teaser: String => short text for the card,
    fullText: String => presentation of the project will be displayed in the modal
    html: String => add html inside the dialog,
    teaserHtml: String => same but for the card
    carousel: Array => list of images, takes priority over image,
    image: String,
    topic: Object => the main topic of the card,
    keywords: Array => list of string that can define the project
  }
 */

export default [
  {
    title: "Titanic disaster",
    topic: DATA_SCIENCE,
    keywords: [
      keywords.PYTHON,
      keywords.MACHINE_LEARNING,
      keywords.JUPYTER,
      keywords.SKLEARN
    ],
    teaserHtml:
      "Use of a classification algorithm to predict the survivors of the Titanic disaster",
    html: `The subject of the project was found on a <span class="font-weight-bold">Kaggle competion</span>. 
    Starting from the dataset found on Kaggle, I trained a classification algorithm to predict if a passenger
    was likely to survive.`
  },
  {
    title: "Car price prediction",
    topic: DATA_SCIENCE,
    keywords: [keywords.PYTHON, keywords.JUPYTER, keywords.SKLEARN],
    teaserHtml:
      "Use a regression algorithm to predict the price of a car according to its features.",
    html:
      "Use a regression algorithm to predict the price of a car according to its features."
  },
  {
    title: "Spam detection",
    topic: DATA_SCIENCE,
    keywords: [
      keywords.PYTHON,
      keywords.MACHINE_LEARNING,
      keywords.JUPYTER,
      keywords.SKLEARN
    ],
    teaser:
      "Use of a classification algorithm to determine if a mail is a spam.",
    html: "Use of a classification algorithm to determine if a mail is a spam."
  },
  {
    title: "Blablapharma",
    topic: WEB,
    image: "images/blablapharma/cover.png",
    keywords: [
      keywords.VUE,
      keywords.NUXT,
      keywords.NODE,
      keywords.JAVASCRIPT,
      keywords.WEB_SOCKET
    ],
    teaserHtml: `Project carried out for the <span class="font-weight-bold font-italic green--text">Blablapharma</span> team.`,
    html: `Blablapharma is website allowing to patients to directly contact pharmacists from the platform 
    and share with them through the chat.<br />The purpose of the project is to ease the interaction between 
    patients and pharmacists because the exchanges can be done anytime from anywhere.`
  },
  {
    title: "Visual portal management",
    topic: WEB,
    keywords: [
      keywords.JAVASCRIPT,
      keywords.NODE,
      keywords.REACT,
      keywords.INDUSTRIAL_PROJECT,
      keywords.MONGO_DB
    ],
    teaserHtml: `Web application which aims to transform data coming from various origin to match a specific 
    output structure.`,
    html: `<span class="grey--text font-weight-bold">Visual portal management</span> 
        is a web application which handles data from various origins (csv, excel, twitter, google news) and transforms it
        into a given format. Indeed the user chooses his data and precises the output format 
        (by selecting an existing <u>template</u> or by creating his own <u>template</u>). 
        The result of the transformation is returned through a micro service url. 
        The application aims to exchange with another application which displays chart and provides to it the transformed data. 
        `
  },

  {
    title: "Clicky blinders",
    topic: DATA_SCIENCE,
    keywords: [
      keywords.SCALA,
      keywords.SPARK,
      keywords.MACHINE_LEARNING,
      keywords.SCHOOL_PROJECT
    ],
    teaserHtml: `An application to predict whether an user is going to click on an ad or not.`,
    html: `Starting from a dataset of 1 millions rows, We trained a machine learning algorithm 
    (<span class="font-italic">Logistic Regression</span>) to predict if an user is likely to click on an advertisement.
    `
  },

  {
    title: "Prello",
    topic: WEB,
    keywords: [
      keywords.JAVASCRIPT,
      keywords.NODE,
      keywords.REACT,
      keywords.POSTGRES,
      keywords.ELECTRON,
      keywords.SCHOOL_PROJECT
    ],
    image: "images/prello/cover.png",
    teaserHtml: `A <span class="font-italic">Trello-like</span> application for students from Polytech Montpellier.`,
    html: `<span>Prello</span> is an application which allows to students to manage their projects online as Trello would do.
    The project is only intended to students from Polytech Montpellier and has also a desktop version.`
  },

  {
    title: "Battleship",
    topic: SOFTWARE,
    keywords: [keywords.SCALA, keywords.SCHOOL_PROJECT],
    teaserHtml: "A console battleship game.",
    html: `<h2 class="text-center">Battleship Rules</h2>
    <a class="font-italic" href="https://www.thesprucecrafts.com/the-basic-rules-of-battleship-411069">
    https://www.thesprucecrafts.com/the-basic-rules-of-battleship-411069</a>
    <p>
    Players take turns firing shots (by calling out a grid coordinate) to attempt to hit the opponent's enemy ships.
    On your turn, call out a letter and a number that identifies a row and column on your target grid. Your opponent checks 
    that coordinate on their ocean grid and verbally responds "miss" if there is no ship there, or "hit" if you have 
    correctly guessed a space that is occupied by a ship.
    Mark each of your shots or attempts to fire on the enemy using your target grid (upper part of the board) by using 
    white pegs to document your misses and red pegs to register your hits. As the game proceeds, the red pegs will 
    gradually identify the size and location of your opponent's ships.
    When it is your opponent's turn to fire shots at you, each time one of your ships receives a hit, put a red peg 
    into the hole on the ship corresponding to the grid space. When one of your ships has every slot filled with red pegs,
     you must announce to your opponent that he has sunk your ship. In classic play, the phrase is "You sunk my battleship!"
      It is, of course, illegal to change the hiding position of your ships once play has begun. 
    The first player to sink all five of his opponent's ships wins the game.</p>`
  },

  {
    title: "La vallée des enfants",
    topic: WEB,
    image: "images/valleedesenfants/cover.png",
    carousel: [
      "images/valleedesenfants/cover.png",
      "images/valleedesenfants/carousel_1.png",
      "images/valleedesenfants/carousel_2.png",
      "images/valleedesenfants/carousel_3.png"
    ],
    keywords: [
      keywords.JAVASCRIPT,
      keywords.VUE,
      keywords.NODE,
      keywords.EXPRESS,
      keywords.INDUSTRIAL_PROJECT,
      keywords.POSTGRES
    ],
    teaserHtml: `<span class="font-weight-bold font-italic">La vallée des enfants</span> 
    is an industrial project carried out in my 4th year of engineering school.
    <p>The project was intended to a french nursery which needed to present its 
    activity and automate the computation of its contracts.</p>
    By this way, the nurses were able to manage the contract of their children 
    and each month easily compute the bill associated to a contract.
    `,
    html: `Within a group of 3 students, I developed this project for one and a half month. 
      <p>This project consisted in a showcase site to present the nursery and 
      an application to ease the management of its contracts.</p>`
  },

  {
    title: "La mutuelle des motards",
    topic: DATA_SCIENCE,
    image: "images/mutellemotards/cover.jpg",
    keywords: [keywords.R, keywords.R_STUDIO],
    teaser:
      "Analyse the result of a survey on the habits of the bikers during the summer.",
    html: `<a href="https://www.mutuelledesmotards.fr/" class="font-weight-bold blue--text" target="_blank">
            La Mutuelle Des Motards</a> provided us the result of a survey they carried out
    about the habits of the bikers during the summers. We analysed this result to extract trends and determine 
    what the typical biker does during the summer, where does he go and with who. We were then able to create a poster
    summarizing all this information.`
  },

  {
    title: "Aniki",
    topic: SOFTWARE,
    image: "images/aniki/cover.png",
    keywords: [
      keywords.JAVA,
      keywords.JAVA_FX,
      keywords.POSTGRES,
      keywords.SCHOOL_PROJECT
    ],
    teaser:
      "Desktop application intended to the student office of Polytech Montpellier in order to manage " +
      "the liquidity of the association.",
    html:
      "Desktop application intended to the student office of Polytech Montpellier in order to manage " +
      "the liquidity of the association."
  },

  {
    title: "MyPk",
    topic: MOBILE,
    keywords: [keywords.SWIFT, keywords.SCHOOL_PROJECT]
  },

  {
    title: "Simple chat",
    topic: SOFTWARE,
    keywords: [keywords.JAVASCRIPT, keywords.JAVA_FX, keywords.SCHOOL_PROJECT]
  },

  {
    title: "Anonymous forum",
    topic: WEB,
    keywords: [keywords.NODE, keywords.JAVASCRIPT, keywords.SCHOOL_PROJECT]
  },

  {
    title: "ChiCi Soap Factory",
    topic: MOBILE,
    keywords: [keywords.JAVA, keywords.LIBGDX, keywords.INTERNSHIP]
  },

  {
    title: "Head shoulder knees and toes",
    topic: MOBILE,
    keywords: [keywords.ANDROID, keywords.JAVA, keywords.INTERNSHIP]
  }
];
