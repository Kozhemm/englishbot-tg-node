class LevelController {

    currentLevel = 1

    get() {
        return this.currentLevel;
    }

    set(level) {
        if (level < 140 && level > 0)
            this.currentLevel = level
    }
    previous() {
        if (this.currentLevel !== 0)
            this.currentLevel = this.currentLevel - 1;
    }

    getNext() {
        if (this.currentLevel < 140)
            this.currentLevel = this.currentLevel + 1;
    }

    reset() {
        this.currentLevel = 1
    }


}
module.exports = new LevelController()