
// Simple interactive behaviors
document.addEventListener('DOMContentLoaded',function(){
  // Dark/Light toggle (placeholder, default dark)
  const tips = [
    "Tip: Proper grounding prevents noise on audio systems.",
    "Tip: Use quality connectors; cheap crimps cause failures.",
    "Tip: Fiber is future-proof — plan for it where possible.",
    "Tip: Label both ends of cables for faster service calls."
  ];
  let tbox = document.getElementById('tech-tip-box');
  if(tbox){
    let i = 0;
    setInterval(()=>{ tbox.innerText = tips[i]; i=(i+1)%tips.length }, 5000);
  }
});// Animate skill bars on meet-the-techs page
(function animateTechSkills(){
  try {
    const skills = document.querySelectorAll('.team-card .skill');
    if(!skills || skills.length === 0) return;
    const animate = () => {
      skills.forEach(s => {
        const pct = Number(s.getAttribute('data-skill')) || 0;
        const bar = s.querySelector('i');
        if(bar) {
          // small delay per bar for stagger effect
          const delay = Math.random() * 600;
          setTimeout(()=> { bar.style.width = pct + '%'; }, delay);
        }
      });
    };
    if (document.readyState === 'complete' || document.readyState === 'interactive') animate();
    else document.addEventListener('DOMContentLoaded', animate);
  } catch(e) {
    // safe fail
    console.warn('Skill animation error', e);
  }
})();
