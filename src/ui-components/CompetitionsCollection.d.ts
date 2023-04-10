/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CompetitionProps } from "./Competition";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CompetitionsCollectionOverridesProps = {
    CompetitionsCollection?: PrimitiveOverrideProps<CollectionProps>;
    Competition?: CompetitionProps;
} & EscapeHatchProps;
export declare type CompetitionsCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => CompetitionProps;
} & {
    overrides?: CompetitionsCollectionOverridesProps | undefined | null;
}>;
export default function CompetitionsCollection(props: CompetitionsCollectionProps): React.ReactElement;
