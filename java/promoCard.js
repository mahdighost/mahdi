// promoCard.js
(function(){
  // 1. Inject CSS styles
  const style = document.createElement('style');
  style.textContent = `
    /* full-screen dark background */
    body, html {
      margin:0; padding:0;
      width:100%; height:100%;
      background:#111;
      overflow:hidden;
      display:flex;
      align-items:center;
      justify-content:center;
      font-family: Arial, sans-serif;
    }

    /* container for everything */
    #promo-card {
      text-align:center;
      color:#fff;
    }

    /* top headline */
    #promo-card h1 {
      font-size:48px;
      font-weight:bold;
      margin:0;
      text-transform:uppercase;
    }

    /* glowing circle */
    #promo-card .circle {
      width:200px; height:200px;
      margin:30px auto;
      border:4px solid #00bfff;
      border-radius:50%;
      box-shadow:
        0 0 20px rgba(0,191,255,0.6),
        0 0 40px rgba(0,191,255,0.4),
        inset 0 0 10px rgba(0,191,255,0.8);
      display:flex;
      align-items:center;
      justify-content:center;
    }
    #promo-card .circle span {
      font-size:32px;
      font-weight:bold;
      color:#fff;
    }

    /* phone number */
    #promo-card .phone {
      font-size:28px;
      color:#ff0;
      margin:20px 0;
      letter-spacing:1px;
    }

    /* bottom skills text */
    #promo-card .skills {
      font-size:16px;
      color:#ff69b4;
      margin:0;
      text-transform:capitalize;
    }
  `;
  document.head.appendChild(style);

  // 2. Build HTML structure
  const card = document.createElement('div');
  card.id = 'promo-card';

  // Headline
  const h1 = document.createElement('h1');
  h1.textContent = 'UX and UI Designer';
  card.appendChild(h1);

  // Glowing circle
  const circle = document.createElement('div');
  circle.className = 'circle';
  const circleText = document.createElement('span');
  circleText.textContent = 'UX\nand\nUI';
  // allow multiline
  circleText.style.whiteSpace = 'pre-line';
  circle.appendChild(circleText);
  card.appendChild(circle);

  // Phone number
  const phone = document.createElement('div');
  phone.className = 'phone';
  phone.textContent = '+98 937 849 3259';
  card.appendChild(phone);

  // Skills line
  const skills = document.createElement('p');
  skills.className = 'skills';
  skills.textContent = 'photoshop - illustrator - adobe xd html and css';
  card.appendChild(skills);

  // 3. Append to body
  document.body.appendChild(card);
})();
