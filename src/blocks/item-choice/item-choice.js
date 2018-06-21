window.onload = function() {
  // Horizontal
  baron({
    root: '#item-choice__1',
    scroller: '#item-choice__1 .item-choice__scroller',
    bar: '#item-choice__1 .item-choice__bar',
    scrollingCls: '_scrolling',
    draggingCls: '_dragging',
    direction: 'h'
  })

  baron({
    root: '#item-choice__2',
    scroller: '#item-choice__2 .item-choice__scroller',
    bar: '#item-choice__2 .item-choice__bar',
    scrollingCls: '_scrolling',
    draggingCls: '_dragging',
    direction: 'h'
  })
}
