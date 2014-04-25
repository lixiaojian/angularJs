define(['modules/mainApp'], function (mainApp) {

    mainApp .controller('headerCtr', ['$scope', function ($scope) {
            $scope.templates = { 'header': 'javaScripts/templates/header.html'};
            $scope.tasks = [
                {url: 'http://www.baidu.com', name: '第一个会话', count: '65%'},
                {url: 'http://www.baidu.com', name: '第二个会话', count: '20%'},
                {url: 'http://www.baidu.com', name: '第三个会话', count: '80%'},
                {url: 'http://www.baidu.com', name: '第四个会话', count: '43%'}
            ];
            $scope.allTasksUrl = "http://www.goole.com";
            $scope.taskShow = $scope.tasks.length > 0 ? false : true;
            $scope.notifications = [
                {url: 'http:www.baidu.com', title: 'New Comments', count: 12, iconCls: 'comment'},
                {url: 'http:www.baidu.com', title: 'Member Change', iconCls: 'user'},
                {url: 'http:www.baidu.com', title: 'New Orders', count: 8, iconCls: 'shopping-cart'}
            ];
            $scope.allNotificationsUrl = "http://www.goole.com";
            $scope.notificationShow = $scope.notifications.length > 0 ? false : true;

            $scope.messages = [
                {url: 'http:www.baidu.com', headUrl: 'images/avatars/avatar.png', content: '你好欢迎你哦', name: '张三', createDate: '五分钟以前'},
                {url: 'http:www.baidu.com', headUrl: 'images/avatars/avatar1.png', content: '很高兴见到你', name: '李四', createDate: '刚刚'},
                {url: 'http:www.baidu.com', headUrl: 'images/avatars/avatar3.png', content: '你怎么不回话呢', name: '王五', createDate: '一小时前'}
            ];
            $scope.allMessagesUrl = "http://www.goole.com";
            $scope.messagesShow = $scope.messages.length > 0 ? false : true;


            $scope.currUserName = "刘刚";
            $scope.userMenus = [
                {url: 'http://www.baidu.com', name: '设置', iconCls: 'cog'},
                {url: 'http://www.baidu.com', name: '个人资料', iconCls: 'user'},
                {url: 'http://www.baidu.com', name: '登出', iconCls: 'off'}
            ];
        }])
        .controller('leftCtr', ['$scope', function ($scope) {
            $scope.templates = { 'left': 'javaScripts/templates/left.html'};
            $scope.shortcuts = [
                {style: 'success', iconCls: 'signal'},
                {style: 'info', iconCls: 'pencil'},
                {style: 'warning', iconCls: 'list-alt'},
                {style: 'danger', iconCls: 'certificate'}
            ];

            $scope.leftMenus = [
                {name: '仪盘表', iconCls: 'dashboard', url: '#/dashboard', hasChildren: false},
                {name: '文字排版', iconCls: 'text-width', url: '#/typography', hasChildren: false},
                {name: 'UI组件', iconCls: 'film', url: '333', hasChildren: true, children: [
                    {name: '组件', iconCls: 'chevron-right', url: '#/elements', hasChildren: false},
                    {name: '按钮&图标', iconCls: 'chevron-right', url: '#/buttonsIcons', hasChildren: false},
                    {name: '树菜单', iconCls: 'chevron-right', url: '#/treeView', hasChildren: false},
                    {name: 'JQuery UI', iconCls: 'chevron-right', url: '#/jQueryUI', hasChildren: false},
                    {name: '可拖拽列表', iconCls: 'chevron-right', url: '#/nestableLists', hasChildren: false},
                    {name: '三级菜单', iconCls: 'chevron-right', url: '999', hasChildren: true, children: [
                        {name: '第一级', iconCls: 'leaf', url: '#', hasChildren: false},
                        {name: '第四级', iconCls: 'pencil', url: '', hasChildren: true, children: [
                            {name: '添加产品', iconCls: 'plus', url: '#', hasChildren: false},
                            {name: '查看产品', iconCls: 'eye-open', url: '#', hasChildren: false}
                        ]}
                    ]}
                ]},
                {name: '表格', iconCls: 'list', url: 'ddd', hasChildren: true, children: [
                    {name: '简单&动态', iconCls: 'chevron-right', url: '#/tables', hasChildren: false},
                    {name: 'jqGrid plugin', iconCls: 'chevron-right', url: '#/jqGrid', hasChildren: false}
                ]},
                {name: '表单', iconCls: 'edit', url: 'ggg', hasChildren: true, children: [
                    {name: '表单组件', iconCls: 'chevron-right', url: '#/formElements', hasChildren: false},
                    {name: '向导提示&验证', iconCls: 'chevron-right', url: '#/formWizard', hasChildren: false},
                    {name: '编辑器', iconCls: 'chevron-right', url: '#/wysiwyg', hasChildren: false},
                    {name: '文件上传', iconCls: 'chevron-right', url: '#/dropZone', hasChildren: false}
                ]},
                {name: '插件', iconCls: 'list-alt', url: '#/widgets', hasChildren: false},
                {name: '日历', iconCls: 'calendar', url: '#/calendar', hasChildren: false, hasMark: true, markTitle: '2&nbsp;Important&nbsp;Events', markIcon: 'warning-sign'},
                {name: '相册', iconCls: 'picture', url: '#/gallery', hasChildren: false},
                {name: '更多页面', iconCls: 'tag', url: 'ooo', hasChildren: true, children: [
                    {name: '用户信息', iconCls: 'chevron-right', url: '#/profile', hasChildren: false},
                    {name: '收件箱', iconCls: 'chevron-right', url: '#/inbox', hasChildren: false},
                    {name: '售价单', iconCls: 'chevron-right', url: '#/pricing', hasChildren: false},
                    {name: '购物车', iconCls: 'chevron-right', url: '#/invoice', hasChildren: false},
                    {name: '时间轴', iconCls: 'chevron-right', url: '#/timeLine', hasChildren: false},
                    {name: '登录&注册', iconCls: 'chevron-right', url: 'login.html', hasChildren: false}
                ]},
                {name: '其他页面', iconCls: 'book', url: 'vvv', hasChildren: true, hasCount: true, count: 5, children: [
                    {name: '帮助', iconCls: 'chevron-right', url: '#/faq', hasChildren: false},
                    {name: '404错误页面', iconCls: 'chevron-right', url: '#/error404', hasChildren: false},
                    {name: '500错误页面', iconCls: 'chevron-right', url: '#/error500', hasChildren: false},
                    {name: '网格', iconCls: 'chevron-right', url: '#/grid', hasChildren: false},
                    {name: '空白页面', iconCls: 'chevron-right', url: '#', hasChildren: false}
                ]}
            ];
            var activeMenus = [];
            $scope.addActive = function (menu, firstLeaveMenu, secondLeaveMenu, thirdMenu) {
                clearActive();
                if (firstLeaveMenu) {
                    firstLeaveMenu.isActive = true;
                    activeMenus.push(firstLeaveMenu);
                }
                if (secondLeaveMenu) {
                    secondLeaveMenu.isActive = true;
                    activeMenus.push(secondLeaveMenu);
                }
                if (thirdMenu) {
                    thirdMenu.isActive = true;
                    activeMenus.push(thirdMenu);
                }
                if (!menu.hasChildren || menu.children.length <= 0) {
                    menu.isActive = true;
                } else {
                    menu.isActive = true;
                }
                activeMenus.push(menu);
            }
            function clearActive() {
                for (var i = 0; i < activeMenus.length; i++) {
                    activeMenus[i].isActive = false;
                }
                activeMenus = [];
            };
        }])
});