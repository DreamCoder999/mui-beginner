import React from "react";
import {Box, Container, styled} from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

export default function GridAutomatic() {
    const Item = styled(Paper)(({theme}) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.grey["50"],
        backgroundColor: "#242424",
        cursor:"pointer"
    }));

    return (
        <Box sx={{m: "16px 0"}}>
            <Container maxWidth={"lg"}>
                <Grid container spacing={3}>
                    <Grid item xs>
                        <Item>xs</Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>xs=6</Item>
                    </Grid>
                    <Grid item xs>
                        <Item>xs</Item>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}