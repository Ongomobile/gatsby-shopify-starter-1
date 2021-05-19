import React from 'react';
import { graghql } from 'gatsby';

// This is a page query
export const query = graphql`
  query ProductQuery($shopifyId: String) {
    shopifyProduct(shopifyId: { eq: $shopifyId }) {
      title
    }
  }
`;

export default function ProductTemplate(props) {
  console.log(props);
  return <h1>{props.data.shopifyProduct.title}</h1>;
}
