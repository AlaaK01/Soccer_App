

//MatchLite.jsx
/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function MatchLite(props) {
  const { matchlite, home, away, overrides, ...rest } = props;
  return (
    <Flex
      gap="24px"
      direction="row"
      width="480px"
      height="100px"
      justifyContent="space-evenly"
      alignItems="center"
      position="relative"
     
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "MatchLite")}
      {...rest}
    >
      <Flex
        gap="0"
        direction="row"
        width="148px"
        height="39px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        children={home}
        {...getOverrideProps(overrides, "Frame")}
      ></Flex>
     <h5>VS</h5>
      <Flex
        gap="16px"
        direction="column"
        width="171px"
        height="39px"
        justifyContent="center"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 20px"
        children={away}
        {...getOverrideProps(overrides, "Text37732805")}
      ></Flex>
    </Flex>
  );
}
