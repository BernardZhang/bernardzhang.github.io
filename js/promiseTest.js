var p1 = new Promise(function (resolve, reject) {
	console.log('promise');
	setTimeout(function () {
		resolve({ msg: 'hello' });
	}, 2000);
}).then(function (val) {
	console.log('resolve', val);
	return val;
}).catch(function (data) {
	console.log('catch', data);
});

var p2 = new Promise(function (resolve, reject) {
	setTimeout(function () {
		resolve({ count: 3 });
	}, 3000);
}).then(function (data) {									
});



p1.then(function (data) {
	console.log('first then', data);
	data.count = 2;
	new Promise(function (resolve) {
		setTimeout(function () {
			resolve(data);
		}, 1000);
	});
	setTimeout(function () {
		p1.resolve(data);
		return data.count = 2;
	}, 2000);
}).then(function (data) {
	console.log('second then', data);
});