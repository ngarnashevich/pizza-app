import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '@/redux/cart/slice';
import type {CartItem} from '@/redux/cart/types';
import Button from '@/ui/Button/Button';

import styles from './Card.module.scss';

type CardProps = {
   id: number;
  imageUrl: string;
  title: string;
  price: number;
  sizes: string[];
  types: string[];
}

export const Card: React.FC<CardProps> = ({ id, imageUrl, title, price, sizes, types }) => {
    const dispatch = useDispatch();

    const [addToCart, setAddToCart] = React.useState(0);
    const [typeBoart, setTypeBoart] = React.useState(0);
    const [pizzaSize, setPizzaSize] = React.useState(0);

    const boarts = ['Без борта', 'Сирні', 'Хот-дог'];
    // const sizes = [26, 30, 40];

    const onClickAddToCart = () => {
        const item: CartItem  = {
            id,
            imageUrl,
            title,
            price,
            sizes: sizes[pizzaSize],
            types: boarts[typeBoart],
            count: 1,
        };

        dispatch(addItem(item));

        setAddToCart(addToCart + 1);
    };

    return (
        <div className={styles.card}>
            <img className={styles.image} src={imageUrl} alt={title} />
            <h4 className={styles.title}>{title}</h4>
            <div className={styles.selector}>
                <ul className={styles.list}>
                    {types.map((type, index) => (
                        <li key={index} className={`${styles.listItem} ${typeBoart === index ? styles.active : ''}`} onClick={() => setTypeBoart(index)}>
                            {type}
                        </li>
                    ))}
                </ul>
                <ul className={styles.list}>
                    {sizes.map((size, index) => (
                        <li key={index} className={`${styles.listItem} ${pizzaSize === index ? styles.active : ''}`} onClick={() => setPizzaSize(index)}>
                            {size} cм.
                        </li>
                    ))}
                </ul>
            </div>

            <div className={styles.bottom}>
                <div className={styles.price}>від {price} ₴</div>
                <Button className="add" onClick={onClickAddToCart}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Замовити</span>

                    {addToCart !== 0 && <i>{addToCart}</i>}
                </Button>
            </div>
        </div>
    );
}
