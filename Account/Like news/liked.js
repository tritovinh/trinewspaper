let likeNewsArr = [
    {
        Topic: "Business",
        Title: "Tangier Island is sinking faster than once thought, study finds",
        type: "newsItem_medium",
        image: "https://media-cldnry.s-nbcnews.com/image/upload/t_focal-460x460,f_auto,q_auto:best/rockcms/2021-11/211110-tangier-island-wide-se-1155a-1abb85.jpg",
        link:"",
    },
    {
        Topic: "World",
        Title: "'Rust' assistant director was fired from 2019 movie after gun discharged on set",
        type: "newsItem_medium",
        image: "https://media-cldnry.s-nbcnews.com/image/upload/t_focal-460x460,f_auto,q_auto:best/newscms/2021_43/3514964/211025-santa-fe-nm-rust-set-aerial-ac-1004p.JPG",
        link:" ",

    },
    {
        Topic: "World",
        Title: "Defying public scorn and media storm, Japan’s princess finally marries",
        type: "newsItem_medium",
        image: "https://media-cldnry.s-nbcnews.com/image/upload/t_focal-460x460,f_auto,q_auto:best/rockcms/2021-10/211026-princess-mako-mb-1112-c03a22.jpg",
        link:" ",
    },
    {
        Topic: "Business",
        Title: "Everyday prices are soaring — so why are stocks still flying high?",
        type: "newsItem_medium",
        image: "https://media-cldnry.s-nbcnews.com/image/upload/t_focal-380x380,f_auto,q_auto:best/newscms/2021_43/3514774/211025-nyse-mn-0930.jpg",
        link:" ",
    },
    {
        Topic: "Tech",
        Title: "It looks like a steal — but then you're trapped: 'Dark patterns' may face a reckoning",
        type: "newsItem_medium",
        image: "https://media-cldnry.s-nbcnews.com/image/upload/t_focal-380x380,f_auto,q_auto:best/rockcms/2021-11/211104-tech-dark-patterns-traps-1x1-cs-d16582.jpg",
        link:" ",
    },
    {
        Topic: "World",
        Title: "The TikTok meme format 'They don't know that I know' started with legal advice",
        type: "newsItem_medium",
        image: "https://media-cldnry.s-nbcnews.com/image/upload/t_focal-460x460,f_auto,q_auto:best/rockcms/2021-11/211109-1x1-tiktok-lawyers-ew-1213p-b455a7.jpg",
        link:" ",
    },
    {
        Topic: "Business",
        Title: "Investors poured money into 'Squid Game'-themed cryptocurrency. Then it all vanished.",
        type: "newsItem_medium",
        image: "https://media-cldnry.s-nbcnews.com/image/upload/t_focal-380x380,f_auto,q_auto:best/rockcms/2021-11/211101-squid-game-se-410p-f5b458.jpg",
        link:" ",
    },
    {
        Topic: "Tech",
        Title: "Bezos’ Blue Origin loses lawsuit against NASA over SpaceX lunar lander contract",
        type: "newsItem_medium",
        image: "https://media-cldnry.s-nbcnews.com/image/upload/t_focal-300x300,f_auto,q_auto:best/rockcms/2021-07/210707-Blue-Origin-New-Shepard-Launch-Pad-Check-bezos-ew-657p-4c4764.jpg",
        link:" ",
    },
]

let newsContainer = document.getElementById("newsContainer");
function renderNewsContainer() {
    for (let news of likeNewsArr) {
        newsContainer.innerHTML += `
            <div class="${news.type}">
                <a href="detail pages/${news.link}" class="link">
                    <div class="picture">
                        <img src="${news.image}"
                                    alt="">
                        <p class="img-info">${news.Topic}</p>
                    </div>
                    <p class="news-title">${news.Title}</p>
                </a>
                <div class="news-menu">
                    <p>Open</p>
                    <p>Remove</p>
                </div>
            </div>`;
    }
}

renderNewsContainer();