/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ImageProps, ViewProps } from "@aws-amplify/ui-react";
import { HeroLayout3Props } from "./HeroLayout3";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HeroLayout2Variant5OverridesProps = {
    HeroLayout2Variant5?: PrimitiveOverrideProps<ViewProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    HeroLayout3?: HeroLayout3Props;
} & EscapeHatchProps;
export declare type HeroLayout2Variant5Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: HeroLayout2Variant5OverridesProps | undefined | null;
}>;
export default function HeroLayout2Variant5(props: HeroLayout2Variant5Props): React.ReactElement;
