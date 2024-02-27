let fData = [
    {
        img: "/assets/pfps/mikoni.jpg",
        name: "Mikoni",
        usn: "1BM22AD069",
        bio: "A visionary entrepreneur with a passion for sustainability and community building. Their background in environmental science inspired the creation of Pool Party, aiming to combat urban congestion.",
    },
    {
        img: "/assets/pfps/shaurya.jpeg",
        name: "Shaurya",
        usn: "1BM22AD054",
        bio: "A tech-savvy engineer and avid problem solver, they bring expertise in software development and user experience to the Pool Party team.",
    },
    {
        img: "/assets/pfps/shreyas.jpeg",
        name: "Shreyas",
        usn: "1BM22AD056",
        bio: "A dynamic marketing guru and community advocate, infusing Pool Party with their expertise in branding, communication, and outreach.",
    },
];

let bios = document.getElementById("founders");
document.addEventListener("DOMContentLoaded", function () {
    fData.forEach((article, key) => {
        const articleDiv = document.createElement("div");
        articleDiv.className = "founder-bio";
        const articleContent = `
            <img>
            <h2></h2>
            <h4></h4>
            <p></p>
        `;
        articleDiv.innerHTML = articleContent;
        bios.appendChild(articleDiv);
    });

    for (var i in fData) {
        // console.log(i);
        bios.getElementsByTagName('h2')[i].innerHTML = fData[i].name;
        bios.getElementsByTagName('h4')[i].innerHTML = fData[i].usn;
        bios.getElementsByTagName('p')[i].innerHTML = fData[i].bio;
        bios.getElementsByTagName('img')[i].src = fData[i].img;
        bios.getElementsByTagName('img')[i].alt = fData[i].name;
    }
});