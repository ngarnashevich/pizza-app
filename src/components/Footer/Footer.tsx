import React from 'react';
import { useTranslation } from 'react-i18next';

export const  Footer:React.FC = () => {
    const { t } = useTranslation();
    return (
        <footer>
            <div className="footer">
                <p className="footer__copy">© {t('footer.copy')}</p>
                <div className="footer__pay">
                    <img src="./img/visa-mastercard.svg" alt="Visa-Mastercard" title="Icon Visa-Mastercard" />
                </div>
            </div>
        </footer>
    );
}

