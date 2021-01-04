class Board {
    constructor() {
        this.piece = null;
    }
    reset(){
      this.grid = this.getEmptyBoard();
    }
    getEmptyBoard(){
            return Array.from(
                {length: ROWS}, () => Array(COLS).fill(0)
            );
    }
    valid(p) {
        return true;
    }
    insideWalls(x) {
        return x >= 0 && x < COLS;
    }
    aboveFloor(y) {
        return y <= ROWS;
    }
    notOccupied(x, y) {
        return this.grid[y] && this.grid[y][x] === 0;
    }
    valid(p) {
        return p.shape.every((row, dy) => {
            return row.every((value, dx) => {
                let x = p.x + dx;
                let y = p.y + dy;
                return value === 0 ||
                    (this.insideWalls(x) && this.aboveFloor(y) && this.notOccupied(x, y));
            });
        });
    }
    rotate(p){

        let clone = JSON.parse(JSON.stringify(p));



        return clone;
    }
}
for (let y = 0; y < p.shape.length; ++y) {
    for (let x = 0; x < y; ++x) {
        [p.shape[x][y], p.shape[y],[x]] =
            [p.shape[y],[x], p.shape[x],[x]] ;
    }
}

p.shape.forEach(row => row.reverse());
