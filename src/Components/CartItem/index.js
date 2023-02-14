const CartItem = (props) => {
    const { price, quantity, itemName, itemImg } = props;

    return <div className="basic-cart-item">
        <img className="basic-cart-item-image" src={itemImage} />
        <div className="basic-cart-item-info">
            <div className="basic-cart-item-info-name">{itemName}</div>
            <div className="basic-cart-item-info-price-qty">{`${quantity} x ${price}$ `}</div>
        </div>
    </div>
};

export default CartItem;