import React from 'react';
import Link from 'next/link';

export default function Home(props) {
  return(
    <div>
      <header className="headerContainer">
        <img src={props.avatar_url} />
        <Link href="/about">
          <a>
            <h1>Next Blog Prototype</h1>
          </a>
        </Link>
      </header>

      <secton className="postsContainer">
        <h2>Posts</h2>
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
      </secton>
    </div>
  ) 
}


export async function getStaticProps() {
  return {
    props: {
      avatar_url: "https://avatars.githubusercontent.com/u/9143738?v=4"
    }
  }
}