import React from 'react';
import renderer from 'react-test-renderer';
import Column from './column';

describe('<Column />', () => {
    it('should default to 100% width', () => {
        const component = renderer.create(<Column />).toJSON();
        expect(component).toHaveStyleRule('width', '100%');
    });

    const sizes = {
        xs: null,
        sm: 768,
        md: 992,
        lg: 1200,
    };

    for(let size in sizes) {
        const minScreenSize = sizes[size];

        describe(`at screen size ${size}`, () => {
            for(let span = 1; span <= 12; ++span) {
                it(`should have the correct width at span ${span}`, () => {
                    const props = {
                        [size]: span,
                    };
                    const component = renderer.create(<Column {...props} />).toJSON();
                    
                    if (minScreenSize) {
                        expect(component).toHaveStyleRule('width', `${span / 12 * 100}%`, {
                            media: `only screen and (min-width:${minScreenSize}px)`,
                        });
                    } else {
                        expect(component).toHaveStyleRule('width', `${span / 12 * 100}%`);
                    }
                });
            }

            it('should be centered when requested', () => {
                const props = {
                    [size]: 1,
                };
                const component = renderer.create(<Column {...props} centered />).toJSON();
                expect(component).toHaveStyleRule('display', 'flex');
                expect(component).toHaveStyleRule('flex-flow', 'row nowrap');
                expect(component).toHaveStyleRule('justify-content', 'center');
            });
        });
    }
});