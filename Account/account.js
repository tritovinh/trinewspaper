let mainPages = [
    {
        title: "Privacy and personalization",
        info:"View your data and choose which activities will be saved and personalize your experience on Tri Newspaper",
        img:"https://www.gstatic.com/identity/boq/accountsettingsmobile/dataandpersonalization_icon_96x96_cdb6dff2e31ed6745ece4662231bfd48.png",
    },
    {
        title: "Security recomandation",
        info:"Security checkup find some recommended actions for you",
        img:"https://www.gstatic.com/identity/boq/accountsettingsmobile/securitycheckup_yellow_96x96_8a13298be6a17ecf51cdf9baad9c74f1.png",
    },
    {
        title: "Account storage",
        info:"Your storage will be store on Tri newspaper and you can access it on both our app or website",
        img:"https://www.gstatic.com/identity/boq/accountsettingsmobile/googleonestorage_spot_72x72_33aff7baa37268ce05827c5c1d6752f0.png",
    },
    {
        title: "Security checkup",
        info: "You can change what security checkup will have access to your data and setting ",
        img:"https://www.gstatic.com/identity/boq/accountsettingsmobile/privacycheckup_initial_active_96x96_dd32f2d12cd34121e479baf7a103ee93.png",
    },
]

let accountMainPages = document.getElementById("account_mainPages");
function renderAccountMainPages(){
    for(let list of mainPages){
        accountMainPages.innerHTML += `
        <div class="accountMainPages-item">
        <p class="title">${list.title}</p>
        <img src="${list.img}"
            alt="">
        <div class="detail">
            <p class="title2">${list.title}</p>
            <p class="info">${list.info}</p>
            <img src="${list.img}"
            alt="">
        </div>
    </div>`
    }
}

renderAccountMainPages();