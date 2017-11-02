import _ from 'lodash';
let time = 0;

const ActData = {
	Encounter: {
		n              : '\n',
		t              : '\t',
		title          : 'Encounter',
		duration       : '13:09',
		DURATION       : '789',
		damage         : '1840349',
		'damage-m'     : '1.84',
		'DAMAGE-k'     : '1840',
		'DAMAGE-m'     : '2',
		'DAMAGE-b'     : '0',
		dps            : '2332.51',
		DPS            : '2333',
		'DPS-k'        : '2',
		'DPS-m'        : 'DPS-m',
		encdps         : '2332.51',
		ENCDPS         : '2333',
		'ENCDPS-k'     : '2',
		'ENCDPS-m'     : '0',
		hits           : '4942',
		crithits       : '1206',
		'crithit%'     : '0%',
		misses         : '11',
		hitfailed      : '0',
		swings         : '4953',
		tohit          : '98.90',
		TOHIT          : '99',
		maxhit         : 'Limit Break-Final Heaven-34210',
		MAXHIT         : 'Limit Break-34210',
		healed         : '1810233',
		enchps         : '2294.34',
		ENCHPS         : '2294',
		'ENCHPS-k'     : '2',
		'ENCHPS-m'     : '0',
		critheals      : '1206',
		'critheal%'    : '0%',
		heals          : '2771',
		cures          : '4',
		maxheal        : 'White Mage One-Benediction-6974',
		MAXHEAL        : 'White Mage One-6974',
		maxhealward    : 'White Mage One-Benediction-6974',
		MAXHEALWARD    : 'White Mage One-6974',
		damagetaken    : '1052500',
		healstaken     : '1812323',
		powerdrain     : '0',
		powerheal      : '18483',
		kills          : '10',
		deaths         : '4',
		CurrentZoneName: '恶党孤城黄金阁',
		Last10DPS      : '2095',
		Last30DPS      : '1922',
		Last60DPS      : '2347'
	},
	Combatant: {
		'YOU'          : {
			n                 : '\n',
			t                 : '\t',
			name              : 'YOU',
			duration          : '12:30',
			DURATION          : '750',
			damage            : '147560',
			'damage-m'        : '0.15',
			'DAMAGE-k'        : '148',
			'DAMAGE-m'        : '0',
			'damage%'         : '20%',
			dps               : '196.75',
			DPS               : '197',
			'DPS-k'           : '0',
			encdps            : '187.02',
			ENCDPS            : '187',
			'ENCDPS-k'        : '0',
			hits              : '721',
			crithits          : '132',
			'crithit%'        : '18%',
			misses            : '0',
			hitfailed         : '0',
			swings            : '721',
			tohit             : '100.00',
			TOHIT             : '100',
			maxhit            : '圣灵-842',
			MAXHIT            : '842',
			healed            : '10356',
			'healed%'         : '5%',
			enchps            : '13.13',
			ENCHPS            : '13',
			'ENCHPS-k'        : '0',
			critheals         : '0',
			'critheal%'       : '0%',
			heals             : '72',
			cures             : '0',
			maxheal           : '深仁厚泽-947',
			MAXHEAL           : '947',
			maxhealward       : '深仁厚泽-947',
			MAXHEALWARD       : '947',
			damagetaken       : '305666',
			healstaken        : '569140',
			powerdrain        : '0',
			powerheal         : '266',
			kills             : '1',
			deaths            : '0',
			threatstr         : '+(0)0/-(0)28032',
			threatdelta       : '-28032',
			NAME3             : 'Pal',
			NAME4             : 'Pala',
			NAME5             : 'Palad',
			NAME6             : 'Paladi',
			NAME7             : 'Paladin',
			NAME8             : 'Paladin',
			NAME9             : 'Paladin O',
			NAME10            : 'Paladin On',
			NAME11            : 'Paladin One',
			NAME12            : 'Paladin One',
			NAME13            : 'Paladin One',
			NAME14            : 'Paladin One',
			NAME15            : 'Paladin One',
			Last10DPS         : '0',
			Last30DPS         : '0',
			Last60DPS         : '28',
			Job               : 'Pld',
			ParryPct          : '7%',
			BlockPct          : '27%',
			IncToHit          : '100.00',
			OverHealPct       : '0%',
			DirectHitPct      : '0%',
			DirectHitCount    : '0',
			CritDirectHitCount: '0'
		},
		'D.O.'  : {
			n                 : '\n',
			t                 : '\t',
			name              : 'D.O.',
			duration          : '13:06',
			DURATION          : '786',
			damage            : '331961',
			'damage-m'        : '0.33',
			'DAMAGE-k'        : '332',
			'DAMAGE-m'        : '0',
			'damage%'         : '18%',
			dps               : '422.34',
			DPS               : '422',
			'DPS-k'           : '0',
			encdps            : '420.74',
			ENCDPS            : '421',
			'ENCDPS-k'        : '0',
			hits              : '830',
			crithits          : '141',
			'crithit%'        : '17%',
			misses            : '1',
			hitfailed         : '0',
			swings            : '831',
			tohit             : '99.88',
			TOHIT             : '100',
			maxhit            : '死者之岸-2488',
			MAXHIT            : '2488',
			healed            : '11656',
			'healed%'         : '0%',
			enchps            : '14.77',
			ENCHPS            : '15',
			'ENCHPS-k'        : '0',
			critheals         : '0',
			'critheal%'       : '0%',
			heals             : '26',
			cures             : '0',
			maxheal           : '内丹-1108',
			MAXHEAL           : '1108',
			maxhealward       : '内丹-1108',
			MAXHEALWARD       : '1108',
			damagetaken       : '90082',
			healstaken        : '155129',
			powerdrain        : '0',
			powerheal         : '0',
			kills             : '2',
			deaths            : '1',
			threatstr         : '+(0)0/-(0)0',
			threatdelta       : '0',
			NAME3             : 'Dra',
			NAME4             : 'Drag',
			NAME5             : 'Drago',
			NAME6             : 'Dragoo',
			NAME7             : 'Dragoon',
			NAME8             : 'Dragoon',
			NAME9             : 'Dragoon O',
			NAME10            : 'Dragoon On',
			NAME11            : 'Dragoon One',
			NAME12            : 'Dragoon One',
			NAME13            : 'Dragoon One',
			NAME14            : 'Dragoon One',
			NAME15            : 'Dragoon One',
			Last10DPS         : '0',
			Last30DPS         : '168',
			Last60DPS         : '353',
			Job               : 'Drg',
			ParryPct          : '55%',
			BlockPct          : '0%',
			IncToHit          : '100.00',
			OverHealPct       : '0%',
			DirectHitPct      : '0%',
			DirectHitCount    : '0',
			CritDirectHitCount: '0'
		},
		'B.M.': {
			n                 : '\n',
			t                 : '\t',
			name              : 'B.M.',
			duration          : '13:06',
			DURATION          : '786',
			damage            : '329454',
			'damage-m'        : '0.33',
			'DAMAGE-k'        : '329',
			'DAMAGE-m'        : '0',
			'damage%'         : '17%',
			dps               : '419.15',
			DPS               : '419',
			'DPS-k'           : '0',
			encdps            : '417.56',
			ENCDPS            : '418',
			'ENCDPS-k'        : '0',
			hits              : '405',
			crithits          : '57',
			'crithit%'        : '14%',
			misses            : '0',
			hitfailed         : '0',
			swings            : '405',
			tohit             : '100.00',
			TOHIT             : '100',
			maxhit            : '秽浊-3606',
			MAXHIT            : '3606',
			healed            : '0',
			'healed%'         : '0%',
			enchps            : '0.00',
			ENCHPS            : '0',
			'ENCHPS-k'        : '0',
			critheals         : '0',
			'critheal%'       : '0%',
			heals             : '0',
			cures             : '0',
			maxheal           : '',
			MAXHEAL           : '',
			maxhealward       : '',
			MAXHEALWARD       : '',
			damagetaken       : '87977',
			healstaken        : '139709',
			powerdrain        : '0',
			powerheal         : '4820',
			kills             : '0',
			deaths            : '0',
			threatstr         : '+(0)0/-(0)0',
			threatdelta       : '0',
			NAME3             : 'Bla',
			NAME4             : 'Blac',
			NAME5             : 'Black',
			NAME6             : 'BlackM',
			NAME7             : 'BlackMa',
			NAME8             : 'BlackMag',
			NAME9             : 'BlackMage',
			NAME10            : 'BlackMage',
			NAME11            : 'BlackMage O',
			NAME12            : 'BlackMage On',
			NAME13            : 'BlackMage One',
			NAME14            : 'BlackMage One',
			NAME15            : 'BlackMage One',
			Last10DPS         : '0',
			Last30DPS         : '206',
			Last60DPS         : '293',
			Job               : 'Blm',
			ParryPct          : '11%',
			BlockPct          : '0%',
			IncToHit          : '100.00',
			OverHealPct       : '0%',
			DirectHitPct      : '0%',
			DirectHitCount    : '0',
			CritDirectHitCount: '0'
		},
		'S.U.'  : {
			n                 : '\n',
			t                 : '\t',
			name              : 'S.U.',
			duration          : '13:21',
			DURATION          : '801',
			damage            : '67373',
			'damage-m'        : '0.07',
			'DAMAGE-k'        : '67',
			'DAMAGE-m'        : '0',
			'damage%'         : '3%',
			dps               : '84.11',
			DPS               : '84',
			'DPS-k'           : '0',
			encdps            : '85.39',
			ENCDPS            : '85',
			'ENCDPS-k'        : '0',
			hits              : '373',
			crithits          : '95',
			'crithit%'        : '25%',
			misses            : '7',
			hitfailed         : '0',
			swings            : '380',
			tohit             : '98.16',
			TOHIT             : '98',
			maxhit            : '魔炎法-1048',
			MAXHIT            : '1048',
			healed            : '836767',
			'healed%'         : '46%',
			enchps            : '1060.54',
			ENCHPS            : '1061',
			'ENCHPS-k'        : '1',
			critheals         : '220',
			'critheal%'       : '23%',
			heals             : '968',
			cures             : '0',
			maxheal           : '日光的拥抱-4222',
			MAXHEAL           : '4222',
			maxhealward       : '日光的拥抱-4222',
			MAXHEALWARD       : '4222',
			damagetaken       : '70693',
			healstaken        : '244571',
			powerdrain        : '0',
			powerheal         : '12817',
			kills             : '0',
			deaths            : '0',
			threatstr         : '+(0)0/-(0)0',
			threatdelta       : '0',
			NAME3             : 'Sch',
			NAME4             : 'Scho',
			NAME5             : 'Schol',
			NAME6             : 'Schola',
			NAME7             : 'Scholar',
			NAME8             : 'Scholar',
			NAME9             : 'Scholar O',
			NAME10            : 'Scholar On',
			NAME11            : 'Scholar One',
			NAME12            : 'Scholar One',
			NAME13            : 'Scholar One',
			NAME14            : 'Scholar One',
			NAME15            : 'Scholar One',
			Last10DPS         : '0',
			Last30DPS         : '154',
			Last60DPS         : '134',
			Job               : 'Sch',
			ParryPct          : '0%',
			BlockPct          : '0%',
			IncToHit          : '100.00',
			OverHealPct       : '42%',
			DirectHitPct      : '0%',
			DirectHitCount    : '0',
			CritDirectHitCount: '0'
		},
		'Limit Break'  : {
			n                 : '\n',
			t                 : '\t',
			name              : 'Limit Break',
			duration          : '03:36',
			DURATION          : '216',
			damage            : '34210',
			'damage-m'        : '0.03',
			'DAMAGE-k'        : '34',
			'DAMAGE-m'        : '0',
			'damage%'         : '1%',
			dps               : '158.38',
			DPS               : '158',
			'DPS-k'           : '0',
			encdps            : '43.36',
			ENCDPS            : '43',
			'ENCDPS-k'        : '0',
			hits              : '1',
			crithits          : '0',
			'crithit%'        : '0%',
			misses            : '0',
			hitfailed         : '0',
			swings            : '1',
			tohit             : '100.00',
			TOHIT             : '100',
			maxhit            : '星体风暴-34210',
			MAXHIT            : '34210',
			healed            : '0',
			'healed%'         : '0%',
			enchps            : '0.00',
			ENCHPS            : '0',
			'ENCHPS-k'        : '0',
			critheals         : '0',
			'critheal%'       : '0%',
			heals             : '0',
			cures             : '0',
			maxheal           : '',
			MAXHEAL           : '',
			maxhealward       : '',
			MAXHEALWARD       : '',
			damagetaken       : '0',
			healstaken        : '0',
			powerdrain        : '0',
			powerheal         : '0',
			kills             : '0',
			deaths            : '0',
			threatstr         : '+(0)0/-(0)0',
			threatdelta       : '0',
			NAME3             : 'Lim',
			NAME4             : 'Limi',
			NAME5             : 'Limit',
			NAME6             : 'Limit',
			NAME7             : 'Limit B',
			NAME8             : 'Limit Br',
			NAME9             : 'Limit Bre',
			NAME10            : 'Limit Brea',
			NAME11            : 'Limit Break',
			NAME12            : 'Limit Break',
			NAME13            : 'Limit Break',
			NAME14            : 'Limit Break',
			NAME15            : 'Limit Break',
			Last10DPS         : '0',
			Last30DPS         : '0',
			Last60DPS         : '0',
			Job               : '',
			ParryPct          : '0%',
			BlockPct          : '0%',
			IncToHit          : '---',
			OverHealPct       : '0%',
			DirectHitPct      : '0%',
			DirectHitCount    : '0',
			CritDirectHitCount: '0'
		}
	},
	isActive : true
};

export default () => {

	setTimeout(function () {
		var event = new CustomEvent('onOverlayDataUpdate', {detail: ActData});
		document.dispatchEvent(event);
	}, 500);

	setInterval(() => {
		const myDate   = new Date();
		const duration = myDate.getMinutes() + ':' + myDate.getSeconds();

		let allEncdps = 0, allEnchps = 0;

		const {Combatant, Encounter} = ActData;

		_.forEach(Combatant, item => {
			item.encdps = parseInt(item.encdps)
			item.enchps = parseInt(item.enchps)
			item.damagetaken = parseInt(item.damagetaken)
			const encdps = parseInt(item.encdps + item.encdps * (Math.random() - 0.5)*0.1).toFixed(2);
			const enchps = parseInt(item.enchps + item.enchps * (Math.random() - 0.5)*0.1).toFixed(2);
			const damagetaken = parseInt(item.damagetaken + item.damagetaken * Math.random()*0.01).toFixed(2);

			item.encdps = encdps;
			item.enchps = enchps;
			item.damagetaken = damagetaken;
			allEncdps   = allEncdps + encdps;
			allEnchps   = allEnchps + enchps;
		});

		Encounter.duration = duration;
		Encounter.DURATION = (parseInt(Encounter.DURATION) + 1).toString();
		Encounter.encdps   = parseInt(allEncdps);
		Encounter.enchps   = parseInt(allEnchps);
		if (time == 10){
			Encounter.title   = '测试';
			time = 0
		} else {
			Encounter.title   = 'Encounter';
		}

		const event = new CustomEvent('onOverlayDataUpdate', {detail: ActData});
		document.dispatchEvent(event);
		time++
	}, 1000);
}