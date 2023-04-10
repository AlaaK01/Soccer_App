/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { DividerProps, FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { MyIconProps } from "./MyIcon";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AmpligramVariant2OverridesProps = {
    AmpligramVariant2?: PrimitiveOverrideProps<FlexProps>;
    Header?: PrimitiveOverrideProps<FlexProps>;
    Profile?: PrimitiveOverrideProps<FlexProps>;
    image37682745?: PrimitiveOverrideProps<ImageProps>;
    "Rene Brandel"?: PrimitiveOverrideProps<TextProps>;
    Overflow?: PrimitiveOverrideProps<FlexProps>;
    Icon37682748?: PrimitiveOverrideProps<ViewProps>;
    Vector37682749?: PrimitiveOverrideProps<IconProps>;
    image37682750?: PrimitiveOverrideProps<ImageProps>;
    Options?: PrimitiveOverrideProps<FlexProps>;
    Share?: PrimitiveOverrideProps<FlexProps>;
    MyIcon37682753?: MyIconProps;
    MyIcon37682754?: MyIconProps;
    MyIcon37682755?: MyIconProps;
    Bookmark?: PrimitiveOverrideProps<FlexProps>;
    Icon37682757?: PrimitiveOverrideProps<ViewProps>;
    Vector37682758?: PrimitiveOverrideProps<IconProps>;
    Body?: PrimitiveOverrideProps<FlexProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    Area?: PrimitiveOverrideProps<FlexProps>;
    "Firstname Lastname"?: PrimitiveOverrideProps<TextProps>;
    "\u201CLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.\u201D"?: PrimitiveOverrideProps<TextProps>;
    Timestamp?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type AmpligramVariant2Props = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: AmpligramVariant2OverridesProps | undefined | null;
}>;
export default function AmpligramVariant2(props: AmpligramVariant2Props): React.ReactElement;
