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
		this.imageSrc = require('../../../static/image/haha.png');
	}
}

class collectList{
	constructor(tips1,url) {
	    this.rdata = new collectdata(tips1);
		this.url = url;
	}
}

let list = [
	new collectList('卡片列表','./whh-card-list/whh-card-list'),
	new collectList('图片裁剪上传','./whh-crop-picture-upload/cropPictureUpload'),
	new collectList('宫格菜单','./whh-gridbox/whh-gridbox')
]

export {
	list
}