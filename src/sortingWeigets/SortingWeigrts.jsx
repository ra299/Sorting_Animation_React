import React from "react";
import * as sortingAlgos from "../sortingAlgos/sortAlgos.js";
import "./SortingWeigets.css";

export default class SortingWeigets extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            array: [],
        }
    }

    componentDidMount(){
        this.resetArray();
    }

    resetArray(){
        const array = [];

        for(let i =0; i<300; i++){
            array.push(randomIntForminterval(5, 500));
        }
        this.setState({array});
    }

    mergeSort(){
        const animations = sortingAlgos.mergeSort(this.state.array);
        for(let i = 0; i< animations.length; i++){
            const {comparison , swap} = animations[i];
            setTimeout(() => {
                const arrayBars = document.getElementsByClassName("array-bar");
                arrayBars[comparison[1]].style.backgroundColor = "red";     
                arrayBars[comparison[0]].style.backgroundColor = "red";
                setTimeout(() => {
                    // arrayBars[comparison[1]].style.backgroundColor = "turquoise";
                    // arrayBars[comparison[0]].style.backgroundColor = "turquoise";
                }, (i + 1) * 10);
            }, i * 10);
        }
    }

    quickSort(){

    }

    heapSort(){

    }

    bubleSort(){

    }
    testSortingAlgorithm(){
        for(let i = 0; i< 100; i++){
            const array = [];
            for(let i = 0; i < randomIntForminterval(1, 1000); i++ ){
                array.push(randomIntForminterval(-1000, 1000));
            }
            const javaScriptSortedArray = array.slice().sort((a,b) => a-b);
            const margeSortedArray = sortingAlgos.mergeSort(array.slice());
            console.log(arrayAreEqual(javaScriptSortedArray, margeSortedArray));
        }
    }

    render(){
        const {array} = this.state;

        return ( 
            <div className = "array-container">
                {array.map((value, idx) => (
                    <div 
                        className = "array-bar" 
                        key = {idx}
                        style = {{height: `${value}px`}}></div>
                ))}
                <button onClick = {() => this.resetArray()}>New Array</button>
                <button onClick = {() => this.mergeSort()}>Merge Sort</button>
                <button onClick = {() => this.quickSort()}>Quick Sort</button>
                <button onClick = {() => this.heapSort()}>Heap Sort</button>
                <button onClick = {() => this.bubleSort()}>Buble Sort</button>
                <button onClick = {() => this.testSortingAlgorithm()}>Test Sorting Algorithm</button>
            </div>
        );
    }
}

function randomIntForminterval(min, max){
    return Math.floor(Math.random() * (max - min +1) + min);
};

function arrayAreEqual(arrayOne, arrayTwo){
    if(arrayOne.length !== arrayTwo.length) return false
    for(let i = 0; i< arrayOne.length; i++){
        if(arrayOne[i] !== arrayTwo[i]){
            return false;
        } 
    }
    return true;
}