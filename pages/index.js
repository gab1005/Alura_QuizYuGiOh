import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import QuizContainer from '../src/components/QuizContainer';

/**
  const BackgroundImage = styled.div`
  background-image: url(${ db.bg });
  flex: 1;
  background-size: cover;
  background-position: center;
`;
*/

export default function Home() {
  // necessario iniciar o router antes.
  const router = useRouter();

  const [name, setName] = React.useState('');
  console.log('retorno do useState', name, setName);


  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Head>
          <title>Yu-Gi-Quiz!</title>
        </Head>
        <Widget>
          <Widget.Header>
            <h1>TITULO DE TESTE</h1>
          </Widget.Header>

          <Widget.Content>
            {/** codigo responsavel por mandar os dados do usuario */}
            <form onSubmit={ function (infosDoEvento) {
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
              console.log('fazendo uma submissao por meio do react');
            }}
            >
              <Input
                name="nomeDoUsuario"
                onChange={(infosDoEvento) => { setName(infosDoEvento.target.value); }}
                placeholder="diz ai seu nome, meu bom"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                {`Jogar ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>TITULO DE TESTE</h1>

            <p>paragrafo de teste</p>
          </Widget.Content>
        </Widget>

        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/gab1005" />
    </QuizBackground>
  );
}
