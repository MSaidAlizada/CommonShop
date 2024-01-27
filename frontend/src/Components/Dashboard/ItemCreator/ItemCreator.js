import {Box, TextField, Button, FormControl} from '@mui/material';

export default function ItemCreator() {
    function handleSubmit(){
        console.log('item created')
    }
    return(
        <Box component="form" onSubmit={handleSubmit} sx={{ marginTop: 8, marginBottom: 8, marginRight : 4, display: 'flex', flexDirection: 'column', alignItems: 'center',}} noValidate autoComplete="off">
            <FormControl fullWidth sx={{ m: 1, width : '100%' }}>
                <TextField id="outlined-basic" label="Name" variant="outlined" required/>
                <TextField id="outlined-basic" label="Price" variant="outlined" type='number' required/>
                <TextField id="outlined-basic" label="Image Link" variant="outlined" required/>
                <TextField id="outlined-basic" label="Stock" variant="outlined" type='number' required/>
                <Button variant="text" type="submit">Create Item</Button>
            </FormControl>   
        </Box>
    )
}