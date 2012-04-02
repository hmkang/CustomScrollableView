var dotColor = {
	active: '#999',
	inactive: '#555'
};

var activeViewIndex = 0;
function changeActive(view, length, newIndex){
	if(view.children && view.children.length>0){
		var children = view.getChildren();
		children[activeViewIndex].setBorderColor(dotColor.inactive)
		children[newIndex].setBorderColor(dotColor.active);
		activeViewIndex = newIndex;
	}else{
		for(var i=0; i<length; i++){
			var borderColor = i==0 ? dotColor.active : dotColor.inactive;
			var dot = Ti.UI.createView({
				left: 4,
				right: 4,
				width: 8,
				height: 8,
				borderWidth: 5,
				borderRadius: 5,
				borderColor: borderColor	
			});
			view.add(dot);
		}
	}
}

function createScrollableView(o) {
	o = o || {};
	o.showPagingControl = false; // hide default paging control 
	o.views = o.views || [];
	o.top = o.top || 0;
	o.bottom = o.bottom || 0;

	// Create paging control
	var pagingControlView = Ti.UI.createView({
		layout: "horizontal",
		height: 20,
		width: "auto"
	});
	
	// Set default paging control position	
	var pos = o.pagingControlPosition;
	pos = pos=='top' || pos=='bottom' ? pos : 'bottom';  
	o.pagingControlPosition = pos;
	
	// Determin position for paging control
	pagingControlView[pos] = o[pos];
	o[pos] += pagingControlView.height + (pos=='bottom' ? 10 : 0);
	
	// Set initial paging control
	changeActive(pagingControlView, o.views.length, 0);
	
	// Create scrollable view
	var view = Ti.UI.createScrollableView(o);
	view.addEventListener('scroll', function(e){
		changeActive(pagingControlView, o.views.length, e.currentPage);
	});
	
	// Create container including scrollable view and page control
	var container = Ti.UI.createView();
	container.add(view);
	container.add(pagingControlView);
	
	return container;
}

exports.createScrollableView = createScrollableView;