// class Cookie {
// 	constructor(data) {
// 		this.cookies = this.formatData(data)
// 	}
// 	formatData(data) {
// 		const obj = {};
// 		data.split(';').forEach(cookie => {
// 			const temp = cookie.split('=');
// 			obj[temp[0]] = temp[1]
// 		};
// 		return obj
// 	}
// 	set(key, value) {
// 		if (this.cookies.hasOwnProperty(key)) {}
// 	}
// }
const obj = {}
document.cookie.split(';').forEach(c => (obj[c.split('=')[0]] = c.split('=')[1]));
const cookie = new Proxy(obj, {
	get(target, key, self) {
		return target[key]
	},
	set(target, key, value, self) {
		target[key] = value
	}
})