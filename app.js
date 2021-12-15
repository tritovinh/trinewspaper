let lastestNews = [
    {
        Topic: "Politics",
        Title: "Biden on the sidelines of 'Striketober,' with economy in the balance",
        type: "newsItem_medium",
        image: "https://media-cldnry.s-nbcnews.com/image/upload/t_focal-580x290,f_auto,q_auto:best/newscms/2021_42/3514578/211023-joe-biden-ew-612p.jpg",
        Detail1: " ",
        Detail2: "",
        link:"Politics/Biden on the sidelines of 'Striketober,' with economy in the balance.html",
    },
    {
        Topic: "World",
        Title: "'Rust' assistant director was fired from 2019 movie after gun discharged on set",
        type: "newsItem_small",
        image: "https://media-cldnry.s-nbcnews.com/image/upload/t_focal-460x460,f_auto,q_auto:best/newscms/2021_43/3514964/211025-santa-fe-nm-rust-set-aerial-ac-1004p.JPG",
        Detail1: " ",
        Detail2: "",
        link:" ",

    },
    {
        Topic: "World",
        Title: "Defying public scorn and media storm, Japan’s princess finally marries",
        type: "newsItem_small",
        image: "https://media-cldnry.s-nbcnews.com/image/upload/t_focal-460x460,f_auto,q_auto:best/rockcms/2021-10/211026-princess-mako-mb-1112-c03a22.jpg",
        Detail1: " ",
        Detail2: "",
        link:" ",
    },
    {
        Topic: "Business",
        Title: "Everyday prices are soaring — so why are stocks still flying high?",
        type: "newsItem_small",
        image: "https://media-cldnry.s-nbcnews.com/image/upload/t_focal-380x380,f_auto,q_auto:best/newscms/2021_43/3514774/211025-nyse-mn-0930.jpg",
        Detail1: "Shares in Digital World Acquisition soar by 400 percent on news of social media deal with Trump",
        Detail2: "Wall Street closes in the red, triggered by selloff in China and anxiety over the Fed's next move",
        link:" ",
    },
    {
        Topic: "Tech",
        Title: "As a mob breached the Capitol, anger and dissonance coursed through Facebook'sranks",
        type: "newsItem_large",
        image: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-2000w,f_auto,q_auto:best/rockcms/2021-10/211022-facebook-haugen-scene-setter-2x1-cs-cdad1a.jpg",
        Detail1: " ",
        Detail2: " ",
        link:" ",
    },
]

let lastestNews_container = document.getElementById("lastestNews");
function renderLastestNews() {
    for (let news of lastestNews) {
        lastestNews_container.innerHTML += `
            <div class="${news.type}">
                <a href="detail pages/${news.link}" class="link">
                    <div class="picture">
                        <img src="${news.image}"
                                    alt="">
                        <p class="img-info">${news.Topic}</p>
                    </div>
                    <p class="news-title">${news.Title}</p>
                    <p>${news.Detail1}</p>
                    <p>${news.Detail2}</p>
                </a>
            </div>`;
    }
}

renderLastestNews();

let mostView = [
        {
            Title: "Record storm slams West Coast as tens of millions on East Coast brace for nor'easter",
            Topic: "World",
            Type: "tiny",
            link:" ",
            image: "https://media-cldnry.s-nbcnews.com/image/upload/t_focal-80x80,f_auto,q_auto:best/newscms/2021_43/3514989/211025-california-storm-v2-ac-1159p.jpg",
        },
        {
            Title: "Queen Elizabeth holds first official engagement since hospital stay",
            Topic: "Politics",
            Type: "tiny",
            link:" ",
            image: "https://media-cldnry.s-nbcnews.com/image/upload/t_focal-80x80,f_auto,q_auto:best/rockcms/2021-10/211026-queen-mb-1456-dc2328.jpg",
        },
        {
            Title: "Dave Chappelle says he'd meet with transgender Netflix workers — but only under certain conditions",
            Topic: "Entertainment",
            Type: "tiny",
            link:" ",
            image: "https://media-cldnry.s-nbcnews.com/image/upload/t_focal-80x80,f_auto,q_auto:best/newscms/2021_43/3484802/210620-dave-chappelle-jm-1219.jpg",
        },
        {
            Title: "Biden rejects Trump's latest claim of executive privilege over Jan. 6 documents",
            Topic: "Politics",
            Type: "tiny",
            link:" ",
            image: "https://media-cldnry.s-nbcnews.com/image/upload/t_focal-80x80,f_auto,q_auto:best/newscms/2021_42/3511404/211008-1x1-donald-trump-ew-113p.jpg",
        },
        {
            Title: "Police monitoring Brian Laundrie last month thought he had come home. It was his mom.",
            Topic: "World",
            Type: "tiny",
            link:" ",
            image: "https://media-cldnry.s-nbcnews.com/image/upload/t_focal-80x80,f_auto,q_auto:best/newscms/2021_43/3515020/211026-chris-laundrie-mb-1317.JPG",
        },
        {
            Title: "2 killed, police officer among 5 injured in Idaho mall shooting",
            Topic: "Politics",
            Type: "tiny",
            link:" ",
            image: "https://media-cldnry.s-nbcnews.com/image/upload/t_focal-80x80,f_auto,q_auto:best/newscms/2021_43/3514927/211025-boise-mall-shooting-ew-557p.jpg",
        },
]

let mostView_container = document.getElementById("mostView");
function renderMostView() {
    for (let news of mostView) {
        mostView_container.innerHTML += `
        <div class="newsItem_tiny">
        <div class="picture_tiny">
            <img src="${news.image}"
                alt="">
        </div>
        <div class="title_tiny">
            <p class="topic">${news.Topic}</p>
            <p class="news-title">${news.Title}</p>
        </div>
    </div>`;
    }
}

renderMostView();


let topStory = [
    {
        Title:"Billionaires tax faces constitutional, political hurdles",
        Topic:"Business",
        image:"https://media-cldnry.s-nbcnews.com/image/upload/t_focal-580x290,f_auto,q_auto:best/newscms/2021_43/3515314/211027-billionaires-2x1-tax-al-0847.jpg",
        type: "newsItem_medium",
        link:" ",
    },
    {
        Title:"New Zealand’s lockdowns have been a disaster for some. As they lift, another threat looms.",
        Topic:"World",
        image:"https://media-cldnry.s-nbcnews.com/image/upload/t_focal-580x290,f_auto,q_auto:best/rockcms/2021-10/211028-new-zealand-mb-1132-0fb4a3.jpg",
        type: "newsItem_medium",
        link:" ",
    },
    {
        Title:"Facebook's rebrand inspires Meta jokes",
        Topic:"Tech",
        image:"https://media-cldnry.s-nbcnews.com/image/upload/t_focal-200x100,f_auto,q_auto:best/rockcms/2021-10/211028-facebook-meta-mn-1615-57bd4b.jpg",
        type: "newsItem_medium",
        link:" ",
    },
    {
        Title:"Presidential approval tracker: How popular is Joe Biden?",
        Topic:"Politics",
        image:"https://media-cldnry.s-nbcnews.com/image/upload/t_focal-1240x620,f_auto,q_auto:best/newscms/2021_34/3501022/210823-biden-approval-rating-tracker-2x1-cs.jpg",
        type: "newsItem_medium",
        link:" ",
    },
]

let topStory_container = document.getElementById("topStories");
function renderTopStory() {
    for (let news of topStory) {
        topStory_container.innerHTML += `
        <div class="${news.type}">
            <div class="picture">
                <img src="${news.image}"
                            alt="">
                <p class="img-info">${news.Topic}</p>
            </div>
            <p class="news-title">${news.Title}</p>
        </div>`;
    }
}

renderTopStory();


let video = [
    {
        video:'<iframe src="https://www.youtube.com/embed/luwOtyX1qnE" title="YouTube video player"frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        video:'<iframe src="https://www.youtube.com/embed/uFGvkRjF5O8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        video:'<iframe  src="https://www.youtube.com/embed/0lpOMNC2Elo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        video:'<iframe src="https://www.youtube.com/embed/0UOxXzlHeJA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        video:'<iframe src="https://www.youtube.com/embed/DiVDGgeJV8E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        video:'<iframe src="https://www.youtube.com/embed/pJm9Fpb00Bg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        video:'<iframe  src="https://www.youtube.com/embed/0lpOMNC2Elo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        video:'<iframe src="https://www.youtube.com/embed/0UOxXzlHeJA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
]

let video_container = document.getElementById("video");
function renderVideo() {
    for (let news of video) {
        video_container.innerHTML += `
        <div class="newsItem_video">
        <div class="picture">
            ${news.video}
        </div>
    </div>`;
    }
}

renderVideo(); 