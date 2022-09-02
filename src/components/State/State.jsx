import s from './State.module.css'
import React, { Component } from "react";

 export class State extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }
      
    /* ... */
    render() {
       
        const {good, neutral , bad} = this.state
       
        return (
            <div className={s.container}>
                <ul className={s.btnList}>
                    <li className={s.btnListItem}>
                        <button className={s.btn}  onClick={() => { }}>
                            GOOD
                        </button>
                    </li>
                    <li className={s.btnListItem}>
                        <button className={s.btn}>
                            NEUTRAL
                        </button>
                    </li>
                    <li className={s.btnListItem}>
                        <button className={s.btn}>
                            BAD
                        </button>
                    </li>
                </ul>
                <ul className={s.spanList}>
                    <li className={s.spanListItem}>
                        <span className={s.span}>GOOD: {good}</span>
                    </li>
                    <li className={s.spanListItem}>
                        <span className={s.span}>NEUTRAL: {neutral}</span>
                    </li>
                    <li className={s.spanListItem}>
                        <span className={s.span}>BAD: {bad}</span>
                    </li>
                </ul>
            </div>
        )
        
    }
    
  }