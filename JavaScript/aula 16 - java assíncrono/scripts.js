const BASE_URL = 'https://thatcopy.pw/catapi/rest/'
const catImg = document.getElementById('cat')
const btn = document.getElementById('change-cat');


const getCats = async () => {
	try {
		const data = await fetch(BASE_URL);
		const json = await data.json();
		return json.webpurl;
	} catch (e) {
		console.log(e.message);
	}
};

const loadImg = async () => {
	catImg.src = await getCats();
};

btn.addEventListener('click', loadImg);
loadImg();
