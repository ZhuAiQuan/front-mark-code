class QueryParmas {
	constructor(params) {
		this.data = this.format(params)
	}
	format(param) {
		const obj = {};
		param.split('&').forEach(item => {
			const temp = item.split('=');
			obj[temp[0]] = temp[1]
		});
		return obj
	}
	has(key) {
		return this.data.hasOwnProperty(key)
	}
	get(key) {
		if (this.has(key)) {
			return this.data[key]
		}
	}
	toString() {
		let temp = Object.entries(this.data);
		temp = temp.map(item => item.join('='));
		return temp.join('&')
	}
	delete(key) {
		if (this.has(key)) delete this.data[key]
	}
	set(key, value) {
		this.data[key] = value
	}
}