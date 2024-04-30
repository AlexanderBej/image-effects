async function init() {
    let rustApp = null

    try {
        rustApp = await import('../pkg')
    } catch (error) {
        console.error(e)
        return
    }

    console.log(rustApp);

	const input = document.getElementById("upload");
	const fileReader = new FileReader();

	fileReader.onloadend = () => {
		const base64 = fileReader.result.replace(/^data:image\/(png|jpeg|jpg);base64,/, "");
		console.log(input.files[0]);
		console.log(base64);

        let imageDataURL = rustApp.greyscale(base64)
		document.getElementById('new-img').setAttribute('src', imageDataURL)
	};

	input.addEventListener("change", () => {
		fileReader.readAsDataURL(input.files[0]);
	});
}

init();
