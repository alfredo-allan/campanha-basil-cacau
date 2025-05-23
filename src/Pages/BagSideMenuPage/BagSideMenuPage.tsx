import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import styles from './BagSideMenuPage.module.css';
import BagSideMenu, { BagSideMenuProps } from '../../Components/BagSideMenu/BagSideMenu'; // Importe o componente e SUA INTERFACE
import CategoryDetails from '../../Components/CategoryDetails/CategoryDetails';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useShoppingBag, BagItem } from '../../Contexts/ShoppingBagContext'; // Importe o hook e a interface
import { Product, DataProducts } from '../../Components/DataProducts/DataProducts';


function BagSideMenuPage() {
    const navigate = useNavigate();
    const { bagItems, clearBag } = useShoppingBag(); // Use o hook personalizado
    const [isBagOpen, setIsBagOpen] = useState(true);
    const [filteredProducts, setFilteredProducts] = useState(DataProducts);

    const closeBag = () => {
        navigate('/');
    };

    const handleSearchResults = (results: Product[]) => {
        setFilteredProducts(results);
    };


    return (
        <div className={styles['bag-side-menu-page']}>
            <Header onSearchResults={handleSearchResults} />
            <div className={styles['bag-content-wrapper']}>
                <BagSideMenu
                    isOpen={isBagOpen}
                    onClose={closeBag}
                    bagItems={bagItems}
                    onClearBag={clearBag}
                />
            <CategoryDetails searchTerm="" icoHeart="../../Assets/Img/heart.png" products={filteredProducts} /> {/* Passa filteredProducts */}
            </div>
            <Footer />
        </div>
    );
}

export default BagSideMenuPage;