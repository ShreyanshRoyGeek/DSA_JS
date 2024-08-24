/*
Object-detection
*/

// npm install @tensorflow/tfjs-node @tensorflow-models/coco-ssd canvas

const tf = require('@tensorflow/tfjs-node'); // TensorFlow.js for Node.js
const cocoSsd = require('@tensorflow-models/coco-ssd'); // COCO-SSD model
const fs = require('fs');
const { createCanvas, Image } = require('canvas'); // For handling image processing

async function detectObjects(imagePath) {
  // Load the image
  const img = new Image();
  img.src = fs.readFileSync(imagePath);

  // Create a canvas element to manipulate the image
  const canvas = createCanvas(img.width, img.height);
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0, img.width, img.height);

  // Load the COCO-SSD model
  const model = await cocoSsd.load();

  // Detect objects in the image
  const predictions = await model.detect(canvas);

  // Log the predictions
  predictions.forEach(prediction => {
    console.log(`Detected ${prediction.class} with confidence ${prediction.score}`);
    console.log(`Bounding Box: ${prediction.bbox}`);
  });

  // Draw bounding boxes around detected objects
  predictions.forEach(prediction => {
    const [x, y, width, height] = prediction.bbox;
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 2;
    ctx.strokeRect(x, y, width, height);

    ctx.fillStyle = 'red';
    ctx.font = '18px Arial';
    ctx.fillText(
      `${prediction.class} (${Math.round(prediction.score * 100)}%)`,
      x,
      y > 10 ? y - 5 : 10
    );
  });

  // Save the result to a new image file
  const outputImagePath = 'output.png';
  const out = fs.createWriteStream(outputImagePath);
  const stream = canvas.createPNGStream();
  stream.pipe(out);
  out.on('finish', () => console.log('The output image was created.'));
}

// Example usage
detectObjects('path/to/your/image.jpg');
