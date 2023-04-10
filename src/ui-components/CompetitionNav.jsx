//CompetitionNav.jsx
/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Image } from "@aws-amplify/ui-react";
export default function CompetitionNav(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="20px"
      direction="row"
      width="1440px"
      height="70px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="24px 32px 24px 3px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "CompetitionNav")}
      {...rest}
    >
      
      <Flex
        gap="32px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-end"
        alignItems="center"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 321")}
      >
        <Button
          width="unset"
          height="unset"
          shrink="0"
          size="small"
          isDisabled={false}
          variation="default"
          children="Add Competition"
          backgroundColor={'white'}
          {...getOverrideProps(overrides, "Button")}
        ></Button>
        <Image
          width="30px"
          height="41px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          borderRadius="160px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          {...getOverrideProps(overrides, "image")}
        ></Image>
      </Flex>
    </Flex>
  );
}