import Head from 'next/head';
import Image from 'next/image';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-json';
import 'prismjs/themes/prism.css';
import exampleSVG from 'public/example.svg';
import React from 'react';
import Editor from 'react-simple-code-editor';
import { Button } from '@mui/material'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

export default function Home() {
  const [code, setCode] = React.useState( `[
  [1, 0, 1, 0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 1, 0, 0, 1, 0, 0, 1],
  [1, 0, 1, 0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 1, 0, 1, 1, 1, 1, 0],
  [1, 0, 1, 0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 1, 0, 0, 1, 0, 0, 1],
  [0, 0, 1, 1, 0, 0, 1, 1, 1, 0],
]`);

const [modalIsOpen, setIsOpen] = React.useState(false);
function openModal() {
    setIsOpen(true);
  }
function closeModal() {
    setIsOpen(false);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  return (
    <>
      <Head>
        <title>Array Island</title>
        <meta name="description" content="Array Island helps you convert arrays into 2d pictures" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
          <div id="headerContainer">
            <h1 id="title">Array Island</h1>
            <div id="icons">
              <SettingsOutlinedIcon fontSize="medium" onClick={openModal}/>
            </div>
          </div>
          <div id="dataContainer">
            <div id="inputArea">
              <Editor
                value={code}
                onValueChange={code => setCode(code)}
                highlight={code => highlight(code, languages.json)}
                padding={10}
                id="textarea"
                />
                <Button variant="outlined" size='large'>Show Land</Button>
            </div>
            <div id="imageArea">
              <Image id="image" src={exampleSVG} alt={''} width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%' }}/>
            </div>
          </div>
          
      </main>
    </>
  )
}
