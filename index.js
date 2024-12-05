const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.models.js')
const productRoute = require('./routes/product.route.js')
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

 // routes
 app.use('/api/products', productRoute)
app.get('/', (req, res) => {
    res.send("Hello form Node API Server Updated");
});

// app.get('/api/products', async (req, res) => {
//    try {
//     const product = await Product.find({});
//     res.status(200).json(product);
//    } catch (error) {
//     res.status(500).json({ message: error.message})
//    }
// });

// app.get('/api/products/:id', async (req, res) => {
//     try {
//       const { id } = req.params;
//       const product = Product.findById(id);
//       res.status(200).json(product);
//     } catch (error) {
//        res.status(500).json({ message: error.message})
//     }
// })

// //update a product
// app.put('/api/products/:id', async (req, res) => {
//   try {
//     const {id} = req.params;
//     const product = await Product.findByIdAndUpdate(id, req.body);

//     if (!product) {
//       return res.status(404).json({message: 'Product not found'});
//     }
//     const updatedProduct = await Product.findById(id);
//     res.status(200).json(updatedProduct)
//   } catch (error) {
//      res.status(500).json({message: error.message});
//   }
// });


// // delete a product

// app.delete('/api/products', async (req,res) => {
//     try {
//        const {id} = req.params;

//      const product = await Product.findByIdDelete(id);

//        if(!product){
//         return res.status(404).json({message:"Product not found"});
//        }
//        res.status(200).json({message:"Product deleted successfully"});
//     } catch (error) {
//       res.status(500).json({message: error.message});
//     }
// })
// app.post('/api/products', async (req, res) => {
//       try {
//      const product = await Product.create(req.body);
//      res.status(200).send(product)
//       } catch (error) {
//         res.status(500).json({message: error.message})
//       }
// });



mongoose.connect("mongodb+srv://satsol740:cPR@Z-uVE2rW.6d@dbproject.xwve9.mongodb.net/DBB?retryWrites=true&w=majority&appName=DBProject")
.then(() => {
    console.log('Connected to database')
    app.listen(3000, ()=> {
        console.log("Server is running on port 3000");
      });
})
.catch(() => {
    console.log("Connection failed!");
    
})