
# 🧩 Form Component Automation Library

This Node.js project is designed to **automatically parse Pardot forms** and generate a structured JSON object that works seamlessly with a Form Component Library.

## 🚀 How It Works

When you run the following command:

```bash
npm start FHMPP227
```

The script does the following:
1. **Reads an Excel file** named `pd.xlsx`.
2. Selects **Sheet 3** from the file.
3. Finds the row for the UFID `FHMPP227`.
4. Opens the URL mentioned in the column `Existing Pardot URL`.
5. Parses the form on that page and extracts:
   - `input`, `textarea`, `select`, `checkbox`, and `radio` fields
   - Form title and labels
   - Supporting text (usually at the bottom of the form)
   - Validation rules such as `required`, `maxlength`, and field-specific error messages

6. Generates a **formProps JSON object** that is saved as:
```
FHMPP227-formProps.json
```

This JSON is fully compatible with your custom form-rendering library.

---

## 📁 Folder Structure

```
Form Component Automation Library/
├── Fields/
│   └── Render/
│       ├── checkboxField.js
│       ├── inputField.js
│       ├── pardotDetails.js
│       ├── radioButtonDependentField.js
│       ├── radioButtonField.js
│       ├── selectField.js
│       ├── submitButton.js
│       └── textAreaField.js
├── output/
│   ├── FHMPPXXX-formProps.json
├── utils/
│   ├── requiredFiles.js
│   ├── utils.js
├── pd.xlsx                      # Excel file for Pardot form source
├── FormHandler.js
├── formProps.json               # Optional default props
├── index.js                     # Main entry point
├── readPardotExcel.js           # Reads Excel and triggers parsing
├── README.md
├── package.json
└── .gitignore
```

---

## 📄 Example Output (JSON)

```json
{
  "formProps": {
    "formHandlerProps": {
      "section": {
        "content": {
          "pardotUrl": "",
          "headline": {
            "text": ""
          },
          "paragraph": {
            "text": ""
          }
        }
      },
      "config": {
        "columns": 2,
        "meta": {
          "actionUrl": "/webapps/mpp/rest/pardot/save-form-data",
          "redirectUrl": "/business/contact-sales/thank-you/",
          "formHandlerLocation": "2023-04-04/2rnj7",
          "formName": "EMEA-UK-FRH-23-contact-us-Live"
        }
      },
      "content": {
        "fields": [
          {
            "config": {
              "id": "firstname",
              "name": "firstname",
              "preset": "name",
              "validations": {
                "required": true,
                "maxLength": 40
              }
            },
            "content": {
              "errorMessages": {
                "default": "This field is required."
              },
              "label": {
                "text": "First name*"
              },
              "placeholder": {
                "text": "First name*"
              },
              "value": ""
            }
          },
          {
            "config": {
              "id": "lastname",
              "name": "lastname",
              "preset": "name",
              "validations": {
                "required": true,
                "maxLength": 80
              }
            },
            "content": {
              "errorMessages": {
                "default": "This field is required."
              },
              "label": {
                "text": "Last name*"
              },
              "placeholder": {
                "text": "Last name*"
              },
              "value": ""
            }
          },
          {
            "config": {
              "id": "companyname",
              "name": "companyname",
              "preset": "name",
              "validations": {
                "required": true,
                "maxLength": 255
              }
            },
            "content": {
              "errorMessages": {
                "default": "This field is required."
              },
              "label": {
                "text": "Company name*"
              },
              "placeholder": {
                "text": "Company name*"
              },
              "value": ""
            }
          },
          {
            "config": {
              "id": "workemail",
              "name": "workemail",
              "preset": "email",
              "validations": {
                "required": true,
                "maxLength": 255
              }
            },
            "content": {
              "errorMessages": {
                "default": "This field is required."
              },
              "label": {
                "text": "Work email*"
              },
              "placeholder": {
                "text": "Work email*"
              },
              "value": ""
            }
          },
          {
            "config": {
              "id": "phonenumber",
              "name": "phonenumber",
              "preset": "phone",
              "validations": {
                "required": true
              }
            },
            "content": {
              "errorMessages": {
                "default": "This field is required"
              },
              "label": {
                "text": "Phone number*"
              },
              "placeholder": {
                "text": "Phone number*"
              },
              "value": ""
            }
          },
          {
            "config": {
              "id": "companywebsite",
              "name": "companywebsite",
              "preset": "url",
              "validations": {
                "required": true,
                "maxLength": 255
              }
            },
            "content": {
              "errorMessages": {
                "default": "This field is required"
              },
              "label": {
                "text": "Company website*"
              },
              "placeholder": {
                "text": "Company website*"
              },
              "value": ""
            }
          },
          {
            "config": {
              "id": "country",
              "name": "country",
              "preset": "country",
              "validations": {
                "required": true
              }
            },
            "content": {
              "errorMessages": {
                "default": "This field is required"
              },
              "label": {
                "text": "Country*"
              },
              "placeholder": {
                "text": "Country*"
              },
              "value": "UK"
            }
          },
          {
            "config": {
              "id": "annualonlinesales",
              "name": "annualonlinesales",
              "preset": "dropdown",
              "validations": {
                "required": true
              }
            },
            "content": {
              "errorMessages": {
                "default": "This field is required"
              },
              "label": {
                "text": "Estimated annual sales*"
              },
              "placeholder": {
                "text": "Estimated annual sales*"
              },
              "value": "",
              "options": [
                {
                  "label": {
                    "text": "Select annual sales"
                  },
                  "value": ""
                },
                {
                  "label": {
                    "text": "Less than £250,000"
                  },
                  "value": "Less than £250,000"
                },
                {
                  "label": {
                    "text": "£250,000 - £1,499,999"
                  },
                  "value": "£250,000 - £1,499,999"
                },
                {
                  "label": {
                    "text": "£1,500,000 - £9,999,999"
                  },
                  "value": "£1,500,000 - £9,999,999"
                },
                {
                  "label": {
                    "text": "More than £10,000,000"
                  },
                  "value": "More than £10,000,000"
                }
              ]
            }
          },
          {
            "config": {
              "id": "doyoualreadyhaveapaypalbusinessaccount",
              "name": "doyoualreadyhaveapaypalbusinessaccount",
              "preset": "dropdown",
              "classes": "form-field-primary",
              "enabler": [
                {
                  "rule": "is",
                  "value": "Yes",
                  "enable": [
                    "whatdoyouneedhelpwith"
                  ]
                }
              ],
              "validations": {
                "required": true
              }
            },
            "content": {
              "errorMessages": {
                "default": "This field is required"
              },
              "label": {
                "text": "Do you already have a PayPal Business account?*"
              },
              "placeholder": {
                "text": "Do you already have a PayPal Business account?*"
              },
              "value": "No",
              "options": [
                {
                  "label": {
                    "text": "No"
                  },
                  "value": "No"
                },
                {
                  "label": {
                    "text": "Yes"
                  },
                  "value": "Yes"
                }
              ]
            }
          },
          {
            "config": {
              "id": "whatdoyouneedhelpwith",
              "name": "whatdoyouneedhelpwith",
              "preset": "select",
              "classes": "dependentFieldSlave",
              "needsEnabler": true,
              "validations": {
                "required": false
              }
            },
            "content": {
              "errorMessages": {
                "default": ""
              },
              "label": {
                "text": "What do you need help with?*"
              },
              "placeholder": {
                "text": "What do you need help with?*"
              },
              "value": "My account",
              "options": [
                {
                  "label": {
                    "text": "My account"
                  },
                  "value": "My account"
                },
                {
                  "label": {
                    "text": "Another PayPal product"
                  },
                  "value": "Another PayPal product"
                }
              ]
            }
          },
          {
            "config": {
              "id": "formterms",
              "name": "formterms",
              "preset": "consent",
              "validations": {
                "required": true
              }
            },
            "content": {
              "errorMessages": {
                "default": "This field is required"
              },
              "label": {
                "text": "I have read and accepted the <a href=\"https://www.paypal.com/uk/webapps/mpp/ua/privacy-full\" target=\"_blank\" style=\"color: #0070ba; font-weight:bold; text-decoration:none;\">PayPal Privacy Policy</a>."
              },
              "placeholder": {
                "text": ""
              },
              "value": ""
            }
          }
        ],
        "actions": {
          "submit": {
            "config": {
              "id": "",
              "color": "blue"
            },
            "content": {
              "text": "Submit"
            }
          }
        },
        "hatchText": "<p style=\"text-align: center;\">*Required fields.</p>"
      }
    }
  }
}
```

---

## 📦 Dependencies

Make sure to install dependencies before running:

```bash
npm install
```

---

## 👨‍💻 Author & Use Case

This utility was designed to **automate the Pardot form transformation** process so developers can integrate existing marketing forms into a standardized, reusable UI component system with minimal effort.

---

## 📬 Contribution

If you'd like to contribute, please create a pull request or raise an issue for enhancements or bugs.

---

© 2025 Form Automation Library
