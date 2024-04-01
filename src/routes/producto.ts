import {Router} from 'express';
import { getProduct, getProducts, deleteProduct, postProduct, updateProduct} from '../controllers/producto';

const router = Router();

router.get('/', getProduct);
router.get('/:id', getProducts);
router.delete('/:id', deleteProduct);
router.post('/', postProduct);
router.put('/:id', updateProduct);
export default router;