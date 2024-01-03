var swiper = new Swiper(".home-slider",{
    effect:"coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView:4,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
    },
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInterface: false,
    }
});

var data =[
    {
        EventName:"Rockstar Aniruth",
        Location:"Coimbatore",
        Date:"05/01/2024",
        Time:"6:00PM",
        Price:"$100",
        Description:"he Chennai concert is set to take place at Nithya Kalyana Perumal Temple Grounds on East Coast Road, while the Coimbatore concert will take place at Codissia Ground. If the ticket prices, starting at 1,000 rupees and climbing to 50,000 rupees"
    },
    {
        EventName:"Sunburn",
        Location:"Codissia",
        Date:"01/01/2024",
        Time:"12:00AM",
        Price:"$50",
        Description:"The Sunburn Festival, a prominent electronic dance music event in Goa, faced a significant interruption by the local authorities. Goa Police enforced strict regulations to curb noise pollution, adhering to the High Court's directives.",
    },
    {
        EventName:"Kovai Countdown",
        Location:"Hindusthan College",
        Date:"01/01/2024",
        Time:"12:00AM",
        Price:"$75",
        Description:"Welcome to the ultimate countdown extravaganza! As we eagerly bid farewell to another remarkable year, anticipation is building for the grand celebration of New Year’s Eve.",
    },
    {
        EventName:"Minnal 2024",
        Location:"Pannimadai",
        Date:"06/01/2024",
        Time:"12:30AM",
        Price:"$55",
        Description:"Are you planning to celebrate this New Year’s night socially with full enjoyment in Coimbatore, with great food and a DJ night? I have listed the best New Year’s night events, which are suitable for friends and families and are going to rock this year’s end.",
    },
]

var mydata = localStorage.setItem("mydata",JSON.stringify(data));
var storedData = JSON.parse(localStorage.getItem("mydata"));

function newPopup() {
    document.getElementById('newpop').style.display = 'block';
}
function newclosePopup() {
    document.getElementById('newpop').style.display = 'none';
}
function Addrow(){
    
}

function addusers(){
    const eventName = document.getElementById("eventName").value;
    const Location = document.getElementById("Location").value;
    const Date = document.getElementById("Date").value;
    const Time = document.getElementById("Time").value;
    const Price = document.getElementById("Price").value;
    const Description = document.getElementById("Description").value;

    var newdata= {
        EventName:eventName,
        Location:Location,
        Date:Date,
        Time:Time,
        Price:Price,
        Description:Description
    };

    storedData.push(newdata);

    localStorage.setItem('storedData',JSON.stringify(storedData));
    
    document.getElementById('eventForm').reset();

    Addrow();
}




function organisePopup() {
    document.getElementById('popup').style.display = 'block';
}
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
function Bookevent(){
    document.getElementById('eventform1').reset();
}

function tablepop(){
    document.getElementById('tablepopup').style.display = 'block';
}
function tableclosePopup() {
    document.getElementById('tablepopup').style.display = 'none';
}

