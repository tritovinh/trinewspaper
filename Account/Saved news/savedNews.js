let savedNewsArr = [
    {
        Topic: "Business",
        Title: "Tangier Island is sinking faster than once thought, study finds",
        Number: "1",
        image: "https://media-cldnry.s-nbcnews.com/image/upload/t_focal-460x460,f_auto,q_auto:best/rockcms/2021-11/211110-tangier-island-wide-se-1155a-1abb85.jpg",
        date: "11-11-21",
    },
    {
        Topic: "World",
        Title: "'Rust' assistant director was fired from 2019 movie after gun discharged on set",
        Number: "2",
        image: "https://media-cldnry.s-nbcnews.com/image/upload/t_focal-460x460,f_auto,q_auto:best/newscms/2021_43/3514964/211025-santa-fe-nm-rust-set-aerial-ac-1004p.JPG",
        date: "11-11-21",

    },
    {
        Topic: "World",
        Title: "Defying public scorn and media storm, Japan’s princess finally marries",
        Number: "3",
        image: "https://media-cldnry.s-nbcnews.com/image/upload/t_focal-460x460,f_auto,q_auto:best/rockcms/2021-10/211026-princess-mako-mb-1112-c03a22.jpg",
        date: "11-11-21",
    },
    {
        Topic: "Business",
        Title: "Everyday prices are soaring — so why are stocks still flying high?",
        Number: "4",
        image: "https://media-cldnry.s-nbcnews.com/image/upload/t_focal-380x380,f_auto,q_auto:best/newscms/2021_43/3514774/211025-nyse-mn-0930.jpg",
        date: "11-11-21",
    },
    {
        Topic: "Tech",
        Title: "It looks like a steal — but then you're trapped: 'Dark patterns' may face a reckoning",
        Number: "5",
        image: "https://media-cldnry.s-nbcnews.com/image/upload/t_focal-380x380,f_auto,q_auto:best/rockcms/2021-11/211104-tech-dark-patterns-traps-1x1-cs-d16582.jpg",
        date: "11-11-21",
    },
    {
        Topic: "World",
        Title: "The TikTok meme format 'They don't know that I know' started with legal advice",
        Number: "6",
        image: "https://media-cldnry.s-nbcnews.com/image/upload/t_focal-460x460,f_auto,q_auto:best/rockcms/2021-11/211109-1x1-tiktok-lawyers-ew-1213p-b455a7.jpg",
        date: "11-11-21",
    },
    {
        Topic: "Business",
        Title: "Investors poured money into 'Squid Game'-themed cryptocurrency. Then it all vanished.",
        Number: "7",
        image: "https://media-cldnry.s-nbcnews.com/image/upload/t_focal-380x380,f_auto,q_auto:best/rockcms/2021-11/211101-squid-game-se-410p-f5b458.jpg",
        date: "11-11-21",
    },
    {
        Topic: "Tech",
        Title: "Bezos’ Blue Origin loses lawsuit against NASA over SpaceX lunar lander contract",
        Number: "8",
        image: "https://media-cldnry.s-nbcnews.com/image/upload/t_focal-300x300,f_auto,q_auto:best/rockcms/2021-07/210707-Blue-Origin-New-Shepard-Launch-Pad-Check-bezos-ew-657p-4c4764.jpg",
        date: "11-11-21",
    },
]

let table = document.getElementById("savedNewTable");
function renderTable(){
    for(let i of savedNewsArr){
        table.innerHTML += `
        <tr>
            <td>${i.Number}</td>
            <td><img src="${i.image}"></td>
            <td>${i.Title}</td>
            <td>${i.Topic}</td>
            <td>${i.date}</td>
        </tr>`
    }
}

renderTable();