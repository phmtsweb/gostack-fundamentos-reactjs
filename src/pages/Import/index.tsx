import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';

import filesize from 'filesize';

import Header from '../../components/Header';
import FileList from '../../components/FileList';
import Upload from '../../components/Upload';

import { Container, Title, ImportFileContainer, Footer } from './styles';

import alert from '../../assets/alert.svg';
import api from '../../services/api';

interface FileProps {
  file: File;
  name: string;
  readableSize: string;
}

const Import: React.FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState<FileProps[]>([]);
  // const history = useHistory();

  async function handleUpload(): Promise<void> {
    const data = new FormData();
    uploadedFiles.forEach(uploadedFile =>
      data.append('file', uploadedFile.file, uploadedFile.name),
    );

    // TODO

    try {
      await api.post('/transactions/import', data);
    } catch (err) {
      console.error(err);
    }
  }

  function submitFile(files: File[]): void {
    const uploadedFilesTmp = files.map(fileItem => {
      const { name, size } = fileItem;
      const uploadedFileTmp: FileProps = {
        file: fileItem,
        name,
        readableSize: filesize(size),
      };
      return uploadedFileTmp;
    });
    setUploadedFiles([...uploadedFiles, ...uploadedFilesTmp]);
  }

  return (
    <>
      <Header size="small" currentPage="import" />
      <Container>
        <Title>Importar uma transação</Title>
        <ImportFileContainer>
          <Upload onUpload={submitFile} />
          {!!uploadedFiles.length && <FileList files={uploadedFiles} />}

          <Footer>
            <p>
              <img src={alert} alt="Alert" />
              Permitido apenas arquivos CSV
            </p>
            <button onClick={handleUpload} type="button">
              Enviar
            </button>
          </Footer>
        </ImportFileContainer>
      </Container>
    </>
  );
};

export default Import;
