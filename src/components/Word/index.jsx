import axios from 'axios';
import './Word.css';

const Word = ({
    word
}) => {
    const trimWord = (word) => {
        return word.replace('.', '').replace(',', '').replace('?', '').replace('!', '').replace(';', '').replace(':', '').replace('(', '').replace(')', '').replace('[', '').replace(']', '').replace('{', '').replace('}', '').replace('<', '').replace('>', '').replace('"', '').replace("'", '');
    }

    const handleClick = async () => {
        const trimmed = trimWord(word);
        const response = await axios.post('http://localhost:5001/translate', {
            text: word
        })
        console.log(response.data['translation_text']);
    }

    return (
        <div className='word' onClick={handleClick}>{word}</div>
    )
}

export default Word