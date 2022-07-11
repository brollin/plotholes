import * as React from 'react';
import { FormControl, FormHelperText, FormLabel, Radio, RadioGroup, Stack } from '@chakra-ui/react';

import { UniformRadio } from "./UniformControls";

export default function RadioControlComponent({ uniform, name }: {
    uniform: UniformRadio
    name: string
}) {
    const onChange = (newSelected: string) => {
        uniform.value = newSelected
        if (uniform.onChange !== undefined)
            uniform.onChange(uniform)
    };

    return <FormControl as="fieldset">
        <FormLabel as="legend">{name}</FormLabel>
        <RadioGroup defaultValue={uniform.value} onChange={onChange}>
            < Stack spacing="10px" >
                {
                    uniform.options.map((option) =>
                        <Radio
                            defaultChecked={option === uniform.value}
                            value={option}
                            key={option}
                        >
                            {option}
                        </Radio>
                    )
                }
            </Stack>
        </RadioGroup >
        <FormHelperText>{uniform.description}</FormHelperText>
    </FormControl >;
}