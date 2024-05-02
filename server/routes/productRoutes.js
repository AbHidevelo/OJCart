import express from "express"
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  getTopProducts,
} from '../controllers/productController.js' 
import { protect, admin } from '../middleware/authMiddlware.js'
import checkObjectId from '../middleware/checkObjectId.js'

const router = express.Router()

router.route('/').get(getProducts).post(protect, admin, createProduct)
router.route('/:id/reviews').post(protect, createProductReview);
router.get('/top', getTopProducts)

router
.route('/:id')
.get(checkObjectId, getProductById)
.put(protect, admin, checkObjectId, updateProduct)
.delete(protect, admin, checkObjectId, deleteProduct)



export default router
