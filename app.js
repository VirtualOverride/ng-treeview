(function(){
	'use strict';

	var treeViewController =  (function(){
		var _tree_data;

		function treeViewController(){
			_tree_data =  [
		        { 
		        	"roleName" : "User", "roleId" : "role1", "children" : [
						{ "roleName" : "subUser1", "roleId" : "role11", "children" : [] },
						{ "roleName" : "subUser2", "roleId" : "role12", "children" : [
							{ "roleName" : "subUser2-1", "roleId" : "role121", "children" : [
								{ "roleName" : "subUser2-1-1", "roleId" : "role1211", "children" : [] },
								{ "roleName" : "subUser2-1-2", "roleId" : "role1212", "children" : [] }
							]}
						]}
		        	]
		    	},
		        { "roleName" : "Admin", "roleId" : "role2", "children" : [] },
		        { "roleName" : "Guest", "roleId" : "role3", "children" : [] }
		    ];
		}

		Object.defineProperty(treeViewController.prototype, 'tree_data', {
			get: function(){
				return _tree_data;
			}
		});

		return treeViewController;
	})();


	angular
		.module('app', ['angularTreeview'])
		.controller('TreeviewController', treeViewController);

})();