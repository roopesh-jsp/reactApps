import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
const DUMMY_PRODUCTS = [
  {
    id: 1,
    title: "first item",
    quantity: 0,
    total: 0,
    price: 2,
    description: "This is a first product - amazing!",
  },
  {
    id: 2,
    title: "second item",
    quantity: 0,
    total: 0,
    price: 10,
    description: "This is a first product - amazing!",
  },
  {
    id: 3,
    title: "third item",
    quantity: 0,
    total: 0,
    price: 6,
    description: "This is a first product - amazing!",
  },
  {
    id: 4,
    title: "fourth item",
    quantity: 0,
    total: 0,
    price: 16,
    description: "This is a first product - amazing!",
  },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            item={product}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
