let buttonTextDefault = "Clear Red Interest Bulk";
let divUtama = document.createElement("div");
let divWrapper = document.createElement("div");
let divButton = document.createElement("button");

divButton.id = "resitdc-clear";
divButton.type = "button";
divButton.title = "Saya Mengakui Restu Ganteng";
divButton.innerText = buttonTextDefault;

divWrapper.classList.add("resitdc-wrapper");
divUtama.id = "resitdc-tools";

divWrapper.append(divButton);
divUtama.append(divWrapper);
let clicked = 0;
let totalPage = 50;

const clearInterestPerPage = (page) => {
	const clearButton = document.getElementById("resitdc-clear");
	if (clicked <= totalPage) {
		let pagination = document.querySelectorAll("div.audience-targeting-split-area div.section div div.mb8 div.custom-split-variant div.variants")[0].children;

		if (parseInt(page) <= parseInt(pagination.length) - 2) {
			pagination[page].children[0].click();
			clicked++;
		
			let timeout1 = setTimeout(() => {
				let listInterest = document.querySelectorAll("div.item > span.color.red ~ div.close-btn");
				for (let i = 0; i < listInterest.length; i++ ) {
					listInterest[i].click();
				}
				clearInterestPerPage(parseInt(page) + 1);
				// clearTimeout(timeout1);
			}, 50);
		} else if (parseInt(page) === parseInt(pagination.length) - 1) {
			pagination[page].children[0].click();
			let timeout2 = setTimeout(() => {
				clearInterestPerPage(1);
			}, 60);
			// clearTimeout(timeout2);
		} else {
			clearButton.disabled = false;
			clearButton.innerText = buttonTextDefault;
		}
	} else {
		clearButton.disabled = false;
		clearButton.innerText = buttonTextDefault;
	}
}


window.addEventListener("load", () => {
	const mainBody = document.getElementsByTagName("body")[0];
	mainBody.prepend(divUtama);
	const clearButton = document.getElementById("resitdc-clear");
	clearButton.addEventListener("click", () => {
		clicked = 0;
		clearButton.disabled = true;
		clearButton.innerText = "LOADING....";
		clearInterestPerPage(1);
	});
});

