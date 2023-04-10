/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TeamLitenOverridesProps = {
    TeamLiten?: PrimitiveOverrideProps<FlexProps>;
    Frame?: PrimitiveOverrideProps<FlexProps>;
    Text37732821?: PrimitiveOverrideProps<FlexProps>;
    Headline37732822?: PrimitiveOverrideProps<FlexProps>;
    AwayTeam37732823?: PrimitiveOverrideProps<TextProps>;
    Name?: PrimitiveOverrideProps<FlexProps>;
    VS?: PrimitiveOverrideProps<TextProps>;
    Text37732826?: PrimitiveOverrideProps<FlexProps>;
    Headline37732827?: PrimitiveOverrideProps<FlexProps>;
    AwayTeam37732828?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type TeamLitenProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: TeamLitenOverridesProps | undefined | null;
}>;
export default function TeamLiten(props: TeamLitenProps): React.ReactElement;
