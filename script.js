document.getElementById('formularioDeLogin').addEventListener('submit', (e) => {

    e.preventDefault();


    const usuariu = document.getElementById('user').value;

    const seinha = document.getElementById('senha').value;


    if (usuariu && seinha) {

        if (usuariu === 'aron' && seinha === 'aron123') {

            window.location.href = 'aron.html';

        } else {


            localStorage.setItem('usuariu', usuariu);



            window.location.href = 'gay.html';

        }

    }

});


    