let vs = new VirtualScroller({
  el: "#virtual-scroller",
  scrollerClientHeight: 500,
  rowHeight: 40,
  buffer: 10,
  pageSize: 40,
});

vs.init();
