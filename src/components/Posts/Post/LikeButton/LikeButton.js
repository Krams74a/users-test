import React, {useEffect, useState} from 'react';
import HeartOutline from "../../../../assets/like/heart-outline.png";
import HeartFilled from "../../../../assets/like/heart-filled.png";
import {likePost} from "../../../../reducers/posts-reducer";

const LikeButton = (props) => {
    const [isLiked, setIsLiked] = useState(false)
    const [likesCount, setLikesCount] = useState(props.likesCount)
    useEffect(() => {
        props.likedUsers.forEach((username) => {
            if (username === props.loggedUsername) {
                setIsLiked(true)
            }
        })
    }, [])

    const onLike = () => {
        if (isLiked) {
            props.dislikePost(props.id, props.loggedUsername)
            setIsLiked(false)
            setLikesCount(likesCount-1)
        } else {
            props.likePost(props.id, props.loggedUsername)
            setIsLiked(true)
            setLikesCount(likesCount+1)
        }
    }

    return (
        <div style={{width: "100%", height: "100%", display: "flex"}}>
            <img src={isLiked ? HeartFilled : HeartOutline} style={{width: "100%", height: "100%", marginRight: "6px", cursor: "pointer"}} onClick={onLike}/>
            <span>{likesCount}</span>
        </div>
    );
};

export default LikeButton;
