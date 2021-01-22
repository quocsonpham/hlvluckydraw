import React, { Component } from "react";
// import Confetti from "react-dom-confetti";
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from "react-confetti"
import TextLoop from "react-text-loop";
import { Button, Grid } from "tabler-react";

import "./Home.css";
import DrawForm from "../../components/DrawForm";
import PreviouslyDrawnItemsBlock from "../../components/PreviouslyDrawnItemsBlock";
import SiteWrapper from "../../SiteWrapper";
import "tabler-react/dist/Tabler.css";
import DRAWLIST from '../../drawlist'

const style = {
  drawForm: {
    width: "100%",
  },
};

const SLEEPTIME = 5000;
const GREETING = "Xin Chúc mừng Anh/Chị"
const drawAward = [
  "Giải khuyến khích",
  "Giải khuyến khích",
  "Giải khuyến khích",
  "Giải khuyến khích",
  "Giải khuyến khích",
  "Giải khuyến khích",
  "Giải khuyến khích",
  "Giải khuyến khích",
  "Giải khuyến khích",
  "Giải khuyến khích",
  "Giải ba",
  "Giải nhì",
  "Giải nhất"
]

const ResultText = (props) => {
  const { result, awardType } = props
  return (
    <div className="award-result">
      <span className="award-type">{awardType}</span>
      <h2 className="greeting-header">{GREETING}: </h2>
      <span>MS {GetCode(result)}</span><br />
      <span className="fullname">{GetName(result)}</span><br />
    </div>
  )
}

const GetCode = (str) => str.substr(0, str.indexOf(' '))
const GetName = (str) => str.substr(str.indexOf(' ') + 1)

// const GetFinalResult = (pastDrawnItems) => {
//   let result = pastDrawnItems.map((item, index) => `${drawAward[index]}: ${GetName(item)} (${GetCode(item)})`)
//   return result
// }

const Congratulation = (props) => {
  const { active } = props
  const { width, height } = useWindowSize()
  if (active) {
    return (
      <Confetti
        width={width}
        height={height}
      />
    )
  }
  return (<div></div>)
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      drawItems: [],
      currentItems: [],
      pastDrawnItems: new Array(13),
      result: "",
      showTextAnimation: true,
      removeDrawnItem: true,
      animationInterval: 300,
      showResult: false,
      showFinalResult: false,
      disableDrawButton: false,
      value: "",
      placeholder: "Please enter the draw items here. One item per line.",
      valid: false,
      touched: false,
      validationRules: {
        minLength: 3,
        isRequired: true,
      },
      currentDrawIndex: 0,
      isDrawing: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSkipAnimationChange = this.handleSkipAnimationChange.bind(this);
    this.handleRemoveDrawnItemChange = this.handleRemoveDrawnItemChange.bind(this);
  }

  reset = () => {
    this.setState({
      ...this.state,
      items: [],
      drawItems: [],
      currentItems: [],
      pastDrawnItems: [],
      result: "",
      showTextAnimation: true,
      removeDrawnItem: true,
      animationInterval: 300,
      showResult: false,
      showFinalResult: false,
      disableDrawButton: false,
      value: "",
      placeholder: "Please enter the draw items here. One item per line.",
      valid: false,
      touched: false,
      validationRules: {
        minLength: 3,
        isRequired: true,
      },
      currentDrawIndex: 0,
      isDrawing: false
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    // if (this.state.drawItems.length > 2) {
    // let formInputItems = this.state.drawItems;
    // let itemList = formInputItems.split("\n");
    let itemList = DRAWLIST
    this.setState({
      ...this.state,
      items: itemList,
      currentItems: itemList,
    });
    // }
  }

  handleChange(e) {
    this.setState({ [e.name]: e.value });
  }

  handleSkipAnimationChange = () => {
    this.setState({ showTextAnimation: !this.state.showTextAnimation });
  };

  handleRemoveDrawnItemChange = () => {
    this.setState({ removeDrawnItem: !this.state.removeDrawnItem });
  };

  sleep = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time));
  };

  viewResult = () => {
    const { showFinalResult } = this.state
    // let result = pastDrawnItems.map((item, index) => {
    //   return `${drawAward[index]}: ${GetName(item)} (${GetCode(item)})`
    // }
    // )

    // return (
    //   <PreviouslyDrawnItemsBlock pastDrawnItems={result} />
    // )
    // return result
    this.setState({
      ...this.state,
      showFinalResult: !showFinalResult
    })
  }

  randomDrawItem = () => {
    const { currentItems, showTextAnimation, removeDrawnItem } = this.state;
    this.setState({
      ...this.state,
      showResult: false,
      disableDrawButton: false,
      isDrawing: true,
    });

    let maxItemIndex = currentItems.length;
    let { currentDrawIndex } = this.state
    currentDrawIndex++
    let isDisableButton = currentDrawIndex >= drawAward.length;
    const randomIndex = Math.floor(Math.random() * maxItemIndex);
    this.sleep(showTextAnimation ? SLEEPTIME : 0).then(() => {
      if (currentDrawIndex <= drawAward.length) {
        this.setState({
          ...this.state,
          currentDrawIndex: currentDrawIndex
        })
      }
      const copyPastDrawItems = [...this.state.pastDrawnItems]
      copyPastDrawItems[currentDrawIndex-1] = currentItems[randomIndex]
      this.setState({
        ...this.state,
        result: currentItems[randomIndex],
        // pastDrawnItems: [
        //   ...this.state.pastDrawnItems,
        //   currentItems[randomIndex],
        // ]
        pastDrawnItems: copyPastDrawItems,
        showResult: true,
        disableDrawButton: isDisableButton,
        isDrawing: false
      });

    });

    if (removeDrawnItem) {
      const copyCurrentItems = [...this.state.currentItems];
      copyCurrentItems.splice(randomIndex, 1);
      this.setState({
        currentItems: copyCurrentItems,
      });
    }
  };

  render() {
    const {
      items,
      drawItems,
      currentItems,
      result,
      disableDrawButton,
      pastDrawnItems,
      placeholder,
      showResult,
      showFinalResult,
      currentDrawIndex,
      isDrawing
    } = this.state;
    return (
      <SiteWrapper>
        {items.length !== 0 && (
          <div className="draw-block">
            <Congratulation active={this.state.showResult} />

            {showFinalResult && (
              <Grid.Row>
                <Grid.Col md={12} sm={12} className="past-draw-wrapper">
                  <PreviouslyDrawnItemsBlock pastDrawnItems={pastDrawnItems} />
                </Grid.Col>
              </Grid.Row>
            )}
            <Grid.Row>
              <Grid.Col md={8} sm={8} offsetMd={4}>
                <div className="draw-section">
                  {!showResult && items && isDrawing && (
                    <TextLoop
                      className="draw-text"
                      interval={100}
                      springConfig={{ stiffness: 600, damping: 100 }}
                      children={items.map((item) => { return GetName(item) })}
                    />
                  )}
                  {showResult && !showFinalResult &&
                    <ResultText result={result} awardType={drawAward[currentDrawIndex - 1]} />
                  }
                </div>
              </Grid.Col>
            </Grid.Row>
          </div>
        )}

        <Grid.Row className="start-form container">
          <Grid.Col xs={3} md={3}>
            {!showFinalResult &&
              <DrawForm
                drawItems={drawItems}
                onSubmit={this.handleSubmit}
                handleSkipAnimationChange={this.handleSkipAnimationChange}
                handleRemoveDrawnItemChange={this.handleRemoveDrawnItemChange}
                onChange={this.handleChange}
                placeholder={placeholder}
                style={style.drawForm}
              />}
            <Button onClick={this.viewResult}>
              Xem kết quả
            </Button>
            {/* <a href='#' onClick={this.reset}>
              Reset
            </a> */}

          </Grid.Col>
          {!showFinalResult &&
            <Grid.Col xs={9} md={9}>
              <div className='draw-button-wrapper'>
                <Button
                  pill
                  block
                  name="drawButton"
                  color="danger"
                  onClick={this.randomDrawItem}
                  disabled={disableDrawButton || currentItems.length <= 1}
                >
                  {drawAward[currentDrawIndex] ? `Quay ${drawAward[currentDrawIndex]}` : "Chúc mừng năm mới"}
                </Button>
              </div>
            </Grid.Col>}
        </Grid.Row>
      </SiteWrapper>
    );
  }
}

export default App;
