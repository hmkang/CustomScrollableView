var Custom = require('./ui/CustomScrollableView');

var win = Ti.UI.createWindow({
	title: 'Custom Scrollable View',
	backgroundColor: '#000'
});

var view1 = Ti.UI.createView({
	backgroundColor: 'blue'
});

var view2 = Ti.UI.createView({
	backgroundColor: 'red'
});

var view3 = Ti.UI.createView({
	backgroundColor: 'yellow'
});

var view = Custom.createScrollableView({
	views: [view1, view2, view3],
	top: 10,
	left: 10,
	bottom: 10,
	right: 10,
	borderWidth: 5,
	borderRadius: 10,
	borderColor: '#aaa',
	showPagingControl: true,
	pagingControlPosition: 'bottom'
});

win.add(view);
win.open();
