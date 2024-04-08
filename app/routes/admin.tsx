import { Rating } from "@mui/material";
import React from "react";
import { useParams } from "@remix-run/react";

export default function Admin() {
    const params = useParams();
    debugger
    const isAllowed = false;
    const [value, setValue] = React.useState<number | null>(2);

    const adminComponents = () => {
        return (
            <>
                <h1>Welcome Vincent!</h1>
                <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }} />
            </>
        )
    }
    return (
        isAllowed ? adminComponents : <h1>Unauthorized</h1>
    );
}