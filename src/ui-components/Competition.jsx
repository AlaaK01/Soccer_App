//Competition.jsx
/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
export default function Competition(props) {
  const { competition, overrides, ...rest } = props;
  return (
    <Flex
      gap="0px"
      direction="column"
      width="250px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="0px 24px 0px 24px"
      backgroundColor="none"
      {...getOverrideProps(overrides, "Competition")}
      {...rest}
    >
      <Image
        width="160px"
        height="200px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        borderRadius="0px"
        padding="0px 0px 0px 0px"
        objectFit="contain"
        src={competition?.logoUrl}
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Flex
        gap="8px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Name")}
      >
       
      </Flex>
    </Flex>
  );
}
