class VirtualScroller {
  constructor({ el, scrollerClientHeight, rowHeight, buffer, pageSize }) {
    this.scroller = document.querySelector(el);
    this.scrollerClientHeight = scrollerClientHeight;
    this.scroller.style.height = scrollerClientHeight + "px";
    this.rowHeight = rowHeight;
    this.buffer = buffer;
    this.pageSize = pageSize;

    this.clientItemCount = Math.floor(scrollerClientHeight / rowHeight);

    this.totalItemCount = this.clientItemCount + buffer;

    let contentBox = document.createElement("div");
    contentBox.classList.add("content-box");
    this.contentBox = contentBox;

    this.scroller.append(this.contentBox);

    this.firstVisibleItemIndex = 0;
    this.hiddenItemCount = 0;
    this.bufferCount = 0;
    this.data = [];
  }

  loadData(pageSize) {
    for (let index = 0; index < pageSize; index++) {
      this.data.push("this is number " + (this.data.length + 1));
    }
    if (this.firstVisibleItemIndex + this.totalItemCount >= this.data.length) {
      this.loadData(this.pageSize);
    }
    this.updatePadding();
  }

  loadVisibleItem() {
    for (
      let index = this.firstVisibleItemIndex;
      index < this.firstVisibleItemIndex + this.totalItemCount;
      index++
    ) {
      if (this.data[index]) {
        this.contentBox.append(this.renderItem(this.data[index]));
      }
    }
  }

  updateData(scrollTop) {
    this.hiddenItemCount = Math.floor(scrollTop / this.rowHeight);
  }

  updatePadding() {
    this.contentBox.style.paddingTop =
      this.firstVisibleItemIndex * this.rowHeight + "px";
    this.contentBox.style.paddingBottom =
      (this.data.length - (this.firstVisibleItemIndex + this.totalItemCount)) *
        this.rowHeight +
      "px";
  }

  renderData(data) {
    let content = document.createElement("div");
    content.textContent = data;
    content.classList.add("content");
    return content;
  }
  renderItem(data) {
    // console.log(data)
    let item = this.renderData(data);
    item.classList.add("item");
    item.style.height = this.rowHeight + "px";
    return item;
  }

  handlerScroll = (e) => {
    let { scrollTop, clientHeight, scrollHeight } = e.target;
    this.updateData(scrollTop);
    this.contentBoxDown();
    this.contentBoxUp();
    if (scrollHeight - (scrollTop + clientHeight) < this.rowHeight * 2) {
      this.loadData(this.pageSize);
    }

    this.updatePadding();
  };

  contentBoxUp() {
    for (
      let index = this.firstVisibleItemIndex;
      index > this.hiddenItemCount;
      index--
    ) {
      this.firstVisibleItemIndex--;
      let row = this.contentBox.lastElementChild;
      if (row) {
        row.remove();
      }
      let data = this.data[this.firstVisibleItemIndex];
      if (data) {
        this.contentBox.prepend(this.renderItem(data));
      }
    }
    this.updatePadding();
  }
  contentBoxDown() {
    for (
      let index = this.firstVisibleItemIndex;
      index < this.hiddenItemCount;
      index++
    ) {
      let row = this.contentBox.children[0];
      if (row) {
        row.remove();
      }

      let data = this.data[this.firstVisibleItemIndex + this.totalItemCount];
      if (data) {
        if (this.bufferCount > 0) {
          while (this.bufferCount) {
            let bufferData =
              this.data[
                this.firstVisibleItemIndex +
                  this.totalItemCount -
                  this.bufferCount
              ];
            this.contentBox.append(this.renderItem(bufferData));
            this.bufferCount--;
          }
        }
        this.contentBox.append(this.renderItem(data));
      } else {
        this.bufferCount++;
      }
      this.firstVisibleItemIndex++;
    }
    this.updatePadding();
    // this.checkData()
  }

  init() {
    this.loadData();
    this.loadVisibleItem();
    this.updatePadding();
    this.scroller.addEventListener("scroll", this.handlerScroll);
  }
}
