import mergeList from '../loadList/mergeList';

describe('Test mergeList', function(){
	let currentPage = 1,
		list = [{
			title:'测试用例001'
		},{
			title:'测试用例002'
		},{
			title:'测试用例003'
		}],
		list2 = [{
			title:'已有测试用例001'
		},{
			title:'已有测试用例002'
		},{
			title:'已有测试用例003'
		}];
	test('第一页数据', function(){		
		expect(mergeList(currentPage, list, list2)).toEqual(list);
	});
	test('第二页数据', function(){
		currentPage = 2;
		expect(mergeList(currentPage, list, list2)).toEqual(list2.concat(list));
	});
	test('第一个list = [], currentPage = 1', function(){
		currentPage = 1;
		list = [];
		expect(mergeList(currentPage, list, list2)).toEqual(list);
	});
	test('第一个list = [], currentPage = 2', function(){
		currentPage = 2;
		list = [];
		expect(mergeList(currentPage, list, list2)).toEqual(list2);
	});
});
