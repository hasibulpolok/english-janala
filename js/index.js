console.log("Angta Done")

const loadLessons = () => {
    const url = "https://openapi.programming-hero.com/api/levels/all"
    fetch(url)
        .then(res => res.json())
        .then(data => displayLessons(data.data))
}
const loadLevelWord = (id) => {
    const url = `https://openapi.programming-hero.com/api/level/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayLevelWord(data.data))
}

const displayLevelWord = (words) => {

    const wordContainer = document.getElementById('word-container');
    wordContainer.innerHTML = " ";

    if (words.length == 0) {
        wordContainer.innerHTML = `<div class="text-center col-span-full rounded-xl py-10 space-y-6 font-bangla">
            <img class="mx-auto" src="assets/alert-error.png" alt="">
            <p class="text-xl font-medium text-gray-400 ">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
            <h2 class="text-3xl font-bold">নেক্সট Lesson এ যান</h2>
        </div>`;
        return;
    }
    for (let word of words) {

        const cardDiv = document.createElement('div');
        cardDiv.innerHTML = `
      <div class="single-card bg-white shadow-sm py-10 px-5 text-center rounded-xl space-y-4">
            <h2 class="font-bold text-xl">${word.word ? word.word:"শব্দ খুজে পাওয়া যায়নি"}</h2>
            <p class="font-semibold">Meaning / Pronunciation</p>
            <div class="text-2xl font-medium font-bangla">"${word.meaning? word.word:"শব্দ খুজে পাওয়া যায়নি"} / ${word.pronunciation}"</div>
            <div class="icons flex justify-between items-center ">
                <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF90]"><i class="fa-solid fa-circle-info"></i></button>

                <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF90]"><i class="fa-solid fa-volume-high"></i></button>

            </div>
        </div>
    `
        wordContainer.append(cardDiv)
    }
}


const displayLessons = (lessons) => {
    const levelContainer = document.getElementById('level-container');
    levelContainer.innerHTML = '';
    for (let lesson of lessons) {
        const btnDiv = document.createElement('div');
        btnDiv.innerHTML = `
                <button onClick ="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary">
                <i class="fa-solid fa-book-open"></i>
                Lesson - ${lesson.level_no} </button>
        `
        levelContainer.append(btnDiv);
    }
}

loadLessons()