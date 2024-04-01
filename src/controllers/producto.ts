import { Request, Response } from 'express';
import Producto from '../models/producto';

export const getProduct = async(req: Request,res: Response) => {
    const listProducts =  await Producto.findAll();
    res.json(listProducts);
}

export const getProducts = async(req: Request,res: Response) => {

    const { id } = req.params;
    const product = await Producto.findByPk(id);

    if(product){
        res.json(product);
    }else {
        res.status(404).json({
            message: `Product with id ${id} not found`
        });
    }
}

export const deleteProduct = async (req: Request,res: Response) => {
    const { id } = req.params;
    const product = await Producto.findByPk(id);

    if(!product){
        res.status(404).json({
            message: `Product with id ${id} not found`
        });
    }else {
        await product.destroy();
        res.json({
            message: `Product with id ${id} deleted`
        });
    }
    
}

export const postProduct = async(req: Request,res: Response) => {
    const { body } = req;
    try {
        await Producto.create(body)

    res.json({
        message: 'Product POST Successfull',
    });
    } catch (error) {
        console.log(error);
        res.json({
            message: 'Error to create Product',
        });
    }
    
    
}
export const updateProduct = async (req: Request,res: Response) => {
    const { body } = req;
    const { id } = req.params;

    try {
        const product = await Producto.findByPk(id);

        if(product){
            await product.update(body);
            res.json({
                message: `Product with id ${id} updated`
            });

        }else {
            res.status(404).json({
                message: `Product with id ${id} not found`
            });
        }
    } catch (error) {
        console.log(error);
        res.json({
            message: 'Error to update Product',
        });
    }
    

}

