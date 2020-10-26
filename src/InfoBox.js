import { Card, CardContent, Typography } from '@material-ui/core'
import React from 'react'
import './InfoBox.css'
function InfoBox({ title, newCases, totalCases }) {
    return (
        <Card className='infoBox'>
            <CardContent>
                <Typography className='infoBox__title'>
                    {title}
                </Typography>
                <Typography className='infoBox__cases' variant="h5" component="h2">
                    {newCases}
                </Typography>
                <Typography className='infoBox__total' color='textSecondary'>
                    {totalCases}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default InfoBox
