import Item from "./Item/Item";
import Grid from '@mui/material/Grid';

export default function Items(){
    return (
        <div className="Items">
            <Grid container spacing={2} justifyContent='center'>
                <Grid item xs={12} md={3} sm={6} lg={2} xl={1}>
                    <Item name="Indomie" price="2" imglink="https://shorturl.at/cdwCQ" stock="5" />
                </Grid>
                <Grid item xs={12} md={3} sm={6} lg={2} xl={1}>
                    <Item name="Salad Chips" price="1" imglink="https://shorturl.at/diX38" stock="3" />
                </Grid>
                <Grid item xs={12} md={3} sm={6} lg={2} xl={1}>
                    <Item name="Salad Chips" price="1" imglink="https://shorturl.at/diX38" stock="3" />
                </Grid>
                <Grid item xs={12} md={3} sm={6} lg={2} xl={1}>
                    <Item name="Salad Chips" price="1" imglink="https://shorturl.at/diX38" stock="3" />
                </Grid>
            </Grid> 
        </div>
    )
}