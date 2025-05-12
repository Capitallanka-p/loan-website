<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Loan App</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <div class="lang-buttons">
    <button onclick="switchLang('en')">English</button>
    <button onclick="switchLang('si')">සිංහල</button>
  </div>

  <h1 id="title">Get up to රු 100,000 loan fully online!</h1>
  <p id="desc">Simple application process.<br>Only NIC is required.</p>

  <div class="card">
    <h3 id="setupLabel">Set up your loan</h3>
    <h2>රු <span id="amount">10000</span></h2>
    <input type="range" min="3000" max="100000" value="10000" oninput="updateAmount(this.value)" />
    <div class="info">
      <p id="totalLabel">Total repayment amount: රු <span id="repay">10000</span></p>
      <p id="interestLabel">Interest rate: 0%</p>
    </div>
  </div>

  <button class="apply-btn" id="apply">Apply for a loan</button>
  <p id="login">Already a customer? <a href="#">Login here</a></p>

  <script src="script.js"></script>
</body>
</html>
