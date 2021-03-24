import {Component, e, render} from '../node_modules/bd-core/lib.js';

class SearchBar extends Component {
    bdElements() {
        return e('div', {},
            'howdy ',
            e('select', { name: 'status', bdAttach: 'selectRef' },
                e('option', { value: 'all'      }, 'all of my'  ),
                e('option', { value: 'active'   }, 'my active'  ),
                e('option', { value: 'inactive' }, 'my archived'),
            ),
            ' postings with ',
            e('input',
                {
                    name: 'terms',
                    type: 'text',
                    placeholder: 'keywords',
                    value: '',
                }
            ),
            ' ',
            e('input',
                {
                    type: 'submit',
                    value: 'search',
                    bdAdvise: { 'click': (evt) => { 
                        console.log(evt);
                        render(e('option', {value: 'other'}, 'other'), this.selectRef)
                    }},
                }
            ),
        );
    }
}

export default SearchBar;

/**
div
    span with selected picks
    text input
    results ul
    hidden select input where yuo store the selections

    ok I think you put it in a container and then replace it with the thing??
    I think what I'd like to have is a select widget in html that gets replaced
    by this thing?? Or is that not right?
    ok in render you use position: replace

    looks like youo can use getAttr to get attributes of a dom node...
    and use getPosit to decide whether to go up or down. 

    ok so take the select widget and grab all the options

    instead of <p_select ng-model="foo" ajax-url="/search/profile">[select widget]</p_select>
    it's <div class="bdSelect" ajax-url="/search/profile">[select widget]</div>

 */