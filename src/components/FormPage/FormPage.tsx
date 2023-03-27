import React, { ChangeEvent } from 'react';
import './FormPage.css';

interface IForm {
  name: string;
  nameDirty: boolean;
  nameError: string;
  date: string;
  dateError: string;
  dateDirty: boolean;
}

class FormPage extends React.Component<object, IForm> {
  private fileInput: React.RefObject<HTMLInputElement>;
  constructor(props: object) {
    super(props);
    this.fileInput = React.createRef();
    this.state = {
      name: '',
      nameError: '',
      nameDirty: false,
      date: '',
      dateError: 'Enter production date please',
      dateDirty: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.nameHandler = this.nameHandler.bind(this);
  }

  // handleChange(event: ChangeEvent<HTMLInputElement>) {
  //   this.setState({ name: event.target.value });
  // }

  handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const regexp = /[a-zA-Z]/;
    const rawValue = this.state.name;

    if (this.state.name.length === 0) {
      this.setState({ nameError: 'Enter product name please' });
    } else if (!regexp.test(rawValue)) {
      this.setState({ nameError: 'Enter letter please' });
    } else if (this.state.name.length === 1) {
      this.setState({ nameError: 'Incorrect name length (from 2 to 15 letters)' });
    } else if (this.state.name.length > 15) {
      this.setState({ nameError: 'Incorrect name length (from 2 to 15 letters)' });
    } else {
      this.setState({ nameError: '' });
    }

    if (this.state.date) {
      this.setState({ dateError: 'No Date' });
    }
  }

  // blurHandler = (event: ChangeEvent<HTMLInputElement>) => {
  //   if ({ name: event.target.value }) {
  //     this.setState({ nameDirty: true });
  //   } else {
  //     this.setState({ nameDirty: false });
  //   }
  //   if ({ date: event.target.value }) {
  //     this.setState({ dateDirty: true });
  //   } else {
  //     this.setState({ dateDirty: false });
  //   }
  // };

  nameHandler(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ name: event.target.value });
  }

  dateHandler(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ date: event.target.value });
    console.log(this.state.date);
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <label className="form__label">
          {this.state.nameError && <p style={{ color: 'red' }}>{this.state.nameError}</p>}
          <span>Product name: </span>
          <input type="text" onChange={this.nameHandler} />
          {/* onBlur={this.blurHandler} */}
        </label>
        <label>
          {this.state.dateError && this.state.dateDirty && (
            <p style={{ color: 'red' }}>{this.state.dateError}</p>
          )}
          <span>Production date: </span>
          <input type="date" />
        </label>
        <label>
          <span>Country of manufacture: </span>
          <select>
            <option value="Belarus">Belarus</option>
            <option value="Russia">Russia</option>
            <option value="Poland">Poland</option>
            <option value="Germany">Germany</option>
          </select>
        </label>
        <label>
          Send product description to e-mail:
          <input type="checkbox" />
        </label>
        <label>
          products for men:
          <input type="radio" name="radio" value="male" />
          products for woman:
          <input type="radio" name="radio" value="female" />
        </label>
        <label>
          <span>Upload file: </span>
          <input type="file" ref={this.fileInput} />
        </label>
        <input className="submit__button" type="submit" value="Submit" />
      </form>
    );
  }
}
export default FormPage;
