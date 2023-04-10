/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Match } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MatchLiteOverridesProps = {
    MatchLite?: PrimitiveOverrideProps<FlexProps>;
    Frame?: PrimitiveOverrideProps<FlexProps>;
    Text37732801?: PrimitiveOverrideProps<FlexProps>;
    Headline37732802?: PrimitiveOverrideProps<FlexProps>;
    AwayTeam37732803?: PrimitiveOverrideProps<TextProps>;
    Name?: PrimitiveOverrideProps<FlexProps>;
    VS?: PrimitiveOverrideProps<TextProps>;
    Text37732805?: PrimitiveOverrideProps<FlexProps>;
    Headline37732806?: PrimitiveOverrideProps<FlexProps>;
    AwayTeam37732807?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type MatchLiteProps = React.PropsWithChildren<Partial<FlexProps> & {
    matchlite?: Match;
    home?: React.ReactNode;
    away?: React.ReactNode;
} & {
    overrides?: MatchLiteOverridesProps | undefined | null;
}>;
export default function MatchLite(props: MatchLiteProps): React.ReactElement;
