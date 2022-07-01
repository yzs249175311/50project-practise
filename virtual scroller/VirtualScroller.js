class VirtualScroller {
    constructor({ el, scrollerHeight, rowHeight, pageSize, buffer }) {
        this.scroller = document.querySelector(el)
        this.scroller.style.height = scrollerHeight + "px";
        Object.assign(this, { scrollerHeight, rowHeight, pageSize, buffer })

        this.pageItemsCount = this.scrollerHeight / this.rowHeight
        this.data = []
        //init content-box
        this.contentBox = document.createElement("div");
        this.contentBox.classList.add("content-box")
        this.scroller.append(this.contentBox)
    }

    #scrollTop = 0;
    #hiddenTopItemIndex = 0

    loadMore(pageSize) {
        let data = []
        for (let index = 0; index < pageSize; index++) {
            data.push(`i am number ${this.data.length + index}`)
        }
        return data;
    }


    toggleTopItems = (direction) => {
        const { scrollTop } = this.scroller
        const startIndex = Math.floor(scrollTop / this.rowHeight)
        if (direction === 1) {
            for (let index = this.#hiddenTopItemIndex; index < startIndex; index++) {
                const row = this.contentBox.children
                if (row[0]) {
                    row[0].remove()
                    this.#hiddenTopItemIndex++;
                }
            }
        }
        if (direction === -1) {
            for (let index = this.#hiddenTopItemIndex; index > startIndex; index--) {
                this.contentBox.prepend(this.renderRow(this.renderItem(this.data[this.#hiddenTopItemIndex - 1])))
                this.#hiddenTopItemIndex--
            }
        }
        this.contentBox.style.paddingTop = this.#hiddenTopItemIndex * this.rowHeight + "px"
    }
    toggleBottomItems = (direction) => {
        const {scrollTop, clientHeight } = this.scroller
        const lastVisibleIndex = Math.floor((scrollTop + clientHeight) / this.rowHeight)
        const lastExistingIndex = lastVisibleIndex + this.buffer;
        if (direction === 1) {
            for (let i = this.#hiddenTopItemIndex + this.contentBox.children.length; i <= lastExistingIndex; i++) {
                const data = this.data[i]
                if (data) {
                    this.contentBox.append(this.renderRow(this.renderItem(data)))
                }
            }
        }
        if (direction ===-1){
            for(let i =lastExistingIndex+1; i<this.data.length;i++){
                const row = [...this.contentBox.children]
                const data = row[i-this.#hiddenTopItemIndex]
                if(data) data.remove()
            }
        }

        let padd=(this.data.length-(this.#hiddenTopItemIndex+this.contentBox.children.length))*this.rowHeight + "px"
        this.contentBox.style.paddingBottom = padd 
    }
    handleScroller = (e) => {
        const { scrollTop, scrollHeight, clientHeight } = e.target
        const direction = scrollTop > this.#scrollTop ? 1 : -1

        if ((scrollHeight - scrollTop - clientHeight) < (this.rowHeight * 2)) {
            const newData = this.loadMore(this.pageSize)
            this.data.push(...newData)
        }
        this.toggleTopItems(direction)
        this.toggleBottomItems(direction)
        this.#scrollTop = scrollTop
    }

    renderItem(data) {
        let div = document.createElement("div")
        div.innerText = data
        return div;
    }
    renderRow(item) {
        let row = document.createElement("div")
        row.style.height = this.rowHeight + "px"
        row.classList.add("row-content")
        row.append(item)
        return row;
    }

    renderNewData(newData) {
        newData.forEach(element => {
            this.contentBox.append(this.renderRow(this.renderItem(element)))
        });
    }

    init() {
        let newData = this.loadMore(this.pageSize)
        this.data.push(...newData);
        this.renderNewData(newData)
        this.scroller.addEventListener("scroll", this.handleScroller)
    }

}