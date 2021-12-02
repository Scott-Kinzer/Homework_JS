// - є масив
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
// Проітерувати його, створиши для кожного елементу масиву <div class='member'>.

function showSimpsonsFamily(arr) {
    let container = document.createElement('div');
    container.style.width = '1140px';
    container.style.margin = '0 auto';

    let wrapperFamily = document.createElement('div');
    wrapperFamily.classList.add('family');
    wrapperFamily.style.width = '100%';
    container.append(wrapperFamily);
    wrapperFamily.style.display = 'flex';
    wrapperFamily.style.flexWrap = 'wrap';
    wrapperFamily.style.justifyContent = 'flex-start';

    arr.forEach(item => {
        let {name, surname, age, info, photo} = item;
        let member = document.createElement('div');
        member.classList.add('member');
        member.style.width = '300px';
        member.style.background = 'grey';
        member.style.margin = '10px';
        member.style.borderRadius = '10px';
        member.style.boxSizing = 'border-box';
        member.style.padding = '10px';
        member.style.cursor = 'pointer';
        let nameEL = document.createElement('h3');
        let surnameEl = document.createElement('h3');
        let wrapperNames = document.createElement('div');
        wrapperNames.style.display = 'flex';
        surnameEl.style.marginLeft = '10px';
        wrapperNames.append(nameEL, surnameEl);

        let ageEl = document.createElement('div');
        ageEl.style.fontSize = '20px';
        ageEl.style.textAlign = 'center';
        // let infoEl = document.createElement('div');
        let imgWrapper = document.createElement('div');
        imgWrapper.style.height = '300px';
        imgWrapper.style.width = '300px';
        imgWrapper.style.objectFit = 'cover';
        imgWrapper.style.overflow = 'hidden';

        let img = document.createElement('img');
        imgWrapper.append(img);
        nameEL.textContent = name;
        surnameEl.textContent = surname;
        ageEl.textContent = ` Age ${age}`;
        // infoEl.textContent = info;
        img.src = photo;
        member.append(wrapperNames, imgWrapper, ageEl);
        wrapperFamily.append(member);
        let infoEl = document.createElement('div');
        member.addEventListener('click', function () {
            let members = document.querySelectorAll('.member');
            members.forEach(item => {
                item.style.background = 'grey';
                let arrayOfChildren = item.children;
                if (arrayOfChildren[3]) {
                    arrayOfChildren[3].remove();
                }
            })

            infoEl.textContent = info;
            member.append(infoEl);
            member.style.background = 'green';

        })


    })

        document.body.append(container)
}

showSimpsonsFamily(simpsons)





// - Є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png

function loadScheduleOkten(courseArr) {
    let container = document.createElement('div');
    container.style.width = '1140px';
    container.style.margin = '0 auto';

    let wrapperFamily = document.createElement('div');
    wrapperFamily.classList.add('familyCourse');
    wrapperFamily.style.width = '100%';

    for (let item of courseArr) {
        destructionData(item, wrapperFamily);
    }

    container.append(wrapperFamily);
    document.body.append(container);
}

function destructionData(data, where) {
    let wrapperData = document.createElement('div');
    wrapperData.style.width = '100%';
   let {title, monthDuration, hourDuration, modules} = data;
   wrapperData.style.marginTop = '30px';
   let titleEl = document.createElement('div');
   titleEl.textContent = title;
   titleEl.style.textAlign = 'center';
   titleEl.style.fontSize = '30px';
   // wrapperData.append(titleEl)

    let durationWrapper = document.createElement('div');
    durationWrapper.style.display = 'flex';
    durationWrapper.style.width = '90%';
    durationWrapper.style.margin = '0 auto';

    let hoursDurationEl = document.createElement('div');
    hoursDurationEl.style.width = '30%';
    hoursDurationEl.style.background = 'blue';
    hoursDurationEl.style.color = 'white';
    hoursDurationEl.style.padding = '10px';


    hoursDurationEl.textContent = hourDuration + "  ГОДИН";
    hoursDurationEl.style.fontSize = '20px';
    let monthDurationEl = document.createElement('div');
    monthDurationEl.textContent = monthDuration + "  МІСЯЦІВ";
    durationWrapper.append(hoursDurationEl, monthDurationEl);

    monthDurationEl.style.background = 'pink';
    monthDurationEl.style.color = 'black';
    monthDurationEl.style.padding = '10px';
    monthDurationEl.style.width = '70%';


    let wrapperModules = document.createElement('div');
    wrapperModules.style.width = '100%';

    modules.forEach(item => {
        let module = document.createElement('div');
        module.textContent = item;
        module.style.width = '90%';
        module.style.background = 'grey';
        // module.style.marginTop = '10px';
        module.style.padding = '10px';
        module.style.cursor = 'pointer';
        wrapperModules.append(module);
        module.style.fontSize = '22px';
        module.style.margin = '5px auto';
    })


    wrapperData.append(titleEl, durationWrapper, wrapperModules);
    where.append(wrapperData);
}

loadScheduleOkten(coursesArray);