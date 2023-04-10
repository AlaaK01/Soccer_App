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
export declare type TeamCreateFormInputValues = {
    name?: string;
    logoUrl?: string;
    coach?: string;
    city?: string;
    country?: string;
    imageUrl?: string;
};
export declare type TeamCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    logoUrl?: ValidationFunction<string>;
    coach?: ValidationFunction<string>;
    city?: ValidationFunction<string>;
    country?: ValidationFunction<string>;
    imageUrl?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TeamCreateFormOverridesProps = {
    TeamCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    logoUrl?: PrimitiveOverrideProps<TextFieldProps>;
    coach?: PrimitiveOverrideProps<TextFieldProps>;
    city?: PrimitiveOverrideProps<TextFieldProps>;
    country?: PrimitiveOverrideProps<TextFieldProps>;
    imageUrl?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TeamCreateFormProps = React.PropsWithChildren<{
    overrides?: TeamCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TeamCreateFormInputValues) => TeamCreateFormInputValues;
    onSuccess?: (fields: TeamCreateFormInputValues) => void;
    onError?: (fields: TeamCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TeamCreateFormInputValues) => TeamCreateFormInputValues;
    onValidate?: TeamCreateFormValidationValues;
} & React.CSSProperties>;
export default function TeamCreateForm(props: TeamCreateFormProps): React.ReactElement;
