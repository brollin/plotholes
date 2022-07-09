import { Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Box, FormControl, FormLabel } from "@chakra-ui/react";

import { Controls } from "./Controls";
import { GroupUniform } from "./Types";

export default function GroupControlComponent({ name, uniform }: {
    name: string,
    uniform: GroupUniform
}) {
    return <FormControl as="fieldset">
        <Accordion allowMultiple defaultIndex={[0]}>
            <AccordionItem>
                <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left'>
                            <FormLabel as="legend">{name}</FormLabel>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    <Controls uniforms={uniform.children} />
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    </FormControl>;
}