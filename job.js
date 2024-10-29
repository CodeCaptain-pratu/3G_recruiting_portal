let jobs=[
    {
        img:"https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=206,fit=crop,q=95/AwvrzaMvGJIDZLVR/3g-infotech-avl334obqbcvdpv6__1_-removebg-preview-YBgpPZv49xcWVGzy.png",
        position:"Java Developer",
        company:"3G Infotech Servies",
        experience:"1year",
        salary:"20k",
        location:"MUmbai",
        date:"21st Nov 2024",
    },
    {
        img:"https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=206,fit=crop,q=95/AwvrzaMvGJIDZLVR/3g-infotech-avl334obqbcvdpv6__1_-removebg-preview-YBgpPZv49xcWVGzy.png",
        position:"Java Developer",
        company:"3G Infotech Servies",
        experience:"1year",
        salary:"20k",
        location:"MUmbai",
        date:"21st Nov 2024",
    },
    {
        img:"https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=206,fit=crop,q=95/AwvrzaMvGJIDZLVR/3g-infotech-avl334obqbcvdpv6__1_-removebg-preview-YBgpPZv49xcWVGzy.png",
        position:"Java Developer",
        company:"3G Infotech Servies",
        experience:"1year",
        salary:"20k",
        location:"MUmbai",
        date:"21st Nov 2024",
    },
    {
        img:"https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=206,fit=crop,q=95/AwvrzaMvGJIDZLVR/3g-infotech-avl334obqbcvdpv6__1_-removebg-preview-YBgpPZv49xcWVGzy.png",
        position:"Java Developer",
        company:"3G Infotech Servies",
        experience:"1year",
        salary:"20k",
        location:"MUmbai",
        date:"21st Nov 2024",
    },
    {
        img:"https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=206,fit=crop,q=95/AwvrzaMvGJIDZLVR/3g-infotech-avl334obqbcvdpv6__1_-removebg-preview-YBgpPZv49xcWVGzy.png",
        position:"Java Developer",
        company:"3G Infotech Servies",
        experience:"1year",
        salary:"20k",
        location:"MUmbai",
        date:"21st Nov 2024",
    },
];
let jobcards=document.querySelector("#jobcards");
let current=" ";
jobs.forEach(function(elem){
    current+=`<div id="job" class="p-4 flex flex-col">
                    <div id="top">
                        <div id="jobimg">
                            <img src="${elem.img}" alt="3G info logo">
                        </div>
                        <div id="jobdescriptiontop" class="flex flex-col">
                            <h1 class="text-xl" class="text-slate-600">${elem.position}</h1>
                            <p>${elem.company}</p>
                            <div id="jobdescriptionbottom" class="flex">
                                <p><i class="fa-solid fa-briefcase p-2"></i>${elem.experience}</p>
                                <p><i class="fa-solid fa-wallet p-2"></i>${elem.salary}</p>
                                <p><i class="fa-solid fa-location-dot p-2"></i>${elem.location}</p>
                            </div>
                        </div>
                    </div>
                    <div id="bottom" class="flex">
                        <div id="leftjob">
                            Apply before Fri ${elem.date}
                        </div>
                        <div id="rightjob">
                            <button class="p-2 w-20 text-white rounded font-semibold transition bg-indi">Apply</button>
                        </div>
                    </div>
                </div>`;
    // current+="hello";
                console.log(current);
});
jobcards.innerHTML=current;