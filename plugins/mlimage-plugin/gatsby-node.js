const utils = require("./utils/index");
const mobilenet = require('@tensorflow-models/mobilenet');
const coco = require('@tensorflow-models/coco-ssd');
const tf = require('@tensorflow/tfjs-node');
const {createMlImageNodeFields, isImageSharp, typeDefs, getImageBuffer, validatePluginOptions} = utils;

let model;
let objectModel;

const loadModels = async () => {
    if (!model) {
        model = await mobilenet.load();
    }

    if (!objectModel) {
        objectModel = await coco.load({
            base: "mobilenet_v2",
        });
    }
}

const destroyModels = async () => {
    reporter.info(
        `Destroying Coco model`
    );
    objectModel.dispose()
    model = null;
}

/**
 * @function
 * @title classifyImage
 * @param {Buffer} imageBuffer 
 * @param {string} imageType 
 * @returns 
 */
const classifyImage = async (imageBuffer, imageType) => {
    const image = tf.node.decodeImage(imageBuffer, 3);
    let imageForObjects;
    switch (imageType) {
        case "image/png":
            imageForObjects = tf.node.decodePng(imageBuffer, 3);
            break;
        case "image/jpg":
        case "image/jpeg":
            imageForObjects = tf.node.decodeJpeg(imageBuffer, 3);
            break;
        default:
            imageForObjects = tf.node.decodeImage(imageBuffer)
            break;
    }
    const objects = await objectModel.detect(imageForObjects);
    const label = await model.classify(image);

    return {
        objects,
        label,
    }
}

exports.onPreBootstrap = async () => loadModels();

exports.onPreInit = ({ reporter }, pluginOptions) => {
    reporter.info(`Classifying images to generate alt text`)
    const errors = validatePluginOptions(pluginOptions);
    if (errors.length > 0){
        errors.forEach(err => reporter.error(err))
    }
}

exports.createSchemaCustomization = ({ actions }) => {
    actions.createTypes(typeDefs)
}

exports.onPostBootstrap = async ({
    actions, getNode, reporter, createNodeId, getNodesByType,
}, pluginOptions) => {

    const images = getNodesByType(`ImageSharp`);
    const { createNode } = actions;
    await Promise.all(images.map(async (node) => {
        if (!isImageSharp(node)) return;
        const parentNode = getNode(node.parent)
        
        if (!parentNode.absolutePath?.includes(pluginOptions.images)) {
            return;
        }
        
        try {
            const imageBuffer = await getImageBuffer(parentNode.absolutePath);
            const altText = await classifyImage(imageBuffer, parentNode.internal.mediaType);
            
            const mlImageNodeFields = createMlImageNodeFields({
                id: createNodeId(parentNode.absolutePath),
                altText,
                parent: node.id,
            });

            createNode(mlImageNodeFields);
        } catch (err) {
            reporter.error(`Error classifying ${parentNode.base}`)
        }
    }));


}

exports.onPostBuild = async () => destroyModels();