---
title: Creating a form validation hook for React apps
date: "2020-04-01"
published: true
description: In this article, we are going to dive deeper on React Hooks to build a form validation hook using TDD
thumbnail: https://source.unsplash.com/Rs5BQj5zbf8
tags:
  - React
  - Hooks
  - Validation
  - TDD
---

## Introduction

Hi guys! My name is Carlos, I'm from Brazil and I'm a front-end web developer. This is my first article in life and I'm very excited about that. I hope you can learn something from it and I would really appreciate if you could leave your feedback.

## Inspiration

Developing forms is a very common task in web development and almost every developer has to do this from time to time. I was working on an application recently where I have got to write a lot of forms and the validation part was always too repetitive.

I was always copying and pasting the exact same logic between my forms. So I started googling some React form validation libs and I've found some good ones like [formik](https://jaredpalmer.com/formik) and [react-hook-form](https://react-hook-form.com/). They are awesome and lifesavers when it comes to working with forms.

After reading some examples from their documentations and understanding how they work I felt prepared to use the [hooks api](https://reactjs.org/docs/hooks-reference.html) to build my own form validation solution and I think you should do the same if you want to challenge yourself. I mean, it's so good that we have an infinity of well-tested solutions ready to install and use on our applications and we should use them on 99% of the time because they are already adopted and tested by the community.

But I think we don't necessarily need to always consume something ready, instead, we can try to create our own solutions for the same problems and learn a lot of things that will help us to become better developers. It's all about pushing ourselves to another level.

## Context

React Hooks is a ~~recent~~ API that brings many of the class components features to function components like state management and lifecycle hooks. You can use hooks like `useState` to literally give your function components the power to manage state variables or `useEffect` to manage your function components lifecycle and run side effects like calling an API they mount.

If you don't know the Hooks API, I strongly recommend that you read the [official hooks introduction](https://reactjs.org/docs/hooks-intro.html) so that you will be more comfortable with the code we are going to write.

## Requirements

To start our Hook development, we need to set up some expectations for it.

1. Accept the validation logic for each form field
2. Support the following validation types:

- **required**: check if the field is filled with any value
- **pattern**: a regex that will be tested against the field value
- **custom validation**: a function that will be called by our Hook with the field value, letting us execute any other validation logic

3. Validate fields as the user types
4. Exposes the form validation status

With these requirements, we can start developing our Hook.

## Set up

You can use any boilerplate you want to set up the application. I'm going to use [create-react-app](https://create-react-app.dev/).

All the tutorial code is available on this [repo](https://github.com/csilva2810/react-hook-validation). All the code evolution is separated by small commits, so if you find yourself stuck at any time, you can look at the commits to keep moving forward.

We are going to use TDD to write all the tutorial code.

```javascript
// useForm.spec.js
import { useForm } from "./useForm"

describe("useForm", () => {
  describe("smoke tests", () => {
    it("should be a function", () => {
      expect(typeof useForm).toBe("function")
    })
  })
})
```

A Hook is a Javascript function that must have the prefix **use** in its name so that React can distinguish it from other functions.

Let's create a file `useForm.js` that exports a function following this name convention.

```javascript
// useForm.js
export function useForm() {}
```

Now that we have our Hook ready we can start implementing the requirements.

## 1. Accept the validation logic for each form field

Our Hook needs to accept as argument an options object which we are going to use to configure it. We will also apply some validation on the **validations** option.

```javascript
// useForm.js
export function useForm({ validations }) {
  if (!validations) {
    throw new Error("the option `validations` is required")
  }

  if (typeof validations !== "object") {
    throw new Error("the option `validations` should be an object")
  }
}
```

```javascript
// useForm.spec.js
import { useForm } from "./useForm"

describe("useForm", () => {
  describe("smoke tests", () => {
    it("should be a function", () => {
      expect(typeof useForm).toBe("function")
    })

    it("should require the `validations` option", () => {
      expect(() => {
        useForm({})
      }).toThrow("the option `validations` is required")
    })

    it("should require the validation option to be an object", () => {
      expect(() => {
        useForm({
          validations: true,
        })
      }).toThrow("the option `validations` should be an object")
    })
  })
})
```

<small style="display: block; text-align: center;">[See the commit for this code](https://github.com/csilva2810/react-hook-validation/commit/83c6dfbb44ed211ebecfbd9e4ce47b54d9f473ea)</small>

Now, we have to define how our validations option will look like, there are two possible structures that I can think of. One would be an array of validations and the other an object indexed by the name of the field. The array would be something like this:

```javascript
const validations = [
  {
    field: "name",
    validations: {
      required: {},
      pattern: {},
    },
  },
]
```

The object structure would be something like:

```javascript
const validations = {
  name: {
    required: {},
    pattern: {},
  },
}
```

Using the array structure whenever we need to run a specific validation we will have to find the corresponding field validation in the array.

```javascript
const rules = validations.find(validation => validation.name === fieldName)
```

With the object structure, we only need to access the corresponding index.

```javascript
const rules = validations[fieldName]
```

The object structure seems to be more simple and better in terms of performance. That's why we are going to stick with that one.

## 2. Supporting the validation types:

Now that we have our validation option defined we can start writing the code to support the different validation types that we want to run. Let's get started with the required validation since it's the simplest one. Any validation should return an error message for the user, this error message could be a default value or some custom one.

### Required rule implementation

We will start implementing a function that runs our validations for a single field, we will call it `validateField`.

```javascript
// src/useForm.spec.js
...
describe('validateField', () => {
  describe('required', () => {
    it("should return a default error message for fields that don't have a value", () => {
      const hook = useForm({
        validations: {
          name: {
            required: true,
          },
        },
      });

      expect(hook.validateField('name', '')).toBe('required');
    });
  });
});
```

<small style="display: block; text-align: center;">[See the commit for this code](https://github.com/csilva2810/react-hook-validation/commit/47e12cda2f4fc4dd5b0ec2d3a2b64ca217aab813)</small>

We are testing that our Hook has to return a validation function that we are going to use to validate our form fields. This function will receive the field name and value as arguments, run our validations and return an error message if it fails.

```javascript
// useForm.js
...
function validateField(name, value) {
  // get the validation rules for the field
  const rules = validations[name];

  // check if the rules exist since a field can not have validations
  if (rules) {
    // if the required rule is registered
    if (rules.required) {
      // now we validate the value checking if it has a value
      // we are using trim, to strip whitespaces before and after the value
      if (!value.trim()) {
        return 'required';
      }
    }
  }

  // if there are no erros, we return an empty string
  return '';
}

return {
  validateField,
};
```

<small style="display: block; text-align: center;">[See the commit for this code](https://github.com/csilva2810/react-hook-validation/commit/687a4022a8c46fc3cfd3f80d802b5a56d5270508)</small>

Now that the required rule is working, let's do a slight improvement to it. We are returning a "required" message from the validation if it fails, but we also could be able to pass a custom error message like "the field 'name' is required" or we could write the error message using his own language. In my case, that would be "o campo 'nome' é obrigatório" (Portuguese). So let's do it.

```javascript
// useForm.spec.js
it("should return a custom error message", () => {
  const hook = useForm({
    validations: {
      name: {
        required: 'the field "name" is required',
      },
    },
  })

  expect(hook.validateField("name", "")).toBe('the field "name" is required')
})
```

```javascript
// useForm.js
...
if (rules.required) {
  // now we validate the value checking if it has a value
  // we are using trim, to strip whitespaces before and after the value
  if (!value.trim()) {
    return typeof rules.required === 'string' ? rules.required : 'required';
  }
}
...
```

<small style="display: block; text-align: center;">[See the commit for this code](https://github.com/csilva2810/react-hook-validation/commit/03e31e85cc2f32dfc5df8c2edf471fda0a1c8e41)</small>

Now we are checking if the value of the required rule is a string and if it's true we assume that some custom message was passed and then we return that, otherwise we return the default message. And we have our first rule working! 🎉
Now that we have the structure well defined the next validations are going to be much easier to implement.

### Pattern rule implementation

We are ready to start implementing the pattern rule. This rule will be a little bit different because we will have to execute a regex using the field value.

```javascript
// useForm.spec.js
...
describe('pattern', () => {
  it('should return an error message if the value does not satisfy the pattern', () => {
    const hook = useForm({
      validations: {
        email: {
          pattern: {
            value: /\w+@\w+\.com/gi,
          },
        },
      },
    });

    expect(hook.validateField('email', '')).toBe('invalid');
  });

  it('should return an custom error message if the message attribute exists', () => {
    const hook = useForm({
      validations: {
        email: {
          pattern: {
            value: /\w+@\w+\.com/gi,
            message: 'Invalid e-mail',
          },
        },
      },
    });

    expect(hook.validateField('email', '')).toBe('Invalid e-mail');
  });
});
...
```

For the pattern validation, we will receive an object containing two attributes:

1. value - A regex with the pattern we want to enforce.
2. message - A string with a custom error message. Let's implement the logic now.

```javascript
// useForm.js
...
// if the pattern rule is registered
if (rules.pattern) {
  // we execute the regex
  if (!new RegExp(rules.pattern.value).exec(value)) {
    // if the value does not match with the regex pattern, we try to return
    // the custom message and fallback to the default message in case
    return rules.pattern.message || 'invalid';
  }
}
...
```

<small style="display: block; text-align: center;">[See the commit for this code](https://github.com/csilva2810/react-hook-validation/commit/d7d9ac8a77bbf1675487747fe42235607642e2f2)</small>

That one was a lot easier, right?

### The validation rule

Now we can start implementing our validate rule. This one is a little bit different because we want to give the developer the power to run any logic inside de validation. That means that he or she could even run business logic inside this validation. This one sounds complicated to implement, but it's not!

In order to give the developer such flexibility, our validation rule will expect a function, this function will be called by our Hook with the field value, so the developer can do anything he wants with the value and then return an error message or an empty string. Let's go to the code.

```javascript
// useForm.spec.js
...
    describe('validate', () => {
      let validateMock;
      let hook;

      beforeEach(() => {
        validateMock = jest.fn((value) => {
          if (Number(value) < 18) {
            return 'You are not able to get drive permission';
          }

          return '';
        });

        hook = useForm({
          validations: {
            age: {
              validate: validateMock,
            },
          },
        });
      });

      it('should execute the validate function passing the field value', () => {
        hook.validateField('age', '10');

        expect(validateMock).toHaveBeenCalledWith('10');
      });

      it('should be executed and return a string', () => {
        hook.validateField('age', '10');

        expect(validateMock).toHaveBeenCalled();
        expect(typeof validateMock.mock.results[0].value).toBe('string');
      });

      it('should return an error message', () => {
        hook.validateField('age', '10');

        expect(validateMock.mock.results[0].value).toBe('You are not able to get a drive permission');
      });

      it('should return an empty string when value is valid', () => {
        hook.validateField('age', '20');

        expect(validateMock.mock.results[0].value).toBe('');
      });
    });
...
```

The tests here are a little bit more complicated, we are creating a [Jest mock function](https://jestjs.io/docs/en/mock-function-api) mocking its implementation and using some methods to test if our function was called with the appropriate value and if it returns the values that we expect. Now we can implement the logic to fulfill the test expectations.

```javascript
// useForm.js
...
// if it has a validation function and its type is a function
if (rules.validate && typeof rules.validate === 'function') {
  // we run the validate function with the field value
  const error = rules.validate(value);

  // if an error message was returned, we return it
  if (error) {
    return error;
  }
}
...
```

<small style="display: block; text-align: center;">[See the commit for this code](https://github.com/csilva2810/react-hook-validation/commit/8d99afa6a849388dcd744487a623f05a6744e5e4)</small>

The implementation is way more simple! Now we can move over the next step of our Hook.

## 3. Validate fields as the user types.

We already have all the validation rules implemented and now we have to give life to our Hook connecting it to form inputs and validating them as the user types. To do so, we have to provide an API for the components to be able to bind the form inputs with our Hook.

We are going to create a simple form with a single field to test this feature.

First, we are going to install and configure the [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) to test the components.

```shell
yarn add --dev @testing-library/jest-dom @testing-library/react jest-environment-jsdom-sixteen
```

Update the test script inside your `package.json`

```diff
...
-   "test": "react-scripts test --env=dom"
+   "test": "react-scripts test --env=jest-environment-jsdom-sixteen"
...
```

Now we are able to start writing our tests.

```javascript
// src/components/SimpleForm.spec.jsx
import React from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

import SimpleForm from "./SimpleForm"

describe("<SimpleForm />", () => {
  it("should render a name input", () => {
    const { getByLabelText } = render(<SimpleForm />)

    const nameInput = getByLabelText("name")

    expect(nameInput).toBeInTheDocument()
  })
})
```

```jsx
// src/components/SimpleForm.jsx
import React, { useState } from "react"

const SimpleForm = () => {
  const [name, setName] = useState("")

  const handleSubmit = e => e.preventDefault()

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
    </form>
  )
}

export default SimpleForm
```

Now, we have to use it.

```jsx
// src/App.js
import React from "react"
import "./styles.css"

import SimpleForm from "./components/SimpleForm"

const App = () => <SimpleForm />

export default App
```

<small style="display: block; text-align: center;">[See the commit for this code](https://github.com/csilva2810/react-hook-validation/commit/ae5879776d746f8bea3717cba6ae2ce1def28264)</small>

Ok, now that we have the form component we can start using our hook to validate fields. First, we are going to do this in a programmatic way and then we can start thinking about how we can improve.

```javascript
// src/components/SimpleForm.spec.jsx
...
import { render, fireEvent } from '@testing-library/react';

...

describe('<SimpleForm />', () => {
  ...
  it('should render an error message', async () => {
    const { getByLabelText, findByText } = render(<SimpleForm />);

    const nameInput = getByLabelText('name');

    // fires a change event in the input with value 'ab'
    fireEvent.change(nameInput, {
      target: { value: 'ab' }
    });

    // expects the input to have the value 'ab'
    expect(nameInput).toHaveValue('ab');

    // looks up on the DOM an element with the 'invalid name' text
    const error = await findByText('invalid name');

    // expects the element to exits
    expect(error).toBeInTheDocument();  });
});
```

We are expecting that after we input the value 'ab' on the input element, an element with the text 'invalid name' will exist on the DOM.

```jsx
// src/components/SimpleForm.tsx
...

import { useForm } from '../useForm';

const SimpleForm = () => {
  ...

  // create a state variable for the name validation errors
  const [nameError, setNameError] = useState('');
  const { validateField } = useForm({
    validations: {
      name: {
        pattern: {
          value: /^\w{3,50}$/,
          message: 'invalid name'
        }
      }
    }
  });

  // handle change events in the name input
  const handleNameChange = e => {
    const { value } = e.target;

    // set the name state with the field value
    setName(value);
    // validates the name field and sets the error state
    setNameError(validateField('name', value));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">name</label>
        <input
          ...
          onChange={handleNameChange}
        />
        {nameError && <p>{nameError}</p>}
      </div>
    </form>
  );
};

export default SimpleForm;
```

<small style="display: block; text-align: center;">[See the commit for this code](https://github.com/csilva2810/react-hook-validation/commit/57f53e2f370dd69fae08fc8d818211d34ad24cdc)</small>

Now our input is being validated and responding to the validation errors. But as you can see, we have to do so much in order to display the error messages for the users. Let's break it in parts:

1. Create the state for the field value.
2. Create the state for the field error message.
3. Create a function to handle the input changes.
4. Update the field state value.
5. Validate the field.
6. Update the error state with the validation result.

Imagine a very common scenario where we have ten different fields to validate. We would have to repeat this process for all of them. I wouldn't be happy if I had to do that. I think we can improve our Hook abstracting this process.

#### Improving the validation logic.

As we have to create a state for every field value and error. We could use the `setState` in our Hook to keep an object with the form values and another one with the form errors. We also have to create a function and bind it to the `onChange` event of our inputs. Our hook could exports a function that binds the input `value` with our values object and the `onChange` with a function that validates the field value and updates the values and the errors objects.

Let's start by creating our values and errors object as states of our Hook.

```javascript
// useForm.js
import { useState } from 'react';

export function useForm({ validations }) {
  ...

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  ...

  return {
    values,
    errors,
    validateField,
  };
}
```

<small style="display: block; text-align: center;">[See the commit for this code](https://github.com/csilva2810/react-hook-validation/commit/dfbc3f65722969379d00ef18901f7705c88182c1)</small>

At this point, our hook tests will be breaking, that's because we started using `useState` inside it. One rule of Hooks is that they can only be used inside React components, but that is not what's happening inside our tests. Hopefully, there's is a simple solution to this problem. Let's fix it right now.

First, we have to install the [react-hooks-testing-library](https://github.com/testing-library/react-hooks-testing-library).

```shell
yarn add --dev @testing-library/react-hooks react-test-renderer
```

This library will help us to initialize our hook inside our tests simulating a component environment. We will have to use its `renderHook` function to do that. All we have to do is wrap our hook initialization inside this function and use its result.

```diff
# src/useForm.spec.js
+import { renderHook } from '@testing-library/react-hooks';

...

# inside describe('smoke tests')
-      expect(() => {
-        useForm({});
-      }).toThrow('the option `validations` is required');
+      renderHook(() => {
+        expect(() => {
+          useForm({});
+        }).toThrow('the option `validations` is required');
+      });

...

# inside describe('validateField')
-        const hook = useForm({
+        const { result } = renderHook(() => useForm({
           ...
-        });
+        }));

-        expect(hook.validateField('name', '')).toBe('required');
+        expect(result.current.validateField('name', '')).toBe('required');

...

# inside beforeEach
-        hook = useForm({
+        const { result } = renderHook(() => useForm({
           ...
-        });
+        }));
+
+        hook = result.current;
```

<small style="display: block; text-align: center;">[See the commit for this code](https://github.com/csilva2810/react-hook-validation/commit/e478834c435adb7a32d53a1b37a34d93f43b20de)</small>

Now we can create the function that we are going to use to bind our inputs to our Hook.

```javascript
// src/useForm.spec.js

...

describe('bindField', () => {
  it('should validate the name parameter', () => {
    const { result } = renderHook(() => useForm({
      validations: {
        name: {
          required: true,
        }
      }
    }));

    expect(() => {
      result.current.bindField();
    }).toThrow('The field name parameter is required');

    expect(() => {
      result.current.bindField(1);
    }).toThrow('The field name should be a string');
  });

  it('should return an object with value and onChange attributes', () => {
    const { result } = renderHook(() => useForm({
      validations: {
        name: {
          required: true,
        }
      }
    }));

    expect(result.current.bindField('name')).toEqual({
      value: expect.any(String),
      onChange: expect.any(Function),
    });
  });
});
```

As our test is expecting, we must implement a `bindField` function that should return an object with a value attribute that must be a string and an onChange function. We are expecting that the `bindField` function to throw some errors for the name parameter when it is invalid.

```javascript
// useForm.js
import { useState } from 'react';

export function useForm({ validations }) {
  ...

  function bindField() {
    if (!name) {
      throw new Error('The field name parameter is required');
    }

    if (name && typeof name !== 'string') {
      throw new Error('The field name should be a string');
    }

    return {
      value: '',
      onChange: () => { },
    }
  }

  return {
    values,
    errors,
    validateField,
    bindField,
  };
}
```

As this function will be responsible for bind the inputs to our Hook, we should be able to tell which field we are going to bind. The function could receive the name of the field as a parameter. We also can start using this variable to pass a value to our field and to update our Hook state on the onChange function.

```javascript
// src/useForm.spec.js
import { renderHook, act } from '@testing-library/react-hooks';

...

describe('bindField', () => {
  ...

  describe('onChange', () => {
    it('should update the Hook state when called', () => {
      const { result } = renderHook(() => useForm({
        validations: {
          name: {
            required: true,
          },
        },
      }));

      const bindFieldResult = result.current.bindField('name');

      act(() => {
        bindFieldResult.onChange({ target: { value: 'John' } });
      });

      expect(result.current.values.name).toBe('John');
      expect(result.current.errors.name).toBe('');

      act(() => {
        bindFieldResult.onChange({ target: { value: '' } });
      });

      expect(result.current.values.name).toBe('');
      expect(result.current.errors.name).toBe('required');
    });
  });
});
```

In this test, we are using the [act](https://reactjs.org/docs/test-utils.html#act) function. It's important to wrap all state updates inside this function for the React to be able to perform the updates appropriately. We are testing the behavior of calling the `onChange` function, simulating the [Event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event) object that will be passed to our function when our users type on the inputs.

Now we can start the implementation of the `onChange` function to attend to the test expectation.

```javascript
// useForm.js
import { useState } from 'react';

export function useForm({ validations }) {
  ...

  function bindField() {
    ...

    return {
      value: values[name] || '',
      onChange: (e) => {
        const { value } = e.target;

        setValues(state => ({
          ...state,
          [name]: value,
        }));

        setErrors(state => ({
          ...state,
          [name]: validateField(name, value),
        }));
      },
    }
  }

  ...
}
```

<small style="display: block; text-align: center;">[See the commit for this code](https://github.com/csilva2810/react-hook-validation/commit/ce5f281ddc87ed11cb88c748b1632a9902e1c076)</small>

On the `onChange` function we are doing the same thing we did when we implemented the programmatic validation. The only difference is that know our state is an object, so we have to update the corresponding field. The only thing left to do now is changing our `SimpleForm` component to use our `bindField` function.

```jsx
// src/components/SimpleForm.tsx
...

const SimpleForm = () => {
  const handleSubmit = e => {
    e.preventDefault();

    console.log('values', values);
  };

  const { values, errors, bindField } = useForm({
    validations: {
      name: {
        pattern: {
          value: /^\w{3,50}$/,
          message: 'invalid name'
        }
      }
    }
  });

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">name</label>
        <input type="text" name="name" id="name" {...bindField('name')} />
        {errors.name && <p>{errors.name}</p>}
      </div>
    </form>
  );
};

export default SimpleForm;
```

<small style="display: block; text-align: center;">[See the commit for this code](https://github.com/csilva2810/react-hook-validation/commit/2cf9a2134ee7ada86e09c481b05d5b155f3fc351)</small>

It's worth mentioning our `bindField` call. Since it returns an object with the value and the onChange attributes, we are spreading it as props to the input element. It works as a shortcut to this:

```jsx
const nameBind = bindField('name');

return <input ... value={nameBind.value} onChange={nameBind.onChange} />
```

Now it's a lot more simple to add more fields to our form, we only have to use the `bindField` function and optionally add validations for it. Let's add one more field to test.

```javascript
// useForm.spec.js
...
describe('<SimpleForm />', () => {
  ...
  it('should render an erro message for the birthDate field', async () => {
    const { getByLabelText, findByText } = render(<SimpleForm />);
    const input = getByLabelText('birth date');

    fireEvent.change(input, {
      target: { value: '11' }
    });

    expect(input).toHaveValue('11');

    const error = await findByText('invalid date format (dd/mm/yyyy)');

    expect(error).toBeInTheDocument();
  });
});
```

```jsx
// src/components/SimpleForm.tsx
...
const SimpleForm = () => {
  ...

  const { values, errors, bindField } = useForm({
    validations: {
      ...
      birthDate: {
        pattern: {
          value: /^\d{2}\/\d{2}\/\d{4}$/,
          message: 'invalid date format (dd/mm/yyyy)'
        }
      }
    }
  });

  return (
    <form onSubmit={handleSubmit}>
      ...

      <div>
        <label htmlFor="birthDate">birth date</label>
        <input
          type="text"
          name="birthDate"
          id="birthDate"
          {...bindField('birthDate')}
        />
        {errors.birthDate && <p>{errors.birthDate}</p>}
      </div>
    </form>
  );
};

export default SimpleForm;
```

<small style="display: block; text-align: center;">[See the commit for this code](https://github.com/csilva2810/react-hook-validation/commit/b5f8242a434af12a8db33ba7c626ce3d5afee592)</small>

That worked perfectly 🎉! One last thing I think would be nice to have in this step, is our hook to accept an object with the initial value for each, field. This would be handy in situations like editing existing information and also if we want to prefill an input with some default value. Fortunately, this is going to be easy to implement, we have to accept this object as an option on our Hook and set it to our values state in its initialization.

```javascript
// src/useForm.spec.js
...

describe('initialValues', () => {
  it('should trhow an Error if the initialValues is not an object', () => {
    renderHook(() => {
      expect(() => {
        useForm({
          initialValues: true,
        })
      }).toThrow('the option `initialValues` should be an object');
    });
  });

  it('should initialize the values state with the initial values', () => {
    const { result } = renderHook(() => useForm({
      initialValues: {
        name: 'Carlos',
      },
      validations: {},
    }));

    expect(result.current.values.name).toBe('Carlos');
  });
});
```

```javascript
// useForm.js
export function useForm({ validations, initialValues = {} }) {
  ...

  if (typeof initialValues !== 'object') {
    throw new Error('the option `initialValues` should be an object');
  }

  const [values, setValues] = useState(initialValues);

  ...
}
```

<small style="display: block; text-align: center;">[See the commit for this code](https://github.com/csilva2810/react-hook-validation/commit/eceead4e063b9f024d4161f359ad1387de2aafbd)</small>

This option was very simple to implement and it makes our hook more flexible and interesting to use. Now we are ready to move over to the final implementation details of our Hook.

## 4. Exposing the form status

We are almost done! The last thing we have to do is expose the form status from the Hook. It's important because we need to know if the entire form is valid before we send it to the backend or do whatever we need to do with the form values.

We are going to implement a function called `isValid` and export it from our Hook so we can use this function on our components to do something with the form. In this case, we are going to disable the submit button if the form is invalid.

```javascript
// src/useForm.spec.js
...

describe('isValid', () => {
  it('should be a function', () => {
    const { result } = renderHook(() => useForm({
      validations: {},
    }));

    expect(typeof result.current.isValid).toBe('function');
  });
});
```

<small style="display: block; text-align: center;">[See the commit for this code](https://github.com/csilva2810/react-hook-validation/commit/608d55e340bc00d2190732b31c3c0da671f18dde)</small>

As we can see, the test is expecting the `isValid` to be a function.

```javascript
// useForm.js
export function useForm({ validations, initialValues = {} }) {
  ...

  function isValid() {
    return false;
  }

  return {
    ...
    isValid,
  };
}
```

Now that we have our initial setup we can start implementing the function as it should be.

We already have the validation working individually so the best way to check if the entire form is valid is by iterating over our validations object and testing all the fields. The first time we find an error, we can stop the iteration and return `false`. We could use the `errors` object to see if there are any errors on it, but running the validations for each field assures that we are getting the last validation result. Let's write the test first.

```javascript
// src/useForm.spec.js
...

describe('isValid', () => {
  ...

  it('should return false when it finds any error on the form', () => {
    const { result } = renderHook(() => useForm({
      initialValues: {
        name: 'Carlos',
        surname: '',
      },
      validations: {
        name: {
          required: true,
        },
        surname: {
          required: true,
        },
        birthDate: {
          pattern: {
            value: /^\d{2}\/\d{2}\/\d{4}$/gi,
            message: 'invalid date',
          },
        },
      },
    }));

    expect(result.current.isValid()).toBe(false);
  });

  it('should return true if all the form fields are valid', () => {
    const { result } = renderHook(() => useForm({
      initialValues: {
        name: 'Carlos',
        surname: 'Silva',
        birthDate: '28/10/1990',
      },
      validations: {
        name: {
          required: true,
        },
        surname: {
          required: true,
        },
        birthDate: {
          pattern: {
            value: /^\d{2}\/\d{2}\/\d{4}$/gi,
            message: 'invalid date',
          },
        },
      },
    }));

    expect(result.current.isValid()).toBe(true);
  });
});
```

We are testing a form with some invalid fields and expecting the `isValid` function to return false and another one with all fields valid and expecting it to return true. Let's implement this logic.

```javascript
// useForm.js
export function useForm({ validations, initialValues = {} }) {
  ...

  function isValid() {
    const hasErrors = Object.keys(validations).some(name =>
      Boolean(validateField(name, values[name]))
    );

    return !hasErrors;
  }

  ...
}
```

<small style="display: block; text-align: center;">[See the commit for this code](https://github.com/csilva2810/react-hook-validation/commit/53ddf0b308d59105d30d28dd17c192cf0b6edb10)</small>

Let's understand this function.

First, we are using the `Object.keys` function to transform all keys in our object in an array. For example:

```javascript
const validations = {
  name: { ... },
  surname: { ... },
  birthDate: { ... },
};

Object.keys(validations); // ['name', 'surname', 'birthDate']
```

Then, we are calling the Array [some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some) function on this array to test if some of the fields are invalid. A cool fact about this function is that it stops the iteration if it finds what we are looking for. For example:

```javascript
const array = [1, 2, 3, 4, 5]

array.some(test => {
  console.log(test) // 1, 2
  return test === 2 // stops the iteration here and return true
})
```

If the function doesn't find what we are looking for, it will return `false`. In our case, we are looking for a field with errors.

Our `validateField` function returns a not empty string if it finds an error or an empty string otherwise. We are using the [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) function to convert the string to a boolean. An empty string is converted to `false`. If the `validateField` returns a not empty string it will be converted to `true` causing the `some` execution to stop and return true to our `hasErrors` variable.

Finally, we negate the `hasErrors` variable, which means that if we have any errors, the `isValid` result will be `false`, which means that our form is not valid. Otherwise the result will be `true`.

With this function working as we expected, we can try to use it on our SimpleForm. We are going to create a submit button and keep it disabled until all the form fields are valid.

```javascript
// useForm.spec.js
...
describe('<SimpleForm />', () => {
  ...
  it('should keep the submit button disabled until all the inputs are valid', () => {
    const { getByLabelText, getByRole } = render(<SimpleForm />);
    const name = getByLabelText('name');
    const birthDate = getByLabelText('birth date');
    const submit = getByRole('button');

    expect(submit).toBeDisabled();

    fireEvent.change(name, {
      target: { value: 'Carlos' }
    });

    expect(submit).toBeDisabled();

    fireEvent.change(birthDate, {
      target: { value: '30/12' }
    });

    expect(submit).toBeDisabled();

    fireEvent.change(birthDate, {
      target: { value: '30/12/2020' }
    });

    expect(submit).not.toBeDisabled();
  });
});
```

```jsx
// src/components/SimpleForm.tsx
...
const SimpleForm = () => {
  ...

  const { values, errors, bindField, isValid } = useForm({
    ...
  });

  return (
    <form onSubmit={handleSubmit}>
      ...

      <button type="submit" disabled={!isValid()}>
        submit
      </button>
    </form>
  );
};

...
```

<small style="display: block; text-align: center;">[See the commit for this code](https://github.com/csilva2810/react-hook-validation/commit/4b5c8a39f5b9f032e396ffbdc26bc826936f8783)</small>

In our SimpleForm, we get the `isValid` function and use its result value to control the disabled attribute of our button. Simple right?

With this, we've got all the requirements implemented and a fully functional Hook to validate our forms. We could add more validations like a `minLength`, `maxLength` for example and we could add some more functionalities like the ability to change a value programmatically exposing a function from the hook to update the state. But I think you are more than capable to do that by yourself! So I will let you with the challenge of making these improvements.

All the source code of this tutorial is available on my [Github](https://github.com/csilva2810) at this [repository](https://github.com/csilva2810/react-hook-validation).
The [commits](https://github.com/csilva2810/react-hook-validation/commits/master) are following the tutorial steps, so you can follow the commits to see how it was changing over time.
Feel free to fork it and play with the code!

Thanks a lot for reading this! Let me know what you think! I'd really appreciate hearing your thoughts!

![That's all folks](https://media.giphy.com/media/lTpme2Po0hkqI/giphy.gif)
