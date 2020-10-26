import { Card, CardContent, Typography } from '@material-ui/core'
import React from 'react'
import './InfoBox.css'
function InfoBox({ title, newCases, totalCases }) {
    return (
        <Card className='infoBox'>
            <CardContent>
                <Typography>
                    CoronaVirus Cases
                </Typography>
                <Typography>
                    +2000
                </Typography>
                <Typography>
                    +1500
                </Typography>
            </CardContent>
        </Card>
    )
}

export default InfoBox
