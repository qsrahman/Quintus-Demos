var Q = Quintus()
        .include('Sprite')
        .setup();

Q.Sprite.extend('Ball', {
    init: function(p) {
        this._super(p, {
            asset: 'ball.png',
            x: 0,
            y: 300,
            vx: 50,
            vy: -400
        });
    },

    step: function(dt) {
        this.p.vx += 9.8 * dt;
        this.p.x += this.p.vx * dt;
        this.p.y += this.p.vy * dt;
    }
});

Q.load(['ball.png'], function() {
    var ball = new Q.Ball();
    Q.gameLoop(function(dt) {
        ball.update(dt);
        Q.clear();
        ball.render(Q.ctx);
    });
});
