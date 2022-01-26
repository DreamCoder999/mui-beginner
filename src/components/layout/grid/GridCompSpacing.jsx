import React from "react";
import {Box, Container, styled} from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

export default function GridCompSpacing() {
    const Item = styled(Paper)(({theme}) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: "#ffffff",
        backgroundColor: "#000000"
    }));

    return (
        <Container maxWidth={"lg"}>
            <Box sx={{width: "100%", margin: "1rem 0"}}>
                <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}}>
                    <Grid item xs={6}>
                        <Item>1</Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>2</Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>3</Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>4</Item>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
};