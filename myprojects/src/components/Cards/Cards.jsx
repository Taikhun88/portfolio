import React from 'react'
import classNames from './Cards.module.css'

function Cards() {
    return (
        <div className = {classNames.container}>
            <div className = {classNames.cards}>
                <div className = {classNames.cercle}></div>
                <div className = {classNames.commentBox}></div>
            </div>

            <div className = {classNames.cards}>
                <div className = {classNames.cercle}></div>
                <div className = {classNames.commentBox}></div>
            </div>

            <div className = {classNames.cards}>
                <div className = {classNames.cercle}> </div>
                <div className = {classNames.commentBox}></div>
            </div>
        </div>
    )
}

export default Cards
