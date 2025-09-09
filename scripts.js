function toggleMobileMenu(){
	document.getElementById("menu").classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {

    emailjs.init("rnC3l_6Qzv4cfO5nD"); 

    let form = document.getElementById("contactForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let params = {
            from_name: document.getElementById("name").value,
            email_id: document.getElementById("email").value,
            message: document.getElementById("message").value
        };

        emailjs.send("service_fb2b3ci", "template_c05zyzr", params)
          .then(function (res) {
			alert('Mensagem enviada com sucesso!')
			document.getElementById('successMsg').style.display = 'block';
			document.getElementById('errorMsg').style.display = 'none';
			form.reset();
		})
		.catch(function (err) {
			alert('Algo deu errado ao enviar mensagem, confira o endereço de email!')
			document.getElementById('successMsg').style.display = 'none';
			document.getElementById('errorMsg').style.display = 'block';
		});

		setTimeout(() => {
			document.getElementById('successMsg').style.display = 'none';
			document.getElementById('errorMsg').style.display = 'none';
		},9000)
    });
});
