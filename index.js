import { ApolloServer, gql } from 'apollo-server'
import "./db.js"
import product from './models/product.js'

const typeDefs = gql`

    type Images {
        smallImg: String
        largeImg: String
    }

    type Variants {
        _id: String
        model: String
    }

    type Models {
        type: String
        variants: [Variants]
    }

     type Product {
        _id: ID!
        name: String!
        category: [Int]
        price: Float
        discountedPrice: Float
        discountedPriceWith: String
        discountWith: String
        features: [String]
        images: [Images]
        model: String
        models: Models
        boughtWith: String
        stock: Int
        date: String
     }

     type Query {
        productCount: Int!
        allProducts: [Product]!
        findProduct(_id: String!): Product
     }
`
const resolvers = {
    Query: {
        productCount: () => product.collection.countDocuments(),
        allProducts: async (root, args) => {
            return product.find({})
        },
        findProduct: async (root, args) => {
            const { _id } = args
            return await product.findOne({_id})
        }
    }
}

const server = new ApolloServer({
    typeDefs,  
    resolvers
})

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
    console.log(`Server ready at ${url}`)
})