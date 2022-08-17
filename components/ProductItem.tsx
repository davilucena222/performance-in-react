import dynamic from "next/dynamic";
import { memo, useState } from "react";
import { AddProductToWishListProps } from "./AddProductToWishList";
import lodash from "lodash";
// import { AddProductToWishList } from "./AddProductToWishList";

const AddProductToWishList = dynamic<AddProductToWishListProps>(() => {
  return import("./AddProductToWishList").then(module => module.AddProductToWishList);
}, { 
  loading: () => <span>Carregando...</span> 
});

interface ProductItemProps {
  product: {
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  }
  onAddToWishList: (id: number) => void;
}

function ProductItemComponent({ product, onAddToWishList }: ProductItemProps) {
  const [isAddingToWishList, setIsAddingToWishList] = useState(false);

  return (
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button onClick={() => setIsAddingToWishList(true)}>Adicionar aos favoritos</button>

      {isAddingToWishList && (
        <AddProductToWishList
          onAddToWishList={() => onAddToWishList(product.id)}
          onRequestClose={() => setIsAddingToWishList(false)}
        />
      )}
    </div>
  );
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  // return Object.is(prevProps.product, nextProps.product);
  return lodash.isEqual(prevProps.product, nextProps.product);
});