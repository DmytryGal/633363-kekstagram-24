
const uploadPrewiew = document.querySelector('.img-upload__preview');
const scaleValueElement = document.querySelector('.scale__control--value');
const scaleControl = document.querySelector('.img-upload__scale');
const effectsList = document.querySelectorAll('.effects__preview');
const valueElement = document.querySelector('.effect-level__value');
const sliderElement = document.querySelector('.effect-level__slider');

let currentEffect = 'effects__preview--none';
for (const effect of effectsList) {
  effect.addEventListener('click', (evt) => {

    uploadPrewiew.classList.remove(currentEffect);
    currentEffect = Array.from(evt.target.classList).find((it)=>it.startsWith('effects__preview--'));
    uploadPrewiew.classList.add(currentEffect);
  },
  );}

const transformScale = () =>{

  scaleControl.addEventListener('click', (evt) =>{
    let valueScale = parseInt(scaleValueElement.value, 10);

    if (evt.target.classList.contains('scale__control--smaller')){

      valueScale -= 25;

    }
    if (evt.target.classList.contains('scale__control--bigger')){
      valueScale += 25;

    }
    if (valueScale < 25 || valueScale > 100){
      return;
    }
    scaleValueElement.value = `${valueScale}%`;
    uploadPrewiew.style.transform = `scale(${valueScale/100})`;
  });

};
transformScale();


noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
});
sliderElement.noUiSlider.on('update', (values, handle) => {
  valueElement.value = values[handle];
});

export {transformScale};
