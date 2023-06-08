import React from 'react';
import ProductCard from './ProductCard';

const EcommercePage = () => {
  const products = [
    {
      id: 1,
      image: 'ruta-imagen-1.jpg',
      title: 'Producto 1',
      price: '$19.99',
      description: 'Descripción del producto 1',
    },
    {
      id: 2,
      image: 'ruta-imagen-2.jpg',
      title: 'Producto 2',
      price: '$29.99',
      description: 'Descripción del producto 2',
    },
    {
      id: 3,
      image: 'ruta-imagen-3.jpg',
      title: 'Producto 3',
      price: '$39.99',
      description: 'Descripción del producto 3',
    },
    {
      id: 4,
      image: 'ruta-imagen-4.jpg',
      title: 'Producto 4',
      price: '$49.99',
      description: 'Descripción del producto 4',
    },
  ];

  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
};

export default EcommercePage;
