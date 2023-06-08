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
    <div className="max-w-sm rounded-lg my-10 bg-white shadow-lg p-2">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="px-2 py-2 md:px-4 md:py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-2 py-1 md:px-4 md:py-2">
        <span className="inline-block bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold text-center">
          ${price}
        </span>
        <div className="flex items-center justify-center md:justify-start mt-2">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2">
            Añadir
          </button>
        </div>
      </div>
      <div className="px-2 py-1 md:px-4 md:py-2">
        <p className="text-gray-500 text-sm text-center">{Collar}</p>
      </div>
      <div className="px-2 py-1 md:px-4 md:py-2">
        <p className="text-gray-500 text-sm text-center">{ParrillaPlegable}</p>
      </div>
      <div className="px-2 py-1 md:px-4 md:py-2">
        <p className="text-gray-500 text-sm text-center">{Vino}</p>
      </div>
      <div className="px-2 py-1 md:px-4 md:py-2">
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
      price: 500.0,
      image: '/src/assets/images/Vino.jpeg',

    },
    {
      title: 'Asador a la LLama',
      description: 'Para asar carne a la llama',
      price: 500,
      image: '/src/assets/images/Sasador.jpg',

    },
  ];

  return (
    <div className="container mx-auto mt-40 py-8">
      <h1 className="text-4xl font-bold mb-8">Productos</h1>
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
