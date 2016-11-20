(function () {
    var app, deps;

    deps = ['treeGrid'];

    app = angular.module('treeGridTest', deps);

    app.controller('treeGridController', function ($scope, $timeout, $http, $log) {
        var tree;

        $scope.tree_data = [
            {
                Name: "USA", Area: 9826675, Population: 318212000, TimeZone: "UTC -5 to -10",
                children: [
                    {
                        Name: "California", Area: 423970, Population: 38340000, TimeZone: "Pacific Time",
                        children: [
                            { Name: "San Francisco", Area: 231, Population: 837442, TimeZone: "PST" },
                            { Name: "Los Angeles", Area: 503, Population: 3904657, TimeZone: "PST" }
                        ]
                    },
                    {
                        Name: "Illinois", Area: 57914, Population: 12882135, TimeZone: "Central Time Zone",
                        children: [
                            {
                                Name: "Chicago", Area: 234, Population: 2695598, TimeZone: "CST",
                                children: [
                                    {
                                        Name: "Chicago", Area: 234, Population: 2695598, TimeZone: "CST",
                                        children: [
                                            {
                                                Name: "Chicago", Area: 234, Population: 2695598, TimeZone: "CST",
                                                children: [
                                                    {
                                                        Name: "Chicago", Area: 234, Population: 2695598, TimeZone: "CST",
                                                        children: [
                                                            {
                                                                Name: "Chicago", Area: 234, Population: 2695598, TimeZone: "CST",
                                                                children: [
                                                                    { Name: "Chicago", Area: 234, Population: 2695598, TimeZone: "CST" }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            { Name: "Texas", Area: 268581, Population: 26448193, TimeZone: "Mountain" }
        ];

        $scope.my_tree = tree = {};
        $scope.expanding_property = {
            field: "Name",
            displayName: "Demographic Name",
            sortable: true,
            filterable: true,
            cellTemplate: "<i>{{row.branch[expandingProperty.field]}}</i>"
        };
        $scope.col_defs = [
            {
                field: "Description",
                sortable: true,
                sortingType: "string"
            },
            {
                field: "Area",
                sortable: true,
                sortingType: "number",
                filterable: true
            },
            {
                field: "Population",
                sortable: true,
                sortingType: "number",
                filterable: true
            },
            {
                field: "TimeZone",
                displayName: "Time Zone",
                cellTemplate: "<strong>{{row.branch[col.field]}}</strong>"
            }
        ];
        $scope.my_tree_handler = function (branch) {
            console.log('you clicked on', branch)
        }

        function getTree(data, primaryIdName, parentIdName) {
            if (!data || data.length == 0 || !primaryIdName || !parentIdName)
                return [];

            var tree = [],
                rootIds = [],
                item = data[0],
                primaryKey = item[primaryIdName],
                treeObjs = {},
                parentId,
                parent,
                len = data.length,
                i = 0;

            while (i < len) {
                item = data[i++];
                primaryKey = item[primaryIdName];
                treeObjs[primaryKey] = item;
                parentId = item[parentIdName];

                if (parentId) {
                    parent = treeObjs[parentId];

                    if (parent.children) {
                        parent.children.push(item);
                    } else {
                        parent.children = [item];
                    }
                } else {
                    rootIds.push(primaryKey);
                }
            }

            for (var i = 0; i < rootIds.length; i++) {
                tree.push(treeObjs[rootIds[i]]);
            }
            ;

            return tree;
        }

    });

}).call(this);
