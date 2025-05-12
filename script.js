let langData = {
  en: {
    title: "Get up to රු 100,000 loan fully online!",
    desc: "Simple application process.<br>Only NIC is required.",
    setupLabel: "Set up your loan",
    totalLabel: "Total repayment amount: රු",
    interestLabel: "Interest rate: ",
    applyBtn: "Apply for a loan",
    login: "Already a customer? <a href='#'>Login here</a>",
  },
  si: {
    title: "රු 100,000 ක ණය සම්පූර්ණයෙන්ම අන්තර්ජාලය හරහා!",
    desc: "සරල අයදුම් ක්‍රියාවලිය.<br>වෙනත් කිසිවක් අවශ්‍ය නොවේ.",
    setupLabel: "ඔබගේ ණය සකස් කරන්න",
    totalLabel: "එකතු කළ මුදල: රු",
    interestLabel: "පොලිය: ",
    applyBtn: "ඇයදුම් කරන්න",
    login: "පෙර ගනුදෙනුකරුද? <a href='#'>මෙතැනින් පණිවිඩයක් යවන්න</a>",
  }
};

function switchLang(lang) {
  document.getElementById("title").innerHTML = langData[lang].title;
  document.getElementById("desc").innerHTML = langData[lang].desc;
  document.getElementById("setupLabel").innerHTML = langData[lang].setupLabel;
  document.getElementById("totalLabel").innerHTML = langData[lang].totalLabel;
  document.getElementById("interestLabel").innerHTML = langData[lang].interestLabel + document.getElementById("interestRate").textContent;
  document.getElementById("apply").innerHTML = langData[lang].applyBtn;
  document.getElementById("login").innerHTML = langData[lang].login;
}
