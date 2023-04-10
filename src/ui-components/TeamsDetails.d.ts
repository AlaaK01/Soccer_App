/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Team } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { DividerProps, FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { MyIconProps } from "./MyIcon";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TeamsDetailsOverridesProps = {
    TeamsDetails?: PrimitiveOverrideProps<FlexProps>;
    Header?: PrimitiveOverrideProps<FlexProps>;
    Profile?: PrimitiveOverrideProps<FlexProps>;
    image37772793?: PrimitiveOverrideProps<ImageProps>;
    "Rene Brandel"?: PrimitiveOverrideProps<TextProps>;
    Overflow?: PrimitiveOverrideProps<FlexProps>;
    Icon37772796?: PrimitiveOverrideProps<ViewProps>;
    Vector37772797?: PrimitiveOverrideProps<IconProps>;
    image37772798?: PrimitiveOverrideProps<ImageProps>;
    Options?: PrimitiveOverrideProps<FlexProps>;
    Share?: PrimitiveOverrideProps<FlexProps>;
    MyIcon37772801?: MyIconProps;
    MyIcon37772802?: MyIconProps;
    MyIcon37772803?: MyIconProps;
    Bookmark?: PrimitiveOverrideProps<FlexProps>;
    Icon37772805?: PrimitiveOverrideProps<ViewProps>;
    Vector37772806?: PrimitiveOverrideProps<IconProps>;
    Body?: PrimitiveOverrideProps<FlexProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    local?: PrimitiveOverrideProps<FlexProps>;
    "Firstname Lastname"?: PrimitiveOverrideProps<TextProps>;
    "\u201CLorem ipsum dolor sit amet.\u201D"?: PrimitiveOverrideProps<TextProps>;
    Timestamp?: PrimitiveOverrideProps<TextProps>;
    Area?: PrimitiveOverrideProps<FlexProps>;
    "\u201CLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.\u201D"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type TeamsDetailsProps = React.PropsWithChildren<Partial<FlexProps> & {
    teamdetails?: Team;
    area?: React.ReactNode;
} & {
    overrides?: TeamsDetailsOverridesProps | undefined | null;
}>;
export default function TeamsDetails(props: TeamsDetailsProps): React.ReactElement;
