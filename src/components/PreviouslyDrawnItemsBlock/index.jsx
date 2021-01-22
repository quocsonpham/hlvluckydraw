import React from "react";
import { Table } from "tabler-react";
import "./style.css";

const PreviouslyDrawnItemsBlock = props => {
  const { pastDrawnItems } = props;
  console.log(pastDrawnItems);
  const first = pastDrawnItems.length === 13 ? pastDrawnItems[12] : ""
    const second = pastDrawnItems.length === 13 ? pastDrawnItems[11] : ""
  const third = pastDrawnItems.length === 13 ? pastDrawnItems[10] : ""
  const consolations = pastDrawnItems.length === 13 ? pastDrawnItems.slice(0, 10) : []

  const GetCode = (str) => {
    try {
      return str.substr(0, str.indexOf(' '))
    } catch (error) {
      return ""
    }
  }
  const GetName = (str) => {
    try {
      return str.substr(str.indexOf(' ') + 1)
    } catch (error) {
      return ""
    }
  }

  const DisplayName = (str) => `${GetName(str)} (${GetCode(str)})`

  // console.log(pastDrawnItems)
  console.log(first, second, third, consolations)

  return (
    // <Card
    //   title="Kết quả"
    //   className="past-drawn-block"
    //   body={
        <Table className="past-drawn-block">
          <Table.Header>
            <Table.ColHeader>Giải nhất</Table.ColHeader>
            <Table.ColHeader>Giải nhì</Table.ColHeader>
            <Table.ColHeader>Giải ba</Table.ColHeader>
            <Table.ColHeader>Giải Khuyến khích</Table.ColHeader>
          </Table.Header>
          <Table.Body className="past-drawn-item">
            {/* {props.pastDrawnItems.length === 0
              ? ""
              : props.pastDrawnItems.map((item, index) => (

                <Table.Row key={index}>
                  <Table.Col className="drawn-item">{item}</Table.Col>
                </Table.Row>
              ))} */}
            <Table.Row>
              <Table.Col><span className="drawn-item">{DisplayName(first)}</span></Table.Col>
              <Table.Col><span className="drawn-item">{DisplayName(second)}</span></Table.Col>
              <Table.Col><span className="drawn-item">{DisplayName(third)}</span></Table.Col>
              <Table.Col>
                {
                  consolations.map((item, index) => (
                    // <Table.Col className="drawn-item" key={index}>{item}</Table.Col>
                    <p className="drawn-item" key={index}>{DisplayName(item)}</p>
                  ))}
              </Table.Col>
            </Table.Row>
          </Table.Body>
        </Table>
      )
  // // <div >
  //     <ul className="past-draw-block">
  //         {props.pastDrawnItems.length === 0
  //           ? ""
  //           : props.pastDrawnItems.map((item, index) => (
  //             <li className="drawn-item" key={index}>
  //               <span>{item}</span>
  //             </li>
  //             ))}
  //     </ul>
  // // </div>
};

export default PreviouslyDrawnItemsBlock;
