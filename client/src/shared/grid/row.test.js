import React from 'react';
import renderer from 'react-test-renderer';
import { spacings } from '../theme';
import Row from './Row';

describe('<Row />', () => {
    it('should use default padding by default', () => {
        const component = renderer.create(<Row />).toJSON();
        expect(component).toHaveStyleRule('padding-bottom', spacings.base);
    });

    it('should use additional padding when requested', () => {
        const component = renderer.create(<Row pad />).toJSON();
        expect(component).toHaveStyleRule('padding-bottom', spacings.xxl);
    });
});