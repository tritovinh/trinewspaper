let paragrapharr = [
    "WASHINGTON — As a wave of workers across the country take to picket lines, President Joe Biden is witnessing a resurgence in the labor movement he spent decades championing — at a time when it could hamper the economic recovery he is fighting to protect.",
    'Biden has said that he supports the workers right to strike but that he is "not going to get into the negotiation," and White House officials say he doesn t plan to get involved in any of the labor disputes involving more than 100,000 workers across the country. Instead, he has taken the position that the decision to strike is up to the workers, leaving it to them and their employers to resolve disputes, the officials said.',
    "It's a shift for Biden. As a presidential candidate and a senator, Biden joined picket lines and tweeted out support for striking workers. He has called himself the most pro-labor president in history, having come out in support of Amazon workers trying to unionize and repeatedly inviting labor leaders to the White House.",
    "But President Biden faces a different dynamic from candidate Biden, because strikes risk adding to labor shortages and supply chain disruptions that are already driving up prices as the global economy reels from pandemic strains. While the strikes could benefit workers by driving up wages in the long term, the near-term impact of persistent or growing work stoppages could include worst-case scenarios like food shortages or lack of access to hospitals.",
    '"This will come at an economic cost to employers and therefore the economy, and I think that may be why Biden has gone a little silent," said Ariel Avgar, an associate professor of labor relations, law and history at Cornell University. "It is tricky for him. On the one hand, he is on the record supporting unions and their ability to use collective action. On the other hand, the point of strikes is to extract an economic price for employers unwilling to negotiate in a way the union feels is appropriate."',
    "There have been 184 strikes by health care to factory workers this year after the coronavirus pandemic aggravated concerns over low wages and poor working conditions, and the tight labor market has given workers more leverage. Among the strikers are more than 10,000 John Deere workers who went on strike this month. More than 24,000 health care workers at Kaiser Permanente are preparing to strike, joining thousands of nurses and other health care workers elsewhere who have been striking for months.",
    "Biden made his only comments about what has been dubbed Striketober in response to a reporter's questions last week.",
    "They have a right to strike, and they have a right to demand higher wages, and the companies they're striking on are doing very well, Biden said. \"I'm not going to get into the negotiation, but my message is: If you think that\'s what you need, then you should do it.",
    "A White House official said that Biden has spoken extensively about his support for unions and collective bargaining and that he believes \"workers have a right to strike and government's job is to defend that right.\" Press secretary Jen Psaki framed the strikes as a positive sign for the economy when she was asked about them last week.",
    "The message stops short, however, of specifically supporting the workers who are on strike, which Biden could do without getting directly involved in any negotiations.",
    "\"A statement that the president supports the right isn't much in and of itself, because the right is already there in law. It would be a bolder statement that he supports workers on strike,\" said Robert Reich, who was labor secretary during the Clinton administration. \"He could come out with a statement saying many of these workers have been crucial during the pandemic, essential workers, the nurses, they are all entitled to better pay and better working conditions.\"",
    "Some of those on the front lines have been eager for Biden and his administration to take a more active role. David Schildmeier, a spokesman for the Massachusetts Nurses Association, said he is being asked almost every day by nurses striking outside Saint Vincent Hospital in Worcester, Massachusetts, why Biden hasn't given his support or whether Vice President Kamala Harris would be willing to come to the picket line.",
    "Marlena Pellegrino, who has worked at the hospital for 35 years, and 700 other Saint Vincent nurses have been picketing for more than eight months. Many of them have lost their health insurance benefits and are starting to look for other work. The nurses initially began striking to improve staffing levels, but the issue has turned to whether they will be allowed to return to their jobs once the strike is over, Pellegrino said.",
    "\"It is time for someone to step up,\" she said. \"We would absolutely love and implore the president to get involved. There hasn't been any direct involvement at that level.\"",
    "While Biden has yet to get directly involved in any of the strikes, some of his top officials have, both publicly and behind the scenes. Labor Secretary Marty Walsh has been in contact with the striking nurses at Saint Vincent hospital, in his home state, and made calls on their behalf, Schildmeier said. Agriculture Secretary Tom Vilsack joined striking John Deere employees on the picket line in his state, Iowa, on Wednesday.",
    "\"These folks were very supportive of me when I ran for governor, and it's something that you don't forget, especially when you're behind and not many people had that faith and confidence in you,\" Vilsack told the John Deere workers. \"You remember the people that did. When they need somebody to give them a pat on the back, I want to be here for them.\"",
    "Biden's nominee to be chief labor mediator, Javier Ramirez, whose task it is to help resolve and prevent disputes, has contacted officials with Kaiser Permanente and the union weighing a strike against it, said Maureen Anderson, the chief of staff for the Alliance of Healthcare Unions, which is representing the Kaiser workers.",
    "While not specifically addressing the strikes, Harris and Walsh met Wednesday with federal workers and announced administration policies to help inform workers of their rights to organize as part of the White House Task Force on Worker Organizing and Empowerment.",
    "There are some actions a president can take to resolve a strike, such as forcing both sides back to the negotiating table under laws allowing presidents to intervene in airline or railway strikes or when a strike reaches the level of a national emergency that jeopardizes health and safety.",
    "The moves are often seen as hindering workers' rights, and they usually require a strike to have larger economic consequences beyond a single industry or region. But presidents can show their support for a particular movement, which Avgar of Cornell said he is surprised he hasn't seen from Biden, given his strong support for unions in the past.",
    "\"It isn't surprising politically to try to walk a fine line\" when it comes to supporting the labor movement, he said. \"But not coming out with the full-throated support he did previously is surprising.\"",
    "Pellegrino said she has seen the power national figures can have in resolving strikes. The last time the Saint Vincent nurses went on strike, Sen. Ted Kennedy stepped in and brokered a deal. Ultimately, an agreement was reached in Kennedy's Senate office with the two sides in separate rooms and Kennedy and his staff mediating.",
    "\"We are fighting corporate America, just the 700 of us, and that is not a lot of people. It feels like David and Goliath,\" she said. \"We are feeling the onus on our shoulders, and we are carrying this weight. It is very overwhelming.\"",
]

let paragraph = document.getElementById("NewsContent");
function renderContent(){
    for(let x of paragrapharr){
        paragraph.innerHTML += `
        <p>${x}</p>`
    }
}

renderContent();


let relateNews = [
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
]

let relate = document.getElementById("relate-news")
function renderRelateNews() {
    for(let news of relateNews){
        relate.innerHTML += `
        <div class="mainNews">
            <img src="${news.img}" alt="">  
            <div class="detail">
                <p class="title">${news.title}</p>
                <p class="preview">${news.preview}</p>
                <p class="uploadTime">${news.time}</p>+
            </div>
        </div>`
    }
}

renderRelateNews();

let commentsArr = [
    {
        costumer:"Barack Obama",
        content:"Nice picture",
        time: "1s ago",
    },
    {
        costumer:"Peter Parker",
        content:"Helpful news",
        time: "1h ago",
    },
    {
        costumer:"Elon Musk",
        content:"Keep this nice work",
        time: "2h ago",
    },
    {
        costumer:"Tony Stark",
        content:"Amazing news page so far. For me it is better than CNN",
        time: "6h ago",
    },
    {
        costumer:"William Shakespeare",
        content:"Good story. I wonder who wrote this",
        time: "1d ago",
    },
    {
        costumer:"Doanld Jump",
        content:"Hate this guy, but nice webpage",
        time: "1d ago",
    },
]

let comment = document.getElementById("comment-container");
function renderComments() {
    for(let comments of commentsArr){
        comment.innerHTML += `
        <div class="comment-item">
            <div class="profile-pic">
                <i class="fas fa-user-circle"></i>
            </div>
            <div class="comment-content">
                <span class="">${comments.costumer}</span><span class="comment-time">${comments.time}</span>
                <p>${comments.content}</p>
            </div>
            <div class="add">
                <span>Reply</span>
                <i class="fas fa-heart" ></i>
            </div>
        </div>`
    }
}

let commentNumber = document.getElementById("commentNumber");
commentNumber.innerHTML = commentsArr.length;

renderComments();

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
]

let video_container = document.getElementById("video");
function renderVideo() {
    for (let news of video) {
        video_container.innerHTML += `
        <div class="video-container">
            ${news.video}
        </div>`;
    }
}

renderVideo(); 