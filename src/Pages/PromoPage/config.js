export const attrButton = {
	'phone_1': {
		up: 'input_phone',
		down: 'phone_4',
		right: 'phone_2'
	},
	'phone_2': {
		up: 'input_phone',
		down: 'phone_5',
		left: 'phone_1',
		right: 'phone_3'
	},
	'phone_3': {
		up: 'input_phone',
		down: 'phone_6',
		left: 'phone_2',
		right: 'exit'
	},
	'phone_4': {
		up: 'phone_1',
		down: 'phone_7',
		right: 'phone_5'
	},
	'phone_5': {
		up: 'phone_2',
		down: 'phone_8',
		left: 'phone_4',
		right: 'phone_6'
	},
	'phone_6': {
		up: 'phone_3',
		down: 'phone_9',
		left: 'phone_5',
		right: 'exit'
	},
	'phone_7': {
		up: 'phone_4',
		down: 'phone_delete',
		right: 'phone_8'
	},
	'phone_8': {
		up: 'phone_5',
		down: 'phone_delete',
		left: 'phone_7',
		right: 'phone_9'
	},
	'phone_9': {
		up: 'phone_6',
		down: 'phone_0',
		left: 'phone_8',
		right: 'exit'
	},
	'phone_delete': {
		up: 'phone_7',
		down: 'checkbox',
		right: 'phone_0'
	},
	'phone_0': {
		up: 'phone_9',
		down: 'checkbox',
		left: 'phone_delete',
		right: 'exit'
	},
	'checkbox': {
		up: 'phone_delete',
		down: 'phone_submit',
		right: 'exit'
	},
	'phone_submit': {
		up: 'checkbox',
		left: 'phone_delete',
		right: 'exit'
	},
	'exit': {
		left: 'input_phone'
	},
	'input_phone': {
		down: 'phone_1',
		right: 'exit'
	}


}