/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { MatchProps } from "./Match";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MatchLitenCollectionOverridesProps = {
    MatchLitenCollection?: PrimitiveOverrideProps<CollectionProps>;
    Match?: MatchProps;
} & EscapeHatchProps;
export declare type MatchLitenCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => MatchProps;
} & {
    overrides?: MatchLitenCollectionOverridesProps | undefined | null;
}>;
export default function MatchLitenCollection(props: MatchLitenCollectionProps): React.ReactElement;
