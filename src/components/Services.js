import React, { Component } from 'react';
import {Helmet} from 'react-helmet';

class Services extends Component {
  render() {
    return (
      <div className="services-centered">
        <Helmet>
            <meta name="description" content="Simply You Services" />
            <meta name="robots" content="index,follow" />
            <title>Services</title>
        </Helmet>
        <h2>Services</h2>
        <table className="table table-colored table-borderless">
          <tbody>
            <tr>
              <td>Women's haircut and style</td>
              <td>Starting at $30</td>
            </tr>
            <tr>
              <td>Men's haircut</td>
              <td>Starting at $18</td>
            </tr>
            <tr>
              <td>Children's haircut</td>
              <td>Starting at $15</td>
            </tr>
            <tr>
              <td>Shampoo and blow dry</td>
              <td>Starting at $20</td>
            </tr>
            <tr>
              <td>Special Occasions</td>
              <td>Starting at $50</td>
            </tr>
            <tr>
              <td>Hair coloring</td>
              <td>Starting at $57</td>
            </tr>
            <tr>
              <td>Partial foil</td>
              <td>Starting at $62</td>
            </tr>
            <tr>
              <td>Full foil</td>
              <td>Starting at $72</td>
            </tr>
            <tr>
              <td>Highlighting</td>
              <td>Starting at $79</td>
            </tr>
            <tr>
              <td>Highlighting and coloring</td>
              <td>Starting at $89</td>
            </tr>
            <tr>
              <td>Hair extensions</td>
              <td>Priced upon consulation</td>
            </tr>
            <tr>
              <td>Hair smoothing treatment</td>
              <td>Starting at $150</td>
            </tr>
            <tr>
              <td>Eyebrow waxing</td>
              <td>$15</td>
            </tr>
            <tr>
              <td>Upper lip waxing</td>
              <td>$10</td>
            </tr>
            <tr>
              <td>Nasal Waxing</td>
              <td>$10</td>
            </tr>
            <tr>
              <td>Chin waxing</td>
              <td>$10</td>
            </tr>
            <tr>
              <td>Full face</td>
              <td>$35</td>
            </tr>
          </tbody>
        </table>
        <p className="p-centered">We use and recommend Redken and Pureology products.</p>
        <br></br>
      </div>
  );
  }
}

export default Services;

