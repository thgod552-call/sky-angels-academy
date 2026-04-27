(function(){
  if(document.getElementById('saai-chat')) return;
  const WA='2348054047729';
  const KB=[
    {q:['admission','enroll','register','apply','intake','join','start'],a:'📋 **Admissions are currently open** for Session 2025/2026!\n\nTo enroll your child, visit our **Online Registration Portal** or contact us directly.\n\n🏫 We accept students from **Class 1 to Class 12**.\n\n📞 Call: 08058969633 or 08035894487'},
    {q:['fee','fees','tuition','cost','price','pay','payment'],a:'💰 For detailed **fee structure and payment plans**, please contact our admissions office directly.\n\n📞 08058969633 | 08035894487\n\nOur team will walk you through all payment options.'},
    {q:['location','address','where','find','direction','map'],a:'📍 **Skypoint Angels Academy International**\n\nPlot 273 Institutes & Research District,\nJabi-Airport Road, Abuja, Nigeria.\n\n🗺️ We are in the serene research district, away from city noise – a perfect learning environment!'},
    {q:['curriculum','subject','class','grade','academic','learn','course','program'],a:'📚 We operate a unique **Holistic & Integrated-Based Curriculum** across **12 academic classes**.\n\nKey highlights:\n✅ Academic excellence\n✅ Strong moral values\n✅ Creative expression\n✅ Critical thinking & character development'},
    {q:['principal','founder','head','leader','prof','ikeh','evaristus'],a:'👨‍🏫 **Prof. Ikeh Desmond EVARISTUS** is the Founder & Principal of Skypoint Angels Academy International.\n\nHe brings over **two decades of educational excellence** and visionary leadership to the institution.'},
    {q:['contact','phone','call','email','reach','number','whatsapp'],a:'📞 **Contact Us:**\n\n• Phone: 08058969633\n• Phone: 08035894487\n• WhatsApp: +234 805 404 7729\n\n📍 Plot 273 Institutes & Research District, Jabi-Airport Road, Abuja'},
    {q:['school','about','skypoint','saai','academy','institution'],a:'🌟 **Skypoint Angels Academy International** is a premier institution in Abuja dedicated to:\n\n✨ Academic excellence\n🧭 Character formation\n🌍 Global citizenship\n\nWe nurture brilliant minds through a Holistic & Integrated approach.'},
    {q:['facility','facilities','lab','library','sport','computer','ict','science'],a:'🏛️ Our **world-class facilities** include:\n\n🔬 Advanced Science Laboratories\n💻 ICT & Innovation Hub\n⚽ Athletic & Sports Complex\n📚 Learning resource centers\n\nAll designed to inspire curiosity and excellence!'},
    {q:['hour','time','open','schedule','visit','tour'],a:'🕐 **School Hours:**\n\nMonday – Friday: 7:30 AM – 3:30 PM\n\nWould you like to **schedule a campus visit**? Contact us:\n📞 08058969633'},
    {q:['uniform','dress','code','wear'],a:'👔 Students wear the **official Skypoint Angels Academy uniform**.\n\nFor uniform details and guidelines, please contact our school office:\n📞 08058969633'},
    {q:['hi','hello','hey','good morning','good afternoon','good evening','start'],a:'👋 Hello! Welcome to **Skypoint Angels Academy International**!\n\nI\'m your virtual assistant. How can I help you today?\n\nYou can ask me about:\n• 📋 Admissions\n• 📍 Location\n• 📚 Curriculum\n• 💰 Fees\n• 📞 Contact'},
  ];

  document.body.insertAdjacentHTML('beforeend',`
  <style>
    #saai-chat{position:fixed;bottom:28px;left:22px;z-index:99998;font-family:'Outfit',sans-serif}
    #saai-btn{width:60px;height:60px;border-radius:50%;background:linear-gradient(145deg,#0d2461,#1a4fa0);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 6px 0 rgba(0,0,0,.25),0 12px 25px rgba(13,36,97,.4);transition:all .3s;position:relative;color:white}
    #saai-btn:hover{transform:scale(1.1) translateY(-2px)}
    #saai-btn .pulse{position:absolute;inset:0;border-radius:50%;border:3px solid #d4a017;animation:cpulse 2s infinite}
    @keyframes cpulse{0%{transform:scale(1);opacity:.8}100%{transform:scale(1.65);opacity:0}}
    #saai-badge{position:absolute;top:-4px;right:-4px;width:20px;height:20px;background:#d4a017;border-radius:50%;border:2px solid white;font-size:11px;color:#0d2461;font-weight:900;display:flex;align-items:center;justify-content:center}
    #saai-win{position:absolute;bottom:76px;left:0;width:340px;background:white;border-radius:20px;box-shadow:0 25px 60px rgba(13,36,97,.25);display:none;flex-direction:column;overflow:hidden;border:1px solid rgba(13,36,97,.08);max-height:520px}
    #saai-win.open{display:flex;animation:cslide .3s cubic-bezier(.175,.885,.32,1.275)}
    @keyframes cslide{from{opacity:0;transform:translateY(16px) scale(.96)}to{opacity:1;transform:none}}
    .chat-hd{background:linear-gradient(135deg,#0d1b4e,#0d2461);padding:14px 16px;display:flex;align-items:center;gap:10px;flex-shrink:0}
    .chat-av{width:40px;height:40px;border-radius:50%;background:#d4a017;display:flex;align-items:center;justify-content:center;font-size:1.2rem;flex-shrink:0}
    .chat-hd-info h4{color:white;font-size:.9rem;font-weight:700;margin:0}
    .chat-hd-info p{color:rgba(255,255,255,.6);font-size:.72rem;margin:2px 0 0;display:flex;align-items:center;gap:4px}
    .dot-green{width:7px;height:7px;background:#25d366;border-radius:50%;flex-shrink:0}
    #saai-close{margin-left:auto;background:rgba(255,255,255,.15);border:none;border-radius:50%;width:28px;height:28px;color:white;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:.9rem}
    #saai-msgs{flex:1;overflow-y:auto;padding:14px;display:flex;flex-direction:column;gap:10px;background:#f8f9ff;max-height:310px}
    .cb{max-width:86%;padding:10px 13px;border-radius:16px;font-size:.87rem;line-height:1.55;word-break:break-word}
    .cb.bot{background:white;color:#0d1b3e;border-radius:4px 16px 16px 16px;box-shadow:0 2px 8px rgba(0,0,0,.07);align-self:flex-start}
    .cb.user{background:linear-gradient(135deg,#0d2461,#1a4fa0);color:white;border-radius:16px 16px 4px 16px;align-self:flex-end}
    .typing{display:flex;gap:5px;padding:10px 13px;background:white;border-radius:4px 16px 16px 16px;width:fit-content;box-shadow:0 2px 8px rgba(0,0,0,.07);align-self:flex-start}
    .typing span{width:7px;height:7px;border-radius:50%;background:#d4a017;animation:tbounce 1.2s infinite}
    .typing span:nth-child(2){animation-delay:.2s}.typing span:nth-child(3){animation-delay:.4s}
    @keyframes tbounce{0%,80%,100%{transform:translateY(0)}40%{transform:translateY(-8px)}}
    #saai-ia{padding:10px 13px;border-top:1px solid rgba(0,0,0,.06);display:flex;gap:8px;background:white;flex-shrink:0}
    #saai-input{flex:1;border:1.5px solid #e5e7eb;border-radius:25px;padding:9px 15px;font-size:.88rem;font-family:inherit;outline:none;transition:border-color .3s}
    #saai-input:focus{border-color:#0d2461}
    #saai-send{width:38px;height:38px;border-radius:50%;background:#0d2461;border:none;cursor:pointer;color:white;display:flex;align-items:center;justify-content:center;transition:all .3s;flex-shrink:0}
    #saai-send:hover{background:#d4a017}
    .wa-cta{display:flex;align-items:center;justify-content:center;gap:8px;background:#25d366;color:white;font-weight:700;font-size:.88rem;padding:11px;border-radius:12px;text-decoration:none;margin:4px 0;transition:all .3s;box-shadow:0 4px 15px rgba(37,211,102,.3)}
    .wa-cta:hover{background:#1aac58;transform:translateY(-2px)}
    @media(max-width:400px){#saai-win{width:290px}}
  </style>
  <div id="saai-chat">
    <div id="saai-win">
      <div class="chat-hd">
        <div class="chat-av">🎓</div>
        <div class="chat-hd-info">
          <h4>SAAI Assistant</h4>
          <p><span class="dot-green"></span>Online · Always ready</p>
        </div>
        <button id="saai-close">✕</button>
      </div>
      <div id="saai-msgs"></div>
      <div id="saai-ia">
        <input id="saai-input" type="text" placeholder="Ask me anything..." autocomplete="off"/>
        <button id="saai-send"><svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg></button>
      </div>
    </div>
    <button id="saai-btn" title="Chat with us">
      <div class="pulse"></div>
      <div id="saai-badge">1</div>
      <svg width="26" height="26" fill="white" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
    </button>
  </div>`);

  const btn=document.getElementById('saai-btn'),win=document.getElementById('saai-win'),
    closeBtn=document.getElementById('saai-close'),msgs=document.getElementById('saai-msgs'),
    input=document.getElementById('saai-input'),send=document.getElementById('saai-send'),
    badge=document.getElementById('saai-badge');
  let opened=false;

  function md(t){return t.replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>').replace(/\n/g,'<br>')}
  function bubble(text,cls){const d=document.createElement('div');d.className='cb '+cls;d.innerHTML=md(text);msgs.appendChild(d);msgs.scrollTop=msgs.scrollHeight}
  function showTyping(){const t=document.createElement('div');t.className='typing';t.id='typ';t.innerHTML='<span></span><span></span><span></span>';msgs.appendChild(t);msgs.scrollTop=msgs.scrollHeight}
  function removeTyping(){const t=document.getElementById('typ');if(t)t.remove()}

  function botReply(text,delay=700){return new Promise(r=>{showTyping();setTimeout(()=>{removeTyping();bubble(text,'bot');r()},delay)})}

  function findAnswer(q){
    const lower=q.toLowerCase();
    for(const item of KB){if(item.q.some(kw=>lower.includes(kw)))return item.a}
    return null;
  }

  function showWA(name,msg){
    const text=encodeURIComponent(name?`Hello! My name is ${name}.\nQuestion: ${msg}`:`Hello! I have a question: ${msg}`);
    const div=document.createElement('div');
    div.style.cssText='padding:0 13px 13px';
    div.innerHTML=`<a class="wa-cta" href="https://wa.me/${WA}?text=${text}" target="_blank"><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>Chat on WhatsApp</a>`;
    msgs.appendChild(div);msgs.scrollTop=msgs.scrollHeight;
  }

  let collectingName=false,pendingQ='';

  async function handleSend(){
    const val=input.value.trim();if(!val)return;
    input.value='';bubble(val,'user');

    if(collectingName){
      collectingName=false;
      await botReply(`Thanks **${val}**! Let me connect you to our team on WhatsApp 🎉`);
      showWA(val,pendingQ);pendingQ='';return;
    }

    const ans=findAnswer(val);
    if(ans){
      await botReply(ans);
      setTimeout(()=>botReply('Is there anything else I can help you with? 😊',400),200);
    } else {
      pendingQ=val;collectingName=true;
      await botReply(`That's a great question! Let me connect you to our admissions team.\n\nMay I have your **name** so they can address you properly? 😊`);
    }
  }

  async function open(){
    if(opened)return;opened=true;badge.style.display='none';
    await botReply('👋 Hello! Welcome to **Skypoint Angels Academy International**!\n\nI\'m your virtual assistant. Ask me anything about admissions, fees, location, academics, and more!',500);
    input.focus();
  }

  btn.addEventListener('click',()=>{win.classList.toggle('open');if(win.classList.contains('open'))open()});
  closeBtn.addEventListener('click',()=>win.classList.remove('open'));
  send.addEventListener('click',handleSend);
  input.addEventListener('keydown',e=>{if(e.key==='Enter')handleSend()});
})();
