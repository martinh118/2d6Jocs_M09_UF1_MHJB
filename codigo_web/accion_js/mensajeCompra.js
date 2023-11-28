

const alertPlaceholder = document.getElementById('liveAlertPlaceholder');

const alert = () => {
  let wrapper = document.createElement('div');
  wrapper.innerHTML = [
    `<div class=" alert centrat dialeg">`,
    `<button type="button" class="button-close" data-bs-dismiss="alert" aria-label="Close" style="display:inline; margin-left: 5%;"></button>`,
    `<div style="size: 10px; display:inline; margin-left: 5%; color: black;"> <strong> L’article ha sigut afegit a la cistella! </strong></div>`,
      `<button class="btn" style="`, 
      `color: white; `,
      `background-color: rgba(0, 119, 40, 0.868);`,
      `border: 2px solid #000;`,
      `border-radius: 1cm;`,
      `text-align: center;`,
      `display:inline;margin-left: 10%;">`,
      `<strong>Desfer</strong>`,
      `</button>`
  ].join(''); 

  alertPlaceholder.append(wrapper);
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    alert()
  })
}


