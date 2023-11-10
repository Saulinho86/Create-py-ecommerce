/* eslint-disable react/prop-types */

import useCart from '../../hooks/useCart';
import { formatCurrency } from '../../utils/formatUtil';

const Products = ({ data }) => {
    const { addToCart } = useCart();

    return (
        <ul className="grid grid-cols-[repeat(auto-fill,_minmax(256px,_1fr))] gap-6">
            {data.map(element => {
                const { id, title, price, discountPercentage, rating, brand, thumbnail } = element;

                return (
                    <li
                        key={id}
                        className="rounded-2xl overflow-hidden transition-shadow hover:shadow-xl hover:shadow-yellow-400"
                    >
                        <img
                            src={thumbnail}
                            alt={title}
                            width={256}
                            height={256}
                            className="w-full h-48 object-cover bg-zinc-700"
                        />
                        <div className="h-64 p-3 bg-zinc-800 flex flex-col gap-0.5">
                            <h2 className="text-zinc-400 font-bold">{brand}</h2>
                            <h3 className="text-yellow-300 text-xl font-extrabold">{title}</h3>
                            <span className="text-zinc-400 text-sm font-semibold">{rating} ✨</span>
                            <h4><span className="line-through">{formatCurrency(price)}</span> <sup className="py-0.5 px-2 rounded-lg bg-yellow-300 text-red-700 font-semibold">{discountPercentage * -1}%</sup></h4>
                            <h5 className="text-yellow-300 text-lg font-bold">{formatCurrency(price * (100 - discountPercentage) / 100)}</h5>
                            <button
                                className="py-2 px-8 mt-auto rounded-2xl bg-yellow-300 text-red-700 font-semibold transition-colors hover:bg-yellow-400"
                                onClick={() => { addToCart(element) }}
                            >
                                Agregar a carrito
                            </button>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
};

export default Products;