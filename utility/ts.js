const tf = require('@tensorflow/tfjs');
const mobilenet = require('@tensorflow-models/mobilenet');
const tfnode = require('@tensorflow/tfjs-node');

const fs = require('fs');



module.exports.imageClassification = async path => {
    const imageBuffer = fs.readFileSync(path);
    const tfimage = tfnode.node.decodeImage(imageBuffer);
    const image = tfimage;
      
    const mobilenetModel = await mobilenet.load({
        version: 1,
        alpha: 0.25 | .50 | .75 | 1.0,
    });
    const predictions = await mobilenetModel.classify(image);
    console.log('Classification Results:', predictions);
  }