import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css"
import {Notify} from "notiflix";

const inputFlatpickr = document.querySelector('#datetime-picker')
const startBtn = document.querySelector('[data-start]')
const dataDays = document.querySelector('[data-days]')
const dataHours = document.querySelector('[data-hours]')
const dataMinutes = document.querySelector('[data-minutes]')
const dataSeconds = document.querySelector('[data-seconds]')

startBtn.disabled = true

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);
        const dateNow = Date.now()

        if (selectedDates[0] < dateNow) {
            Notify.failure("Please choose a date in the future")
            return
        }

        const chooseDate = selectedDates[0].getTime()
        console.log(chooseDate)
        startBtn.disabled = false

        startBtn.addEventListener('click', countdown)
        function countdown() {
            const intervalId = setInterval(() => {
                const currentDate = Date.now()
                const timeDifference = chooseDate - currentDate
                console.log(timeDifference)
                if (timeDifference <= 0) {
                    clearInterval(intervalId)
                    return
                }
                convertMs(timeDifference)
            }, 1000)
            
        }
    },
};

flatpickr(inputFlatpickr, options)

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = addLeadingZero(Math.floor(ms / day));
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

    dataDays.textContent = days
    dataHours.textContent = hours
    dataMinutes.textContent = minutes
    dataSeconds.textContent = seconds


    return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return value.toString().padStart(2, '0')
}