/* =========================================
   DIACARE
   Main JavaScript
========================================= */


/* =========================================
   LANGUAGE SYSTEM
========================================= */

const translations = {

  en: {

    navHome: "Home",
    navLearn: "Learn",
    navTesting: "Testing",
    navQuiz: "Quiz",
    navPlan: "My Plan",

    heroEyebrow: "Diabetes Awareness",

    heroTitle:
      "Understand diabetes. Make informed choices.",

    heroText:
      "DiaCare helps you learn about diabetes, understand common symptoms and explore different ways glucose can be checked.",

    startQuiz:
      "Start Awareness Quiz",

    exploreLearn:
      "Explore Information",

    heroNote:
      "This website is for education and awareness. The quiz cannot diagnose diabetes.",

    heroCardTitle:
      "Learn • Check • Understand",

    heroCardText:
      "Explore diabetes information and create your own personalized awareness plan.",

    questions:
      "Questions",

    quickLearnTitle:
      "Learn",

    quickLearnText:
      "Understand the basics",

    quickTestingTitle:
      "Explore Testing",

    quickTestingText:
      "Compare testing approaches",

    quickQuizTitle:
      "Take Quiz",

    quickQuizText:
      "Get personalized guidance",

    learnEyebrow:
      "Learn",

    learnTitle:
      "Diabetes, explained simply",

    learnText:
      "Understanding diabetes starts with knowing what glucose, insulin and common symptoms mean.",

    whatDiabetesTitle:
      "What is diabetes?",

    whatDiabetesText:
      "Diabetes is a group of conditions that affect how the body manages blood glucose. Glucose is an important source of energy for the body.",

    typesTitle:
      "Main types",

    typesText:
      "The main types include type 1 diabetes, type 2 diabetes and gestational diabetes. They have different causes and management approaches.",

    symptomsTitle:
      "Common signs",

    symptomsText:
      "Increased thirst, frequent urination, tiredness and changes in vision can occur with diabetes, although these symptoms can also have other causes.",

    supportTitle:
      "Healthy habits",

    supportText:
      "Regular movement, balanced meals, adequate sleep and appropriate healthcare can support overall health.",

    testingEyebrow:
      "Explore",

    testingTitle:
      "How can diabetes be checked?",

    testingText:
      "Explore the difference between non-invasive approaches and minimally invasive methods.",

    nonInvasiveTab:
      "🌿 Non-invasive",

    minimallyInvasiveTab:
      "🩸 Minimally invasive",

    nonInvasiveTitle:
      "Non-invasive approaches",

    nonInvasiveText:
      "Non-invasive approaches do not require taking blood from the body. Some technologies are being researched to estimate glucose using signals such as light or other measurements.",

    noBloodTitle:
      "No blood sample",

    noBloodText:
      "The method does not require a blood draw or finger-prick.",

    comfortTitle:
      "Comfort-focused",

    comfortText:
      "These approaches aim to make glucose monitoring easier and more comfortable.",

    evolvingTitle:
      "Technology is evolving",

    evolvingText:
      "Many non-invasive glucose technologies are still being researched or have limitations.",

    rememberTitle:
      "Remember:",

    nonInvasiveNote:
      "A non-invasive device should not automatically be assumed to diagnose diabetes. Medical diagnosis requires appropriate clinical assessment and validated testing.",

    minimallyTitle:
      "Minimally invasive methods",

    minimallyText:
      "These methods use a small blood sample or another measurement that involves a minor procedure. They are commonly used to measure glucose more directly.",

    fingerTitle:
      "Finger-prick testing",

    fingerText:
      "A small blood sample can be used with a glucose meter to measure blood glucose.",

    bloodTestTitle:
      "Blood tests",

    bloodTestText:
      "Healthcare professionals can use laboratory tests to assess blood glucose and other markers.",

    monitoringTitle:
      "Continuous monitoring",

    monitoringText:
      "Some glucose-monitoring systems use a small sensor placed under the skin to continuously estimate glucose levels.",

    importantTitle:
      "Important:",

    minimallyNote:
      "The right test depends on the person's situation. A healthcare professional can explain which test is appropriate.",

    knowledgeTitle:
      "Quick knowledge check",

    knowledgeQuestion:
      "Which approach requires a blood sample?",

    knowledgeOption1:
      "🌿 Non-invasive",

    knowledgeOption2:
      "🩸 Blood-based testing",

    quizEyebrow:
      "Interactive Quiz",

    quizTitle:
      "Check your awareness",

    quizText:
      "Answer each question to build a personalized educational recommendation.",

    back:
      "← Back",

    next:
      "Next →",

    livePlanTitle:
      "Your live plan",

    livePlanText:
      "Your recommendations will update as you answer.",

    liveEmpty:
      "Answer a question to begin creating your plan.",

    decisionTitle:
      "Your decisions",

    decisionEmpty:
      "Your answers will appear here.",

    resultEyebrow:
      "Your DiaCare Summary",

    restart:
      "Take Quiz Again",

    disclaimerTitle:
      "Important",

    disclaimerText:
      "DiaCare is an educational awareness website. This quiz does not diagnose diabetes and should not replace advice, testing or assessment from a qualified healthcare professional. If you are concerned about symptoms, talk to a parent, guardian, trusted adult or healthcare professional.",

    footerText:
      "Learn. Understand. Take informed steps.",

    footerDisclaimer:
      "Created for diabetes awareness and education.",

    yes:
      "Yes",

    no:
      "No",

    resultLow:
      "Your answers did not show several of the symptoms included in this awareness quiz. However, this quiz cannot rule out diabetes.",

    resultFollow:
      "Some of your answers included symptoms or factors worth discussing with a trusted adult or healthcare professional. Your answers do not diagnose diabetes.",

    resultMany:
      "Several of your answers included symptoms that can occur with diabetes. Consider discussing these answers with a trusted adult and a healthcare professional. Only appropriate medical assessment and testing can determine whether diabetes is present."
  },


  hi: {

    navHome: "होम",
    navLearn: "जानें",
    navTesting: "जांच के तरीके",
    navQuiz: "क्विज़",
    navPlan: "मेरा प्लान",

    heroEyebrow: "डायबिटीज़ जागरूकता",

    heroTitle:
      "डायबिटीज़ को समझें। सही जानकारी के साथ निर्णय लें।",

    heroText:
      "DiaCare आपको डायबिटीज़, सामान्य लक्षणों और ग्लूकोज़ की जांच के विभिन्न तरीकों को समझने में मदद करता है।",

    startQuiz:
      "जागरूकता क्विज़ शुरू करें",

    exploreLearn:
      "जानकारी देखें",

    heroNote:
      "यह वेबसाइट शिक्षा और जागरूकता के लिए है। यह क्विज़ डायबिटीज़ का निदान नहीं कर सकता।",

    heroCardTitle:
      "जानें • समझें • जागरूक रहें",

    heroCardText:
      "डायबिटीज़ के बारे में जानें और अपनी जानकारी के आधार पर एक व्यक्तिगत जागरूकता प्लान बनाएं।",

    questions:
      "प्रश्न",

    quickLearnTitle:
      "जानें",

    quickLearnText:
      "बुनियादी जानकारी समझें",

    quickTestingTitle:
      "जांच के तरीके",

    quickTestingText:
      "विभिन्न तरीकों को समझें",

    quickQuizTitle:
      "क्विज़ लें",

    quickQuizText:
      "व्यक्तिगत जानकारी पाएं",

    learnEyebrow:
      "जानें",

    learnTitle:
      "डायबिटीज़ को आसान भाषा में समझें",

    learnText:
      "डायबिटीज़ को समझने के लिए ग्लूकोज़, इंसुलिन और सामान्य लक्षणों के बारे में जानना उपयोगी है।",

    whatDiabetesTitle:
      "डायबिटीज़ क्या है?",

    whatDiabetesText:
      "डायबिटीज़ ऐसी स्थितियों का समूह है जो शरीर द्वारा रक्त में मौजूद ग्लूकोज़ को नियंत्रित करने के तरीके को प्रभावित करती हैं। ग्लूकोज़ शरीर के लिए ऊर्जा का एक महत्वपूर्ण स्रोत है।",

    typesTitle:
      "मुख्य प्रकार",

    typesText:
      "मुख्य प्रकारों में टाइप 1 डायबिटीज़, टाइप 2 डायबिटीज़ और गर्भावस्था के दौरान होने वाली डायबिटीज़ शामिल हैं। इनके कारण और प्रबंधन अलग-अलग हो सकते हैं।",

    symptomsTitle:
      "सामान्य संकेत",

    symptomsText:
      "बहुत अधिक प्यास लगना, बार-बार पेशाब आना, थकान और दृष्टि में बदलाव डायबिटीज़ में हो सकते हैं, लेकिन इनके अन्य कारण भी हो सकते हैं।",

    supportTitle:
      "स्वस्थ आदतें",

    supportText:
      "नियमित शारीरिक गतिविधि, संतुलित भोजन, पर्याप्त नींद और उचित स्वास्थ्य देखभाल सामान्य स्वास्थ्य में मदद कर सकती है।",

    testingEyebrow:
      "जानें",

    testingTitle:
      "डायबिटीज़ की जांच कैसे की जा सकती है?",

    testingText:
      "नॉन-इनवेसिव और कम-इनवेसिव जांच के तरीकों के बीच अंतर समझें।",

    nonInvasiveTab:
      "🌿 नॉन-इनवेसिव",

    minimallyInvasiveTab:
      "🩸 कम-इनवेसिव",

    nonInvasiveTitle:
      "नॉन-इनवेसिव तरीके",

    nonInvasiveText:
      "नॉन-इनवेसिव तरीकों में शरीर से रक्त लेने की आवश्यकता नहीं होती। कुछ तकनीकों में प्रकाश या अन्य संकेतों की मदद से ग्लूकोज़ का अनुमान लगाने पर शोध किया जा रहा है।",

    noBloodTitle:
      "रक्त का नमूना नहीं",

    noBloodText:
      "इस तरीके में रक्त निकालने या उंगली में सुई चुभाने की आवश्यकता नहीं होती।",

    comfortTitle:
      "अधिक आरामदायक",

    comfortText:
      "इन तकनीकों का उद्देश्य ग्लूकोज़ की निगरानी को आसान और अधिक आरामदायक बनाना है।",

    evolvingTitle:
      "तकनीक विकसित हो रही है",

    evolvingText:
      "कई नॉन-इनवेसिव ग्लूकोज़ तकनीकों पर अभी भी शोध चल रहा है या उनमें कुछ सीमाएं हो सकती हैं।",

    rememberTitle:
      "ध्यान रखें:",

    nonInvasiveNote:
      "किसी नॉन-इनवेसिव डिवाइस को अपने आप डायबिटीज़ का निदान करने वाला नहीं मानना चाहिए। सही निदान के लिए उचित चिकित्सकीय जांच और मान्य परीक्षण आवश्यक होते हैं।",

    minimallyTitle:
      "कम-इनवेसिव तरीके",

    minimallyText:
      "इन तरीकों में रक्त की थोड़ी मात्रा या ऐसी माप शामिल हो सकती है जिसमें छोटी प्रक्रिया की आवश्यकता होती है। इनका उपयोग ग्लूकोज़ को अधिक सीधे मापने के लिए किया जाता है।",

    fingerTitle:
      "फिंगर-प्रिक जांच",

    fingerText:
      "ग्लूकोज़ मीटर की मदद से रक्त की थोड़ी मात्रा लेकर रक्त में ग्लूकोज़ मापा जा सकता है।",

    bloodTestTitle:
      "रक्त जांच",

    bloodTestText:
      "स्वास्थ्य विशेषज्ञ रक्त में ग्लूकोज़ और अन्य संकेतकों की जांच के लिए प्रयोगशाला परीक्षणों का उपयोग कर सकते हैं।",

    monitoringTitle:
      "लगातार निगरानी",

    monitoringText:
      "कुछ ग्लूकोज़ मॉनिटरिंग सिस्टम त्वचा के नीचे एक छोटा सेंसर लगाकर ग्लूकोज़ का लगातार अनुमान लगाते हैं।",

    importantTitle:
      "महत्वपूर्ण:",

    minimallyNote:
      "कौन सी जांच उपयुक्त है यह व्यक्ति की स्थिति पर निर्भर करता है। स्वास्थ्य विशेषज्ञ उचित जांच के बारे में बता सकते हैं।",

    knowledgeTitle:
      "छोटी ज्ञान जांच",

    knowledgeQuestion:
      "किस तरीके में रक्त के नमूने की आवश्यकता होती है?",

    knowledgeOption1:
      "🌿 नॉन-इनवेसिव",

    knowledgeOption2:
      "🩸 रक्त आधारित जांच",

    quizEyebrow:
      "इंटरैक्टिव क्विज़",

    quizTitle:
      "अपनी जागरूकता जांचें",

    quizText:
      "हर प्रश्न का उत्तर देकर अपनी व्यक्तिगत शैक्षणिक सिफारिश तैयार करें।",

    back:
      "← पीछे",

    next:
      "आगे →",

    livePlanTitle:
      "आपका लाइव प्लान",

    livePlanText:
      "आपके उत्तरों के साथ सिफारिशें बदलती रहेंगी।",

    liveEmpty:
      "अपना प्लान बनाने के लिए किसी प्रश्न का उत्तर दें।",

    decisionTitle:
      "आपके निर्णय",

    decisionEmpty:
      "आपके उत्तर यहां दिखाई देंगे।",

    resultEyebrow:
      "आपका DiaCare सारांश",

    restart:
      "क्विज़ फिर से लें",

    disclaimerTitle:
      "महत्वपूर्ण",

    disclaimerText:
      "DiaCare एक शैक्षणिक जागरूकता वेबसाइट है। यह क्विज़ डायबिटीज़ का निदान नहीं करता और योग्य स्वास्थ्य विशेषज्ञ की सलाह, जांच या मूल्यांकन का विकल्प नहीं है। यदि आपको किसी लक्षण को लेकर चिंता है, तो माता-पिता, अभिभावक, किसी विश्वसनीय वयस्क या स्वास्थ्य विशेषज्ञ से बात करें।",

    footerText:
      "जानें। समझें। सही जानकारी के साथ कदम उठाएं।",

    footerDisclaimer:
      "डायबिटीज़ जागरूकता और शिक्षा के लिए बनाया गया।",

    yes:
      "हां",

    no:
      "नहीं",

    resultLow:
      "आपके उत्तरों में इस जागरूकता क्विज़ में शामिल कई लक्षण नहीं दिखाई दिए। फिर भी यह क्विज़ डायबिटीज़ को पूरी तरह से बाहर नहीं कर सकता।",

    resultFollow:
      "आपके कुछ उत्तरों में ऐसे लक्षण या कारक शामिल थे जिनके बारे में किसी विश्वसनीय वयस्क या स्वास्थ्य विशेषज्ञ से बात करना उपयोगी हो सकता है। आपके उत्तर डायबिटीज़ का निदान नहीं करते।",

    resultMany:
      "आपके कई उत्तरों में ऐसे लक्षण शामिल थे जो डायबिटीज़ में हो सकते हैं। इन उत्तरों के बारे में किसी विश्वसनीय वयस्क और स्वास्थ्य विशेषज्ञ से बात करने पर विचार करें। डायबिटीज़ की पुष्टि के लिए उचित चिकित्सकीय जांच और परीक्षण आवश्यक हैं।"
  }

};


/* =========================================
   QUIZ QUESTIONS
========================================= */

const questions = [

  {
    id: "thirst",

    question: {
      en: "Have you noticed unusual thirst recently?",
      hi: "क्या आपने हाल में सामान्य से अधिक प्यास महसूस की है?"
    },

    options: [
      {
        value: "yes",
        en: "Yes",
        hi: "हां"
      },
      {
        value: "no",
        en: "No",
        hi: "नहीं"
      }
    ]
  },


  {
    id: "urination",

    question: {
      en: "Have you been urinating more often than usual?",
      hi: "क्या आपको सामान्य से अधिक बार पेशाब आ रहा है?"
    },

    options: [
      {
        value: "yes",
        en: "Yes",
        hi: "हां"
      },
      {
        value: "no",
        en: "No",
        hi: "नहीं"
      }
    ]
  },


  {
    id: "fatigue",

    question: {
      en: "Have you been feeling unusually tired or low on energy?",
      hi: "क्या आपको असामान्य रूप से थकान या कम ऊर्जा महसूस हो रही है?"
    },

    options: [
      {
        value: "yes",
        en: "Yes",
        hi: "हां"
      },
      {
        value: "no",
        en: "No",
        hi: "नहीं"
      }
    ]
  },


  {
    id: "vision",

    question: {
      en: "Have you noticed changes or blurriness in your vision?",
      hi: "क्या आपने अपनी दृष्टि में बदलाव या धुंधलापन देखा है?"
    },

    options: [
      {
        value: "yes",
        en: "Yes",
        hi: "हां"
      },
      {
        value: "no",
        en: "No",
        hi: "नहीं"
      }
    ]
  },


  {
    id: "healing",

    question: {
      en: "Have you noticed cuts or wounds taking longer than expected to heal?",
      hi: "क्या आपने देखा है कि कट या घाव ठीक होने में सामान्य से अधिक समय ले रहे हैं?"
    },

    options: [
      {
        value: "yes",
        en: "Yes",
        hi: "हां"
      },
      {
        value: "no",
        en: "No",
        hi: "नहीं"
      }
    ]
  },


  {
    id: "family",

    question: {
      en: "Does diabetes run in your family?",
      hi: "क्या आपके परिवार में किसी को डायबिटीज़ है?"
    },

    options: [
      {
        value: "yes",
        en: "Yes",
        hi: "हां"
      },
      {
        value: "no",
        en: "No",
        hi: "नहीं"
      }
    ]
  },


  {
    id: "activity",

    question: {
      en: "Do you currently get little regular physical activity?",
      hi: "क्या आप वर्तमान में बहुत कम नियमित शारीरिक गतिविधि करते हैं?"
    },

    options: [
      {
        value: "yes",
        en: "Yes",
        hi: "हां"
      },
      {
        value: "no",
        en: "No",
        hi: "नहीं"
      }
    ]
  },


  {
    id: "checkup",

    question: {
      en: "Have you recently discussed your health concerns with a healthcare professional?",
      hi: "क्या आपने हाल में अपनी स्वास्थ्य संबंधी चिंताओं के बारे में किसी स्वास्थ्य विशेषज्ञ से बात की है?"
    },

    options: [
      {
        value: "yes",
        en: "Yes",
        hi: "हां"
      },
      {
        value: "no",
        en: "No",
        hi: "नहीं"
      }
    ]
  }

];


/* =========================================
   STATE
========================================= */

let currentLanguage =
  localStorage.getItem("diacare-language") || "en";

let currentQuestion = 0;

let answers = {};

let currentTheme =
  localStorage.getItem("diacare-theme") || "light";


/* =========================================
   DOM ELEMENTS
========================================= */

const languageSelect =
  document.getElementById("languageSelect");

const themeToggle =
  document.getElementById("themeToggle");

const menuToggle =
  document.getElementById("menuToggle");

const mainNav =
  document.getElementById("mainNav");

const questionArea =
  document.getElementById("questionArea");

const questionNumber =
  document.getElementById("questionNumber");

const progressBar =
  document.getElementById("progressBar");

const progressPercent =
  document.getElementById("progressPercent");

const backButton =
  document.getElementById("backButton");

const nextButton =
  document.getElementById("nextButton");

const liveRecommendations =
  document.getElementById("liveRecommendations");

const decisionTrail =
  document.getElementById("decisionTrail");

const quizResult =
  document.getElementById("quizResult");

const resultTitle =
  document.getElementById("resultTitle");

const resultText =
  document.getElementById("resultText");

const finalRecommendations =
  document.getElementById("finalRecommendations");

const restartQuiz =
  document.getElementById("restartQuiz");


/* =========================================
   TRANSLATION HELPER
========================================= */

function t(key) {

  return translations[currentLanguage][key] ||
         translations.en[key] ||
         key;

}


/* =========================================
   APPLY TRANSLATIONS
========================================= */

function applyTranslations() {

  document
    .querySelectorAll("[data-i18n]")
    .forEach(element => {

      const key = element.dataset.i18n;

      if (translations[currentLanguage][key]) {

        element.textContent =
          translations[currentLanguage][key];

      }

    });


  document.documentElement.lang =
    currentLanguage === "hi"
      ? "hi"
      : "en";


  renderQuestion();

  updateRecommendations();

  updateDecisionTrail();

  updateResultLanguage();

}


/* =========================================
   LANGUAGE SELECTOR
========================================= */

languageSelect.value =
  currentLanguage;


languageSelect.addEventListener(
  "change",
  event => {

    currentLanguage =
      event.target.value;

    localStorage.setItem(
      "diacare-language",
      currentLanguage
    );

    applyTranslations();

  }
);


/* =========================================
   DARK MODE
========================================= */

function applyTheme() {

  if (currentTheme === "dark") {

    document.body.classList.add("dark");

    themeToggle.textContent = "☀️";

  } else {

    document.body.classList.remove("dark");

    themeToggle.textContent = "🌙";

  }

}


themeToggle.addEventListener(
  "click",
  () => {

    currentTheme =
      currentTheme === "dark"
        ? "light"
        : "dark";

    localStorage.setItem(
      "diacare-theme",
      currentTheme
    );

    applyTheme();

  }
);


/* =========================================
   MOBILE MENU
========================================= */

menuToggle.addEventListener(
  "click",
  () => {

    mainNav.classList.toggle("open");

  }
);


mainNav
  .querySelectorAll("a")
  .forEach(link => {

    link.addEventListener(
      "click",
      () => {

        mainNav.classList.remove("open");

      }
    );

  });


/* =========================================
   QUIZ QUESTION RENDERING
========================================= */

function renderQuestion() {

  const question =
    questions[currentQuestion];

  const questionText =
    question.question[currentLanguage];

  const selectedAnswer =
    answers[question.id];


  questionArea.innerHTML = `

    <h3>
      ${questionText}
    </h3>

    <div class="answer-options">

      ${question.options.map(option => `

        <button
          type="button"
          class="answer-option
            ${selectedAnswer === option.value
              ? "selected"
              : ""}"
          data-value="${option.value}"
        >
          ${option[currentLanguage]}
        </button>

      `).join("")}

    </div>

  `;


  questionArea
    .querySelectorAll(".answer-option")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          answers[question.id] =
            button.dataset.value;

          renderQuestion();

          updateRecommendations();

          updateDecisionTrail();

        }
      );

    });


  updateQuizProgress();

}


/* =========================================
   QUIZ PROGRESS
========================================= */

function updateQuizProgress() {

  const total =
    questions.length;

  const progress =
    ((currentQuestion + 1) / total) * 100;

  questionNumber.textContent =
    currentLanguage === "hi"
      ? `प्रश्न ${currentQuestion + 1} / ${total}`
      : `Question ${currentQuestion + 1} of ${total}`;


  progressBar.style.width =
    `${progress}%`;


  progressPercent.textContent =
    `${Math.round(progress)}%`;


  backButton.disabled =
    currentQuestion === 0;


  const isLast =
    currentQuestion === total - 1;


  nextButton.textContent =
    isLast
      ? (currentLanguage === "hi"
          ? "परिणाम देखें →"
          : "See Results →")
      : t("next");

}


/* =========================================
   MOVE TO NEXT QUESTION
========================================= */

nextButton.addEventListener(
  "click",
  () => {

    const currentId =
      questions[currentQuestion].id;


    if (!answers[currentId]) {

      questionArea.animate(
        [
          { transform: "translateX(0)" },
          { transform: "translateX(-5px)" },
          { transform: "translateX(5px)" },
          { transform: "translateX(0)" }
        ],
        {
          duration: 250
        }
      );

      return;

    }


    if (
      currentQuestion <
      questions.length - 1
    ) {

      currentQuestion++;

      renderQuestion();

      document
        .getElementById("quiz")
        .scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

    } else {

      showResults();

    }

  }
);


/* =========================================
   BACK BUTTON
========================================= */

backButton.addEventListener(
  "click",
  () => {

    if (currentQuestion > 0) {

      currentQuestion--;

      renderQuestion();

    }

  }
);


/* =========================================
   PERSONALIZED RECOMMENDATIONS
========================================= */

function getRecommendations() {

  const recommendations = [];

  const symptomAnswers = [

    "thirst",
    "urination",
    "fatigue",
    "vision",
    "healing"

  ];


  const symptomCount =
    symptomAnswers.filter(
      id => answers[id] === "yes"
    ).length;


  /* THIRST */

  if (answers.thirst === "yes") {

    recommendations.push(
      currentLanguage === "hi"
        ? "💧 आपने अधिक प्यास के लिए 'हां' चुना। यह कई कारणों से हो सकता है; यदि यह बना रहता है तो किसी विश्वसनीय वयस्क या स्वास्थ्य विशेषज्ञ से बात करें।"
        : "💧 You selected yes for unusual thirst. This can have many causes; if it continues, consider discussing it with a trusted adult or healthcare professional."
    );

  } else if (answers.thirst === "no") {

    recommendations.push(
      currentLanguage === "hi"
        ? "💧 आपने असामान्य प्यास के लिए 'नहीं' चुना। पर्याप्त पानी पीना सामान्य स्वास्थ्य के लिए उपयोगी है।"
        : "💧 You selected no for unusual thirst. Staying appropriately hydrated supports general health."
    );

  }


  /* URINATION */

  if (answers.urination === "yes") {

    recommendations.push(
      currentLanguage === "hi"
        ? "🚻 बार-बार पेशाब आना कई कारणों से हो सकता है। यदि यह नया या लगातार है, तो किसी स्वास्थ्य विशेषज्ञ से बात करना उचित हो सकता है।"
        : "🚻 Frequent urination can have several causes. If this is new or persistent, discussing it with a healthcare professional may be appropriate."
    );

  } else if (answers.urination === "no") {

    recommendations.push(
      currentLanguage === "hi"
        ? "🚻 आपने बार-बार पेशाब आने के लिए 'नहीं' चुना।"
        : "🚻 You selected no for frequent urination."
    );

  }


  /* FATIGUE */

  if (answers.fatigue === "yes") {

    recommendations.push(
      currentLanguage === "hi"
        ? "⚡ आपने थकान के लिए 'हां' चुना। थकान के कई कारण हो सकते हैं; यदि यह बनी रहती है तो किसी विश्वसनीय वयस्क या स्वास्थ्य विशेषज्ञ से बात करें।"
        : "⚡ You selected yes for unusual tiredness. Fatigue can have many causes; if it persists, consider discussing it with a trusted adult or healthcare professional."
    );

  } else {

    recommendations.push(
      currentLanguage === "hi"
        ? "⚡ आपने असामान्य थकान के लिए 'नहीं' चुना।"
        : "⚡ You selected no for unusual tiredness."
    );

  }


  /* VISION */

  if (answers.vision === "yes") {

    recommendations.push(
      currentLanguage === "hi"
        ? "👁️ आपने दृष्टि में बदलाव के लिए 'हां' चुना। दृष्टि में बदलाव के कई कारण हो सकते हैं और लगातार बदलाव के लिए स्वास्थ्य विशेषज्ञ से बात करना उपयोगी है।"
        : "👁️ You selected yes for vision changes. Vision changes can have several causes, and persistent changes are worth discussing with a healthcare professional."
    );

  } else {

    recommendations.push(
      currentLanguage === "hi"
        ? "👁️ आपने दृष्टि में बदलाव के लिए 'नहीं' चुना।"
        : "👁️ You selected no for vision changes."
    );

  }


  /* HEALING */

  if (answers.healing === "yes") {

    recommendations.push(
      currentLanguage === "hi"
        ? "🩹 आपने घाव के धीरे ठीक होने के लिए 'हां' चुना। यदि यह बार-बार होता है, तो किसी स्वास्थ्य विशेषज्ञ से बात करें।"
        : "🩹 You selected yes for slower healing. If this happens repeatedly, consider discussing it with a healthcare professional."
    );

  } else {

    recommendations.push(
      currentLanguage === "hi"
        ? "🩹 आपने घाव के धीरे ठीक होने के लिए 'नहीं' चुना।"
        : "🩹 You selected no for slower healing."
    );

  }


  /* FAMILY HISTORY */

  if (answers.family === "yes") {

    recommendations.push(
      currentLanguage === "hi"
        ? "🧬 आपने बताया कि परिवार में डायबिटीज़ है। पारिवारिक इतिहास एक महत्वपूर्ण स्वास्थ्य जानकारी है, इसलिए इसे नियमित स्वास्थ्य चर्चा में बताना उपयोगी है।"
        : "🧬 You indicated a family history of diabetes. Family history is useful health information to mention during routine healthcare discussions."
    );

  } else {

    recommendations.push(
      currentLanguage === "hi"
        ? "🧬 आपने परिवार में डायबिटीज़ के लिए 'नहीं' चुना।"
        : "🧬 You selected no for a family history of diabetes."
    );

  }


  /* ACTIVITY */

  if (answers.activity === "yes") {

    recommendations.push(
      currentLanguage === "hi"
        ? "🚶 आपने कम नियमित शारीरिक गतिविधि के लिए 'हां' चुना। अपनी उम्र और स्वास्थ्य के अनुसार ऐसी गतिविधियां चुनना उपयोगी हो सकता है जो आपको पसंद हों और जिन्हें आप नियमित रूप से कर सकें।"
        : "🚶 You selected yes for little regular physical activity. Age- and health-appropriate activities you enjoy can be a useful part of overall health."
    );

  } else {

    recommendations.push(
      currentLanguage === "hi"
        ? "🚶 आपने नियमित शारीरिक गतिविधि के लिए 'नहीं' चुना। अपनी पसंद की नियमित गतिविधियां जारी रखना सामान्य स्वास्थ्य के लिए अच्छा हो सकता है।"
        : "🚶 You selected no for little regular physical activity. Continuing enjoyable regular activity can support overall health."
    );

  }


  /* CHECKUP */

  if (answers.checkup === "yes") {

    recommendations.push(
      currentLanguage === "hi"
        ? "🩺 आपने बताया कि आपने स्वास्थ्य विशेषज्ञ से बात की है। स्वास्थ्य संबंधी चिंताओं को साझा करना एक अच्छा कदम है।"
        : "🩺 You indicated that you have discussed your concerns with a healthcare professional. Sharing health concerns is a useful step."
    );

  } else {

    recommendations.push(
      currentLanguage === "hi"
        ? "🩺 आपने हाल में स्वास्थ्य विशेषज्ञ से बात नहीं की है। यदि आपके उत्तरों को लेकर चिंता है, तो किसी विश्वसनीय वयस्क के साथ स्वास्थ्य विशेषज्ञ से बात करने पर विचार करें।"
        : "🩺 You indicated that you have not recently discussed your concerns with a healthcare professional. If you are concerned about your answers, consider speaking with a trusted adult and healthcare professional."
    );

  }


  /* EXTRA SUMMARY BASED ON EVERY SYMPTOM */

  if (symptomCount >= 3) {

    recommendations.unshift(
      currentLanguage === "hi"
        ? "⭐ आपके कई उत्तरों में ऐसे लक्षण शामिल हैं जो डायबिटीज़ में हो सकते हैं। यह निदान नहीं है, लेकिन किसी विश्वसनीय वयस्क और स्वास्थ्य विशेषज्ञ से बात करना उचित रहेगा।"
        : "⭐ Several of your answers included symptoms that can occur with diabetes. This is not a diagnosis, but discussing them with a trusted adult and healthcare professional would be appropriate."
    );

  } else if (symptomCount >= 1) {

    recommendations.unshift(
      currentLanguage === "hi"
        ? "⭐ आपके कुछ उत्तरों में ऐसे लक्षण शामिल हैं जिनके कई कारण हो सकते हैं। यदि वे बने रहते हैं, तो किसी विश्वसनीय वयस्क या स्वास्थ्य विशेषज्ञ से बात करें।"
        : "⭐ Some of your answers included symptoms that can have many causes. If they persist, consider discussing them with a trusted adult or healthcare professional."
    );

  } else {

    recommendations.unshift(
      currentLanguage === "hi"
        ? "🌱 इस क्विज़ में आपके उत्तरों से कई सामान्य डायबिटीज़ लक्षण सामने नहीं आए। फिर भी यह क्विज़ डायबिटीज़ को पूरी तरह से बाहर नहीं कर सकता।"
        : "🌱 Your answers did not show several of the common diabetes symptoms included in this quiz. However, this quiz cannot rule out diabetes."
    );

  }


  return recommendations;

}


/* =========================================
   UPDATE LIVE RECOMMENDATIONS
========================================= */

function updateRecommendations() {

  const answeredCount =
    Object.keys(answers).length;


  if (answeredCount === 0) {

    liveRecommendations.innerHTML = `

      <li class="empty-recommendation">

        <span>💡</span>

        <span>
          ${t("liveEmpty")}
        </span>

      </li>

    `;

    return;

  }


  const recommendations =
    getRecommendations();


  /* Show only the most relevant first items
     during the live quiz */

  const visible =
    recommendations.slice(0, 4);


  liveRecommendations.innerHTML =
    visible.map(item => `

      <li>
        ${item}
      </li>

    `).join("");

}


/* =========================================
   DECISION TRAIL
========================================= */

function updateDecisionTrail() {

  const answeredQuestions =
    questions.filter(
      question => answers[question.id]
    );


  if (answeredQuestions.length === 0) {

    decisionTrail.innerHTML = `

      <p class="empty-decision">
        ${t("decisionEmpty")}
      </p>

    `;

    return;

  }


  decisionTrail.innerHTML =
    answeredQuestions.map(question => {

      const answer =
        answers[question.id];

      const selectedOption =
        question.options.find(
          option =>
            option.value === answer
        );


      return `

        <div class="decision-item">

          <span>
            ${question.question[currentLanguage]}
          </span>

          <span class="decision-answer">
            ${selectedOption[currentLanguage]}
          </span>

        </div>

      `;

    }).join("");

}


/* =========================================
   SHOW RESULTS
========================================= */

function showResults() {

  const symptomIds = [

    "thirst",
    "urination",
    "fatigue",
    "vision",
    "healing"

  ];


  const symptomCount =
    symptomIds.filter(
      id => answers[id] === "yes"
    ).length;


  if (symptomCount >= 3) {

    resultTitle.textContent =
      currentLanguage === "hi"
        ? "आपके लिए स्वास्थ्य चर्चा महत्वपूर्ण है"
        : "A health discussion may be important for you";

    resultText.textContent =
      t("resultMany");

  } else if (symptomCount >= 1) {

    resultTitle.textContent =
      currentLanguage === "hi"
        ? "कुछ उत्तरों पर ध्यान देना उपयोगी है"
        : "Some answers are worth following up";

    resultText.textContent =
      t("resultFollow");

  } else {

    resultTitle.textContent =
      currentLanguage === "hi"
        ? "आपका जागरूकता सारांश"
        : "Your awareness summary";

    resultText.textContent =
      t("resultLow");

  }


  const recommendations =
    getRecommendations();


  finalRecommendations.innerHTML =
    recommendations.map(item => `

      <div class="final-item">
        ${item}
      </div>

    `).join("");


  quizResult.classList.remove("hidden");


  quizResult.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

}


/* =========================================
   UPDATE RESULT AFTER LANGUAGE CHANGE
========================================= */

function updateResultLanguage() {

  if (
    quizResult.classList.contains("hidden")
  ) {
    return;
  }


  showResults();

}


/* =========================================
   RESTART QUIZ
========================================= */

restartQuiz.addEventListener(
  "click",
  () => {

    currentQuestion = 0;

    answers = {};

    quizResult.classList.add("hidden");

    renderQuestion();

    updateRecommendations();

    updateDecisionTrail();

    document
      .getElementById("quiz")
      .scrollIntoView({
        behavior: "smooth"
      });

  }
);


/* =========================================
   TESTING TABS
========================================= */

const testingTabs =
  document.querySelectorAll(".testing-tab");

const testingPanels =
  document.querySelectorAll(".testing-panel");


testingTabs.forEach(tab => {

  tab.addEventListener(
    "click",
    () => {

      const target =
        tab.dataset.test;


      testingTabs.forEach(item => {

        item.classList.remove("active");

        item.setAttribute(
          "aria-selected",
          "false"
        );

      });


      testingPanels.forEach(panel => {

        panel.classList.remove("active");

      });


      tab.classList.add("active");

      tab.setAttribute(
        "aria-selected",
        "true"
      );


      document
        .getElementById(target)
        .classList.add("active");

    }
  );

});


/* =========================================
   TESTING KNOWLEDGE CHECK
========================================= */

const testAnswers =
  document.querySelectorAll(".test-answer");

const testingFeedback =
  document.getElementById(
    "testingFeedback"
  );


testAnswers.forEach(button => {

  button.addEventListener(
    "click",
    () => {

      if (
        button.dataset.answer === "blood"
      ) {

        testingFeedback.textContent =
          currentLanguage === "hi"
            ? "✓ सही! रक्त आधारित जांच में ग्लूकोज़ मापने के लिए रक्त का नमूना लिया जाता है।"
            : "✓ Correct! Blood-based testing uses a blood sample to measure glucose.";

        testingFeedback.className =
          "testing-feedback correct";

      } else {

        testingFeedback.textContent =
          currentLanguage === "hi"
            ? "पूरी तरह सही नहीं। नॉन-इनवेसिव तरीकों में रक्त का नमूना लेने की आवश्यकता नहीं होती।"
            : "Not quite. Non-invasive approaches do not require taking a blood sample.";

        testingFeedback.className =
          "testing-feedback incorrect";

      }

    }
  );

});


/* =========================================
   INITIALIZE
========================================= */

applyTheme();

applyTranslations();

renderQuestion();

updateRecommendations();

updateDecisionTrail();