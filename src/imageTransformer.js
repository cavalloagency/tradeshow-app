// let processor = {
//   doLoad: function() {
//     this.image = document.querySelector("#user-image");
//     this.c1 = document.querySelector("#c1");
//     this.ctx1 = this.c1.getContext("2d");
//   },

//   computeFrame: function() {
//       this.ctx1.drawImage(this.image, 0, 0, this.width, this.height);

//   }

// };

// function uploadImage(imageUri)
// {
//   var fileInput = document.getElementById("fgFile");
//   var canvas = document.getElementById("canvas1");
//   imgFG = new SimpleImage(imageUri);
//   imgFG.drawTo(canvas);
// }

// function composite()
// {
//   var canvas1 = document.getElementById("c1");
//   var outputImage = new SimpleImage(imgFG.width, imgFG.height);
//   for (var pixel of imgFG.values())
//     {
//       if (pixel.getGreen() > pixel.getRed() + pixel.getBlue())
//         {
//           var x = pixel.getX();
//           var y = pixel.getY();
//           var newPixel = imgBG.getPixel(x, y);
//           outputImage.setPixel(x, y, newPixel);
//         }
//       else
//         {
//           outputImage.setPixel(pixel.getX(), pixel.getY(), pixel);
//         }
//     }
//   outputImage.drawTo(canvas1);

// }
