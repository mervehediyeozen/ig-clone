import * as Yup from 'yup';

export const Validate = Yup.object({
    name: Yup.string().required("Zorunlu alan").min(8, "Minimum 8 karakter olmalı"),
    password: Yup.string().required("Zorunlu alan").min(8, "Minimum 8 karakter olmalı"),
});
