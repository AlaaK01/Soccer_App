/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Competition } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CompetitionUpdateFormInputValues = {
    name?: string;
    logoUrl?: string;
    year?: number;
    country?: string;
    imageUrl?: string;
};
export declare type CompetitionUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    logoUrl?: ValidationFunction<string>;
    year?: ValidationFunction<number>;
    country?: ValidationFunction<string>;
    imageUrl?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CompetitionUpdateFormOverridesProps = {
    CompetitionUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    logoUrl?: PrimitiveOverrideProps<TextFieldProps>;
    year?: PrimitiveOverrideProps<TextFieldProps>;
    country?: PrimitiveOverrideProps<TextFieldProps>;
    imageUrl?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CompetitionUpdateFormProps = React.PropsWithChildren<{
    overrides?: CompetitionUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    competition?: Competition;
    onSubmit?: (fields: CompetitionUpdateFormInputValues) => CompetitionUpdateFormInputValues;
    onSuccess?: (fields: CompetitionUpdateFormInputValues) => void;
    onError?: (fields: CompetitionUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CompetitionUpdateFormInputValues) => CompetitionUpdateFormInputValues;
    onValidate?: CompetitionUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CompetitionUpdateForm(props: CompetitionUpdateFormProps): React.ReactElement;
