function choose(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
  }

// Set images

let cycleOfImages = [];
let nf_image_file_path = 'Assets/NF_Images/NF_';

cycleOfImages = [
    'at_concert',
    'Main_Picture',
    'Portrait',
    'The_Search'
];

let mainImage = document.getElementById('main-image');
let finalImage = document.getElementById('final-image');

let mainPictureSRC = nf_image_file_path + choose(cycleOfImages) + '.jpg';
let finalPictureSRC = nf_image_file_path + choose(cycleOfImages) + '.jpg';

let mainPicture = document.createElement('img');
let finalPicture = document.createElement('img');

mainPicture.setAttribute('src', mainPictureSRC);
finalPicture.setAttribute('src', finalPictureSRC)

console.log(mainPictureSRC + ', ' + finalPictureSRC);

finalImage.appendChild(finalPicture);
mainImage.appendChild(mainPicture);

// Randomize video
let embed = 'https://www.youtube.com/embed/';
let autoplay = '&autoplay=1'
let videoNames = [
    'Returns',
    'Chasing',
    'No Excuses',
    'Paid My Dues',
    'I Miss The Days',
    'Change',
    'Leave Me Alone',
    'Nate'
];
let videoURL = {
    'Returns': 'TkiDouBnDrU',
    'Chasing': 'aqrr3Dj_Jn8',
    'No Excuses': '4k3YY0bMXU4',
    'Paid My Dues': 'LLAgke7QprM',
    'I Miss The Days': 'fy9YETB068M',
    'Change': 'j__VYXZ-5Cw',
    'Leave Me Alone': 'XGGWhOUYObc',
    'Nate': 'LmHmawgCAHg'
};

let video = embed + videoURL[choose(videoNames)];

let videoContainer = document.getElementById('video-container');

let iframe = document.createElement('iframe');
iframe.src = video;
iframe.frameborder = 0;
iframe.setAttribute('allowFullScreen', '');
iframe.setAttribute('allow', 'autoplay; encrypted-media');
videoContainer.appendChild(iframe);

console.log(video);