(function() {

    var slider = {};

    slider.data = {
        first: {
            title: 'Долго, дорого, <br>скрупулезно.',
            description: 'Математически выверенный дизайн <br>для вашего сайта или мобильного приложения.'
        },
        second: {
            title: 'Любим математику <br>как никто другой',
            description: 'Никакого креатива, только математические формулы <br>для расчета идеальных пропорций.'
        },
        third: {
            title: 'Только ночь, <br>только хардкор',
            description: 'Работать днем, как все? Мы против этого. <br>Ближе к полуночи работа только начинается.'
        }
    };

    slider.root = document.querySelector('.slider');
    slider.titleElement = slider.root.querySelector('.slider-title');
    slider.descriptionElement = slider.root.querySelector('.slider-description');
    slider.indicatorElement = slider.root.querySelector('.slider-indicator');

    slider.title = '';
    slider.description = '';

    slider.initialSlide = 0;
    slider.classnames = ['first', 'second', 'third'];

    slider.rotationDuration = 10000;
    slider.rotation = function(slider, index) {

        t = setInterval(function() {

            slider.root.className = 'slider ' + slider.classnames[index];

            this.titleElement.innerText = this.data[index][title];
            this.descriptionElement.innerText = this.data[index][description];

        }, this.rotationDuration);
    };

    slider.init = function() {
        slider.rotation(slider, 0);
    };

    //slider.init();

})();