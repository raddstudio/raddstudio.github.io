import React, { useState, useEffect } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { themeJson } from "../assets/theme";
import "../assets/survey.css";
import { json } from "../assets/survey";

const RaddSurvey = () => {
    useEffect(() => {
        document.title = 'Radd Studio Inc. // Survey'
    })
    const survey = new Model(json);
    const [uuid, setCustomerSurveyUuid] = useState(0);
    const [step, setStep] = useState(0);
    useEffect(() => {
      if (uuid<1){
        const r = {
          list: "3002ec22-1125-475a-b558-985ac52c21ce", // local // list: "2c43c94f-4bcd-4da3-bf30-7cb604ed7110", // 
          customer: { name: "anon", email: "anon@raddstudio.com" },
        };
        const requestOptions = {
          method: 'POST',
          mode: "cors",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(r)
        };
        // fetch(`http://localhost:3000/survey/${r.list}/customer_surveys.json`, requestOptions)
        fetch(`https://clickstudio.email/survey/${r.list}/customer_surveys.json`, requestOptions)
          .then(response => {
            return response.json()
          }).then(data => {
            setCustomerSurveyUuid(data.uuid);
          })
      }
    })
    survey.applyTheme(themeJson);
    survey.onCurrentPageChanged.add(function(sender, options) {  
      const r = {
        list: "2c43c94f-4bcd-4da3-bf30-7cb604ed7110", // list: "77237952-6638-452e-a3c6-53cb82f484a1",
        customer_survey: {
          responses: sender.valuesHash
        }
      };
      const requestOptions = {
        method: 'PUT',
        mode: "cors",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(r)
      };
      // fetch(`http://localhost:3000/survey/${r.list}/customer_surveys/${uuid}.json`, requestOptions)
      fetch(`https://clickstudio.email/survey/${r.list}/customer_surveys/${uuid}.json`, requestOptions)
        .then(response => {
          return response.json()
        })
        .then(data => {
          // console.log(data)
        });
    });
    survey.onComplete.add((sender, options) => {
      const r = {
          list: "2c43c94f-4bcd-4da3-bf30-7cb604ed7110", // list: "77237952-6638-452e-a3c6-53cb82f484a1", // local // 
          customer: { name: sender.valuesHash.contact_customer.name, email: sender.valuesHash.contact_customer.email},
          customer_survey: {
            responses: sender.valuesHash
          }
        };
        const requestOptions = {
          method: 'PUT',
          mode: "cors",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(r)
        };
        // fetch(`http://localhost:3000/survey/${r.list}/customer_surveys/${uuid}.json`, requestOptions)
        fetch(`https://clickstudio.email/survey/${r.list}/customer_surveys/${uuid}.json`, requestOptions)
            .then(response => {
              return response.json()
            })
            .then(data => {
              window.location = "https://raddstudio.com/fi.html"
            });
    });
    return (<Survey model={survey} />);
}

export default RaddSurvey;

// {
//    "paid_customer": "No",
//    "product_fit": "3",
//    "question3": "3",
//    "question5": "3",
//    "question7": "3",
//    "question9": [
//       "3",
//       "1",
//       "2",
//       "4"
//    ],
//    "question11": "3",
//    "question13": "3",
//    "question15": "3",
//    "question17": "3",
//    "question18": "3",
//    "question19": "3",
//    "question20": "3",
//    "question1": "3",
//    "question21": "3",
//    "question22": "3",
//    "product_alternative": "Alternative 1",
//    "nps_score": 10
// }