let vs = new VirtualScroller({
  el: "#virtual-scroller",
  scrollerHeight: 500,
  rowHeight: 40,
  pageSize: 40,
  buffer: 20,
});

vs.init();
