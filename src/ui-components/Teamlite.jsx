/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image } from "@aws-amplify/ui-react";
export default function Teamlite(props) {
  const { team, overrides, ...rest } = props;
  return (
    <Flex
      gap="24px"
      direction="row"
      width="100px"
      height="100px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      
      padding="24px 24px 24px 24px"
      backgroundColor=""
      {...getOverrideProps(overrides, "Teamlite")}
      {...rest}
    >
      <Flex
        gap="50px"
        direction="column"
        width="90px"
        height="90px"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame")}
      >
        <Flex
          gap="16px"
          direction="column"
          width="unset"
          height="160px"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Text")}
        >
          <Image
            width="90px"
            height="90px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            borderRadius="16px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            src={team?.logoUrl}
            {...getOverrideProps(overrides, "image")}
          ></Image>
        </Flex>
      </Flex>
    </Flex>
  );
}
