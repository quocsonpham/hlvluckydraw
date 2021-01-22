import React, { Component } from "react";
import { Form, Button } from "tabler-react";
import "./style.css";

class DrawForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange(e.target);
  }

  render() {
    const {
      style,
      className,
      onSubmit,
      // placeholder,
      // value,
      // drawItems,
      // handleSkipAnimationChange,
      // handleRemoveDrawnItemChange
    } = this.props;

    return (
      <div style={style} className={className}>
        {/* <Header.H3>Nhập danh sách bốc thăm</Header.H3> */}
        <div className="form">
          <Form onSubmit={onSubmit}>
            {/* <Form.FieldSet> */}
              {/* <Form.Group label="Danh sách" isRequired>
                <Form.Textarea
                  name="drawItems"
                  placeholder={placeholder}
                  value={value}
                  onChange={this.handleChange}
                />
              </Form.Group> */}
              {/* <Form.Group>
                <Form.Checkbox
                  name="skipAnimation"
                  label="Skip Animation"
                  onChange={handleSkipAnimationChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Checkbox
                  name="noRepeat"
                  label="Remove Drawn Item"
                  onChange={handleRemoveDrawnItemChange}
                />
              </Form.Group> */}
              <Button
                type="submit"
                className="start-button"
                // disabled={drawItems.length < 2}
              >
                Vòng quay may mắn
              </Button>
            {/* </Form.FieldSet> */}
          </Form>
        </div>
      </div>
    );
  }
}

export default DrawForm;
