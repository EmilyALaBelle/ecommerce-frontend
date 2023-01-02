import { Card, CardActionArea, CardContent, CardHeader, CardMedia, Typography } from "@mui/material"
import "../assets/ProductCard.css"

export default function SmartphoneCard({ smartphone, setSmartphone }) {
  return (

    <>
      <div className="div-box">
        <Card>
          <CardActionArea>
            <CardHeader
              title={smartphone.title}
              subheader={smartphone.brand}>
            </CardHeader>
            <CardMedia
              className="image"
              component="img"
              image={smartphone.thumbnail}>
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                ${smartphone.price}
              </Typography>
              <Typography varient="h6" >
                rating: {smartphone.rating}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </>
  )


}