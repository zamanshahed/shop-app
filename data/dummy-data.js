import Product from "../models/product";

const PRODUCTS = [
  new Product(
    "p1",
    "u1",
    "Smart Watch",
    "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2020/04/amazfit-bip-1922309.jpg?itok=gK-S_ziw",
    "A new way of getting smarter daily, with your favourite gadget!",
    59.99
  ),
  new Product(
    "p2",
    "u1",
    "Microsoft Surface Pro",
    "http://s3.amazonaws.com/digitaltrends-uploads-prod/2015/10/Peregrine_Hero_02_Retail.jpg",
    "Get the all new surface pro, comes with a lightweight tablet outside along with powerful specifications inside .",
    599.99
  ),
  new Product(
    "p3",
    "u2",
    "Nest Mini (2nd Gen) ",
    "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6348/6348883cv12d.jpg",
    "Meet the 2nd generation Nest Mini, the smart speaker you control with your voice. Just say 'Hey Google' to play songs from Spotify, YouTube Music, and more.¹ Music sounds bigger and richer. Ask your Google Assistant about the weather, news, or almost anything. Hear your personalized schedule, current weather conditions, and reminders.² Set timers and alarms. And control your compatible smart devices.³!",
    45.99
  ),
  new Product(
    "p4",
    "u3",
    "Bose - Sport Earbuds",
    "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6419/6419302_sd.jpg;maxHeight=640;maxWidth=550",
    "Bose Sport Earbuds are true wireless earbuds engineered to produce clear and balanced sound in any listening environment. StayHear Max tips mold to your ears with soft silicone and won’t fall out, no matter how demanding your workout is. Bose Sport Earbuds go through rigorous quality testing for durability and they’re rated IPX4 - designed to resist moisture from sweat and weather. And instead of buttons, a capacitive touch interface lets you simply tap to play or pause music, answer calls, and more. With a battery life of up to five hours get ready to beat your personal best, again and again.",
    179.49
  ),
  new Product(
    "p5",
    "u3",
    "PowerBook",
    "https://get.pxhere.com/photo/laptop-computer-macbook-mac-screen-water-board-keyboard-technology-air-mouse-photo-airport-aircraft-tablet-aviation-office-black-monitor-keys-graphic-hardware-image-pc-exhibition-multimedia-calculator-vector-water-cooling-floppy-disk-phased-out-desktop-computer-netbook-personal-computer-computer-monitor-electronic-device-computer-hardware-display-device-448748.jpg",
    "Awesome hardware, crappy keyboard and a hefty price. Buy now before a new one is released!",
    2299.99
  ),
  new Product(
    "p6",
    "u1",
    "Xbox Series X",
    "https://i5.walmartimages.com/asr/6f53b136-b9fa-42de-867b-bab2be88f6c3.56323a3aa9c61de5c1b1866a5c60286a.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",
    "Explore rich new worlds and enjoy the action like never before with the unmatched 12 Teraflops of raw graphic processing power. Enjoy 4K gaming at up to 120 frames per second, advanced 3D spatial sound, and more.2020 New X Gaming Console Bundle - 1TB SSD Black Xbox with Xbox Controller Case",
    989.49
  ),
];

export default PRODUCTS;
