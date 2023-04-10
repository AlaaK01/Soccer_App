/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, ImageProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CompetitionNavOverridesProps = {
    CompetitionNav?: PrimitiveOverrideProps<FlexProps>;
    "golden-winning-trophy-vector-collection-with-a-football-for-soccer-match-celebration-golden-color-trophy-collection-for-winning-team-celebration-free-png 1"?: PrimitiveOverrideProps<ImageProps>;
    "Frame 321"?: PrimitiveOverrideProps<FlexProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type CompetitionNavProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: CompetitionNavOverridesProps | undefined | null;
}>;
export default function CompetitionNav(props: CompetitionNavProps): React.ReactElement;
