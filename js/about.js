// read more read less function
function toggleAbout() {
    const moreText = document.querySelector('.more-text');
    const readMoreBtn = document.querySelector('.read-more-btn.read-more');
    const readLessBtn = document.querySelector('.read-more-btn.read-less');

    if (moreText.style.display === 'none' || moreText.style.display === '') {
        moreText.style.display = 'block'; // show  text
        readMoreBtn.style.display = 'none'; // hide "read more" 
        readLessBtn.style.display = 'inline-block'; // show "read less" 
    } else {
        moreText.style.display = 'none'; // hide text
        readMoreBtn.style.display = 'inline-block'; //show "read more" 
        readLessBtn.style.display = 'none'; // hide "read less" button
    }
}