import React from "react";
import style from './MainPage.module.scss';
import tittleImg from '../../assets/images/interfaces/tittle.png';

export default function MainPage() : JSX.Element{
    // 브랜치 테스트
    return (
        <div className={style.container}>
            <img className={style.tittle} src={tittleImg} alt="Title"></img>
            <a className={style.play} href="#">Play</a>
        </div>
    );
}