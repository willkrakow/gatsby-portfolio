const sharp = require("sharp");
const crypto = require("crypto");

/**
 * 
 * @param {object} node 
 * @returns 
 */
const isImageSharp = (node) => {
    return node.internal.type && node.internal.type === 'ImageSharp';
}

const getImageBuffer = (path) => {
    return sharp(path).toBuffer();
}

const typeDefs = `
    """
    ML Image
    """
    type MLImage implements Node @infer {
      objects: [MLObject]!
      label: MLLabel
    }

    """
    ML Object
    """
    type MLObject @infer {
      bbox: [Float]!
      score: Float
      class: String
    }

    """
    ML Label
    """
    type MLLabel implements Node @infer {
      className: String
      probability: Float
    }
`;

/**
 * 
 * @param {object} params params
 * @param {string} params.id id
 * @param {object} params.altText altText
 * @param {string} params.parent parent node id
 * @returns 
 */
const createMlImageNodeFields = ({ id, altText, parent }) => ({
    // Data for the node.
    objects: altText.objects || [],
    label: altText.label || {},
    // Required fields.
    id,
    parent,
    children: [],
    internal: {
        type: `MLImage`,
        contentDigest: crypto
            .createHash(`md5`)
            .update(JSON.stringify(altText))
            .digest(`hex`),
    }
});


const optionsSchema = {
    images: {
        type: "string",
        required: true,
    }
}

const validatePluginOptions = (pluginOptions) => {
    const errors = [];
    Object.entries(optionsSchema).forEach(([key, schema]) => {
        if (schema.required && !pluginOptions[key]){
            errors.push(`"${key}" is required`)
        }

        if (schema.type !== typeof pluginOptions[key]){
            errors.push(`"${key} must be of type ${schema.type}`)
        }
    });

    return errors;
}


module.exports = {isImageSharp, typeDefs, getImageBuffer, createMlImageNodeFields, validatePluginOptions}
