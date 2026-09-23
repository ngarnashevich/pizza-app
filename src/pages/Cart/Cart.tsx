import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { clearItems } from '@/redux/cart/slice';
import { cartSelector } from '@/redux/cart/selectors';
import Button from '@/ui/Button/Button';

import {EmptyCart, CartItem} from '@/components/';

import styles from './Cart.module.scss';

const Cart = () => {
     const { t } = useTranslation();
    const dispatch = useDispatch();
    const { items, totalCount, totalPrice } = useSelector(cartSelector);

    const onClickClear = () => {
        dispatch(clearItems());
    };

    if (!totalCount) {
        return <EmptyCart />;
    }
    return (
        <>
            <div className="container container--cart">
                <div className={styles.cartTop}>
                    <h2 className={styles.title}>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.85844 27.9833C11.1931 27.9833 12.2751 26.9014 12.2751 25.5667C12.2751 24.232 11.1931 23.15 9.85844 23.15C8.52375 23.15 7.44177 24.232 7.44177 25.5667C7.44177 26.9014 8.52375 27.9833 9.85844 27.9833Z"
                                stroke="#3F3F3F"
                                strokeWidth="2.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M24.3584 27.9833C25.6931 27.9833 26.7751 26.9014 26.7751 25.5667C26.7751 24.232 25.6931 23.15 24.3584 23.15C23.0238 23.15 21.9418 24.232 21.9418 25.5667C21.9418 26.9014 23.0238 27.9833 24.3584 27.9833Z"
                                stroke="#3F3F3F"
                                strokeWidth="2.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M7.04294 7.44166H27.9834L25.9534 17.5796C25.8429 18.1359 25.5402 18.6356 25.0984 18.9913C24.6566 19.3469 24.1038 19.5359 23.5367 19.525H10.7646C10.1746 19.53 9.60307 19.319 9.15789 18.9317C8.71272 18.5443 8.42463 18.0076 8.34794 17.4225L6.51127 3.50249C6.43511 2.92157 6.1505 2.3881 5.71039 2.00134C5.27029 1.61459 4.70467 1.40088 4.11877 1.39999H1.40002"
                                stroke="#3F3F3F"
                                strokeWidth="2.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                     {t('cart.title')}
                    </h2>
                    <div onClick={onClickClear} className={styles.cartClear}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.5 5H4.16667H17.5" stroke="#B6B6B6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path
                                d="M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z"
                                stroke="#B6B6B6"
                                strokeWidth="1.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path d="M8.33337 9.16667V14.1667" stroke="#B6B6B6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M11.6666 9.16667V14.1667" stroke="#B6B6B6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>

                        <span>{t('cart.clearAll')}</span>
                    </div>
                </div>

                {items.map((obj) => (
                    <CartItem key={obj.id} {...obj} />
                ))}
                <div>
                    <div className={styles.cartBottom}>
                        <div className={styles.cartDetails}>
                            <span>
                                {' '}
                                 {t('cart.allPizzas')} <b>{totalCount} шт.</b>{' '}
                            </span>
                            <span>
                                {' '}
                               {t('cart.fullPrice')} <b>{totalPrice} ₴</b>{' '}
                            </span>
                        </div>
                        <div className={styles.cartButtons}>
                            <Link to="/" className={styles.cardBtnBack}>
                                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 13L1 6.93015L6.86175 1" stroke="#D3D3D3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                                <span>{t('cart.back')}</span>
                            </Link>
                            <Button className="pay-btn" onClick={onClickClear} >
                                <span> {t('cart.buy')}</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;
