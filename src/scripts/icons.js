import { gsap } from 'gsap';

class Icons {

	constructor() {
		this.configs = {
			amount: 35,
			travelDistance: 700,
			speed: 20,
			rotationPower: 1080
		};
		this.elements = {
			iconsContainer: document.querySelector('.icons'),
		};
	};
	
	init = () => {
		this.createIcons();
		this.animateIcons();
	}

	createIcons = () => {
		for (let i = 0; i < this.configs.amount; i++) {
			
			// CREATE ELEMENT
			let icon, symbol, symbolArray;
			icon = document.createElement('i');

			// RANDOM ICON
			symbolArray = ['icon-ic_ada', 'icon-ic_amp', 'icon-ic_zil', 'icon-ic_zec', 'icon-ic_yfi'];
			symbol = symbolArray[Math.floor(Math.random() * symbolArray.length)];
			icon.classList.add('icons__icon', 'icon', symbol);

			// RANDOM DIRECTION
			let x, y; 
			x = Math.floor(Math.random() * this.configs.travelDistance);
			y = x - this.configs.travelDistance;
			x = Math.random() > 0.5 ? Math.abs(x) : -Math.abs(x);
			y = Math.random() > 0.5 ? Math.abs(y) : -Math.abs(y);
			icon.setAttribute('data-x', x);
			icon.setAttribute('data-y', y);
			
			// RANDOM DELAY 
			let delay;
			delay = Math.random() * this.configs.speed;
			delay = -delay;
			icon.setAttribute('data-delay', delay);

			// RANDOM ROTATION POWER
			let rotationPower;
			rotationPower = Math.random() * this.configs.rotationPower;
			rotationPower = Math.random() < 0.5 ? Math.abs(rotationPower) : -Math.abs(rotationPower);
			icon.setAttribute('data-rotation-power', rotationPower);

			// APPEND ICONS
			this.elements.iconsContainer.appendChild(icon);
		};

	};
		
		animateIcons = () => {
			let icon, icons, x, y;
			icons = document.querySelectorAll('.icons__icon');
			icons = gsap.utils.toArray(icons);
			for (icon of icons) {
				x = icon.getAttribute('data-x');
				y = icon.getAttribute('data-y');
				gsap.to(icon, {
					x: icon.getAttribute('data-x'),
					y: icon.getAttribute('data-y'),
					rotate: icon.getAttribute('data-rotation-power'),
					delay: icon.getAttribute('data-delay'),
					duration: this.configs.speed,
					repeat: -1, 
					opacity: 0,
					ease: "power1.easeOut"
				})
			};

		};

};

export default Icons;