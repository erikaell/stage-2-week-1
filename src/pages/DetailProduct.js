import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from 'react-query';
import { Button } from "react-bootstrap"

import { API } from '../config/api';

function DetailProduct() {
    let navigate = useNavigate();
    let { id } = useParams();
  
    let { data: product } = useQuery('productCache', async () => {
      const response = await API.get('/product/' + id);
      return response.data.data;
    });
  
    const handleBuy = useMutation(async (e) => {
      try {
        e.preventDefault();
  
        const config = {
          headers: {
            'Content-type': 'application/json',
          },
        };
  
        const data = {
          idProduct: product.id,
          idSeller: product.users.id,
          price: product.price,
        };
  
        const body = JSON.stringify(data);
  
        await API.post('/transaction', body, config);
  
        navigate('/user/profile');
      } catch (error) {
        console.log(error);
      }
    });

    return(
        <div className="detail-container row">
            <div className="col-md-6">
                <img src={product?.image} className="img-detail" alt="" />
            </div>
            <div className='col-md-6'>
                <p className='detail-head-text'> Mouse </p>
                <p className='detail-text'> Stock: {product?.qty} </p>
                <p className='detail-text'> {product?.desc} </p>
                <p className='detail-price d-flex justify-content-end'> Rp. {product?.price} </p>
                <Button onClick={(e) => handleBuy.mutate(e)} variant="danger" className="button-login-login">Buy</Button>
            </div>
        </div>
    );
  }

export default DetailProduct;