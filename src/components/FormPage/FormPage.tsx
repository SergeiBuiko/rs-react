import React from 'react';
import './FormPage.css';

class FormPage extends React.Component {
  private fileInput: React.RefObject<HTMLInputElement>;
  constructor(props: object) {
    super(props);
    this.fileInput = React.createRef();
  }

  render() {
    return (
      <form className="form">
        <label className="form__label">
          Name:
          <input type="text" />
        </label>
        <label>
          Birthday date:
          <input type="date" />
        </label>
        <label>
          Select country:
          <select>
            <option selected value="Belarus">
              Belarus
            </option>
            <option value="Russia">Russia</option>
            <option value="Poland">Poland</option>
            <option value="Germany">Germany</option>
          </select>
        </label>

        <label>
          I consent to my personal data:
          <input type="checkbox" />
        </label>
        <label>
          Male:
          <input type="radio" name="radio" value="male" />
          Female:
          <input type="radio" name="radio" value="female" />
        </label>
        <label>
          Upload file:
          <input type="file" ref={this.fileInput} />
        </label>
      </form>
    );
  }
}
export default FormPage;
