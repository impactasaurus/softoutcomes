import React from 'react';
import { Text, Section, Button, Header, Row, Column } from '../shared';

export default () => (
    <Section>
        <Row>
            <Column>
                <Header underline>Getting Started</Header>
            </Column>
        </Row>
        <Row>
            <Column>
              <Text>As you look to measure and demostrate your social impact, 
                    it is important to make sure that you are asking the right questions to show the right value. 
                    Using established questionnaires known for their accuracy increases your faith in the results, 
                    and your trustees, investors and donors faith in you.
                </Text>
            </Column>
        </Row>
        <Row>
            <Column>
                <Button href="/catalogue" inverted>Find a questionnaire</Button>
            </Column>
        </Row>
    </Section>
);