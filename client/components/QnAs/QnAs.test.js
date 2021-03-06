import React from 'react'; // Test files must import react
import { shallow } from 'enzyme'; // import any functions you are using from enzyme
// import { mount, shallow, render } from 'enzyme';
import QnAs from './QnAs.jsx';
import QAList from './QAList.jsx';
import SearchQs from './SearchQs.jsx';
import Question from './Question.jsx';
import ModalComp from './ModalComp.jsx';
import HelpfulReport from './HelpfulReport.jsx';



var sampleProduct = {
  id: 11055,
  campus: 'hrnyc',
  name: 'Brendon Shoes',
  slogan: 'Non occaecati ad omnis eos dolore in voluptatibus.',
  description:
    'Architecto nam illum distinctio non. Itaque voluptate commodi accusamus dignissimos. Sunt aut similique nostrum aperiam. Deserunt omnis maiores quis. Tempora veritatis et similique et natus nam. Necessitatibus placeat ut.',
  category: 'Shoes'
};

describe('QnAs should ', () => {
  let QnAs;
  beforeAll(() => {
    QnAs = shallow(<QnAs product={sampleProduct} />, { disableLifecycleMethods: true });
  });

  afterAll(() => {
    QnAs.unMount();
  });

  test('intialize state with all keys', () => {
    let productState = {
      searchTerm: '',
      visibleQsQuant: 2,
      allQsQuanity: null,
      showModal: false,
      showMoreQsBtn: true,
    };
    expect(QnAs.state()).toEqual(expect.objectContaining(productState));
  });

  test('render the SearchQs Widget', () => {
    expect(QnAs.containsAnyMatchingElements([SearchQs])).toEqual(true);
  });

  test('render the Question Widget', () => {
    expect(QnAs.containsAnyMatchingElements([Question])).toEqual(true);
  });

  test('render the HelpfulReport Widget', () => {
    expect(QnAs.containsAnyMatchingElements([HelpfulReport])).toEqual(true);
  });

  test('render the QAList Widget', () => {
    expect(QnAs.containsAnyMatchingElements([QAList])).toEqual(true);
  });

  test('render the ModalComp Widget', () => {
    expect(QnAs.containsAnyMatchingElements([ModalComp])).toEqual(true);
  });

  test('render one SearchQs component', () => {
    expect(QnAs.find(SearchQs)).toHaveLength (1);
  });

  test('contains a certain className', () => {
    expect(QnAs.hasClass('QnAsComp')).toEqual(true);
  });


});
