
//增删改查功能 

//导入data.json
const repos = require('./data');

const fs = require('fs');

module.exports = { 

	//数据持久化
	store(){ 
		//传入的数据需要进行JSON字符串转换
		fs.writeFileSync(__dirname + '/data.json',JSON.stringify(repos));
	},

	//获取单条数据 
	get(index){ 
		return repos[index];
	},
	//获取所有数据
	get list(){ 
		return repos;
	},

	//添加数据 
	add(article){ 
		repos.push(article);
		this.store();
	},

	//删除数据
	del(index){ 
		repos.splice(index,1);
		this.store();
	},

	//修改数据 
	update(index,newArticle){ 
		repos.splice(index,1,newArticle);
		this.store();
	}

};









