const screens=[...document.querySelectorAll('.screen')];
const wheels=[{name:'M-W4',finish:'Frozen Silver',price:'£2,300'},{name:'M-W10',finish:'Neodyme Gold',price:'£3,300'},{name:'M-W2',finish:'Gloss Black',price:'£2,950'}];
let current=0;
function go(id){screens.forEach(s=>s.classList.remove('active'));document.getElementById(id).classList.add('active');document.getElementById('nav').classList.toggle('hidden',!id.startsWith('admin'))}
function pick(i){current=i;document.querySelectorAll('.wheel').forEach((w,n)=>w.classList.toggle('active',n===i));document.getElementById('wheelName').textContent=wheels[i].name;document.getElementById('wheelFinish').textContent=wheels[i].finish;document.getElementById('wheelPrice').textContent=wheels[i].price}
function next(){pick((current+1)%wheels.length)}function prev(){pick((current+wheels.length-1)%wheels.length)}
