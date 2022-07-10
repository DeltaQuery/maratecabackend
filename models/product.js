import mongoose from "mongoose"

const schema = new mongoose.Schema({
    name: {
        type: String
    },
    category: {
        type: [Number]
    },
    price: {
        type: Number
    },
    discountedPrice: {
        type: Number
    }
    ,
    discountedPriceWith: {
        type: Number
    },
    discountWith: {
        type: [String]
    },
    features: {
        type: [String]
    },
    images: [
        {
            largeImg: {
                type: String
            },
            smallImg: {
                type: String
            }
        }
    ],
    model: {
        type: String
    },
    models: {
        type: { type: String },
        variants: [
            {
                model: String,
                _id: String
            }
        ]
    },
    boughtWith: {
        type: [String]
    },
    stock: {
        type: Number
    },
    discountedPrice: {
        type: Date
    }
})

export default mongoose.model("Product", schema)