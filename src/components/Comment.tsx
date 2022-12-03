
import { useState } from 'react';

import { Avatar } from './Avatar';

import { ThumbsUp, Trash } from "phosphor-react";

import styles from './Comment.module.css';

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment } : CommentProps) {

    const [ likeCount, setLikeCount ] = useState(0);

    function handleLikeComment() {

        setLikeCount((state) => {
            return state + 1;
        });

    }

    function handleDeleteComment() {
        
        onDeleteComment(content);

    }
    
    return (

        <div className={ styles.comment }>

            <Avatar
                hasBorder={false}
                src="https://github.com/maykbrito.png"
                alt="Foto do usuário"
            />

            <div className={ styles.commentBox }>

                <div className={ styles.commentContent }>

                    <header>
                        <div className={ styles.authorAndTime}>
                            <strong>Mayk Brito</strong>
                            <time
                                title="11 de Maio de 2022 às 08:13h"
                                dateTime="2022-05-11 08:13:30">
                                Publicado há 1h
                            </time>
                        </div>
                        <button onClick={ handleDeleteComment } title="Excluir comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{ content }</p>

                </div>

                <footer>
                    <button onClick={ handleLikeComment }>
                        <ThumbsUp /> Aplaudir <span>{ likeCount }</span>
                    </button>
                </footer>

            </div>

        </div>

    );

}