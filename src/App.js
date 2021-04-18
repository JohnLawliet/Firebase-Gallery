import styled from 'styled-components'
import Title from './components/title/title.component';
import Form from './components/upload/form.component';
import Grid from './components/image-grid/image-grid';
import { useSelector } from 'react-redux';
import { selectFile } from './redux/imageSlice';
import Modal from './components/modal/modal';
import { useEffect } from 'react';

const Container = styled.div`
    max-width: 960px;
    margin: 0 auto;
`

function App() {
  const selectedFile = useSelector(selectFile)
  

  useEffect(() => {
  },[selectedFile])

  return (
    <Container>
      <Title />
      <Form />    
      {
        selectedFile?
        <Modal type="display"/> : 
        <Grid />
      }
     
    </Container>
  );
}

export default App;
