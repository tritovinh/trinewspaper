let importantNews = [
    {
        title:"After $4 billion deal with Tesla, Hertz says it will rent out half those cars to Uber drivers",
        img: "https://media-cldnry.s-nbcnews.com/image/upload/t_focal-580x290,f_auto,q_auto:best/newscms/2021_43/3515390/211027-tesla-mn-1115.jpg",
    },
    {
        title:"Baby gear companies are taking matters into their own hands amid shortage of essential items",
        img: "https://media-cldnry.s-nbcnews.com/image/upload/t_focal-580x290,f_auto,q_auto:best/rockcms/2021-11/211101-new-york-baby-stroller-ac-822p-284271.jpg",
    },
]

let mainPages = [
    {
        title:"Federal Reserve set to announce start of its withdrawal of emergency support for the economy",
        preview:'“This is an important meeting. It’s the Fed meeting we’ve been waiting for since May or June,” said one economist. ',
        img:"https://media-cldnry.s-nbcnews.com/image/upload/t_focal-580x290,f_auto,q_auto:best/rockcms/2021-11/211103-jerome-powell-al-0852-72cb0f.jpg",
        time:"1h ago",
    },
    {
        title:"Cryptocurrency fans are obsessed with the 'intensely physical sensation' of a metal cube",
        preview:'One owner described holding a cube as an "intensely physical sensation."',
        img:"https://media-cldnry.s-nbcnews.com/image/upload/t_focal-580x290,f_auto,q_auto:best/rockcms/2021-11/211101-tungsten-cube-2x1-ac-918p-39d6d2.jpg",
        time:"10h ago",
    },
    {
        title:"It's time to mail your holiday cards — if you can find any",
        preview:"Supply chain snarls and challenging delivery timeframes aren't stopping some people from fulfilling their Christmas card traditions.",
        img:"https://media-cldnry.s-nbcnews.com/image/upload/t_focal-580x290,f_auto,q_auto:best/rockcms/2021-11/211101-one-time-use-cards-mailbox-se-332p-451028.jpg",
        time:"12h ago",
    },
    {
        title:"As 100 ships idle offshore, California communities see rise in toxic pollutants",
        preview:'"We can’t forget that when we’re talking about air pollution and air quality, this comes down to people’s longevity.”',
        img:"https://media-cldnry.s-nbcnews.com/image/upload/t_fit-2000w,f_auto,q_auto:best/rockcms/2021-10/211013-aerial-port-of-la-ew-401p-abc364.jpg",
        time:"21h ago",
    },
    {
        title:"Airlines and tourist hot spots prepare to — safely — welcome international travelers again",
        preview:'“The decision to open international borders safely is the news we have been waiting for — and the shot in the arm for our industry," said one tourism executive.',
        img:"https://media-cldnry.s-nbcnews.com/image/upload/t_fit-2000w,f_auto,q_auto:best/rockcms/2021-10/211028-jfk-airport-se-513p-b5c7ce.jpg",
        time:"1d ago",
    },
    {
        title:"Former Zuckerberg staff members sue companies that run CEO's family office, alleging harassment, discrimination",
        preview:"An ex-household manager claims he was “groped, propositioned,” while a former security assistant says she was subjected to “defamatory and hyper-sexualized remarks.”",
        img:"https://media-cldnry.s-nbcnews.com/image/upload/t_fit-2000w,f_auto,q_auto:best/newscms/2021_43/3515256/211026-mark-zuckerberg-priscilla-chan-2013-ac-1009p.jpg",
        time:"2d ago",
    },
    {
        title:"VN-Index slips with record-high trading value",
        preview:"Vietnam’s benchmark VN-Index dropped 0.56 percent to 1,444.3 points Wednesday, but with trading value surging to a new historic record as investors hold high hopes for a bullish market.",
        img:"https://i-english.vnecdn.net/2021/11/03/WEBQuynhTran15-1635929223-9938-1635930935_r_300x180.jpg",
        time:"2d ago",
    },
    {
        title:"Saudi Arabia expels Lebanon's ambassador amid diplomatic row",
        preview:"The move came in response to critical comments made by a top official in Beirut about the Saudi-led military intervention in Yemen.",
        img:"https://i-english.vnecdn.net/2021/11/03/download-1635910318-1149-1635910400_r_300x180.jpg",
        time:"2d ago",
    },
    {
        title:"Vingroup, Vinhomes see revenues drop",
        preview:"Both conglomerate Vingroup and real estate unit Vinhomes saw revenues plunging double-digit in the third quarter as social distancing was imposed in major localities.",
        img:"https://i-english.vnecdn.net/2021/11/01/Vie156448026350781564480303680-6987-5291-1635757220_r_300x180.png",
        time:"3d ago",
    },
    {
        title:"Soaring demand delays iPhone 13 delivery in Vietnam",
        preview:'A global chip shortage and rising demand is delaying iPhone 13 delivery in Vietnam, with distributors reporting shortages in the Pro models.',
        img:"https://i-english.vnecdn.net/2021/11/03/dscf00591632545774-1635929464-4049-7003-1635932006_r_500x300.jpg",
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