let importantNews = [
    {
        title:"Hammerin’ Braves win first World Series crown since 1995, rout Astros",
        img: "https://www.nbcsports.com/sites/nbcsports.com/files/styles/double_2__desktop_large_/public/2021/11/03/usatsi_17082233-e1635911928617.jpg?itok=lv0UEY5_&timestamp=1635912122",
    },
    {
        title:"PFT’s Week Nine 2021 power rankings",
        img: "https://www.nbcsports.com/sites/nbcsports.com/files/styles/fw_main_3_pak_secondary__297x167_/public/2021/11/03/usatsi_17048157.jpg?itok=HWwYXiGp&timestamp=1635942652",
    },
]

let mainPages = [
    {
        title:"'Spencer' shows off Kristen Stewart in a 'fable' about Diana's break from the Royals",
        preview:"Kristen Stewart's fierce, attention-grabbing work as Princess Diana really ought to be viewed independently of Spencer, described as 'a fable from a true tragedy' that presents a pivotal weekend in Princess Diana's split from the Royal Family.",
        img:"https://cdn.cnn.com/cnnnext/dam/assets/211101183140-spencer-review-restricted-exlarge-169.jpg",
        time:"1h ago",
    },
    {
        title:"Vietnam among third seeds at U23 Asian Cup",
        preview:"Vietnam are in the third-seed group for the 2022 U23 Asian Cup alongside regional giants Japan, Qatar and Iraq.",
        img:"https://i-english.vnecdn.net/2021/11/02/anmungu23-1635865192-1877-1635865205_300x180.jpg",
        time:"10h ago",
    },
    {
        title:"Vietnamese tennis ace wins title in Egypt",
        preview:"Ly Hoang Nam defeated Lebanese player Hady Habib in the final of M15 Sharm El Sheikh in Egypt on Sunday.",
        img:"https://i-english.vnecdn.net/2021/11/01/lihoang-1635752094-5068-1635752174_300x180.jpg",
        time:"12h ago",
    },
    {
        title:"Kristen Stewart engaged to screenwriter Dylan Meyer",
        preview:"The actress announced she and screenwriter Dylan Meyer are engaged in an interview with Howard Stern on Tuesday.",
        img:"https://cdn.cnn.com/cnnnext/dam/assets/190901233514-40b-venice-film-festival-red-carpet-kristen-stewart-exlarge-169.jpg",
        time:"21h ago",
    },
    {
        title:"Vietnamese woman rolls with life's punches to claim boxing crown",
        preview:'She sold lottery tickets when she was seven. She worked odd jobs in eateries when she got older. Today, Nguyen Thi Thu Nhi is a world boxing champion.',
        img:"https://i-english.vnecdn.net/2021/10/30/tnhi5jpeg27271635567260-163559-8594-5357-1635592973_300x180.jpg",
        time:"1d ago",
    },
    {
        title:"Dean Winters living in pain after multiple amputations",
        preview:'A dozen years ago, actor Dean Winters had surgery resulting in several amputations and he now says "I haven t taken a step since 2009 without being in pain."',
        img:"https://cdn.cnn.com/cnnnext/dam/assets/140312162904-27-50-people-50-2014-restricted-exlarge-169.jpg",
        time:"2d ago",
    },
    {
        title:"Ronnie Wilson, founding member of The Gap Band, dead at 73",
        preview:"Ronnie Wilson, founding member of R&B group The Gap Band, has died at the age of 73.",
        img:"https://cdn.cnn.com/cnnnext/dam/assets/211103052042-03-ronnie-wilson-gap-band-082605-file-restricted-exlarge-169.jpg",
        time:"2d ago",
    },
    {
        title:"Vietnam named best golf destination worldwide",
        preview:"Vietnam was honored as the world and Asia’s best golf destination for 2021 at the annual World Golf Awards held in Dubai on Friday.",
        img:"https://i-english.vnecdn.net/2021/10/30/flcgf-1635563554-3507-1635582242_300x180.jpg",
        time:"2d ago",
    },
    {
        title:"National team to train in coastal city for AFF Cup",
        preview:"To prepare for AFF Cup in Singapore, the national team will train in Vung Tau, a beach town near HCMC, for two weeks.",
        img:"https://i-english.vnecdn.net/2021/10/30/vfftr-1635495356-1635495373-76-1679-2936-1635554103_r_300x180.jpg",
        time:"3d ago",
    },
    {
        title:"Vietnam in challenging group at Women's Asian Cup",
        preview:'A draw on Thursday placed Vietnam in group C for Women’s Asian Cup 2022 with Japan, South Korea and Myanmar.',
        img:"https://i-english.vnecdn.net/2021/10/28/ScreenShot20211028at1443410246-3563-8573-1635411117_r_300x180.png",
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