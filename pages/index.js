import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Footer from '../components/Footer';

const SubTitle = styled.h2`
  background-color: var(--primary);
  color: white;
  display: inline-block;
  padding: 5px;
`;

export default function Home(props) {
  return(
    <div>
      <header className="headerContainer">
        <img src={props.gitHubAvatarUrl} />
        <Link href="/about">
          <a>
            <h1>Next Blog Prototype</h1>
          </a>
        </Link>
      </header>

      <section className="postsContainer">
        <SubTitle>Posts</SubTitle>
        <article className="postsContainer__post">
          <a href="/">
            Título do Post
          </a>
          <p>
            Resumo do Post
          </p>
        </article>
        <article className="postsContainer__post">
          <a href="/">
            Título do Post
          </a>
          <p>
            Resumo do Post
          </p>
        </article>
      </section >
      <section  className="postsContainer">
        <SubTitle>Repositórios Favoritos</SubTitle>
        {
          props.gitHubPinnedRepos.map((pinnedRepo) => {
            return(
              <article className="postContainer__post" key={pinnedRepo.repo}> 
                <a href="/">
                  {pinnedRepo.repo}
                </a>
                <p>
                  {pinnedRepo.description}  
                </p>
              </article>
            )
          })
        }
      </section >
      <Footer />
    </div>
  ) 
}


export async function getStaticProps() {
  
  const gitHubResponse = await fetch('https://api.github.com/users/matsfranco')
    .then(res => res.json())

  const gitHubPinnedRepos = await fetch('https://gh-pinned-repos.now.sh/?username=matsfranco')
    .then(res => res.json())  

  return {
    props: {
      gitHubAvatarUrl: gitHubResponse.avatar_url,
      gitHubPinnedRepos
    }
  }
}