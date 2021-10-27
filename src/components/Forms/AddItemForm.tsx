import {useFormik} from "formik";

type AddItemFormType = {
    addItem: (item: string) => void
}
export const AddItemForm = (props: AddItemFormType) => {
    const formik = useFormik({
        initialValues: {
            message: '',
        },
        onSubmit: values => {
            // alert(JSON.stringify(values, null, 2));
            props.addItem(values.message)

        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="message">new message</label>
            <input
                id="message"
                name="message"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.message}
            />

            <button type="submit">Submit</button>
        </form>
    );
}