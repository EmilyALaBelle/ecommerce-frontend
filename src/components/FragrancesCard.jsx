import { Card, CardActionArea, CardContent, CardHeader, CardMedia, Typography } from "@mui/material"
import "../assets/ProductCard.css"

export default function FragrancesCard({ fragrance, setFragrance }) {
  return (

    <>
      <div className="div-box">
        <Card>
          <CardActionArea>
            <CardHeader
              title={fragrance.title}
              subheader={fragrance.brand}>
            </CardHeader>
            <CardMedia
              className="image"
              component="img"
              image={fragrance.thumbnail}>
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                ${fragrance.price}
              </Typography>
              <Typography varient="h6" >
                rating: {fragrance.rating}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </>
  )


}