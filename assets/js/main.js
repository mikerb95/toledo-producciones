// Toledo Producciones — main interactions
(function(){
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if(navToggle){
    navToggle.addEventListener('click', ()=>{
      const open = navLinks.style.display === 'flex';
      navLinks.style.display = open ? 'none' : 'flex';
      navToggle.setAttribute('aria-expanded', (!open).toString());
    });
  }

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      const id = a.getAttribute('href');
      if(id.length > 1){
        const el = document.querySelector(id);
        if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth'}); }
      }
    })
  })

  // Current year
  const year = document.getElementById('year');
  if(year){ year.textContent = new Date().getFullYear(); }

  // WhatsApp click (placeholder number)
  const wa = document.querySelector('.whatsapp');
  if(wa){
    wa.addEventListener('click', ()=>{
  const phone = '+573214174621';
      const msg = encodeURIComponent('Hola, me gustaría cotizar un evento con Toledo Producciones.');
      window.open(`https://wa.me/${phone}?text=${msg}`, '_blank');
    })
  }

  // Prefill form if coming from package pages
  try{
    const params = new URLSearchParams(window.location.search);
    const paquete = params.get('paquete');
    if(paquete){
      const select = document.querySelector('select#servicio');
      if(select){
        const val = paquete.toLowerCase();
        // Set a custom option or fallback to Producción Integral
        const opt = document.createElement('option');
        opt.value = `Paquete ${paquete}`;
        opt.textContent = `Paquete ${paquete}`;
        opt.selected = true;
        select.appendChild(opt);
      }
      const msg = document.querySelector('textarea#mensaje');
      if(msg && !msg.value){
        msg.value = `Estoy interesado(a) en el Paquete ${paquete}. Por favor, contáctenme.`;
      }
    }
  }catch(_e){}
})();
