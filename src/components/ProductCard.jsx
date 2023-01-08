const ProductCard = ({ name, id, imgSrc, price, handler }) => {
  return (
    <>
      <div className="product">
        <img src={imgSrc} alt={name} />
        <p>{name}</p>
        <h4>${price}</h4>
        <button
          onClick={() => handler({ name, id, imgSrc, price, quantity: 1 })}
        >
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default ProductCard;
