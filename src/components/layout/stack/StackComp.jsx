import React from "react";
import {Stack, styled} from "@mui/material";
import Paper from "@mui/material/Paper";


export default function StackComp() {
    const Item = styled(Paper)(({theme}) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: "#ffffff",
        backgroundColor: "#242424",
        cursor: "pointer",
    }));

    return (
        <div>
            <div>
                <Stack spacing={2} m={2}>
                    <Item>Item 1</Item>
                    <Item>Item 2</Item>
                    <Item>Item 3</Item>
                    <Item>Item 4</Item>
                </Stack>
            </div>
            <div>
                <Stack direction={"row"} spacing={2} m={2}>
                    <Item>Item 1</Item>
                    <Item>Item 2</Item>
                    <Item>Item 3</Item>
                    <Item>Item 4</Item>
                </Stack>
            </div>
        </div>
    )
}