class Observerd {
	constructor(name) {
		this.name = name;
		this.state = '走路';
		this.observers = []
	}
	setState(state) {
		this.state = state;
		// 通知观察者
		this.notifyAllObservers()
	}
	setObserver(observe) {
		this.observers.push(observe)
	}
	notifyAllObservers() {
		this.observers.forEach(observe => {
			observe.update(this.name, this.state)
		})
	}
	private test(){
		console.log(123)
	}
}

class Observer {
	constructor() {
		// this.observe = observe;
		// this.observe.attach(this);
	}
	update(name, state) {
		
		console.log(`${name}正在${state}`)
	}
}
