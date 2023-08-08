import { Notify } from "notiflix"


const form = document.querySelector('.form')
// const firstDelay = document.querySelector('.delay')
// const delayStep = document.querySelector('.step')
// const amountPromises = document.querySelector('.amount')
// const submitBtn = document.querySelector('.submit')

form.addEventListener('submit', onClickCreate)

function onClickCreate(e) {
  e.preventDefault()
  const amount = e.target.amount.value
  const step = e.target.step.value
  const delay = e.target.delay.value
  console.log(amount, step, delay)

  promisesCounter(amount, step, delay) 
}

function createPromise(position, delay) {
  return new Promise((res, rej) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        res({position, delay})
      } else {
        rej({position, delay})
      }
    }, delay)
  })
}

function promisesCounter(amount, step, delay) {
  for (let i = 1; i <= amount; i += 1){
    let total = delay + step * (i - 1)
    createPromise(i, total)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
        // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
        // console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      })
  }
}

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });