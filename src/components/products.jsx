import { Card } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
const { Meta } = Card;


const Products = () => {
  const [products, setProducts] = useState()

  try {
      const fetchedProducts = axios.get('http://localhost:8888/.netlify/functions/productFetch')
      fetchedProducts.then(({data}) => {
          console.log(data.image);
          setProducts(data.image.resources)
      })
      //console.log(fetchedProducts.data.image.resources);
    } catch (error) {
      console.error(error)
    }
/*   useEffect(()=> {
  }, []) */

  return (
    products && products.map((product) => (
    <Card
        key={product.asset_id}
        hoverable
        style={{
        width: 240,
        }}
        cover={<img alt={product.filename} src={product.secure_url} />}
    >
        <Meta title={product.filename} description="www.instagram.com" />
    </Card>
    ))
  )

};

export default Products;