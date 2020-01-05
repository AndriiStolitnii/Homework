var circle = {
    el: document.querySelector('.circle'),
    scaleX: 1,
    scaleY: 1,
    x: 0,
    y: 0,
    move: function (direction, distance) {
        var transform;
        switch (direction) {
            case 'left':
                transform = 'translate(' + (this.x-=distance) + 'px, ' + this.y + 'px)';
                break;
            case 'right':
                transform = 'translate(' + (this.x+=distance) + 'px, ' + this.y + 'px)';
                break;
            case 'up':
                transform = 'translate(' + this.x + 'px, ' + (this.y-=distance) + 'px)';
                break;    
            case 'down':
                transform = 'translate(' + this.x + 'px, ' + (this.y+=distance) + 'px)';
                break;
        }
        this.el.style.transform = transform;
    },
    left: function (distance) {
        this.move('left', distance)
    },
    right: function (distance) {
        this.move('right', distance)
    },
    up: function (distance) {
        this.move('up', distance)
    },
    down: function (distance) {
        this.move('down', distance)
    },
    changeSize: function (direction, multiplier) {
        var scale;
        // var transformOrigin = '' + this.x + ' ' + this.y + '';
        switch (direction) {
            case 'increase':
                scale = 'scale(' + (this.scaleX*=multiplier) + ', ' + (this.scaleY*=multiplier) + ')';
                break;
            case 'decrease':
                scale = 'scale(' + (this.scaleX/=multiplier) + ', ' + (this.scaleY/=multiplier) + ')';
                break;
        }
        this.el.style.transform = scale;
        // this.el.style.transformOrigin = transformOrigin;
    },
    increase: function (multiplier) {
        this.changeSize('increase', multiplier)
    },
    decrease: function (multiplier) {
        this.changeSize('decrease', multiplier)
    }

}

setTimeout(function() {
    circle.left(200);
    circle.down(300);
}, 1000);

setTimeout(function() {
    circle.right(400);
    circle.up(500);
}, 2000);

setTimeout(function() {
    circle.increase(2);
}, 3000);

setTimeout(function() {
    circle.decrease(1.5);
}, 4000);

