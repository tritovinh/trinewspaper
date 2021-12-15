let importantNews = [
    {
        title:"Facebook goes Meta: Zuckerberg announces new corporate name",
        img: "https://media-cldnry.s-nbcnews.com/image/upload/t_focal-1240x620,f_auto,q_auto:best/rockcms/2020-08/200811-Mark-Zuckerberg-se-311p-1b52cf.jpg",
    },
    {
        title:"China has a digital currency — and people are starting to use it",
        img: "https://media-cldnry.s-nbcnews.com/image/upload/t_focal-580x290,f_auto,q_auto:best/rockcms/2021-11/211103-digital-yuan-jm-0929-a2808d.jpg",
    },
]

let mainPages = [
    {
        title:"Netflix rolls out its first mobile games",
        preview:"Netflix announced on Tuesday that its first collection of games are now available for subscribers to play.",
        img:"https://media-cldnry.s-nbcnews.com/image/upload/t_focal-160x160,f_auto,q_auto:best/rockcms/2021-11/211102-netflix-games-al-1431-cd9f03.jpg",
        time:"1h ago",
    },
    {
        title:"Facebook’s Meta mission was laid out in a 2018 paper",
        preview:"A paper written by an Oculus executive in June 2018 now looks like a first draft of Facebook most recent announcement about its pivot to the metaverse.",
        img:"https://media-cldnry.s-nbcnews.com/image/upload/t_fit-2000w,f_auto,q_auto:best/rockcms/2021-11/211101-meta-facebook-jm-0830-1d439f.jpg",
        time:"10h ago",
    },
    {
        title:"Roblox has been down for over 24 hours",
        preview:"Roblox, the game-creating platform, has been down for over 24 hours with no official timeline given for its return.",
        img:"https://media-cldnry.s-nbcnews.com/image/upload/t_fit-2000w,f_auto,q_auto:best/newscms/2021_43/3516084/211030-roblox-outage-cc-900p.JPG",
        time:"12h ago",
    },
    {
        title:"Amazon plans to launch first internet satellites in late 2022",
        preview:"Project Kuiper is Amazon’s plan to build a network of 3,236 satellites in low Earth orbit to provide high-speed internet to anywhere in the world.",
        img:"https://media-cldnry.s-nbcnews.com/image/upload/t_fit-2000w,f_auto,q_auto:best/rockcms/2021-11/211101-amazon-project-kuiper-jm-1344-e578c3.jpg",
        time:"21h ago",
    },
    {
        title:"Miami Mayor Francis Suarez hopes for easy re-election, touts recent tech push",
        preview:'A real estate attorney and son of Miami’s first Cuban-born mayor, the Latino mayor has gained name recognition for launching an effort to lure technology investors.',
        img:"https://media-cldnry.s-nbcnews.com/image/upload/t_fit-2000w,f_auto,q_auto:best/rockcms/2021-11/211101-francis-suarez-jm-0938-d14a90.jpg",
        time:"1d ago",
    },
    {
        title:"Documents reveal Facebook targeted children as young as 6 for consumer base",
        preview:"Facebook was hiring employees to build out programs for children and young adults from ages 6 to 17, according to a company blog post",
        img:"https://media-cldnry.s-nbcnews.com/image/upload/t_fit-2000w,f_auto,q_auto:best/rockcms/2021-10/211028-facebook-al-1044-e730de.jpg",
        time:"2d ago",
    },
    {
        title:"Investors call scam after collapse of new cryptocurrency Squid",
        preview:'The coin that tried to capitalize on the popularity of the Netflix show "Squid Game" has turned into a warning for an industry that has enjoyed major booms and devastating busts.',
        img:"https://media-cldnry.s-nbcnews.com/image/upload/t_fit-2000w,f_auto,q_auto:best/rockcms/2021-11/211101-squid-game-se-410p-f5b458.jpg",
        time:"2d ago",
    },
    {
        title:"Covid vaccines for children are coming. So is misinformation.",
        preview:"Medical professionals and misinformation experts are warning that the push to vaccinate kids has already been seized on by groups looking to spread anti-vaccination messages.",
        img:"https://media-cldnry.s-nbcnews.com/image/upload/t_fit-2000w,f_auto,q_auto:best/rockcms/2021-11/211102-vaccine-children-misinformation-2x1-cs-f5a17f.jpg",
        time:"2d ago",
    },
    {
        title:"U.S. agencies leaving door open to cyberattacks, watchdog warns",
        preview:"The Cybersecurity and Infrastructure Security Agency issued a sweeping directive Wednesday aimed at fixing known software flaws.",
        img:"https://media-cldnry.s-nbcnews.com/image/upload/t_fit-2000w,f_auto,q_auto:best/rockcms/2021-11/211103-Jen-Easterly-al-0912-d22d25.jpg",
        time:"3d ago",
    },
    {
        title:"FCC bars China Telecom from operating in U.S. over national security concerns",
        preview:'The company must discontinue U.S. services within 60 days after the agency found it was "subject to exploitation" by the Chinese government.',
        img:"https://media-cldnry.s-nbcnews.com/image/upload/t_fit-2000w,f_auto,q_auto:best/newscms/2021_43/3515273/211027-china-telecom-mb-0915.jpg",
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