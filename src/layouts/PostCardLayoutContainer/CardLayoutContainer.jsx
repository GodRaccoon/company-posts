import { Grid, Typography, useMediaQuery, Box } from '@mui/material';

const CardLayoutContainer = (props) => {

    const {
        cardLayoutProps,
        renderComponentProps,
        renderComponent: RenderComponent
    } = props

    const {
        cardLayoutState = [],
        gridSpacing = 2,
        gridDirection = 'row',
        gridJustifyContent = 'center',
        gridAlignItems = 'center',
        numOfColumns = 1,
    } = cardLayoutProps;

    const isActiveSm = useMediaQuery('(max-width: 600px');
    const isActiveMd = useMediaQuery('(max-width: 900px');
    const isActiveMdLg = useMediaQuery('(max-width: 1200px');
    const isActiveX = useMediaQuery('(max-width: 1500px');

    const getColumns = (numOfColumns) => {

        if (isActiveSm || isActiveMd) {
            return 1;
        }else if(isActiveMdLg){
            return 2
        }else if(isActiveX){
            return 2
        }

        return numOfColumns;
    }

    const CardContainerStyle = {
        marginTop: '8px',
    }

    const MainContent = () => {
        return (
        <>
            {cardLayoutState.length ? (
                <Box sx={{ width: '100%' }}>
                    <Grid
                        container
                        columns={getColumns(numOfColumns)}
                        spacing={2}
                        rowSpacing={1}
                        columnSpacing={{ xs: 0.5, sm: 0.5, md: 0.5 }}
                        sx={CardContainerStyle}
                        padding={0}
                    >
                        {cardLayoutState.map((data, index) => {
                            return (
                                <Grid
                                    key={index}
                                    item
                                    sx={{
                                        marginTop: '10px',
                                    }}
                                >
                                    <RenderComponent
                                        objData={data}
                                        key={data.id}
                                        {...data}
                                        {...renderComponentProps}
                                    />
                                </Grid>
                            );
                        })}
                    </Grid>
                </Box>
            ) : (
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Typography>
                        Sorry, there is no information to show.
                    </Typography>
                </Grid>
            )}
        </>);
    };

    return (
        <Grid
            container
            direction={gridDirection}
            spacing={gridSpacing}
            justifyContent={gridJustifyContent}
            alignItems={gridAlignItems}
            sx={{ m: 'auto', p: '2 0' }}
        >
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <MainContent/>
            </Grid>
        </Grid>
    );
};

export default CardLayoutContainer;
