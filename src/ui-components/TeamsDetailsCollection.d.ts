/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TeamsDetailsProps } from "./TeamsDetails";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TeamsDetailsCollectionOverridesProps = {
    TeamsDetailsCollection?: PrimitiveOverrideProps<CollectionProps>;
    TeamsDetails?: TeamsDetailsProps;
} & EscapeHatchProps;
export declare type TeamsDetailsCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => TeamsDetailsProps;
} & {
    overrides?: TeamsDetailsCollectionOverridesProps | undefined | null;
}>;
export default function TeamsDetailsCollection(props: TeamsDetailsCollectionProps): React.ReactElement;
