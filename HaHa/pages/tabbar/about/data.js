const basedata = {
	imageSrc:'',
	buttonText:'',
	title1:'',
	title2:'',
	tips1:'',
	tips2:'',
	buttonColor: 'blue'
}

class collectdata{
	constructor(tips1) {
	    this.tips1 = tips1;
	}
}

class collectList{
	constructor(tips1,url) {
	    this.rdata = new collectdata(tips1);
		this.url = url;
	}
}

let list = [
	new collectList('列表',''),
	new collectList('列表',''),
	new collectList('列表','')
]

export {
	list
}