// just for fun
// fb.com/Konchan

document.head.innerHTML = `<style>* {
  margin: 0;
  padding: 0;
}
.hacked {
  background: black;
  color: lime;
  height: 100vh;
  
  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;
  font-size: 3rem;
}</style>`;

document.body.innerHTML = `
<div class="hacked">
  <h1>Hacked By Konchan</h1>
</div>
`;

window.addEventListener('click', e => alert('You have been hacked by Kon_chan. Tôi luôn ở bên bạn đấy :>'));
