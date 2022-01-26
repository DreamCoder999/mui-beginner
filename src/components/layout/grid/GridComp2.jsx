import React from "react";
import {Box, Container, Grid, Paper, styled} from "@mui/material";

export default function GridComp2() {
    const Item = styled(Paper)(({theme}) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: "center",
        color: theme.palette.grey["100"],
        backgroundColor: theme.palette.grey["900"],
        cursor: "pointer"
    }))

    return (
        <Box sx={{backgroundColor: "#444444", padding: "2rem 0"}}>
            <Container xs={"sm"} sx={{m: "0 auto", textAlign: "center"}}>
                <Grid container spacing={2}>
                    <Grid item xs={6} md={8}>
                        <Item>xs=6 md=8</Item>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <Item>xs=6 md=8</Item>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <Item>xs=6 md=8</Item>
                    </Grid>
                    <Grid item xs={6} md={8}>
                        <Item>xs=6 md=8</Item>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
