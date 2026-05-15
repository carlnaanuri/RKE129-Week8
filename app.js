const images = ['dude.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg']; 
const profileImages = document.querySelectorAll('.profile-img');
let i = 1; 

// Eellaadimine
images.forEach((filename) => {
    const img = new Image();
    img.src = 'images/' + filename;
});


profileImages.forEach((img) => {
    img.addEventListener('pointerdown', (e) => {
        e.preventDefault();

        profileImages.forEach(p => p.style.opacity = '0');

        setTimeout(() => {
            if (i >= images.length) {
                i = 0; 
            }

            const newSrc = 'images/' + images[i];

            profileImages.forEach(p => {
                p.src = newSrc;
                p.onload = () => {
                    p.style.opacity = '1';
                };
            });

            i++;
        }, 200);
    });
});