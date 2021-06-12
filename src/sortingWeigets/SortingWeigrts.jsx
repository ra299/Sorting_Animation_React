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

        for(let i =0; i<10; i++){
            array.push(randomIntFormInterval(5, 500));  
        }
        this.setState({array});
    }

    mergeSort(){
        const animations = sortingAlgos.mergeSort(this.state.array);
        const newAnimations = [];
        for (const animation of animations){
            newAnimations.push(animation.comparison);
            newAnimations.push(animation.comparison);
            newAnimations.push(animation.swap);
        }
        for (let i = 0; i< newAnimations.length; i++){
            const arrayBars = document.getElementsByClassName("array-bar");
            const isColorChange = i % 3 !== 2;
            if(isColorChange){
                const [barOneIdx, barTwoIdx] = newAnimations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? "red" : "turquoise";
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * 10);
            }else{
                setTimeout(() => {
                    const [barOneIdx, newHeight] = newAnimations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * 10);
            }
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
            for(let i = 0; i < randomIntFormInterval(1, 1000); i++ ){   
                array.push(randomIntFormInterval(-1000, 1000)); 
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

function randomIntFormInterval(min, max){   
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