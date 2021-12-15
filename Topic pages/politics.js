let importantNews = [
    {
        title:"Youngkin's win comes in a state Biden won by 10 points, sending a warning to Dems about their midterm prospects",
        img: "https://media-cldnry.s-nbcnews.com/image/upload/t_focal-560x280,f_auto,q_auto:best/newscms/2021_44/3516797/211102-glenn-youngkin-ew-1226a.jpg",
    },
    {
        title:"'Let's go, Brandon' enters long lexicon of presidential insults",
        img: "https://media-cldnry.s-nbcnews.com/image/upload/t_focal-460x230,f_auto,q_auto:best/newscms/2021_44/3516632/211102-lets-go-brandon-al-1358.jpg",
    },
]

let mainPages = [
    {
        title:"Democrats get caught in backlash of a negative national environment",
        preview:"First Read is your briefing from Meet the Press and the NBC Political Unit on the day's most important political stories and why they matter.",
        img:"https://media-cldnry.s-nbcnews.com/image/upload/t_focal-260x130,f_auto,q_auto:best/newscms/2021_44/3516829/211103-terry-mcauliffe-jm-0822.jpg",
        time:"1h ago",
    },
    {
        title:"'Big mistake': Biden seeks to leverage China's absence at global summits",
        preview:"Analysis: The Chinese leader skipped the G-20 and a climate meeting just as the Biden administration is working to counter Beijing’s growing economic, political and diplomatic influence across the globe.",
        img:"https://media-cldnry.s-nbcnews.com/image/upload/t_focal-260x130,f_auto,q_auto:best/newscms/2021_44/3516667/211102-biden-cop26-mn-1535.jpg",
        time:"10h ago",
    },
    {
        title:"Cincinnati elects its first Asian American mayor, Aftab Pureval",
        preview:"Pureval, the Hamilton County clerk of courts, defeated fellow Democrat David Mann and will succeed term-limited Mayor John Cranley.",
        img:"https://media-cldnry.s-nbcnews.com/image/upload/t_focal-260x130,f_auto,q_auto:best/newscms/2021_44/3516362/211101-aftab-pureval-2018-se-207p.jpg",
        time:"12h ago",
    },
    {
        title:"Michelle Wu declares victory in Boston mayoral race: 'Boston has spoken'",
        preview:"Democrat Michelle Wu has declared victory in the Boston mayoral race after her opponent, Annissa Essaibi George called to concede the race. She spoke to supporters about what she hopes to accomplish and thanked their support.",
        img:"https://media-cldnry.s-nbcnews.com/image/upload/t_focal-260x130,f_auto,q_auto:best/mpx/2704722219/2021_11/1635908463338_now_brk_boston_wu_victory_211102_1920x1080-d5g10n.jpg",
        time:"21h ago",
    },
    {
        title:"AP projects Minneapolis rejects bid to dissolve police department",
        preview:'The Associated Press projects that Minneapolis voters rejected the bid to dissolve the police department. NBC News’ Shaq Brewster explains why the bid went down in defeat.',
        img:"https://media-cldnry.s-nbcnews.com/image/upload/t_focal-260x130,f_auto,q_auto:best/mpx/2704722219/2021_11/1635907958986_now_brk_minneapolis_rejectspddissolve_211102_1920x1080-48ci1m.jpg",
        time:"1d ago",
    },
    {
        title:"Election Day: Virginia gubernatorial race in dead heat",
        preview:"The race for Virginia governor between Democrat Terry McAuliffe and Republican Glenn Youngkin is tight. A Republican victory means flipping a state President Biden won by 10 points.",
        img:"https://media-cldnry.s-nbcnews.com/image/upload/t_focal-260x130,f_auto,q_auto:best/mpx/2704722219/2021_11/1635894161573_nn_cbe_va_gubernational_race_211102_1920x1080-80vmfs.jpg",
        time:"2d ago",
    },
    {
        title:"Gun dealers sell weapon parts, ammo using anti-Biden slogan 'Let's go, Brandon'",
        preview:"The phrase “Let’s Go Brandon” has become right-wing code for profanity directed at the president. It arose from a crowd chant at the NASCAR racetrack in Talladega, Ala.",
        img:"https://media-cldnry.s-nbcnews.com/image/upload/t_focal-260x130,f_auto,q_auto:best/rockcms/2021-11/211101-2x1-PSA-AR-15-LETSGO-15-ew-204p-e84e0f.jpg",
        time:"2d ago",
    },
    {
        title:"Eight LGBTQ candidates could make history with election wins",
        preview:"237 LGBTQ are on the ballots this year, 18.5 percent more than in the last off-year election in 2019. NBC News’ Aaron Gilchrist reports on eight political hopefuls who will have the opportunity to make history. ",
        img:"https://media-cldnry.s-nbcnews.com/image/upload/t_focal-260x130,f_auto,q_auto:best/mpx/2704722219/2021_11/1635874556312_now_dayside_lgbtq_election_211102_1920x1080-o96cb7.jpg",
        time:"2d ago",
    },
    {
        title:"In loss for death row inmate who maintains innocence, judge denies bid for new trial",
        preview:"Reed's case had been championed by celebrities, politicians and others in the weeks leading up to his planned execution in November 2019.",
        img:"https://media-cldnry.s-nbcnews.com/image/upload/t_focal-260x130,f_auto,q_auto:best/newscms/2021_44/3516322/211101-rodney-reed-ew-1240p.jpg",
        time:"3d ago",
    },
    {
        title:"Trump emphasizes 'great relationship' with Glenn Youngkin on eve of Va. election",
        preview:"Youngkin, who has not campaigned alongside Trump, faces Democrat Terry McAuliffe in Tuesday's race for governor.",
        img:"https://media-cldnry.s-nbcnews.com/image/upload/t_focal-260x130,f_auto,q_auto:best/newscms/2021_44/3516453/211101-donald-trump-ac-841p.jpg",
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