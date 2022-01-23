import React, { useState} from 'react';
import './TextForm.css'
export const TextForm = (props) => {

    // let inputTextArea=useRef();
    // const [darkModeStyle, setdarkModeStyle] = useState({
    //     color: 'white',
    //     backgroundColor: 'rgb(38,62,62)'
    //    })
       
    //    const [props.mode, setprops.mode] = useState('dark-mode')
       
    
    let [text, setText] = useState("");
    let [originalText, setoriginalText] = useState(text);

    const c2upperCase = () => {
        console.log("UpperCase funciton is triggered");
        setText(text.toUpperCase())
        props.onTextConversion({"show":true,"mssg":"Text converted to Uppercase successfully"})
    }
    const c2lowerCase = () => {
        console.log("LowerCase funciton is triggered");
        setText(text.toLowerCase())
        props.onTextConversion({"show":true,"mssg":"Text converted to Lowercase successfully"})
    }
    const onChangeHandler = (e) => {
        console.log("OnChangeHandler funciton is triggered");
        setText(e.target.value)
        setoriginalText(e.target.value)
    }
    const c2capitalCase = () => {
        console.log("capital case funciton is triggered");
        
        let newText = text.toLowerCase();
        let wordRegex = /(^\w)|(\s(?=\w))/g
        let ind = wordRegex.exec(text)['index']
        let len=text.length
        do {
            if (ind === 0)
            newText = newText[0].toUpperCase() + newText.slice(1,len)
            else {
                ind++;
                newText = newText.slice(0, ind) + newText[ind].toUpperCase() + newText.slice(ind + 1,len);
            }
            
            let res = wordRegex.exec(text)
            res?ind = res['index']:ind = null;
        }
        while (ind != null);
        setText(newText)
        props.onTextConversion({"show":true,"mssg":"Text converted to Capital case successfully"})
    }
    const removeExtraSpace=()=>{
        let subText=text;
        let subTextArr=subText.split(/[ ]+/)
        setText(subTextArr.join(" "))
        props.onTextConversion({"show":true,"mssg":"Extra spaces removed from the text successfully"})
    }  
    const c2clearText=()=>{
        setText("")
        props.onTextConversion({"show":true,"mssg":"Text cleared successfully"})
    }
    const c2originalText = () => {
        setText(originalText)
        props.onTextConversion({"show":true,"mssg":"Converted back to original Text"})
    }
    const copy2Clipboard=()=>{
        navigator.clipboard.writeText(text)
        props.onTextConversion({"show":true,"mssg":"Copied to clipboard succesfully"})

    }
    return (
        <>
            <div className={'container '+props.mode+'-mode'}>
                <h3 className="mt-3 text-center">{props.heading}</h3>
                <div className="my-3">
                    <label htmlFor="inputText" className="form-label"></label>
                    <textarea  className={'form-control '+props.mode+`-mode`} value={text} onChange={onChangeHandler} placeholder="Enter some Text here" name="inputText" id="inputText" rows="8"></textarea>
                    <div className="container">
                        <button className="btn btn-primary  m-2" disabled={text?.length>0?false:true} onClick={c2upperCase}>Uppercase</button>
                        <button className="btn btn-primary  m-2" disabled={text?.length>0?false:true} onClick={c2lowerCase}>Lowercase</button>
                        <button className="btn btn-primary  m-2" disabled={text?.length>0?false:true} onClick={c2capitalCase}>Capitalize</button>
                        <button className="btn btn-success  m-2" disabled={originalText?.length>0?false:true} onClick={c2originalText}>Original</button>
                        <button className="btn btn-primary  m-2" disabled={text?.length>0?false:true} onClick={c2clearText}>Clear</button>
                        <button className="btn btn-primary  m-2" disabled={text?.length>0?false:true} onClick={removeExtraSpace}>Remove extra spaces</button>
                        <button className="btn btn-primary  m-2" disabled={text?.length>0?false:true} onClick={copy2Clipboard}>Copy to Clipboard</button>
                    </div>
                </div>
            </div>
            <div  className={'container '+props.mode+`-mode`}>
                <h4 className="my-2">Text Summary</h4>
                <p id="TextSummary" className="p-2 d-inline-block">
                    <strong> Words</strong> : {text ? text.split(/\s(?=\w)/).length : 0} &nbsp; |
                    <strong> Characters</strong> : {text ? text.match(/\w/g).length : 0} &nbsp; |
                    <strong> Lines </strong> : {text ? text.split(/\n/).length : 0} &nbsp; |
                    <strong> Read Time </strong> : {text ? (text.split(/\s(?=\w)/).length * 0.50 +text.split(/\n/).length*0.5 ).toFixed(2) : 0} sec
                </p>

            </div>

        </>
    );
};
