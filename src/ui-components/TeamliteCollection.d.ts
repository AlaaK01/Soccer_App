/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TeamliteProps } from "./Teamlite";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TeamliteCollectionOverridesProps = {
    TeamliteCollection?: PrimitiveOverrideProps<CollectionProps>;
    Teamlite?: TeamliteProps;
} & EscapeHatchProps;
export declare type TeamliteCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => TeamliteProps;
} & {
    overrides?: TeamliteCollectionOverridesProps | undefined | null;
}>;
export default function TeamliteCollection(props: TeamliteCollectionProps): React.ReactElement;
