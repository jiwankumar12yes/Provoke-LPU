
let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        playerVars: {
            'autoplay': 0,
            'controls': 1,
            'showinfo': 0,
            'rel': 0,
            'key': 'AIzaSyCp_CnJp5lmqQgpq_WnwVF4AFQGMTzu7E0',
        },
    });
}

function loadVideo() {
    const videoId = document.getElementById('videoIdInput').value;
    if (videoId.trim() !== '') {
        if (player) {
            player.loadVideoById(videoId);
        } else {
            setTimeout(() => {
                loadVideo();
            }, 1000);
        }
    } else {
        alert('Please enter a valid YouTube Video ID.');
    }
}
