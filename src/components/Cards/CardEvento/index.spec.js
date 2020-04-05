import React from 'react';
import { shallow } from 'enzyme';
import CardEvento from './index';

describe('Meu teste do card evento', () => {
    it('Deveria renderizar corretamente', () => {
        const wrapper =  shallow(
            <CardEvento />
        );
        expect(wrapper).toMatchSnapshot();
    });
});