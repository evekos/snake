class Draw{
    circle (x, y, radius, fillCircle) {
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2, false);
        if (fillCircle) {
            ctx.fill();
        } else {
            ctx.stroke();
        }
    }
}