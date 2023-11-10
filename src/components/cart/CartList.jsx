import useCart from '../../hooks/useCart';
import { formatCurrency, formatQuantity } from '../../utils/formatUtil';

const CartList = () => {
    const { cartItems, removeFromCart, updateQuantity } = useCart();

    return (
        <ul className="h-full flex flex-col gap-4 overflow-auto">
            {cartItems.map(element => {
                const { id, title, price, discountPercentage, brand, thumbnail, quantity } = element;
                return (
                    <li
                        className="relative min-h-[128px] rounded-2xl overflow-hidden transition-shadow grid grid-cols-[1fr,_2fr] hover:shadow-xl hover:shadow-yellow-400"
                        key={id}
                    >
                        <button
                            className="absolute top-2 right-2"
                            onClick={() => removeFromCart(element)}
                        >
                            🗑
                        </button>
                        <img
                            src={thumbnail}
                            alt="Key Holder"
                            width="64"
                            height="128"
                            className="w-full h-32 object-cover bg-zinc-700"
                        />
                        <div className="h-32 p-3 bg-zinc-800 flex flex-col gap-1">
                            <h2 className="text-zinc-400 text-xs font-bold">{brand}</h2>
                            <h3 className="text-yellow-300 text-sm font-extrabold">{title}</h3>
                            <h4 className="text-xs"> <span className="text-yellow-300 font-bold">{formatCurrency(price * (100 - discountPercentage) / 100)}</span> <span className="line-through">{formatCurrency(price)}</span> <sup className="py-0.5 px-2 rounded-lg bg-yellow-300 text-red-700 font-bold">{discountPercentage * -1}%</sup></h4>
                            <h5 className="text-zinc-400 text-xs font-bold">
                                <button onClick={() => updateQuantity({ element, value: -1 })}>➖</button>
                                {formatQuantity(quantity)}
                                <button onClick={() => updateQuantity({ element, value: 1 })}>➕</button>
                            </h5>
                            <h6 className="text-yellow-400 text-xs font-semibold">Subtotal: {formatCurrency(price * (100 - discountPercentage) / 100 * quantity)}</h6>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
};

export default CartList;