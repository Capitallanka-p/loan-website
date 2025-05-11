const INTEREST_RATE = 0.07;   // 7%

function updateAmount(value) {
  document.getElementById("amount").textContent = value;

  const repayment = Math.round(value * (1 + INTEREST_RATE));
  document.getElementById("repay").textContent = repayment;
}

const translations = {
  en: {
    title: "Get up to රු 100,000 loan fully online!",
    desc: "Simple application process.<br>Only NIC is required.",
    setupLabel: "Set up your loan",
    totalLabel: "Total repayment amount:",
    interestLabel: "Interest rate:",
    apply: "Apply for a loan",
    login: "Already a customer? <a href='#'>Login here</a>",
  },
  si: {
    title: "රු 100,000ක් දක්වා ණය සම්පුර්ණයෙන්ම online!",
    desc: "සරල අයදුම් කිරීමක්. <br>ඔබේ NIC පමණි.",
    setupLabel: "ඔබේ ණය සකස් කරන්න",
    totalLabel: "මුළු ගෙවීම් මුදල:",
    interestLabel: "බ්‍යාජය:",
    apply: "ණයක් සඳහා අයදුම් කරන්න",
    login: "දැනටමත් පාරිභෝගිකයෙකුද? <a href='#'>ඇතුළුවන්න</a>",
  }
};

function switchLang(lang) {
  const t = translations[lang];

  document.getElementById("title").innerHTML = t.title;
  document.getElementById("desc").innerHTML = t.desc;
  document.getElementById("setupLabel").innerText = t.setupLabel;

  // update repayment label text (without overwriting the <span>)
  document.getElementById("totalLabel").childNodes[0].textContent = `${t.totalLabel} රු `;

  document.getElementById("interestLabel").innerText = ${t.interestLabel} 7%;
  document.getElementById("apply").innerText = t.apply;
  document.getElementById("login").innerHTML = t.login;
}
