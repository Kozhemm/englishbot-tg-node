class Parser {

    data = [];

    getData() {
        return this.data;
    }

    delNullEl(arr = []) {
        const arrWithoutNullElems = []
        for (let i = 0; i < arr.length; i++) {
            if (arr[i]) {
                arrWithoutNullElems.push(arr[i])
            }
        }
        return arrWithoutNullElems;
    }
    pushCorrectEl = (nodeList) => {
        for (const el of nodeList) {
            this.data.push(this.delNullEl(el.textContent.split("\n")))
        }
    }
    getEl(arr = [], stop = 0) {
        for (let i = 0; i < arr.length; i++) {
            if (i === stop) {
                return arr[i];
            }
        }
    }

}
module.exports = new Parser()