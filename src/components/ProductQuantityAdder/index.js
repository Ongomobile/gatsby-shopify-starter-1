import React from 'react';
import { Button } from '../Button';
import { Input } from '../Input';
import { ProductQuantityWrapper } from './styles';
import CartContext from 'context/CartContext';

export function ProductQuantityAdder({ variantId, available }) {
  const [quantity, setQuantity] = React.useState(1);
  const { updateLineItem } = React.useContext(CartContext);

  const handleQuantityChange = e => {
    setQuantity(e.currentTarget.value);
  };

  const handleSubmit = e => {
    console.log('Called');
    e.preventDefault();
    updateLineItem({ variantId, quantity: parseInt(quantity, 10) });
  };

  return (
    <ProductQuantityWrapper>
      <strong>Quantity</strong>
      <form onSubmit={handleSubmit}>
        <Input
          disabled={!available}
          type="number"
          min="1"
          step="1"
          value={quantity}
          onChange={handleQuantityChange}
        />
        <Button type="submit" disabled={!available} fullWidth>
          Add to cart
        </Button>
      </form>
    </ProductQuantityWrapper>
  );
}
