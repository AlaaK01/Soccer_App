/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CompetitionCreateFormInputValues = {
    name?: string;
    logoUrl?: string;
    year?: number;
    country?: string;
    imageUrl?: string;
};
export declare type CompetitionCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    logoUrl?: ValidationFunction<string>;
    year?: ValidationFunction<number>;
    country?: ValidationFunction<string>;
    imageUrl?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CompetitionCreateFormOverridesProps = {
    CompetitionCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    logoUrl?: PrimitiveOverrideProps<TextFieldProps>;
    year?: PrimitiveOverrideProps<TextFieldProps>;
    country?: PrimitiveOverrideProps<TextFieldProps>;
    imageUrl?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CompetitionCreateFormProps = React.PropsWithChildren<{
    overrides?: CompetitionCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CompetitionCreateFormInputValues) => CompetitionCreateFormInputValues;
    onSuccess?: (fields: CompetitionCreateFormInputValues) => void;
    onError?: (fields: CompetitionCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CompetitionCreateFormInputValues) => CompetitionCreateFormInputValues;
    onValidate?: CompetitionCreateFormValidationValues;
} & React.CSSProperties>;
export default function CompetitionCreateForm(props: CompetitionCreateFormProps): React.ReactElement;
