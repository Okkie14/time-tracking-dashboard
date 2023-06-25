// Selectors for the HTML elements
const currentWorkHours = document.getElementById('current-work-h');
const previousWorkHours = document.getElementById('previous-work-h');
const currentPlayHours = document.getElementById('current-play-h');
const previousPlayHours = document.getElementById('previous-play-h');
const currentStudyHours = document.getElementById('current-study-h');
const previousStudyHours = document.getElementById('previous-study-h');
const currentExerciseHours = document.getElementById('current-exercise-h');
const previousExerciseHours = document.getElementById('previous-exercise-h');
const currentSocialHours = document.getElementById('current-social-h');
const previousSocialHours = document.getElementById('previous-social-h');
const currentSelfCareHours = document.getElementById('current-self-care-h');
const previousSelfCareHours = document.getElementById('previous-self-care-h');
// Periodicals elements
const daily = document.getElementById('daily');
const weekly = document.getElementById('weekly');
const monthly = document.getElementById('monthly');

// Weekly Stats update
const weeklyHours = async () => {
    try{
        // fetch hours
        const response = await fetch('data.json')
        // Check response status
        if (response.ok) {
            const jsonResponse = await response.json();
            jsonResponse.forEach((data) => {
                const title = data.title;
                if(title === 'Work') {
                    const weekly = data.timeframes.weekly.current;
                    const prev = data.timeframes.weekly.previous;
                    currentWorkHours.textContent = weekly +' hrs'
                    previousWorkHours.textContent = 'Last Week - ' + prev +' hrs'
                } else if(title === 'Play') {
                    const weekly = data.timeframes.weekly.current;
                    const prev = data.timeframes.weekly.previous;
                    currentPlayHours.textContent = weekly +' hrs'
                    previousPlayHours.textContent = 'Last Week - ' + prev +' hrs'
                } else if(title === 'Study') {
                    const weekly = data.timeframes.weekly.current;
                    const prev = data.timeframes.weekly.previous;
                    currentStudyHours.textContent = weekly +' hrs'
                    previousStudyHours.textContent = 'Last Week - ' + prev +' hrs'
                } else if (title === 'Exercise') {
                    const weekly = data.timeframes.weekly.current;
                    const prev = data.timeframes.weekly.previous;
                    currentExerciseHours.textContent = weekly +' hrs'
                    previousExerciseHours.textContent = 'Last Week - ' + prev +' hrs'
                } else if (title === 'Social') {
                    const weekly = data.timeframes.weekly.current;
                    const prev = data.timeframes.weekly.previous;
                    currentSocialHours.textContent = weekly +' hrs'
                    previousSocialHours.textContent = 'Last Week - ' + prev +' hrs'
                } else if (title === 'Self Care') {
                    const weekly = data.timeframes.weekly.current;
                    const prev = data.timeframes.weekly.previous;
                    currentSelfCareHours.textContent = weekly +' hrs'
                    previousSelfCareHours.textContent = 'Last Week - ' + prev +' hrs'
                }
            });
        }
    } catch (err) {
        console.log(err);
    }
}

// Daily Stats
const dailyHours = async () => {
    try{
        // fetch hours
        const response = await fetch('data.json')
        // Check response status
        if (response.ok) {
            const jsonResponse = await response.json();
            jsonResponse.forEach((data) => {
                const title = data.title;
                if(title === 'Work') {
                    const daily = data.timeframes.daily.current;
                    const prev = data.timeframes.daily.previous;
                    currentWorkHours.textContent = daily +' hrs'
                    previousWorkHours.textContent = 'Yesterday - ' + prev +' hrs'
                } else if(title === 'Play') {
                    const daily = data.timeframes.daily.current;
                    const prev = data.timeframes.daily.previous;
                    currentPlayHours.textContent = daily +' hrs'
                    previousPlayHours.textContent = 'Yesterday - ' + prev +' hrs'
                } else if(title === 'Study') {
                    const daily = data.timeframes.daily.current;
                    const prev = data.timeframes.daily.previous;
                    currentStudyHours.textContent = daily +' hrs'
                    previousStudyHours.textContent = 'Yesterday - ' + prev +' hrs'
                } else if (title === 'Exercise') {
                    const daily = data.timeframes.daily.current;
                    const prev = data.timeframes.daily.previous;
                    currentExerciseHours.textContent = daily +' hrs'
                    previousExerciseHours.textContent = 'Yesterday - ' + prev +' hrs'
                } else if (title === 'Social') {
                    const daily = data.timeframes.daily.current;
                    const prev = data.timeframes.daily.previous;
                    currentSocialHours.textContent = daily +' hrs'
                    previousSocialHours.textContent = 'Yesterday - ' + prev +' hrs'
                } else if (title === 'Self Care') {
                    const daily = data.timeframes.daily.current;
                    const prev = data.timeframes.daily.previous;
                    currentSelfCareHours.textContent = daily +' hrs'
                    previousSelfCareHours.textContent = 'Yesterday - ' + prev +' hrs'
                }
            });
        }
    } catch (err) {
        console.log(err);
    }
}

// Monthly Stats
const monthlyHours = async () => {
    try{
        // fetch hours
        const response = await fetch('data.json')
        // Check response status
        if (response.ok) {
            const jsonResponse = await response.json();
            jsonResponse.forEach((data) => {
                const title = data.title;
                if(title === 'Work') {
                    const monthly = data.timeframes.monthly.current;
                    const prev = data.timeframes.monthly.previous;
                    currentWorkHours.textContent = monthly +' hrs'
                    previousWorkHours.textContent = 'Last Month - ' + prev +' hrs'
                } else if(title === 'Play') {
                    const monthly = data.timeframes.monthly.current;
                    const prev = data.timeframes.monthly.previous;
                    currentPlayHours.textContent = monthly +' hrs'
                    previousPlayHours.textContent = 'Last Month - ' + prev +' hrs'
                } else if(title === 'Study') {
                    const monthly = data.timeframes.monthly.current;
                    const prev = data.timeframes.monthly.previous;
                    currentStudyHours.textContent = monthly +' hrs'
                    previousStudyHours.textContent = 'Last Month - ' + prev +' hrs'
                } else if (title === 'Exercise') {
                    const monthly = data.timeframes.monthly.current;
                    const prev = data.timeframes.monthly.previous;
                    currentExerciseHours.textContent = monthly +' hrs'
                    previousExerciseHours.textContent = 'Last Month - ' + prev +' hrs'
                } else if (title === 'Social') {
                    const monthly = data.timeframes.monthly.current;
                    const prev = data.timeframes.monthly.previous;
                    currentSocialHours.textContent = monthly +' hrs'
                    previousSocialHours.textContent = 'Last Month - ' + prev +' hrs'
                } else if (title === 'Self Care') {
                    const monthly = data.timeframes.monthly.current;
                    const prev = data.timeframes.monthly.previous;
                    currentSelfCareHours.textContent = monthly +' hrs'
                    previousSelfCareHours.textContent = 'Last Month - ' + prev +' hrs'
                }
            });
        }
    } catch (err) {
        console.log(err);
    }
}

// Calls the function
window.addEventListener('load',weeklyHours);

// Click events
daily.addEventListener('click', () => {
    dailyHours();
    daily.classList.add('active');
    weekly.classList.remove('active');
    monthly.classList.remove('active');
});
weekly.addEventListener('click', () => {
    weeklyHours();
    daily.classList.remove('active');
    weekly.classList.add('active');
    monthly.classList.remove('active');
});

monthly.addEventListener('click', () => {
    monthlyHours();
    daily.classList.remove('active');
    weekly.classList.remove('active');
    monthly.classList.add('active');
});

daily.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        dailyHours();
        daily.classList.add('active');
        weekly.classList.remove('active');
        monthly.classList.remove('active');
    }
});

weekly.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        weeklyHours();
        daily.classList.remove('active');
        weekly.classList.add('active');
        monthly.classList.remove('active');
    }
});

monthly.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        monthlyHours();
        daily.classList.remove('active');
        weekly.classList.remove('active');
        monthly.classList.add('active');
    }
});