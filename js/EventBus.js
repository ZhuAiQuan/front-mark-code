class EventBus {
	events = {}
	constructor() {}
	on(event, cb){
		if (this.events.hasOwnProperty(event) && Array.isArray(this.events[event])) this.events[event].push(cb)
		else this.events[event] = [cb]
	}
	emit(event, data) {
		if (this.events.hasOwnProperty(event)) {
			this.events[event].forEach(cb => cb(data))
		} else {
			alert('暂无此事件订阅，请先订阅该事件！')
		}
	}
	off(event) {
		if(this.events.hasOwnProperty(event)) delete this.events[event]
	}
	once(event, cb) {
		const that = this;
		function handler(arg) {
			
			cb(arg)
			// cb.call(that, arg)
			that.off(event)
			
		}
		this.on(event, handler)
	}
	
}