const pitanje = document.getElementById("question")
const answer1 = document.getElementById("leftButton")
const answer2 = document.getElementById("rightButton")
const answer3 = document.getElementById("left2Button")
const answer4 = document.getElementById("right2Button")
const score = document.getElementById("score")
const record = document.getElementById("record")
const time = document.getElementById("time")
const startbutton = document.getElementById("startbtn")
const footer = document.getElementById("footer")
const content = document.getElementById("content")
const endp = document.getElementById("endParagraph")
const timep = document.getElementById("timeParagraph")
const contentH2 = document.getElementById("contentTitle")
const h1 = document.getElementById("h1")
const body = document.getElementById("body")
const startpara = document.getElementById("startpa  ")
const nextbutton = document.getElementById("nextButtom")

let currentQuestionIndex = 0;
let currentScore = 0;

const easyquestions = [
    pitanje1 = {
        title: "1. Lična zamjenica هما znači ",
        correctAnswer: "Njih dvojica",
        otherAnswers: ["Njih dvojica", "Nas dvojica", "Mi", "Vas dvojica"]
    },
    pitanje1 = {
        title: "2. Lična zamjenica أنا znači ",
        correctAnswer: "Ja",
        otherAnswers: ["Ti", "Ja", "Mi", "On"]
    },
    pitanje2 = {
        title: "3. Koliko ima harfova u arapskom jeziku?",
        correctAnswer: "28",
        otherAnswers: ["28", "27", "30", "31"]
    },
    pitanje14 = {
        title: "4. Koliko ima slabih harfova u arapskom jeziku?",
        correctAnswer: "3",
        otherAnswers: ["3", "2", "6", "9"]
    },
    pitanje3 = {
        title: "5. Šta znači glagol - نقرأ ",
        correctAnswer: "Mi čitamo",
        otherAnswers: ["Mi čitamo", "Mi smo čitali", "Pročitali smo", "Ona čita"]
    },
    pitanje4 = {
        title: "6. U kojoj proširenoj vrsti glagola je riječ  -  اِنْتَظَرْنَ?",
        correctAnswer: "8.",
        otherAnswers: ["8.", "10.", "9.", "7."]
    },
    pitanje4 = {
        title: "7. Glagolska imenica  -  تَقْديِمٌ  je od glagola u kojoj proširenoj vrsti? ",
        correctAnswer: "2.",
        otherAnswers: ["6.", "2.", "4.", "7."]
    },
    pitanje13 = {
        title: "8. Jug se na arapskom kaže _____?",
        correctAnswer: "جنوب",
        otherAnswers: ["جنوب", "غرب", "شرق", "شمال"]
    },
    pitanje5 = {
        title: "9. Kako se kaže 'crven' na arapskom?",
        correctAnswer: "أحمر",
        otherAnswers: ["أحمر", "حمراء", "أزرق", "أسود"]
    },
    pitanje6 = {
        title: "10. Koji od ovih pridjeva je u superlativu?",
        correctAnswer: "الاُسْرَعُ",
        otherAnswers: ["الاُسْرَعُ", "أَكْبَرُ مِنْ", "سَرِيعٌ", "كَبِيرٌ"]
    },
    pitanje7 = {
        title: "11. Koje zanimanje je حَكَم?",
        correctAnswer: "Sudija",
        otherAnswers: ["Sudija", "Golman", "Igrač", "Komentator"]
    },
    pitanje10 = {
        title: "12. Koji od ovih glagola je nakis?",
        correctAnswer: "مشى",
        otherAnswers: ["قرأ", "مشى", "قال", "وجد"]
    },
    pitanje13 = {
        title: "13. كلبه znači...",
        correctAnswer: "Njegov pas",
        otherAnswers: ["Njegov pas", "On je pas", "Njegovo srce", "Srčano"]
    },
    pitanje11 = {
        title: "14. Imenica se sa pridjevom ne slaže u...",
        correctAnswer: "Padežu i obliku",
        otherAnswers: ["Rodu, broju, padežu i određenosti", "Rodu i broju", "Padežu i obliku", "Padežu i određenosti"]
    },
    pitanje12 = {
        title: "15. Kako se na arapskom kaže 25?",
        correctAnswer: "خمسة وعشرون",
        otherAnswers: ["خمسة وعشرون", "اثنان وخمسون", "اثني عشر", "خمسمائة وعشرون"]
    },
    pitanje8 = {
        title: "16. Kako ćemo pravilno kazati Zejnebina knjiga?",
        correctAnswer: "كِتَابُ زَيْنَبَ",
        otherAnswers: ["كِتَابُ زَيْنَبَ", "كِتَابُ زَيْنَبِ", "كِتَابُ زَيْنَبُ", "كِتَابُ زَيْنَبٍ"]
    },
    pitanje9 = {
        title: "17. إنّ هذا ـــــــــ جديدٌ",
        correctAnswer: "الطالبَ",
        otherAnswers: ["الطالبَ", "الطالبِ", "الطالبًا", "الطالبُ"]
    },
    pitanje8 = {
        title: "18. .... أَللهُ خَلَقَ السَّمَاوَاتِ وَ",
        correctAnswer: "الأَرْضَ",
        otherAnswers: ["الأَرْضَ", "الأَرْضِ", "الأَرْضْ", "الأَرْضُ"]
    },
    pitanje9 = {
        title: "19. Ako su knjige skupe kazat ćemo: ",
        correctAnswer: "اَلْكُتُبُ غَاليَةٌ",
        otherAnswers: ["اَلْكُتُبُ غَاليَةٌ", "اَلْكُتُبُ غَاليِ", "اَلْكُتُبُ غَالٍ", "اَلْكُتُبُ غَالياتٌ"]
    },
    pitanje13 = {
        title: "20. Abdulaha ćemo pravilno dozvati: ",
        correctAnswer: "ياَ عَبْدَ اللَّهِ",
        otherAnswers: ["ياَ عَبْدَ اللَّهِ", "ياَ عَبْدَ اللَّهَ", "ياَ عَبْدُ اللَّهِ", "ياَ عَبْدِ اللَّهِ"]
    },
]


function setUp() {
    score.innerHTML = 0
    currentScore = 0
}
setUp()

//easy-------------------------------------------------------

function startbtn() {
    body.style.background = "linear-gradient(90deg, rgb(16, 118, 235) 0%, rgb(19, 211, 92) 100%)"

    let niz = [];
    for (let i = 0; i < 4; i++) {
        let num = Math.floor(Math.random() * 4);
        for (let j = 0; j < niz.length; j++)
            if (niz[j] == num) {
                num = Math.floor(Math.random() * 4);
                j = -1;
            }
        niz.push(num)
    }

    h1.style.marginTop = "10%"
    answer1.style.visibility = "visible"
    nextbutton.style.visibility = "visible"
    answer2.style.visibility = "visible"
    answer3.style.visibility = "visible"
    answer4.style.visibility = "visible"
    footer.style.visibility = "visible"
    document.getElementById("startbtn").remove()
    const question = easyquestions[currentQuestionIndex]
    pitanje.innerHTML = question.title
    const answers = question.otherAnswers
    answer1.innerHTML = answers[niz[0]]
    answer2.innerHTML = answers[niz[1]]
    answer3.innerHTML = answers[niz[2]]
    answer4.innerHTML = answers[niz[3]]

    function buttonClick(event) {
        let niz = [];
        for (let i = 0; i < 4; i++) {
            let num = Math.floor(Math.random() * 4);
            for (let j = 0; j < niz.length; j++)
                if (niz[j] == num) {
                    num = Math.floor(Math.random() * 4);
                    j = -1;
                }
            niz.push(num)
        }
        const answer = event.target.innerHTML
        const question = easyquestions[currentQuestionIndex]
        function nextq() {
            currentQuestionIndex = currentScore
            if (currentQuestionIndex == easyquestions.length) {
                endTimeTitle()
            }

            const newQuestion = easyquestions[currentQuestionIndex]
            pitanje.innerHTML = newQuestion.title
            const answers = newQuestion.otherAnswers
            answer1.innerHTML = answers[niz[0]]
            answer2.innerHTML = answers[niz[1]]
            answer3.innerHTML = answers[niz[2]]
            answer4.innerHTML = answers[niz[3]]
            event.target.style.boxShadow = "none";
        }
        if (answer === question.correctAnswer) {
            event.target.style.boxShadow = "1px 1px 66px 8px rgba(16,237,53,0.82)";
            currentQuestionIndex += 1
            currentScore += 1
            score.innerHTML = Number(score.innerHTML) + 1
            nextbutton.addEventListener("click", nextq)
        }
        else {
            event.target.style.boxShadow = "1px 1px 66px 8px rgba(255, 51, 51)";
            setTimeout(() => {
                event.target.style.boxShadow = "";
                score.innerHTML = Number(score.innerHTML) - 1
            }, 1000)
        }
    }

    function endTimeTitle() {
        document.getElementById("question").remove()
        document.getElementById("leftButton").remove()
        document.getElementById("rightButton").remove()
        document.getElementById("left2Button").remove()
        document.getElementById("right2Button").remove()
        footer.style.visibility = "hidden"
        nextbutton.style.visibility = "hidden"
        content.style.visibility = "visible"

        contentH2.innerHTML = "Rezultati"
        h1.style.marginTop = "15%"
        parText = ["Tačno si odgovorio na ", score.innerHTML, "/", easyquestions.length, "pitanja."]
        endp.innerHTML = parText.join(' ')
        timeText = ["Završili ste Qviz. Nadam se da je bilo zanimljivo :)"]
        timep.innerHTML = timeText.join(' ')

        setTimeout(() => {
            window.location.reload()
        }, 100000)
    }
    answer1.addEventListener("click", buttonClick)
    answer2.addEventListener("click", buttonClick)
    answer3.addEventListener("click", buttonClick)
    answer4.addEventListener("click", buttonClick)
}
startbutton.addEventListener("click", startbtn)
