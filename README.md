# real memo callback

**useRealMemoCallback** - is a React Hook that allows you to cache
the definition of a function 1 time, regardless of changing dependencies

The hook ensures that the function reference between renderers is unchanged.
At the same time, all dependencies will be available in the passed
function and have an up-to-date value.

## Installation

```npm
npm install real-memo-callback
```

## Using

```tsx
import {useRealMemoCallback} from "real-memo-callback"

const HeavyComponentMemo = memo(HeavyComponent);

export const FormComponent = () => {
    const [value, setValue] = useState("");

    const submit = useRealMemoCallback(() => {
        console.log(value);
    }, [value]); // the same function reference even when changing dependencies

    return (
            <>
                <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />

                <HeavyComponentMemo onClick={submit} />
            </>
    );
};
```
