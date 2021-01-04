    const canvas = document.getElementById("board");
    const ctx = canvas.getContext("2d");
    // Установить разметы холста, данные из контанты
    ctx.canvas.width = COLS * BLOCK_SIZE;
    ctx.canvas.height = ROWS * BLOCK_SIZE;
    //Установить масштаб,
    ctx.scale(BLOCK_SIZE, BLOCK_SIZE);
    
    let board = new Board();
    
    function play(){
        board.reset();
        console.table(board.grid);
    }
    function play() {
        board.reset();
        let piece = new Piece(ctx);
        piece.draw();
    
        board.piece = piece;
    }
    // вычисление новых координат для клавиш. Копирование и изменение на один
    const moves = {
        [KEY.LEFT]: p => ({ ...p, x: p.x -1}),
        [KEY.RIGHT] : p => ({ ...p, x: p.x +1}),
        [KEY.DOWN] : p => ({ ...p, y: p.y +1}),
        [KEY.SPACE]: p => ({ ...p, y: p.y + 1 }),
        [KEY.UP]: p = board.rotate(p)
    };
    // const p = this.moves[event.key](this.piece);

    document.addEventListener('keydown', event => {
        if (moves[event.keyCode]) {
            event.preventDefault();
            let p = moves[event.keyCode](board.piece);
            if (board.valid(p)) {
                board.piece.move(p);
                //стираем страрое отображение фигуры на холсте
                ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                board.piece.draw();
            }
            if (event.keyCode === KEY.SPACE) {
                while (board.valid(p)) {
                    board.piece.move(p);
                    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                    board.piece.draw();

                    p = moves[KEY.DOWN](board.piece);
                }
            } else if (board.valid(p)) {
            }
        }
    });
