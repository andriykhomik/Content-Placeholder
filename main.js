const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profileImg = document.getElementById('profile_img');
const name = document.getElementById('name');
const dateEl = document.getElementById('date');

const animatedBgs = document.querySelectorAll('.animated-bg');
const animatedBgsText = document.querySelectorAll('.animated-bg-text');

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const dateFrom = new Date();
const date = dateFrom.getDate();
const month = dateFrom.getMonth();
const year = dateFrom.getFullYear()

setTimeout(getDta, 3000);

function getDta(){
    header.innerHTML = `<img src="https://mk0timesnextw7n7qiu0.kinstacdn.com/wp-content/uploads/2020/07/title.jpg" alt="">`;
    title.innerHTML = `Lorem ipsum dolor sit amet`;
    excerpt.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, in!`;
    profileImg.innerHTML = `<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">`;
    name.innerHTML = `John Doe`;
    dateEl.innerHTML = `${months[month]} ${date}, ${year}`;

    animatedBgs.forEach(animatedBg => animatedBg.classList.remove('animated-bg'));
    animatedBgsText.forEach(animatedTx => animatedTx.classList.remove('animated-bg-text'));
}
