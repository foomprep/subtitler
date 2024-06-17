import { Box } from "@mui/material";
import Word from "../Word";

const Subtitles = ({ subtitles }) => {
    return (
        <Box
	  display='flex'
	  flexWrap='wrap'
	  gap={1}
	  fontSize='16px'
	  fontFamily='Monospace'
	  padding={1}
	>
            {
                subtitles.split(' ').slice(1).map((word, index) => {
                    return <Word word={word} key={index} />
                })
            }
        </Box>
    )
}

export default Subtitles
