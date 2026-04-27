(function(){
  if(document.getElementById('sw-wrap')) return;
  document.body.insertAdjacentHTML('beforeend',`
  <style>
    #sw-wrap{position:fixed;right:22px;bottom:50%;transform:translateY(50%);z-index:99999;display:flex;flex-direction:column;align-items:center;gap:12px}
    #sw-toggle{width:56px;height:56px;border-radius:50%;background:linear-gradient(145deg,#0d2461,#1a4fa0);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 6px 0 rgba(0,0,0,.25),0 12px 25px rgba(13,36,97,.4);transition:all .3s;position:relative;color:white}
    #sw-toggle:hover{transform:scale(1.1)}
    #sw-toggle.open{background:linear-gradient(145deg,#d4a017,#f5c518);transform:rotate(45deg)}
    #sw-toggle .sw-pulse{position:absolute;inset:0;border-radius:50%;border:3px solid #d4a017;animation:sw-pulse 2s infinite}
    @keyframes sw-pulse{0%{transform:scale(1);opacity:.8}100%{transform:scale(1.6);opacity:0}}
    .sw-items{display:flex;flex-direction:column;gap:10px;overflow:hidden;max-height:0;transition:max-height .4s cubic-bezier(.4,0,.2,1),opacity .3s;opacity:0;pointer-events:none}
    .sw-items.open{max-height:400px;opacity:1;pointer-events:all}
    .sw-btn{width:50px;height:50px;border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;text-decoration:none;transition:all .3s cubic-bezier(.175,.885,.32,1.275);position:relative;box-shadow:0 5px 0 rgba(0,0,0,.2),0 8px 16px rgba(0,0,0,.15)}
    .sw-btn:hover{transform:scale(1.15) translateX(-6px)}
    .sw-btn:active{transform:translateY(3px);box-shadow:0 2px 0 rgba(0,0,0,.2)}
    .sw-btn::before{content:attr(data-tip);position:absolute;right:62px;background:white;color:#0d2461;padding:5px 12px;border-radius:8px;font-size:.8rem;font-weight:700;font-family:'Outfit',sans-serif;white-space:nowrap;opacity:0;pointer-events:none;transition:all .25s;box-shadow:0 4px 15px rgba(0,0,0,.1)}
    .sw-btn:hover::before{opacity:1;right:68px}
    .sw-wa{background:linear-gradient(145deg,#2edb72,#1aac58)}
    .sw-ig{background:radial-gradient(circle at 30% 107%,#fdf497 0%,#fd5949 45%,#d6249f 60%,#285aeb 90%)}
    .sw-fb{background:linear-gradient(145deg,#3a8ef6,#1565d8)}
    .sw-tt{background:linear-gradient(145deg,#111,#333)}
    .sw-yt{background:linear-gradient(145deg,#ff3d3d,#cc0000)}
    @media(max-width:600px){#sw-wrap{right:12px}#sw-toggle,.sw-btn{width:46px;height:46px}.sw-btn::before{display:none}}
  </style>
  <div id="sw-wrap">
    <div class="sw-items" id="sw-items">
      <a class="sw-btn sw-wa" href="https://wa.me/2348054047729" data-tip="WhatsApp" target="_blank" rel="noopener">
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>
      <a class="sw-btn sw-ig" href="https://www.instagram.com/saaiacademy?igsh=MWo1bnBmeHNhNzF0Zg==" data-tip="Instagram" target="_blank" rel="noopener">
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.668-.072-4.948-.197-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
      </a>
      <a class="sw-btn sw-fb" href="https://www.facebook.com/saaiacademy" data-tip="Facebook" target="_blank" rel="noopener">
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/></svg>
      </a>
      <a class="sw-btn sw-tt" href="https://www.tiktok.com/@saaiacademy" data-tip="TikTok" target="_blank" rel="noopener">
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/></svg>
      </a>
      <a class="sw-btn sw-yt" href="https://www.youtube.com/@Saai_Academy" data-tip="YouTube" target="_blank" rel="noopener">
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
      </a>
    </div>
    <button id="sw-toggle" title="Follow us">
      <div class="sw-pulse"></div>
      <svg id="sw-icon-share" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"/></svg>
    </button>
  </div>`);

  const toggle = document.getElementById('sw-toggle');
  const items  = document.getElementById('sw-items');
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    items.classList.toggle('open');
  });
  document.addEventListener('click', e => {
    if (!document.getElementById('sw-wrap').contains(e.target)) {
      toggle.classList.remove('open');
      items.classList.remove('open');
    }
  });
})();
