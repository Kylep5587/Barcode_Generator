import React from 'react';

import './barcode-settings.styles.css';

class BarcodeSettings extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: "",
            format: 'CODE128',
            renderer: 'svg',
            width: 2,
            height: 100,
            displayValue: true,
            fontOptions: '',
            font: 'monospace',
            textAlign: 'center',
            textPosition: 'bottom',
            textMargin: 2,
            fontSize: 20,
            background: '#ffffff',
            lineColor: '#000000',
            margin: 10
        }
    }


    /* Updates state values when modified
    **********************************************/
    handleChange = (e) => {
        let change = {}
        change[e.target.name] = e.target.value;
        this.setState(change);
    }

    render() {
        return (
            <div className='settings'>
                <div className='settings-display'>
                    Value: {this.state.value} <br />
                    Barcode Format: {this.state.format} <br />
                    Width: {this.state.width} <br />
                    Height: {this.state.height} <br />
                    Display Text: {this.state.displayValue} <br />
                    Font Style: {this.state.fontOptions} <br />
                </div>
                
                <label for="value">Barcode Value:</label>
                <input name="value" type="text" onChange={this.handleChange} /> 
                <br />

                <label for="format">Barcode Format:</label>
                <select name="format" onChange={this.handleChange}>
                    <option value="CODE128">128</option>
                    <option value="CODE39">39</option>
                </select>
                <br />

                <label for="width">Width:</label>
                <input type="text" name="width" defaultValue="2" onChange={this.handleChange} />
                <br />

                <label for="height">Height:</label>
                <input type="text" name="height" defaultValue="50" onChange={this.handleChange} />
                <br />

                <label for="displayValue">Display Text:</label>
                <select name="displayValue" onChange={this.handleChange}>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>
                <br />

                <label for="fontSize">Text Size:</label>
                <input type="text" name="fontSize" defaultValue="2" onChange={this.handleChange} />
                <br />

                <label for="textMargin">Font Margin:</label>
                <input type="text" name="textMargin" defaultValue="14" onChange={this.handleChange} />
                <br />

                <label for="fontOptions">Font Style:</label>
                <select name="fontOptions" onChange={this.handleChange}>
                    <option value="">None</option>
                    <option value="bold">Bold</option>
                    <option value="italic">Italic</option>
                    <option value="bold italic">Bold Italic</option>
                </select>
                <br />

                <label for="textAlign">Text Alignment:</label>
                <select name="textAlign" onChange={this.handleChange}>
                    <option value="center">Center</option>
                    <option value="left">Left</option>
                    <option value="right">Right</option>
                </select>
                <br />

                <label for="textPosition">Text Position:</label>
                <select name="textPosition" onChange={this.handleChange}>
                    <option value="bottom">Bottom</option>
                    <option value="top">Top</option>
                </select>
                <br />

                <label for="text-color">Text Color:</label>
                <select name="text-color" onChange={this.handleChange}>
                    <option value="#000000">Black</option>
                    <option value="#0000ff">Blue</option>
                    <option value="#ff0000">Red</option>
                    <option value="#808080">Gray</option>
                    <option value="#008000">Green</option>
                </select>
                <br />

                <label for="lineColor">Bar Color:</label>
                <select name="lineColor" onChange={this.handleChange}>
                    <option value="#000000">Black</option>
                    <option value="#0000ff">Blue</option>
                    <option value="#ff0000">Red</option>
                    <option value="#808080">Gray</option>
                    <option value="#008000">Green</option>
                </select>
                <br />

                <label for="background">Background Color:</label>
                <select name="background" onChange={this.handleChange}>
                    <option value="#000000">Black</option>
                    <option value="#0000ff">Blue</option>
                    <option value="#ff0000">Red</option>
                    <option value="#808080">Gray</option>
                    <option value="#008000">Green</option>
                </select>
                <br />

                <label for="margin">Margin:</label>
                <input type="text" name="margin" defaultValue="10" onChange={this.handleChange} />
                <br />

            </div>
        )
    }
}

export default BarcodeSettings;