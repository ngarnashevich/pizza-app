import React from 'react';

export const  Footer:React.FC = () => {
    return (
        <footer>
            <div className="footer">
                <p className="footer__copy">© React | Redux pizza Усі права захищені</p>
                <div className="footer__pay">
                    <img src="./img/visa-mastercard.svg" alt="Visa-Mastercard" title="Icon Visa-Mastercard" />
                </div>
            </div>
        </footer>
    );
}

