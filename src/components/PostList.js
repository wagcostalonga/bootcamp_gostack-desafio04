import React, { Component } from 'react';

import Post from './Post';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Durval Vieira",
          avatar: "https://i.pravatar.cc/150?img=8"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 2,
            author: {
              name: "Wagner Costalonga",
              avatar: "https://i.pravatar.cc/150?img=68"
            },
            content: "A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts pode me chamar no Discord(Sério, me chamem mesmo, esse comentário é real)."
          }
        ]
      },
      {
        id: 3,
        author: {
          name: "Giovani Cuenca",
          avatar: "https://i.pravatar.cc/150?img=18"
        },
        date: "04 Jun 2019",
        content: "Fala galera, beleza?\nEstou fazendo o Bootcamp GoStack da Rocketseat e está sendo muito massa! Alguém mais aí fazendo, comenta na publicação para trocarmos uma idéia.",
        comments: [
          {
            id: 4,
            author: {
              name: "Carla Petta",
              avatar: "https://i.pravatar.cc/150?img=48"
            },
            content: "Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios construída."
          },
          {
            id: 5,
            author: {
              name: "Talita Tordin",
              avatar: "https://i.pravatar.cc/150?img=47"
            },
            content: "Que maaaassa! Estou pensando em me inscrever na próxima turma para ver qual é desse GoStack. Dizem que os devs saem de lá com super poderes!"
          }
        ]
      }
    ]
  };

  render() {
    const { posts } = this.state
    return (
      <div className="postlist">
        {posts.map(post => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;