import { gsap } from 'gsap';

class Icons {

	constructor() {
		this.configs = {
			amount: 40,
			travelDistance: 700,
			speed: 20,
			rotationPower: 1400
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
			symbolArray = [
				'icon-ic_ada', 
				'icon-ic_amp', 
				'icon-ic_zil', 
				'icon-ic_zec', 
				'icon-ic_yfi',
				'icon-ic_busd',
				'icon-ic_cro',
				'icon-ic_cake',
				'icon-ic_ape',
				'icon-ic_xym',
				'icon-ic_xtz',
				'icon-ic_xrp',
				'icon-ic_xmr',
				'icon-ic_xlm',
				'icon-ic_xem',
				'icon-ic_xec',
				'icon-ic_xdc',
				'icon-ic_wbtc',
				'icon-ic_waves',
				'icon-ic_vet',
				'icon-ic_ust',
				'icon-ic_usdt',
				'icon-ic_usdp',
				'icon-ic_usdn',
				'icon-ic_usdc',
				'icon-ic_uni',
				'icon-ic_tusd',
				'icon-ic_ttt',
				'icon-ic_trx',
				'icon-ic_theta',
				'icon-ic_sand',
				'icon-ic_shib',
				'icon-ic_scrt',
				'icon-ic_tfuel',
				'icon-ic_terra',
				'icon-ic_stx',
				'icon-ic_sol',
				'icon-ic_rvn',
				'icon-ic_rune',
				'icon-ic_rose',
				'icon-ic_qnt',
				'icon_ic-polygon',
				'icon_ic-one',
				'icon_ic-omi',
				'icon_ic-okb',
				'icon_ic-nexo',
				'icon_ic-neo',
				'icon-ic_near',
				'icon-ic_mkr',
				'icon-ic_miota',
				'icon-ic_mina',
				'icon-ic_matic',
				'icon-ic_mana',
				'icon-ic_lunav',
				'icon-ic_ltc',
				'icon-ic_lrc',
				'icon-ic_link',
				'icon-ic_leo',
				'icon-ic_ksm',
				'icon-ic_knc',
				'icon-ic_klay',
				'icon-ic_kda',
				'icon-ic_kcs',
				'icon-ic_kava',
				'icon-ic_iotx',
				'icon-ic_icx',
				'icon-ic_icp',
				'icon-ic_ht',
				'icon-ic_hot',
				'icon-ic_hnt',
				'icon-ic_hbar',
				'icon-ic_grt',
				'icon-ic_gmt',
				'icon-ic_glmr',
				'icon-ic_gala',
				'icon-ic_ftt',
				'icon-ic_ftm',
				'icon-ic_frax',
				'icon-ic_flow',
				'icon-ic_fil',
				'icon-ic_eth',
				'icon-ic_etc',
				'icon-ic_eos',
				'icon-ic_enj',
				'icon-ic_egld',
				'icon-ic_dot',
				'icon-ic_dot_2',
				'icon-ic_doge',
				'icon-ic_dfi',
				'icon-ic_dcr',
				'icon-ic_dash',
				'icon-ic_dai',
				'icon-ic_cvx',
				'icon-ic_crv',
				'icon-ic_btt',
				'icon-ic_comp',
				'icon-ic_chz',
				'icon-ic_celo',
				'icon-ic_btc',
				'icon-ic_bsv',
			];
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