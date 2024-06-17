import { Box } from "@mui/material";
import Word from "../Word";

const Subtitles = ({ subtitles }) => {
    return (
        <Box>
            {
                subtitles.split(' ').slice(1).map((word, index) => {
                    return <Word word={word} key={index} />
                })
            }
        </Box>
    )
}

export default Subtitles