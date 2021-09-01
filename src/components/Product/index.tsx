/** @format */

import * as React from "react";
import { Flex } from "@chakra-ui/react";
import { GlobalData } from "../../App";
import { ProductItem } from "../ProductItem";

export interface ProductProps {}

export function Product(props: ProductProps) {
  return (
    <GlobalData.Consumer>
      {({ productData }) => (
        <Flex
          wrap="wrap"
          justify="space-evenly"
          backgroundColor="#020202"
          pb="50px"
          height="auto">
          {productData.map((element) => {
            return <ProductItem key={element.id} dataItem={element} />;
          })}
        </Flex>
      )}
    </GlobalData.Consumer>
  );
}