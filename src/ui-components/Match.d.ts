/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Match } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MatchOverridesProps = {
    Match?: PrimitiveOverrideProps<FlexProps>;
    Frame37732831?: PrimitiveOverrideProps<FlexProps>;
    Text37732832?: PrimitiveOverrideProps<FlexProps>;
    Headline37732833?: PrimitiveOverrideProps<FlexProps>;
    AwayTeam37732834?: PrimitiveOverrideProps<TextProps>;
    image37732835?: PrimitiveOverrideProps<ImageProps>;
    Name?: PrimitiveOverrideProps<FlexProps>;
    "Melinda Marcus"?: PrimitiveOverrideProps<TextProps>;
    "Design Engineer at Cloth Studios"?: PrimitiveOverrideProps<TextProps>;
    Frame37732839?: PrimitiveOverrideProps<FlexProps>;
    Text37732840?: PrimitiveOverrideProps<FlexProps>;
    Headline37732841?: PrimitiveOverrideProps<FlexProps>;
    AwayTeam37732842?: PrimitiveOverrideProps<TextProps>;
    image37732843?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type MatchProps = React.PropsWithChildren<Partial<FlexProps> & {
    match?: Match;
    home?: React.ReactNode;
    away?: React.ReactNode;
} & {
    overrides?: MatchOverridesProps | undefined | null;
}>;
export default function Match(props: MatchProps): React.ReactElement;
