let pokemonRepository=function(){let e=[],t='https://pokeapi.co/api/v2/pokemon/?limit=150';function n(t){'object'==typeof t&&'name'in t?e.push(t):console.log('pokemon is not correct')}function o(e){i(e).then(function(){!function(e){let t=document.querySelector('.modal-title'),n=document.querySelector('.modal-body');t.innerHTML='',n.innerHTML='';let o=document.createElement('div');o.classList.add('modal');let i=document.createElement('button');i.classList.add('modal-close'),i.innerText='Close',i.addEventListener('click',l);let r=document.createElement('h1');r.innerText=e.name.toUpperCase();let a=document.createElement('img');a.src=e.imageUrl;let d=document.createElement('p');d.innerText='Height: '+e.height;let s=document.createElement('p');s.innerText='Weight: '+e.weight,o.appendChild(i),t.appendChild(r),n.append(a),n.appendChild(d),n.appendChild(s),c.appendChild(o)}(e)})}function i(e){let t=e.detailsUrl;return fetch(t).then(function(e){return e.json()}).then(function(t){e.imageUrl=t.sprites.front_default,e.height=t.height,e.weight=t.weight,e.types=t.types}).catch(function(e){console.error(e)})}let c=document.querySelector('#modal-container');function l(){document.querySelector('#modal-container').classList.remove('is-visible')}return window.addEventListener('keydown',e=>{let t=document.querySelector('#modal-container');'Escape'===e.key&&t.classList.contains('is-visible')&&l()}),c.addEventListener('click',e=>{e.target===c&&l()}),{add:n,getAll:function(){return e},addListItem:function(e){let t=document.querySelector('.pokemon-list'),n=document.createElement('li'),i=document.createElement('button');i.innerText=e.name.toUpperCase(),i.classList.add('button-class'),i.setAttribute('data-toggle','modal'),i.setAttribute('data-target','#modal-container'),n.appendChild(i),t.appendChild(n),i.addEventListener('click',function(){o(e)})},loadList:function(){return fetch(t).then(function(e){return e.json()}).then(function(e){e.results.forEach(function(e){n({name:e.name,detailsUrl:e.url})})}).catch(function(e){console.error(e)})},loadDetails:i,showDetails:o}}();pokemonRepository.loadList().then(function(){pokemonRepository.getAll().forEach(function(e){pokemonRepository.addListItem(e)})});