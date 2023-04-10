/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CompentitionLitenOverridesProps = {
    CompentitionLiten?: PrimitiveOverrideProps<FlexProps>;
    Frame37642821?: PrimitiveOverrideProps<FlexProps>;
    Text37642822?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    Name?: PrimitiveOverrideProps<FlexProps>;
    "Melinda Marcus"?: PrimitiveOverrideProps<TextProps>;
    Frame37642826?: PrimitiveOverrideProps<FlexProps>;
    Text37642827?: PrimitiveOverrideProps<FlexProps>;
    Headline?: PrimitiveOverrideProps<FlexProps>;
    AwayTeam?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type CompentitionLitenProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: CompentitionLitenOverridesProps | undefined | null;
}>;
export default function CompentitionLiten(props: CompentitionLitenProps): React.ReactElement;
