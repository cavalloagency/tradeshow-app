function rgb2hsv() {
  var rr,
    gg,
    bb,
    r = arguments[0] / 255,
    g = arguments[1] / 255,
    b = arguments[2] / 255,
    h,
    s,
    v = Math.max(r, g, b),
    diff = v - Math.min(r, g, b),
    diffc = function(c) {
      return (v - c) / 6 / diff + 1 / 2;
    };

  if (diff === 0) {
    h = s = 0;
  } else {
    s = diff / v;
    rr = diffc(r);
    gg = diffc(g);
    bb = diffc(b);

    if (r === v) {
      h = bb - gg;
    } else if (g === v) {
      h = 1 / 3 + rr - bb;
    } else if (b === v) {
      h = 2 / 3 + gg - rr;
    }
    if (h < 0) {
      h += 1;
    } else if (h > 1) {
      h -= 1;
    }
  }
  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    v: Math.round(v * 100)
  };
}

export const filterImage = () => {
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  var img = document.getElementById("user-image");
  if (img) {
    c.width = 1920;
    c.height = 1080;
    ctx.drawImage(img, 0, 0, 1920, 1080);

    let frame = ctx.getImageData(0, 0, 1920, 1080);
    let reference = rgb2hsv(frame.data[0], frame.data[1], frame.data[2]);

    let l = frame.data.length / 4;

    for (let i = 0; i < l; i++) {
      let r = frame.data[i * 4 + 0];
      let g = frame.data[i * 4 + 1];
      let b = frame.data[i * 4 + 2];
      let hsv = rgb2hsv(r, g, b);

      let hueDifference = Math.abs(hsv.h - reference.h);

      if (hueDifference < 16 && hsv.v > 33 && hsv.s > 40) {
        frame.data[i * 4 + 3] = 0;
      }
    }
    ctx.putImageData(frame, 0, 0);
    const imageURL = c.toDataURL("image/png");
    // .replace("image/png", "image/octet-stream");
    return imageURL;
  }
};
