let data = [
	{
		"projectId": 1,
		"projectName": "Новомосковский",
		"title": "Корпус 1",
		"street": "Краснолесья",
		"number": "71А",
		"facing": "Чистовая",
		"material": "Монолит",
		"buildingState": "BUILT",
		"developmentStartQuarter": {
			"year": 2015,
			"quarter": 1
		},
		"developmentEndQuarter": {
			"year": 2015,
			"quarter": 1
		},
		"salesStart": {
			"month": "02",
			"year": "2018"
		},
		"salesEnd": {
			"month": "02",
			"year": "2018",
			"non": {
			    "one": "2",
			    "two": "1"
			}
		},
		"id": 10,
		"type": "APARTMENT"
	}];
let container = document.getElementById('container'); //Получение блока для списка

function pullList(container, tree){
	container.innerHTML = createList(tree);		//Добавление результата в разметку
}

function createList(tree){						//Функция создания содержимого
	let li = '';
	let ul;
	for(let key in tree){
		if(typeof(tree[key]) == 'object'){
			li += '<li class=' + key + '>' + key + createList(tree[key]) + '</li>';				//Запись и рекурсивный вызов при условии, что значение = объекту
		} else {
			li += '<li class=' + key + '>' + tree[key] + '</li>'							//Запись содержимого
		}
	}
	ul = '<ul>' + li + '</ul>';
	return ul || '';
}
pullList(container, data[0]);			//Вызов функции записи списка