/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { MatchProps } from "./Match";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MCollectionOverridesProps = {
    MCollection?: PrimitiveOverrideProps<CollectionProps>;
    Match?: MatchProps;
} & EscapeHatchProps;
export declare type MCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => MatchProps;
} & {
    overrides?: MCollectionOverridesProps | undefined | null;
}>;
export default function MCollection(props: MCollectionProps): React.ReactElement;
