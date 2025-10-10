
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
});
