/*
    Face-Detection
*/

// 1} 

// face-api.js is a JavaScript API for face detection and face recognition in the browser and Node.js, built on top of TensorFlow.js. 
// It supports various pre-trained models for face detection, landmarks detection, and face recognition.



const faceapi = require('face-api.js');
const canvas = require('canvas');
const { Canvas, Image, ImageData } = canvas;

faceapi.env.monkeyPatch({ Canvas, Image, ImageData });

async function detectFaces(imagePath) {
  await faceapi.nets.ssdMobilenetv1.loadFromDisk('./models'); // Load model

  const img = await canvas.loadImage(imagePath);
  const detections = await faceapi.detectAllFaces(img);

  console.log(detections); // Output detected faces
}

detectFaces('path/to/image.jpg');



// 2. OpenCV.js
// OpenCV.js is a JavaScript binding for the popular OpenCV library, allowing for a wide range of computer vision tasks, including face detection using Haar cascades or DNN models.


const cv = require('@techstark/opencv-js');

async function detectFaces(imagePath) {
  // Load the face detection cascade
  let faceCascade = new cv.CascadeClassifier();
  faceCascade.load('haarcascade_frontalface_default.xml');

  // Load an image
  let img = await cv.imreadAsync(imagePath);
  let gray = new cv.Mat();
  cv.cvtColor(img, gray, cv.COLOR_RGBA2GRAY, 0);

  // Detect faces
  let faces = new cv.RectVector();
  faceCascade.detectMultiScale(gray, faces, 1.1, 3, 0);

  console.log(faces.size()); // Number of faces detected
  // Draw rectangles around detected faces
  for (let i = 0; i < faces.size(); i++) {
    let face = faces.get(i);
    let point1 = new cv.Point(face.x, face.y);
    let point2 = new cv.Point(face.x + face.width, face.y + face.height);
    cv.rectangle(img, point1, point2, [255, 0, 0, 255]);
  }

  // Save the result
  cv.imwrite('output.jpg', img);
}

detectFaces('path/to/image.jpg');




