//Match.jsx
/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function Match(props) {
  const { match, home, away, overrides, ...rest } = props;
  return (
    <Flex
      gap="24px"
      direction="row"
      width="380px"
      height="177px"
      justifyContent="center"
      alignItems="flex-end"
      position="relative"
      padding="24px 24px  24px 24px"
       backgroundColor="rgba(255,255,255,1)"
      borderRadius={'100px'}
      
      
      {...getOverrideProps(overrides, "Match")}
      {...rest}
    >
      <Flex
        gap="50px"
        direction="column"
        width="100px"
        height="100px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
      
        children={home}
        {...getOverrideProps(overrides, "Frame37732831")}
      ></Flex>
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
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="700"
          color="rgba(13,26,38,1)"
          lineHeight="25px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={match?.city}
          {...getOverrideProps(overrides, "Melinda Marcus")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(48,64,80,1)"
          lineHeight="24px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={`${match?.price}${" $"}`}
          {...getOverrideProps(overrides, "Design Engineer at Cloth Studios")}
        ></Text>
      </Flex>
      <Flex
        gap="50px"
        direction="row"
        width="100px"
        height="100px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        
        children={away}
        {...getOverrideProps(overrides, "Frame37732839")}
      ></Flex>
    </Flex>
  );
}
