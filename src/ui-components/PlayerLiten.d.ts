/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PlayerLitenOverridesProps = {
    PlayerLiten?: PrimitiveOverrideProps<FlexProps>;
    Frame?: PrimitiveOverrideProps<FlexProps>;
    Text37732811?: PrimitiveOverrideProps<FlexProps>;
    Headline37732812?: PrimitiveOverrideProps<FlexProps>;
    AwayTeam37732813?: PrimitiveOverrideProps<TextProps>;
    Name?: PrimitiveOverrideProps<FlexProps>;
    VS?: PrimitiveOverrideProps<TextProps>;
    Text37732816?: PrimitiveOverrideProps<FlexProps>;
    Headline37732817?: PrimitiveOverrideProps<FlexProps>;
    AwayTeam37732818?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type PlayerLitenProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: PlayerLitenOverridesProps | undefined | null;
}>;
export default function PlayerLiten(props: PlayerLitenProps): React.ReactElement;
