let importantNews = [
    {
        title:"New Zealand's lockdowns have been a disaster for some. As they lift, another threat looms.",
        img: "https://media-cldnry.s-nbcnews.com/image/upload/t_focal-580x290,f_auto,q_auto:best/rockcms/2021-10/211028-new-zealand-mb-1132-0fb4a3.jpg",
    },
    {
        title:"Biden's credibility on climate in the balance at UN summit in Glasgow",
        img: "https://media-cldnry.s-nbcnews.com/image/upload/t_focal-580x290,f_auto,q_auto:best/newscms/2021_43/3515874/211029-joe-biden-al-1023.jpg",
    },
]

let mainPages = [
    {
        title:"Japan's ruling conservatives easily keep majority in parliamentary election",
        preview:"The Liberal Democratic Party's strong results defied expectations and are likely to embolden Prime Minister Fumio Kishida, who took power only a month ago.",
        img:"https://media-cldnry.s-nbcnews.com/image/upload/t_focal-260x130,f_auto,q_auto:best/newscms/2021_44/3516215/211101-kishida-jj-1321.jpg",
        time:"1h ago",
    },
    {
        title:"Man dressed in Batman's Joker costume stabs several passengers on Tokyo train",
        preview:"One video uploaded on Twitter showed a steady stream of people running away from a train car where, seconds later, a blaze lit up.",
        img:"https://media-cldnry.s-nbcnews.com/image/upload/t_focal-260x130,f_auto,q_auto:best/newscms/2021_43/3516145/211031-tokyo-stabbing-jm-1007.jpg",
        time:"10h ago",
    },
    {
        title:"Gunmen kill 3 after fight about music playing at wedding party in Afghanistan",
        preview:"“Their arguments led to an armed clash,” one resident told NBC News.",
        img:"https://media-cldnry.s-nbcnews.com/image/upload/t_focal-260x130,f_auto,q_auto:best/rockcms/2021-10/Taliban-f6d192.jpg",
        time:"12h ago",
    },
    {
        title:"Chinese parents and teachers scramble following government crackdown on tutors",
        preview:"The stricter-than-ever regulations to alleviate stress on overworked students cause more anxiety to families.",
        img:"https://media-cldnry.s-nbcnews.com/image/upload/t_focal-260x130,f_auto,q_auto:best/rockcms/2021-10/211013-china-students-jm-1106-7da82a.jpg",
        time:"21h ago",
    },
    {
        title:"U.S., E.U. to end tariff war over steel, aluminum",
        preview:'Commerce Secretary Gina Raimondo told reporters the deal will also allow "limited volumes" of E.U.-produced metals into the United States duty free.',
        img:"https://media-cldnry.s-nbcnews.com/image/upload/t_focal-260x130,f_auto,q_auto:best/newscms/2021_43/3516080/211030-steel-tariff-cc-740p.jpg",
        time:"1d ago",
    },
    {
        title:"U.K. Prime Minister Boris Johnson says Queen Elizabeth is 'on very good form'",
        preview:"His comment comes a day after Buckingham Palace said the 95-year-old monarch has been told to rest by doctors for another two weeks.  ",
        img:"https://media-cldnry.s-nbcnews.com/image/upload/t_focal-260x130,f_auto,q_auto:best/newscms/2021_43/3516049/211030-boris-johnson-al-1203.jpg",
        time:"2d ago",
    },
    {
        title:"Defying public scorn and media storm, Japan’s princess finally marries",
        preview:"Princess Mako and Kei Komuro's story has drawn attention to a looming succession crisis for the country's monarchy, which is said to be the world's oldest.",
        img:"https://media-cldnry.s-nbcnews.com/image/upload/t_focal-260x130,f_auto,q_auto:best/rockcms/2021-10/211026-princess-mako-mb-1112-c03a22.jpg",
        time:"2d ago",
    },
    {
        title:"Saudi Arabia expels Lebanon's ambassador amid diplomatic row",
        preview:"The move came in response to critical comments made by a top official in Beirut about the Saudi-led military intervention in Yemen.",
        img:"https://media-cldnry.s-nbcnews.com/image/upload/t_fit-2000w,f_auto,q_auto:best/newscms/2021_43/3515962/211029-george-kordahi-ac-610p.jpg",
        time:"2d ago",
    },
    {
        title:"COP26: Stage set for crucial climate negotiations",
        preview:"World leaders will meet in Glasgow, Scotland, to discuss emissions targets as climate scientists warn time is running out to avoid the worst consequences of global warming.",
        img:"https://media-cldnry.s-nbcnews.com/image/upload/t_fit-2000w,f_auto,q_auto:best/rockcms/2021-10/211029-belgium-flooding-se-333p-98c0be.jpg",
        time:"3d ago",
    },
    {
        title:"Queen Elizabeth given medical advice to rest for 2 more weeks",
        preview:'The 95-year-old monarch will only be undertaking "light, desk-based duties," Buckingham Palace said.',
        img:"https://media-cldnry.s-nbcnews.com/image/upload/t_focal-260x130,f_auto,q_auto:best/rockcms/2021-10/211029-queen-elizabeth-se-108p-eff83d.jpg",
        time:"3d ago",
    },
]

let important = document.getElementById("importantNews")
function renderImportantNews() {
    for(let news of importantNews){
        important.innerHTML += `
        <div class="important-item">
                <img src="${news.img}" alt="">
                <p class="heading-title">${news.title}</p>
            </div>`
    }
}

renderImportantNews();

let mainNews = document.getElementById("news_container")
function renderMainNews() {
    for(let news of mainPages){
        mainNews.innerHTML += `
        <div class="mainNews">
            <img src="${news.img}" alt="">  
            <div class="detail">
                <p class="title">${news.title}</p>
                <p class="preview">${news.preview}</p>
                <p class="uploadTime">${news.time}</p>
            </div>
        </div>`
    }
}

renderMainNews();