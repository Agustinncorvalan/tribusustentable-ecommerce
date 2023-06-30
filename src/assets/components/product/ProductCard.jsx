import React from 'react';

const ProductCard = ({
  Collar,
  ParrillaPlegable,
  Vino,
  Sasador,
  title,
  description,
  price,
  image,
}) => {
  return (
    <div className="max-w-sm rounded-lg bg-white shadow-lg mx-4 py-0.5 text-center mt-10 mb-0.5">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="px-0.25 py-0.5 md:px-1 md:py-1">
        <div className="font-bold text-xl">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-2 py-0.5 md:px-1 md:py-1">
        <span className="inline-block bg-gray-300 text-black px-2 py-2 rounded-full text-sm font-semibold text-center">
          ${price}
        </span>
        <div className="flex items-center justify-center py-3 mt-2">
          <button className="bg-gray-300 hover:bg-gray-600 text-black font-bold py-2 px-4 rounded ml-2">
            Añadir
          </button>
        </div>
      </div>
      <div className="px-2 py-0.5 md:px-4 md:py-1">
        <p className="text-gray-500 text-sm text-center">{Collar}</p>
      </div>
      <div className="px-2 py-0.5 md:px-4 md:py-1">
        <p className="text-gray-500 text-sm text-center">{ParrillaPlegable}</p>
      </div>
      <div className="px-2 py-0.5 md:px-4 md:py-1">
        <p className="text-gray-500 text-sm text-center">{Vino}</p>
      </div>
      <div className="px-2 py-0.5 md:px-4 md:py-1">
        <p className="text-gray-500 text-sm text-center">{Sasador}</p>
      </div>
    </div>
  );
  
};

const App = () => {
  const products = [
    {
      title: 'Collar',
      description: 'Collar de piedras',
      price: 19.99,
      image: '/src/assets/images/Collar.jpg',

    },
    {
      title: 'Parrilla Plegable',
      description: 'Parrilla plegable Portatil',
      price: 100,
      image: '/src/assets/images/parrilla-plegable.jpg',

    },
    {
      title: 'Vino',
      description: 'Ricardo Ruben',
      price: 500.00,
      image: '/src/assets/images/Vino.jpeg',

    },
    {
      title: 'Asador a la LLama',
      description: 'Para asar carne a la llama',
      price: 500.00,
      image: '/src/assets/images/Sasador.jpg',

    },
    {
      title: 'Collar',
      description: 'Collar de piedras',
      price: 19.99,
      image: '/src/assets/images/Collar.jpg',

    },
    {
      title: 'Collar',
      description: 'Collar de piedras',
      price: 19.99,
      image: '/src/assets/images/Collar.jpg',

    },
    {
      title: 'Collar',
      description: 'Collar de piedras',
      price: 19.99,
      image: '/src/assets/images/Collar.jpg',

    },
    {
      title: 'Collar',
      description: 'Collar de piedras',
      price: 19.99,
      image: '/src/assets/images/Collar.jpg',

    },
  ];

  return (
    <div className="container mx-3 mt-40 py-10">
      <h1 className="text-4xl font-bold mb-10">Productos</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-0">
        {products.map((product, index) => (
          <div key={index} className="flex justify-center">
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
