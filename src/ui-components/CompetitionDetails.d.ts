/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Competition } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, DividerProps, FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { MyIconProps } from "./MyIcon";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CompetitionDetailsOverridesProps = {
    CompetitionDetails?: PrimitiveOverrideProps<FlexProps>;
    Header?: PrimitiveOverrideProps<FlexProps>;
    Profile?: PrimitiveOverrideProps<FlexProps>;
    image37682772?: PrimitiveOverrideProps<ImageProps>;
    "Rene Brandel"?: PrimitiveOverrideProps<TextProps>;
    Overflow?: PrimitiveOverrideProps<FlexProps>;
    Icon37682775?: PrimitiveOverrideProps<ViewProps>;
    Vector37682776?: PrimitiveOverrideProps<IconProps>;
    image37682777?: PrimitiveOverrideProps<ImageProps>;
    Options?: PrimitiveOverrideProps<FlexProps>;
    Share?: PrimitiveOverrideProps<FlexProps>;
    MyIcon37682780?: MyIconProps;
    MyIcon37682781?: MyIconProps;
    MyIcon37682782?: MyIconProps;
    Bookmark?: PrimitiveOverrideProps<FlexProps>;
    Icon37682784?: PrimitiveOverrideProps<ViewProps>;
    Vector37682785?: PrimitiveOverrideProps<IconProps>;
    Body?: PrimitiveOverrideProps<FlexProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    local?: PrimitiveOverrideProps<FlexProps>;
    "Firstname Lastname"?: PrimitiveOverrideProps<TextProps>;
    "\u201CLorem ipsum dolor sit amet.\u201D"?: PrimitiveOverrideProps<TextProps>;
    Timestamp?: PrimitiveOverrideProps<TextProps>;
    Area?: PrimitiveOverrideProps<FlexProps>;
    "\u201CLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.\u201D"?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type CompetitionDetailsProps = React.PropsWithChildren<Partial<FlexProps> & {
    competition?: Competition;
    area?: React.ReactNode;
} & {
    overrides?: CompetitionDetailsOverridesProps | undefined | null;
}>;
export default function CompetitionDetails(props: CompetitionDetailsProps): React.ReactElement;
